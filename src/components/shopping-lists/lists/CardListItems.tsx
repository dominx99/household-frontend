import { Delete } from "@mui/icons-material";
import { IconButton, ListItem as MuiListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteShoppingListItemAsync, ShoppingListItem } from "../../../shopping-list-items/api/ShoppingListItemsSlice";
import { fetchShoppingListsByGroupAsync } from "../../../shopping-lists/api/ShoppingListSlice";
import { selectedGroupGetter } from "../../groups/GroupSlice";

interface Props {
  items: Array<ShoppingListItem>,
}

const CardListItems: FC<Props> = ({ items }) => {
  const dispatch = useAppDispatch();
  const selectedGroup = useAppSelector(selectedGroupGetter);

  const handleDelete = async (shoppingListItemId: string) => {
    await dispatch(deleteShoppingListItemAsync(shoppingListItemId));
    // TODO: Do not fetch all lists but only one or just add item to the list
    dispatch(fetchShoppingListsByGroupAsync(selectedGroup?.id || ''))
  }

  return (
    <>
      {items.map((item, key) => (
        <MuiListItem
          key={key}
          secondaryAction={
            <IconButton color="error" onClick={() => handleDelete(item.id)}>
              <Delete />
            </IconButton>
          }
        >
          <ListItemText>
            {item.name}
          </ListItemText>
        </MuiListItem>
      ))}
    </>
  )
}

export default CardListItems;
