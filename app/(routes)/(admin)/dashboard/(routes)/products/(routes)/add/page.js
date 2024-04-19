"use client";

import PageLeader from "../../../../_components/PageLeader";
import AddProductForm from "./_components/add-product";

const Page = () => {
  return (
    <div className="px-5">
      <PageLeader>Back To Product Page</PageLeader>
      <div className="mt-6 px-4">
        <AddProductForm />
      </div>
    </div>
  );
};

export default Page;
