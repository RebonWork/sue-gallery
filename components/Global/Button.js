"use client";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react"

const FormButton = ({ value, ...props }) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending} type="submit">
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        value
      )}
    </Button>
  );
};

export default FormButton;
