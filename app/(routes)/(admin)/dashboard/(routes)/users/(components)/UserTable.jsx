import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableAction from "./TableAction";
import { upperFirst } from "lodash";
import { Badge } from "@/components/ui/badge";
import UserTableSkelaton from "./UserTableSkelaton";
const UserTable = ({ data, isFetched}) => {
  return (
      <Table>
        <TableCaption>A list of your users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-36">Name</TableHead>
            <TableHead className="w-48">Email</TableHead>
            <TableHead className="w-16" >Role</TableHead>
            <TableHead className="text-center w-24">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {isFetched? data?.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.firstName+" "+user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell><Badge className={user.role === "admin" && "bg-blue-500 hover:bg-blue-400"}>{upperFirst(user.role)}</Badge></TableCell>
              <TableCell className="text-center">
                <TableAction userId={user._id} />
              </TableCell>
            </TableRow>
          )): <UserTableSkelaton/>}
          
        </TableBody>
      </Table>
  );
};

export default UserTable;
