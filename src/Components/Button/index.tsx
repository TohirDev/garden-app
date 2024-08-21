import { ButtonHTMLAttributes, forwardRef } from "react";
import "./index.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "md" | "sm";
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ size = "md", children, ...props }, ref) => {
    return (
      <button ref={ref} className={`button button-${size}`} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
