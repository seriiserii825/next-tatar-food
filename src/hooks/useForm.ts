import { useState } from "react";
import { ZodSchema } from "zod";

export default function useForm<TFormData extends Record<string, unknown>>(
  schema: ZodSchema<TFormData>,
  initialData: TFormData,
  apiFn: (data: TFormData) => Promise<unknown>,
  onSuccess?: (result: unknown) => void,
) {
  const [form, setForm] = useState<TFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>(
    {},
  );
  const [firstTouch, setFirstTouch] = useState(false);
  const [pending, setPending] = useState(false);

  function handleChange(field: keyof TFormData, value: unknown) {
    const newForm = { ...form, [field]: value };
    setForm(newForm);
    if (firstTouch) {
      const result = schema.safeParse(newForm);
      setErrors(result.success ? {} : result.error.flatten().fieldErrors);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFirstTouch(true);

    const result = schema.safeParse(form);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }
    setErrors({});
    setPending(true);
    try {
      const res = await apiFn(result.data);
      onSuccess?.(res);
    } finally {
      setPending(false);
    }
  }

  return { form, errors, firstTouch, pending, handleChange, onSubmit };
}
