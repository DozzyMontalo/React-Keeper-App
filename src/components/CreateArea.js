import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) { 
    const { name, value } = event.target;         //Object destructuring |Also serves as the predefined var for key & value(object properties)
        
    setNote(prevNote => {
      return {
        ...prevNote,                                 //spread operator {...abc}
        [name]: value                              //Computed Property Names, setting object key by predefined variable
      };                                         //check the link to stack overflow below
    });
  }
    
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


//https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1