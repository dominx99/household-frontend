import axios from "../../app/axios";
import { CreatedResourceResponse } from "../../shared/api/resource";
import { ShoppingListItemForm } from "./ShoppingListItemsSlice";

export function addShoppingListItem(shoppingListId: string, form: ShoppingListItemForm) {
  return new Promise<{ data: CreatedResourceResponse[] }>(async (resolve) => {
    const res = await axios().post(`api/v1/shopping-lists/${shoppingListId}/items`, form);

    resolve(res);
  });
}

export function deleteShoppingListItem(shoppingListItemId: string) {
  return new Promise<{}>(async (resolve) => {
    const res = await axios().delete(`api/v1/shopping-list-items/${shoppingListItemId}`);

    resolve(res);
  });
}
