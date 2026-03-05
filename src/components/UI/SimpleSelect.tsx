"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IOption {
  value: string;
  label: string;
}

interface SimpleSelectProps {
  label: string;
  placeholder: string;
  options: readonly IOption[];
  optionValue: string;
  handleChange: (newValue: string) => void;
}

export default function SimpleSelect({
  label,
  placeholder,
  options,
  optionValue,
  handleChange,
}: SimpleSelectProps) {
  return (
    <Select value={optionValue} onValueChange={handleChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
