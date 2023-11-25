import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";

const CoverPhoto = (props) => {
  const [isUploading, setUpload] = useState(false);

  async function handleCoverDelete() {
    await deleteSingleImageClient(props.coverData.publicID);
    props.setCoverData(null);
  }

  async function handleUpload(event) {
    setUpload(true)
    const cover = await uploadSingleImageClient(event.target.files[0]);
    await props.setCoverData(cover);
    setUpload(false)
  }

  return (
    <>
      {props.coverData ? (
        <div>
          <Image
            src={props.coverData?.url}
            width={50}
            height={50}
            alt="cover photo"
          />
          <DeleteForever onClick={handleCoverDelete} className="click-icon" />
        </div>
      ) : (
        <div>
          {isUploading ? (
            <h1>Uploading</h1>
          ) : (
            <>
              <label htmlFor="product-cover">Upload Product Cover Photo</label>
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
