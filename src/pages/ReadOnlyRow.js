import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        {/* <button
          type="button"
          className="btn btn-warning"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button> */}
        <button type="button" class="btn btn-warning px-2 offset-md-2" onClick={(event) => handleEditClick(event, contact)}> <i class="fa-solid fa-pen-to-square"></i> </button>
        <button type="button"class="btn btn-danger px-2 offset-md-2" onClick={() => handleDeleteClick(contact.id)}>
        <i class="fa-solid fa-ban"></i>
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
