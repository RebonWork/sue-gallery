import React, { use, useState } from "react";
import { v4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import RoleDropdown from "./RoleDropdown";
import { upperFirst } from "lodash";
import { updateUserRole } from "@/actions/serverActions";
import CancelIcon from "@mui/icons-material/Cancel";
import { useToast } from "@/components/ui/use-toast";

const UserItem = ({ data,editUser }) => {
  const { toast } = useToast()
  const [editable, setEditable] = useState(false);
  const { name, provider, email, role, _id } = data;
  const [currentRole, setCurrentRole] = useState(role);
  const [newRole, setNewRole] = useState(role);

  async function handleRoleChange() {
    const msg = await updateUserRole({ _id, newRole });
    setEditable(false);
    setCurrentRole(newRole);
    toast({
      variant:"success",
      description: msg,
    });
  }
  function handleNewRole(data) {
    setNewRole(data);
  }

  return (
    <div className=" bg-slate-100 m-6 flex gap-x-5" key={v4()}>
      <h1 className="clickable" onClick={()=>editUser(_id)}>{name}</h1>
      <h1>{email}</h1>
      <h1>{provider}</h1>
      {editable ? (
        <>
          <RoleDropdown role={newRole} setNewRole={handleNewRole} />
          <button onClick={handleRoleChange}>Save</button>
          <CancelIcon onClick={() => setEditable(false)} />
        </>
      ) : (
        <h1>{upperFirst(currentRole)}</h1>
      )}
      <EditIcon className="editable" onClick={() => setEditable(true)} />
    </div>
  );
};

export default UserItem;
