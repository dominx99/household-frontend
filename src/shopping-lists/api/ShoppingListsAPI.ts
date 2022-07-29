import axios from "../../app/axios";
import { ShoppingListResponse } from "./ShoppingListSlice";

export function fetchShoppingListsByGroup(groupId: string) {
  return new Promise<{ data: ShoppingListResponse[] }>(async (resolve) => {
    const res = await axios().get(`api/v1/groups/${groupId}/shopping-lists`);

    resolve(res);
  });
}
