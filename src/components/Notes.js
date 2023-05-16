import React, { useEffect, useState } from "react";
import CreateNote from "../modals/CreateNote";

const Notes = () => {
    const [modal, setModal] = useState(false);
    const[notesList, setNotesList] = useState([])
    
useEffect(() => {
    let arr =localStorage.getItem("notesList")

    if (arr){
        let obj = JSON.parse(arr)
        setNotesList(obj)
    } 

},[])


    const toggle = () => {
        setModal(!modal);
    }
    const savetask = (noteObj) => {
        let tempList = notesList
        tempList.push(noteObj)
        localStorage.setItem("notesList", JSON.stringify(tempList))
        setModal(false)
        setNotesList(notesList)
    }

    return (
        <>
            <div className = "header text-center">
                <h3>Notes</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Add note</button>
            </div>
            <div className = "task-container"> 
                {notesList.map((obj)=> <li>{obj.Name}</li>)}
            </div>
            <CreateNote toggle ={toggle} modal ={modal} save = {savetask}/>
        </>
    );
    };

export default Notes;
