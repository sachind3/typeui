interface Props extends React.ComponentPropsWithoutRef<"button"> {
  children: string | JSX.Element | JSX.Element[];
  type?: "submit" | "reset" | "button";
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "primary-outline"
    | "secondary-outline"
    | "danger-outline"
    | "success-outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
}
const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled,
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={`${
        className
          ? `btn-${size} btn-${variant} ${className}`
          : `btn-${size} btn-${variant}`
      }`}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
export default Button;
