import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

interface IActions {
  setWasChanged: (value: boolean) => void;
}
interface IInitialState {
  wasChanged: boolean;
}
interface IIngredientsState extends IInitialState, IActions {}

const initialState: IInitialState = {
  wasChanged: false,
};

const ingredientsStore: StateCreator<
  IIngredientsState,
  [["zustand/devtools", never]]
> = (set) => ({
  ...initialState,
  setWasChanged: (value) =>
    set({ wasChanged: value }, false, "setWasChanged"),
});

const useIngredientsStorage = create<IIngredientsState>()(
  devtools(ingredientsStore, { name: "IngredientsStore" })
);

export const useWasChanged = () =>
  useIngredientsStorage((state) => state.wasChanged);
export const useSetWasChanged = () =>
  useIngredientsStorage((state) => state.setWasChanged);
