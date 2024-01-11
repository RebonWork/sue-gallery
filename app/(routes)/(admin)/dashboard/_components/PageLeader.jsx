import GoBackButton from "@/components/Global/GoBackButton";
import { Divider } from "@nextui-org/react";
import React from "react";

const PageLeader = ({ children }) => {
  return (
    <>
      <div className="flex justify-items-center gap-3 mt-4">
        <GoBackButton page="/dashboard/products" />
        <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {children}
        </h1>
      </div>
      <Divider />
    </>
  );
};

export default PageLeader;
