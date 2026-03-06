export interface IIngredient {
  id?: string;
  name: string;
  category: string;
  unit: string;
  pricePerUnit: number | null;
  description: string;
}

export interface ISelectedIngredient {
  id: string;
  quantity: number;
}
