import Form from "@/components/Global/Form";
import FormButton from "@/components/Global/Button";
import { useEffect, useState } from "react";
import ProductPhotos from "./../../add/_components/ProductPhotos";
import CoverPhoto from "./../../add/_components/CoverPhoto";
import DropdownCategory from "../../../_components/DropdownCategory";
import InputFields from "../../add/_components/InputFields";

const UpdateFields = (props) => {
  const id = props.id;

  /*------------------------------States------------------------------*/

  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    stock: "",
  });
  const [coverData, setCoverData] = useState("");
  const [category, setCategory] = useState("");
  const [imagesData, setImagesData] = useState([]);

  /*------------------------------Page Functions------------------------------*/
  useEffect(() => {
    function dataSetting() {
      const { name, price, desc, stock, cover, images, category } = props.data;
      setForm({ name, desc, price, stock });
      setCategory(category);
      setCoverData(cover);
      setImagesData(images);
    }

    dataSetting();
  }, [props.data]);

  async function handleData(e) {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  }

  async function handleSaveUpdate() {
    const { name, desc, price, stock } = form;
    const res = await fetch("/api/product", {
      method: "PATCH",
      body: JSON.stringify({
        id,
        name,
        desc,
        stock,
        category,
        price,
        coverData,
        imagesData,
      }),
    }).then(async (response) => await response.json());
    if (res?.msg) {
      props.open();
    }
  }

  return (
    <div className="w-full">
      <div className="add-product-container">
        <Form className="form" action={handleSaveUpdate}>
          <div className="picture-container">
            <div className="image-container">
              <h3 className="scroll-m-20 text-l font-semibold tracking-tight">
                Update Product Photos
              </h3>
              <ProductPhotos
                imagesData={imagesData}
                setImagesData={(e) => setImagesData(e)}
              />
            </div>
            <div className="cover-container">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Update Product Cover
              </h3>
              <CoverPhoto
                coverData={coverData}
                setCoverData={(e) => setCoverData(e)}
              />
            </div>
          </div>

          <div className="input-container">
            <InputFields
              form={form}
              handleData={handleData}
              setForm={setForm}
              desc={form.desc}
            />
            <div className="input-area">
              <DropdownCategory
                setCategory={(categ) => setCategory(categ)}
                defaultValue={props.data.category}
                currentValue={category? category:props.data.category}
              />
            </div>
            <FormButton value="Update Products" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdateFields;
