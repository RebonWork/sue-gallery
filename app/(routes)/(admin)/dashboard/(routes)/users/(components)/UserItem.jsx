import React, { useState } from "react";
import { v4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import RoleDropdown from "./RoleDropdown";
import { upperFirst } from "lodash";
import { updateUserRole } from "@/actions/serverActions";
import CancelIcon from '@mui/icons-material/Cancel';

const UserItem = ({ data }) => {
  const [editable, setEditable] = useState(false);
  const  { name, provider, email, role, _id } = data;
  const [newRole, setNewRole] = useState(role)

  function handleRoleChange() {
    updateUserRole({_id, newRole})
    setEditable(false)
  }
function handleNewRole(data){
    setNewRole(data)
}

  return (
    <div className=" bg-slate-100 m-6" key={v4()}>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{provider}</h1>
      {editable ? (
        <>
        <RoleDropdown role={newRole} setNewRole={handleNewRole} />
        <button onClick={handleRoleChange}>Save</button>
        <CancelIcon onClick={()=>setEditable(false)}/>
        </>
      ) : (
        <h1>{upperFirst(newRole)}</h1>
      )}
      <EditIcon
        className="editable"
        onClick={() => setEditable(true)}
      />
    </div>
  );
};

export default UserItem;
