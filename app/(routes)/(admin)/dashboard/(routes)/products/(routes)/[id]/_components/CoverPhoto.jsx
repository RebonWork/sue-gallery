import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";

const CoverPhoto = (props) => {
  const coverData = props.coverData;
  const [isUploading, setUploading] = useState(false);

  async function handleCoverUpdate(event) {
    setUploading(true);
    const coverData = await uploadSingleImageClient(event.target.files[0])
    await props.setData(coverData);
    setUploading(false)
  }

  async function handleCoverDelete() {
    await deleteSingleImageClient(coverData.publicID);
    props.setData(null);
  }
  return (
    <div>
      {coverData ? (
        <div>
          <Image
            className="dashboard-product-image"
            src={coverData.url}
            width={100}
            height={100}
            alt="product image"
          />
          <DeleteForever onClick={handleCoverDelete} className="click-icon" />
        </div>
      ) : (
        <>
          {isUploading ? (
            "uploading"
          ) : (
            <>
            <label className="clickable" htmlFor="cover">Upload Cover Photo</label>
            <input id="cover" type="file" style={{ display: "none" }} onChange={handleCoverUpdate} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CoverPhoto;
