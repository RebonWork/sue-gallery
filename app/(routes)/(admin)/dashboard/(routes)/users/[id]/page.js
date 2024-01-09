"use client";
import { useParams } from "next/navigation";
import EditUserPages from "../(components)/EditUserPages";
export default function Page() {
    const { id } = useParams();
  return <EditUserPages id={id}/>;
}
