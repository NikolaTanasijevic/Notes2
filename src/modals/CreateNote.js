import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateNote =({modal,toggle,save})=>{
    const [noteName, setNoteName] = useState("");
    const [noteText, setNotetext] =useState("");

    const handleChange = (e) =>{

        const {name, value} =e.target  
        if(name==="NoteName") {
            setNoteName(value)
        } else {
            setNotetext(value)
        }
        
        
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = noteName
        taskObj["NoteText"] = noteText
        save (taskObj)
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add note</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Note name</label>
                        <input type="text" className="form-control" value={noteName} onChange = {handleChange} name = "NoteName"/>
                    </div>
                    <div className="form-group" >
                        <label>Type your note...</label>
                        <textarea rows ="5" className="form-control" value={noteText} onChange = {handleChange} name ="NoteText"></textarea>
                    </div>
                 </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        
    );
};

export default CreateNote;
