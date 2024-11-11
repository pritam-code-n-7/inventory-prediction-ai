'use client'
import { Button } from "@/components/ui/button";
import { ButtonType } from "@/types/ButtonType";
import { useFormStatus } from "react-dom";

export default function UploadButton({ btnname, type }:ButtonType) {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <Button
      aria-disabled={pending}
      type={type}
      onClick={handleClick}
    >
      {btnname}
    </Button>
  );
}
