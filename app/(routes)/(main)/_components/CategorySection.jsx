import Image from "next/image";

const CategorySection = () => {
  return (
    <div className="bg-custom-secondary-800 text-white px-16 py-20">
      <h2>Shop Our Top Categories</h2>
      <div className="flex justify-between gap-3 px-48 py-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="basis-1/5">
            <div className="overflow-hidden rounded-md content-center h-64">
              <Image
                src={`/category-0${index + 1}.jpg`}
                alt={`category ${index + 1}`}
                width={800}
                height={800}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
