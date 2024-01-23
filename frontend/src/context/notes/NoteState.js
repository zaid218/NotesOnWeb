import React, { useState } from "react";
import NoteContext from "./noteContext";
import axios from "axios"; // Import Axios
import { host } from "../../apiconfig";

const NoteState = (props) => {
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    // GET ALL NOTES


    const getNotes = async () => {
        try {
            const response = await axios.get(`${host}/api/notes/fetchallnotes`, {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });
            const json = response.data;
            setNotes(json);
        } catch (error) {
            console.error("Error fetching notes:", error);
            // Handle errors appropriately, e.g., display an error message to the user
        }
    };

    // Add a note
    const addNote = async (title, description, tag) => {
        try {
            const response = await axios.post(`${host}/api/notes/addnote`, {
                title,
                description,
                tag,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });
            const note = response.data;
            setNotes([...notes, note]); // More concise way to concat
        } catch (error) {
            console.error("Error adding note:", error);
            // Handle errors appropriately
        }
    };

    // Delete a note
    const deleteNote = async (id) => {
        try {
            await axios.delete(`${host}/api/notes/deletenote/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });
            setNotes(notes.filter((note) => note._id !== id));
        } catch (error) {
            console.error("Error deleting note:", error);
            // Handle errors appropriately
        }
    };

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        try {
            await axios.put(`${host}/api/notes/updatenote/${id}`, {
                title,
                description,
                tag,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
                },
            });
            setNotes(notes.map((note) => note._id === id ? { ...note, title, description, tag } : note)); // More concise way to update
        } catch (error) {
            console.error("Error editing note:", error);
            // Handle errors appropriately
        }
    };

    return (
        <NoteContext.Provider

            value={{

                notes, addNote, deleteNote, editNote, getNotes
            }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export

    default NoteState;