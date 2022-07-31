import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { useAppSelector } from "../../../app/hooks";
import { shoppingListsGetter } from "../../../shopping-lists/api/ShoppingListSlice";
import ShoppingListCard from "./ShoppingListCard";

interface Props {}

const ShoppingListCards: FC<Props> = () => {
  const shoppingLists = useAppSelector(shoppingListsGetter);

  return (
    <Box sx={{ flexGrow: 1, marginTop: '2rem', marginBottom: '2rem' }}>
      <Grid
        container
        spacing={2}
      >
        {shoppingLists.map((list, key) => (
          <Grid
            item key={key}
            md={6} xs={12}
          >
            <ShoppingListCard list={list}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ShoppingListCards;
