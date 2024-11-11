import { ReactNode } from "react";

export type ButtonType = {
  type: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: () => void;
  className?: string;
  icon?:ReactNode;
  value?:string;
  btnname?:string | ReactNode;

};
