import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonSize = "md" | "lg" | "sm";

type ButtonType =
  | "primary"
  | "default"
  | "danger"
  | "link"
  | "ghost"
  | "dashed";

type ButtonProps = {
  size?: ButtonSize;
  type?: ButtonType;
  children?: ReactNode;
  htmlType?: "button" | "submit" | "reset";
  className?: string;
};

const sizeMap: Record<ButtonSize, string> = {
  md: "",
  lg: "",
  sm: "",
};

const typeMap: Record<ButtonType, string> = {
  primary: "",
  default: "",
  danger: "",
  link: "",
  ghost: "",
  dashed: "",
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, htmlType = "button", className } = props;
  const { size = "md", type = "primary" } = props;

  return (
    <button
      className={twMerge(
        "flex w-max h-max",
        sizeMap[size],
        typeMap[type],
        className
      )}
      type={htmlType}
    >
      {children}
    </button>
  );
};
