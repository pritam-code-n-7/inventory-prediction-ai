import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function LoginButton({ name }: { name: string }) {
  const { pending } = useFormStatus();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      onClick={handleClick}
      style={{ height: "48px", fontWeight: "bold", letterSpacing: "0.05em" }}
    >
      {name}
    </Button>
  );
}
