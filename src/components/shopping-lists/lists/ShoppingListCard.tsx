import { Add, ShoppingCart } from "@mui/icons-material"
import { Card, Chip, List as MuiList, CardActions, IconButton, CardHeader } from "@mui/material"
import { FC } from "react"
import { useAppDispatch } from "../../../app/hooks"
import { initShoppingListItemParams, setAddShoppingListItemParams, toggleAddShoppingListDialog } from "../../../shopping-list-items/api/ShoppingListItemsSlice"
import { ShoppingList } from "../../../shopping-lists/api/ShoppingListSlice"
import CardListItems from "./CardListItems"

interface Props {
  list: ShoppingList,
}

const ShoppingListCard: FC<Props> = ({list}) => {
  const dispatch = useAppDispatch();

  const handleOpenDialogForList = (listId: string) => {
    const params = initShoppingListItemParams(listId);

    dispatch(setAddShoppingListItemParams(params));
    dispatch(toggleAddShoppingListDialog())
  }

  return (
    <Card
      elevation={1}
      sx={{ height: '100%' }}
    >
      <CardHeader
        action={
          <Chip icon={<ShoppingCart />} label={list.items.length} color={"primary"} />
        }
        title={list.name}
      >
      </CardHeader>
      <MuiList>
        <CardListItems
          items={list.items}
        />
      </MuiList>
      <CardActions>
        <IconButton onClick={() => handleOpenDialogForList(list.id)}>
          <Add />
        </IconButton>
      </CardActions>
    </Card>

  )
}

export default ShoppingListCard;
