import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function SubmitFormButton({children, isSubmitting,formId, isValid}) {
  return (
    <Button form={formId} disabled={isSubmitting || isValid===false} type="submit">
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        children
      )}
    </Button>
  );
}
