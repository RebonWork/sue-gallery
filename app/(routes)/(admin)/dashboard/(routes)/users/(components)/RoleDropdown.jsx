import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RoleDropdown = ({ setNewRole, role }) => {

  return (
    <Select defaultValue={role} onValueChange={setNewRole}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default RoleDropdown;
