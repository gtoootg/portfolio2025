import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  color?: string;
}

export const Button = ({ label, color, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 text-white rounded",
        color ?? "bg-blue-500",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
