import { create, type StateCreator } from "zustand";

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

const ingredientsStore: StateCreator<IIngredientsState> = (set) => ({
  ...initialState,
  setWasChanged: (value) => set({ wasChanged: value }),
});

const useIngredientsStorage = create<IIngredientsState>()(ingredientsStore);

export const useWasChanged = () =>
  useIngredientsStorage((state) => state.wasChanged);
export const useSetWasChanged = () =>
  useIngredientsStorage((state) => state.setWasChanged);
