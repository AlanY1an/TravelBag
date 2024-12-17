import { useContext } from "react";
import { ItemsContext } from "./ItemsContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error(
      "useItemsContext must be used whtin an ItemsContextProvider"
    );
  }
  return context;
}
