
import { ProductTable } from "./_components/ProductTable";
import { Card, CardContent } from "@/components/ui/card";

function Page() {

  return (
    <div className="h-screen mt-6">
      <h1> All Products</h1>
      <Card className="mt-6 p-8">
        <CardContent>
          <ProductTable/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
