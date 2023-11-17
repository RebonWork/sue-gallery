"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductSkeleton from "../Global/ProductSkelaton";

const DashboardProductPage = (props) => {
  const id = props.id;
  const [isloading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({ id }),
    }).then(async (response) => await response.json());
    await setData(res);
    setLoading(false);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isloading ? (
        <ProductSkeleton />
      ) : (
        <div>
          <Image
            className="dashboard-product-image"
            src={data.cover}
            width={100}
            height={100}
            alt="product image"
          />
          <h1>{data._id}</h1>
          <label htmlFor="name">Product Name</label>
          <input id="name" value={data.name} />
          <label htmlFor="desc">Product Description</label>
          <input id="desc" value={data.desc} />
          <label htmlFor="price">Product Price</label>
          <input id="price" value={data.price} />
        </div>
      )}
    </div>
  );
};

export default DashboardProductPage;
