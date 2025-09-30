"use client";

interface FormFieldProps {
  label: string;
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

export default function FormField({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-yellow-300 font-medium tracking-wide"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="px-3 py-2 rounded-md border border-yellow-400 bg-transparent text-yellow-100 focus:outline-none focus:ring-1 focus:ring-yellow-400 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)] transition"
      />
    </div>
  );
}
