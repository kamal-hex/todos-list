import React, { useState } from 'react';

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
       if(!title || !desc){
         alert("Title of decription cannot be blank");
       }
       else{
       props.addTodo(title,desc);
       setTitle("");
       setDesc("")}
  }
  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <div>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="title" aria-describedby="emailHelp" />
            <div id="Help" className="form-text">Insert Your Todos Desc</div>
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Desc</label>
            <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
          </div>
          <button type="submit" className="btn-sm btn-success">Add-Todo</button>
        </form>
      </div>
    </div>
  )
}


