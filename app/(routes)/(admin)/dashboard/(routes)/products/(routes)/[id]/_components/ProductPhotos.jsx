import React, { useEffect, useState } from "react";
import SingleProductImage from "./SingleProductImage";
import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";

const ProductPhotos = (props) => {
  var imagesData = props.imagesData;

  async function handleImagesUpdate(event) {
    const images = event.target.files;
    for (const [key, value] of Object.entries(images)) {
      const result = await uploadSingleImageClient(value);
      imagesData = [...imagesData, result];
      props.setData(imagesData);
    }
  }
  async function handleImageDelete(publicID) {
    await deleteSingleImageClient(publicID);
    const result = imagesData.filter((images) => images.publicID !== publicID);
    props.setData(result);
  }

  function handleImageData(images) {
    return (
      <SingleProductImage
        handleImageDelete={handleImageDelete}
        id={images.publicID}
        imageUrl={images.url}
      />
    );
  }
  return (
    <div className="flex gap-3">
      {imagesData?.map(handleImageData)}
      <input type="file" onChange={handleImagesUpdate} multiple />
    </div>
  );
};

export default ProductPhotos;
