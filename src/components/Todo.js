import { useState } from "react";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHander() {
    console.log("Clicked!");
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHander}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
