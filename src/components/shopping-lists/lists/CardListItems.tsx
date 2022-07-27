import { ListItem as MuiListItem } from "@mui/material";
import { FC } from "react";
import { ListItem } from "./ShoppingListsCards";

interface Props {
  items: Array<ListItem>,
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
