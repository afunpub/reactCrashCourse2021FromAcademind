import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHander() {
    setModalIsOpen(true);
    console.log(props.text);
  }

  function closeModalHandle() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHander}>
          Delete
        </button>
      </div>
      {/* useState 1 way */}
      {modalIsOpen ? (
        <Modal onCancel={closeModalHandle} onConfirm={closeModalHandle} />
      ) : null}
      {/* useState 2 way */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandle} />}
    </div>
  );
}

export default Todo;
