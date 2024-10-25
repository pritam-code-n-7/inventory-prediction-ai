import { ReactNode } from "react";

export type ButtonType = {
  type: 'button' | 'submit' | 'reset';
  name: string | ReactNode;
  onClick?: () => void;
  className?: string;
  icon?:ReactNode
};
