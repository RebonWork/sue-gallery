import {
  deleteSingleImageClient,
  uploadSingleImageClient,
} from "@/actions/siteActions";
import { DeleteForever } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const CoverPhoto = (props) => {
  const coverData = props.coverData;

  async function handleCoverUpdate(event) {
    const coverData = await uploadSingleImageClient(event.target.files[0]);
    props.setData(coverData);
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
        <input type="file" onChange={handleCoverUpdate} />
      )}
    </div>
  );
};

export default CoverPhoto;
