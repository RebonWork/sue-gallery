import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { PlusCircle } from "lucide-react";
import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";

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
        <div>
          <div className="product-cover">
            <Image
              src={props.coverData?.url}
              width={600}
              height={600}
              alt="cover photo"
            />
          </div>
          <DeleteForever onClick={handleCoverDelete} className="clickable" />
        </div>
      ) : (
        <div className="product-cover">
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
