import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./categorias.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import '../components/bootstrap.css'



const App = () => {



  const [contacts, setContacts] = useState(data);
    // const [cate, setdata] = useState(data)
    const [order, setorder] = useState("ASC")
  
    const sorting = (col)=>{
      if (order === "ASC"){
        const sorted = [...contacts].sort((a,b)=>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setContacts(sorted);
        setorder("DSC");
      }
      if (order === "DSC"){
        const sorted = [...contacts].sort((a,b)=>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        setContacts(sorted);
        setorder("ASC");
      }
    };
  
    const numerSorting = (col)=>{
      if (order === "ASC"){
        const sorted = [...contacts].sort((a,b)=>
          a[col] > b[col] ? 1 : 1
        );
        setContacts(sorted);
        setorder("DSC");
      }
      if (order === "DSC"){
        const sorted = [...contacts].sort((a,b)=>
          a[col] < b[col] ? 1 : -1
        );
        setContacts(sorted);
        setorder("ASC");
      }
    };
  const [addFormData, setAddFormData] = useState({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.id,
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editFormData.id,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id: contact.id,
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  	



  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table class="table table-dark table-bordered">
          <thead >
            <tr class="bg-secondary">
              <th scope="col" class="bg-light" onClick={() => numerSorting("id")}>ID</th>
              <th scope="col" class="bg-light" onClick={() => sorting("fullName") }>Categoria</th>
              <th scope="col" class="bg-light" onClick={() => numerSorting("phoneNumber")}>Cantidad</th>
              <th scope="col" class="bg-light w-10 p-3 px-2 col-4" >Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Agregar Categoria</h2>

      <form onSubmit={handleAddFormSubmit}>
        {/* <input
          type="text"
          name="fullName"
          required="required"
          placeholder="nombre de la categoria..."
          onChange={handleAddFormChange}
        /> */}
 
        
        <div class="input-group flex-nowrap">
        <input
          type="text"
          class="form-control" 

          name="id"
          required="required"
          placeholder="id..."
          onChange={handleAddFormChange}
        />
        
        </div>

        <div class="input-group bg-secondary flex-nowrap">
          <input 
          type="text" 
          class="form-control" 
          name="fullName"
          required="required"
          onChange={handleAddFormChange}

          placeholder="nombre de la categoria..." 
          aria-label="Username" 
          aria-describedby="addon-wrapping"
          />
        </div>
        
        <div class="input-group flex-nowrap">

        <input
          type="text"
          class="form-control" 

          name="phoneNumber"
          required="required"
          placeholder="Ingresa la cantidad..."
          onChange={handleAddFormChange}
        />
        </div>

        <button class="btn btn-light" type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default App;
