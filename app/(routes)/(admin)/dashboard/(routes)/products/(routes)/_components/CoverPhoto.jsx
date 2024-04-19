import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { PlusCircle, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

const CoverPhoto = (props) => {
  const [isUploading, setUpload] = useState(false);

  async function handleCoverDelete() {
    await deleteSingleImageClient(props.coverData.publicID);
    props.setCoverData(null);
  }

  async function handleUpload(event) {
    setUpload(true);
    const cover = await uploadSingleImageClient(event.target.files[0]);
    await props.setCoverData(cover);
    setUpload(false);
  }

  return (
    <>
      {props.coverData ? (
        <div className="flex flex-col justify-center items-center">
          <div className=" flex justify-center items-center w-full h-full bg-white rounded-sm shadow-sm border-1 border-slate-100 mt-3 object-cover overflow-hidden">
            <Image
              src={props.coverData?.url}
              width={600}
              height={600}
              alt="cover photo"
            />
          </div>
          <Button onClick={handleCoverDelete} variant="destructive" size="icon" className="w-full mt-2"><Trash2/></Button>
        </div>
      ) : (
        <div className=" flex justify-center items-center w-full h-full bg-white rounded-sm shadow-sm border-2 border-slate-100 mt-3">
          {isUploading ? (
            <Spinner size="lg" color="default" labelColor="foreground" />
          ) : (
            <>
              <label htmlFor="product-cover">
                <div className=" upload-cover">
                  <PlusCircle className="add-icon clickable" />
                </div>
              </label>
              <input
                type="file"
                id="product-cover"
                style={{ display: "none" }}
                name="cover"
                accept="image/*"
                onChange={handleUpload}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CoverPhoto;
