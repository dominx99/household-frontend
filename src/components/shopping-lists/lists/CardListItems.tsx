import { ListItem as MuiListItem } from "@mui/material";
import { FC } from "react";
import { ShoppingListItem } from "../../../shopping-lists/api/ShoppingListSlice";

interface Props {
  items: Array<ShoppingListItem>,
}

const CardListItems: FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item, key) => (
        <MuiListItem key={key}>{item.name}</MuiListItem>
      ))}
    </>
  )
}

export default CardListItems;
