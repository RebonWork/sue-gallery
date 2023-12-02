import Form from "@/components/Global/Form";
import Button from "@/components/Global/Button";
import { useEffect, useState } from "react";
import ProductPhotos from "./ProductPhotos";
import CoverPhoto from "./CoverPhoto";
import Editor from "../../add/_components/Editor/Editor";

const UpdateFields = (props) => {
  const id = props.id;

  /*------------------------------States------------------------------*/

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [coverData, setCoverData] = useState("");
  const [imagesData, setImagesData] = useState([]);

  /*------------------------------Website Functions------------------------------*/
  useEffect(() => {
    function dataSetting() {
      const { name, price, desc, cover, images } = props.data;
      console.log(props.data);
      setName(name);
      setPrice(price);
      setDesc(desc);
      setCoverData(cover);
      setImagesData(images);
    }

    dataSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSaveUpdate() {
    const res = await fetch("/api/product", {
      method: "PATCH",
      body: JSON.stringify({ id, name, desc, price, coverData, imagesData }),
    }).then(async (response) => await response.json());
    if (res?.msg) {
      props.open();
    }
  }

  return (
    <div>
      <CoverPhoto coverData={coverData} setData={(e) => setCoverData(e)} />

      <ProductPhotos
        imagesData={imagesData}
        setData={(e) => setImagesData(e)}
      />

      <div>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Editor desc={desc} onChange={(data)=> {setDesc(data)}}/>
        <label htmlFor="price">Product Price</label>
        <input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleSaveUpdate}>Update Product</button>
      </div>
    </div>
  );
};

export default UpdateFields;
