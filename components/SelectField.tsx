"use client";

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

export default function SelectField({
  label,
  name,
  options,
  required = false,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className="text-yellow-300 font-medium tracking-wide"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        className="px-3 py-2 rounded-md border border-yellow-400 bg-transparent text-yellow-100 focus:outline-none focus:ring-1 focus:ring-yellow-400 hover:shadow-[0_0_10px_rgba(255,215,0,0.5)] transition"
      >
        <option value="" className="bg-black text-gray-400">
          Select {label}
        </option>
        {options.map((opt, i) => (
          <option
            key={i}
            value={opt}
            className="bg-black text-yellow-100"
          >
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
