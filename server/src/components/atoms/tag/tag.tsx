import clsx from "clsx";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
}

export const Tag = ({ label, className, ...props }: TagProps) => {
  return (
    <span
      className={clsx(
        "bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm",
        className
      )}
      {...props}
    >
      {label}
    </span>
  );
};
