import React, { useState } from "react";
import SingleProductImage from "../../../_components/SingleProductImage";
import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { v4 } from "uuid";

const ProductPhotos = (props) => {
  var imagesData = props.imagesData;
  const [filesNum, setFilesNum] = useState(null);
  const [isUploading, setUploading] = useState(false);

  async function handleImagesUpdate(event) {
    const images = event.target.files;
    setUploading(true);
    setFilesNum(images.length);
    for (const [key, value] of Object.entries(images)) {
      const result = await uploadSingleImageClient(value);
      imagesData = [...imagesData, result];
      props.setData(imagesData);
      setFilesNum((prevNum) => prevNum - 1);
    }
    setUploading(false);
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
        key={images.publicID}
      />
    );
  }
  return (
    <div className="product-images">
      {imagesData?.map(handleImageData)}
      {isUploading &&
        Array.from({ length: filesNum }).map((_item, index) => (
          <h1 key={index}>Loading</h1>
        ))}
      <label className="clickable" htmlFor="product">
        Upload Product Photo
      </label>
      <input
        id="product"
        type="file"
        onChange={handleImagesUpdate}
        style={{ display: "none" }}
        multiple
      />
    </div>
  );
};

export default ProductPhotos;
