import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
  } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
export function IsActiveSwitch({control}) {
    return (
              <FormField
                control={control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
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
                        defaultChecked = {field.value}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
    )
  }