import { useRouter } from "next/navigation";
import DashboardProductsCard from "./DashboardProductsCard";

const Products = ({ data }) => {
  const router = useRouter();
  async function deleteProduct(id) {
    await fetch("/api/product", {
      method: "DELETE",
      body: JSON.stringify(id),
    });
  }

  function editProduct(id) {
    router.push(`/dashboard/products/${id}`);
  }

  function handledata(prod) {
    return (
      <DashboardProductsCard
        key={prod._id}
        id={prod._id}
        cover={prod.cover ? prod.cover.url : "/./no-photo.jpg"}
        name={prod.name}
        desc={prod.desc}
        categ={prod.category}
        price={prod.price}
        stock={prod.stock}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    );
  }
  return data?.map(handledata);
};

export default Products;
