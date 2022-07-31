import axios from "../../app/axios";
import { CreatedResourceResponse } from "../../shared/api/resource";
import { ShoppingListItemForm } from "./ShoppingListItemsSlice";

export function addShoppingListItem(shoppingListId: string, form: ShoppingListItemForm) {
  return new Promise<{ data: CreatedResourceResponse[] }>(async (resolve) => {
    const res = await axios().post(`api/v1/shopping-lists/${shoppingListId}/items`, form);

    resolve(res);
  });
}
