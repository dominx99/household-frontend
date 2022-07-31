import { Add } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Chip, Grid, IconButton, List as MuiList, Typography } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { initShoppingListItemParams, setAddShoppingListItemParams, toggleAddShoppingListDialog } from "../../../shopping-list-items/api/ShoppingListItemsSlice";
import { shoppingListsGetter } from "../../../shopping-lists/api/ShoppingListSlice";
import CardListItems from "./CardListItems";

interface Props {}

const ShoppingListCards: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const shoppingLists = useAppSelector(shoppingListsGetter);

  const handleOpenDialogForList = (listId: string) => {
    const params = initShoppingListItemParams(listId);

    dispatch(setAddShoppingListItemParams(params));
    dispatch(toggleAddShoppingListDialog())
  }

  return (
    <Box sx={{ flexGrow: 1, marginTop: '2rem' }}>
      <Grid
        container
        spacing={2}
      >
        {shoppingLists.map((list, key) => (
          <Grid
            item key={key}
            lg={4} md={6} xs={12}
          >
            <Card
              elevation={1}
              sx={{ height: '100%' }}
            >
              <CardContent>
                <Grid
                  container
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      variant="h5"
                    >{list.name}</Typography>
                  </Grid>
                  <Grid item marginLeft="auto">
                    <Chip label={list.items.length} color={"primary"} />
                  </Grid>
                </Grid>
              </CardContent>
              <MuiList>
                <CardListItems
                  items={list.items}
                />
              </MuiList>
              <CardActions>
                <IconButton onClick={() => handleOpenDialogForList(list.id)}>
                  <Add />
                </IconButton>
                <Button>See more</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ShoppingListCards;
