import Form from "@/components/Global/Form";
import Button from "@/components/Global/Button";
import { useEffect, useState } from "react";
import ProductPhotos from "./ProductPhotos";
import CoverPhoto from "./CoverPhoto";
import Editor from "../../add/_components/Editor/Editor";

const UpdateFields = (props) => {
  const id = props.id;

  /*------------------------------States------------------------------*/

  const [form, setForm] = useState({name:"",desc:"",price:"",stock:""});
  const [coverData, setCoverData] = useState("");
  const [imagesData, setImagesData] = useState([]);

  /*------------------------------Page Functions------------------------------*/
  useEffect(() => {
    function dataSetting() {
      const { name, price, desc, stock, cover, images } = props.data;
      setForm({ name, desc, price, stock });
      setCoverData(cover);
      setImagesData(images);
    }

    dataSetting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }
  async function handleData(e) {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  }
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
    <Form action={handleSaveUpdate}>
      <CoverPhoto coverData={coverData} setData={(e) => setCoverData(e)} />

      <ProductPhotos
        imagesData={imagesData}
        setData={(e) => setImagesData(e)}
      />

      <div>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleData}
          onKeyDown={handleKeyDown}
        />
        <Editor
          desc={form.desc}
          onChange={(data) => {
            setForm({desc:data});
          }}
        />
        <label htmlFor="price">Product Price</label>
        <input
          id="price"
          name="price"
          value={form.price}
          onChange={handleData}
          onKeyDown={handleKeyDown}
        />
        <label htmlFor="stock">Stock</label>
        <input
          id="stock"
          name="stock"
          value={form.stock}
          onChange={handleData}
          onKeyDown={handleKeyDown}
        />
        <Button value="Update Product" />
      </div>
    </Form>
  );
};

export default UpdateFields;
