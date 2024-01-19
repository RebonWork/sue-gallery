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
const UserTable = ({ data }) => {
  return (
      <Table>
        <TableCaption>A list of your users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-96">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-center w-24">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{upperFirst(user.role)}</TableCell>
              <TableCell className="text-center">
                <TableAction userId={user._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default UserTable;
