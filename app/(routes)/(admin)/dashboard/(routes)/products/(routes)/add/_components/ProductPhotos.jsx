import React, { useState } from "react";
import SingleProductImage from "../../../_components/SingleProductImage";
import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { v4 as uuidv4 } from "uuid";

const ProductPhotos = (props) => {
  const [filesNum, setFilesNum] = useState(null);
  const [isUploading, setUploading] = useState(false);

  async function handleUpload(event) {
    const images = event.target.files;
    setUploading(true);
    setFilesNum(images.length)
    for (const [key, value] of Object.entries(images)) {
      const imageData = await uploadSingleImageClient(value);
      props.setImagesData((prev) => [...prev, imageData]);
      setFilesNum((prevNum) => prevNum - 1);
    }
    setUploading(false);
  }
  async function handleImageDelete(publicID) {
    deleteSingleImageClient(publicID);
    props.setImagesData((prevImages) => {
      return prevImages.filter((images) => images.publicID !== publicID);
    });
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
      {props.imagesData?.map(handleImageData)}
      {isUploading &&
        Array.from({ length: filesNum }).map((_item, index) => (
          <h1 key={index}>Loading</h1>
        ))}
      <div>
        <label htmlFor="product-image">Upload Product Images</label>
        <input
          type="file"
          id="product-image"
          style={{ display: "none" }}
          name="image"
          accept="image/*"
          onChange={handleUpload}
          multiple
        />
      </div>
    </div>
  );
};

export default ProductPhotos;
