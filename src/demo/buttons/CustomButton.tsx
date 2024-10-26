import { Button } from "@/components/ui/button";
import { ButtonType } from "@/types/ButtonType";

export default function CustomButton({
  name,
  onClick,
  type,
  icon,
  className,
}: ButtonType) {
  return (
    <Button
      type={type}
      onClick={onClick}
      style={{ height: "48px", fontWeight: "bold", letterSpacing: "0.05em" }}
      className={className}
    >
      <span>{icon}</span>
      {name}
    </Button>
  );
}
