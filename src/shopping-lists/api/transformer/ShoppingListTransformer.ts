import { ShoppingList, ShoppingListResponse } from "../ShoppingListSlice";

export const shoppingListTransformer = (shoppingLists: ShoppingListResponse[]): ShoppingList[] => {
  return shoppingLists.map(shoppingList => {
    return {
      ...shoppingList,
      items: shoppingList.shopping_list_items
    }
  });
}
