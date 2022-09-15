import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  label: string;
}

export const Label = ({ htmlFor, label, ...rest }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="font-semibold" {...rest}>
      {label}
    </label>
  );
};
