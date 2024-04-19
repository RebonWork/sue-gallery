import ProductPhotos from "./ProductPhotos";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CoverPhoto from "./CoverPhoto";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import DropdownCategory from "./DropdownCategory";

const ProductForm = (props) => {
  return (
    <Form {...props.form}>
      <form
        className="flex flex-row gap-16"
        onSubmit={props.handleSubmit(props.handleDataSubmit)}
      >
        <div className=" flex flex-wrap justify-between h-fit gap-6 w-2/3">
          <FormField
            control={props.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full h-fit">
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="Product Price" {...field} />
                </FormControl>
                <FormDescription>
                  Please Enter The Product Name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={props.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-1/3 h-fit">
                <FormLabel>Product Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Product Price" {...field} />
                </FormControl>
                <FormDescription>
                  Please Enter The Product Price.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={props.control}
            name="stock"
            render={({ field }) => (
              <FormItem className="w-1/3 h-fit">
                <FormLabel>Product Stock</FormLabel>
                <FormControl>
                  <Input
                    Input
                    type="number"
                    placeholder="Product Stock"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Please Enter The Product Stock.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={props.control}
            name="category"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>Product Category</FormLabel>
                <FormControl>
                  <DropdownCategory defaultValue={value} onChange={onChange} />
                </FormControl>
                <FormDescription>
                  Please Enter The Product Category.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={props.control}
            name="isActive"
            className="w-full h-fit"
            render={({ field }) => (
              <FormItem className="flex flex-row bg-white items-center justify-between rounded-lg border p-3 shadow-sm w-full">
                <div className="space-y-0.5">
                  <FormLabel>Is Product Active</FormLabel>
                  <FormDescription>
                    Check to publish this product
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    defaultChecked={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={props.control}
            className="w-full h-fit"
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Product Description</FormLabel>
                <FormControl>
                  <Textarea
                    isSubmitSuccessful={props.isSubmitSuccessful}
                    description={field.value}
                    className="resize-none"
                    placeholder="Product Description"
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormDescription>
                  Please Enter The Product Description.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={props.isSubmitting || props.isValid === false}
            type="submit"
            className="w-full"
          >
            {props.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
        <div className="flex flex-col w-1/3 items-center">
          <div className=" w-96 h-full ">
            <CoverPhoto
              coverData={props.coverData}
              setCoverData={(e) => props.setCoverData(e)}
            />
              <div className="w-full flex-wrap h-auto flex items-start gap-2 mt-4">
                <ProductPhotos
                  imagesData={props.imagesData}
                  setImagesData={(e) => props.setImagesData(e)}
                />
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
