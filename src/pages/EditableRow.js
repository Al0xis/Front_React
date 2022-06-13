import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
      <div class="input-group flex-nowrap">
        <input
          type="text"
          class="form-control"
          required="required"
          placeholder="Enter ID..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        ></input>
        </div>
        
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        {/* <button type="submit">Save</button> */}
        <button type="submit"class="btn btn-info px-2 offset-md-2">
          <i class="fa-solid fa-floppy-disk"></i>
        </button>
        <button type="button" onClick={handleCancelClick} class="btn btn-light px-2 offset-md-2">
          <i class="fa-solid fa-arrow-rotate-left"></i>
        </button>

        
        
      </td>
    </tr>
  );
};

export default EditableRow;
