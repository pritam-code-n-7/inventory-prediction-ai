import { Button } from "@/components/ui/button";
import { ButtonType } from "@/types/ButtonType";
import React from "react";

const ButtonDemo = ({ type, name, onClick, className}: ButtonType) => {
  return (
    <Button type={type} onClick={onClick} className={className} style={{ letterSpacing: "0.05em" }}>
      {name}
    </Button>
  );
};

export default ButtonDemo;
