import React, { useState } from "react";
import SingleProductImage from "../../../_components/SingleProductImage";
import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "@nextui-org/react";
import { PlusCircle } from "lucide-react";
import { DeleteForever } from "@mui/icons-material";

const ProductPhotos = (props) => {
  const [filesNum, setFilesNum] = useState(null);
  const [isUploading, setUploading] = useState(false);

  async function handleUpload(event) {
    const images = event.target.files;
    setUploading(true);
    setFilesNum(images.length);
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
      <div className="mb-6">
        <div className="product-images">
          <SingleProductImage
            handleImageDelete={handleImageDelete}
            imageUrl={images.url}
            key={images.publicID}
          />
        </div>
        <DeleteForever
          onClick={() => handleImageDelete(images.publicID)}
          className="clickable"
        />
      </div>
    );
  }
  return (
    <>
      <div>
        {props.imagesData?.map(handleImageData)}
        {isUploading &&
          Array.from({ length: filesNum }).map((_item, index) => (
            <div className="mb-6" key={index}>
              <div className="product-images">
                <Spinner size="lg" color="default" labelColor="foreground" />
              </div>
            </div>
          ))}
        <div className="product-images">
          <label htmlFor="product-image">
            <PlusCircle className="add-icon clickable" />
          </label>
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
    </>
  );
};

export default ProductPhotos;
