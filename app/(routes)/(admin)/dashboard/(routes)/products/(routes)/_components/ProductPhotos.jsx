import React, { useState } from "react";
import SingleProductImage from "./SingleProductImage";
import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { Spinner } from "@nextui-org/react";
import { PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      <div className="mb-6 flex flex-col">
        <div className=" w-32 h-32 rounded-md border-1 border-slate-100 flex justify-center items-center object-cover overflow-hidden mt-3">
          <SingleProductImage
            handleImageDelete={handleImageDelete}
            imageUrl={images.url}
            key={images.publicID}
          />
        </div>

        <Button
          onClick={() => handleImageDelete(images.publicID)}
          variant="destructive"
          size="icon"
          className="w-full mt-2 h-auto p-1"
        >
          <Trash2 />
        </Button>
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
              <div className=" w-32 h-32 rounded-md border-2 border-slate-100 flex justify-center items-center mt-3">
                <Spinner size="lg" color="default" labelColor="foreground" />
              </div>
            </div>
          ))}
        <div className=" w-32 h-32 rounded-md border-2 border-slate-100 flex justify-center items-center mt-3">
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
