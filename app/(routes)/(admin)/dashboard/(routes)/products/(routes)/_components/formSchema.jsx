import { z } from "zod";
const formSchema = z.object({
    name: z.string().min(1, { message: "Required" }),
    description: z.string().min(8, { message: "Required" }),
    price: z.coerce.number().min(1, { message: "Required" }),
    stock: z.coerce.number().min(0, { message: "Required" }),
    category: z.string().min(1, { message: "Required" }),
    isActive: z.boolean().default(false).optional(),
  });
 
export default formSchema;