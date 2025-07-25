import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MouseEventHandler } from "react";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  onDelete: MouseEventHandler<SVGSVGElement>;
}

export const Tag = ({ label, className, onDelete, ...props }: TagProps) => {
  return (
    <span
      className={clsx(
        "bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm",
        className
      )}
      {...props}
    >
      {label}
      <XMarkIcon
        className="inline-block w-4 h-4 ml-2 cursor-pointer"
        onClick={onDelete}
      />
    </span>
  );
};
