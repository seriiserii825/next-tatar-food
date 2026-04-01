import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  type: "email" | "password" | "text";
  placeholder: string;
  autocomplete: "email" | "current-password" | "new-password" | "off";
}

export default function Input({ error, type, placeholder, autocomplete, ...rest }: InputProps) {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="relative">
      <input
        type={inputType}
        placeholder={placeholder}
        autoComplete={autocomplete}
        {...rest}
        className={`border p-3 rounded-xl w-full focus:outline-none focus:ring-2 transition-all
            ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-warm-accent"}`}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setInputType(inputType === "password" ? "text" : "password")}
          className="cursor-pointer absolute right-3 top-6 transform -translate-y-1/2 text-sm text-gray-500">
          {inputType === "password" ? "Show" : "Hide"}
        </button>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
