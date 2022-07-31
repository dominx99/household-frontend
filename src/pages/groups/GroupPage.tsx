import { Container, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import Navbar from "../../components/dashboard/layout/Navbar";
import NavigationDrawer from "../../components/dashboard/layout/NavigationDrawer";
import { fetchGroupsAsync, fetchSelectedGroupAsync, selectedGroupGetter } from "../../components/groups/GroupSlice";
import { ThemeWrapper } from "../../components/shared/ThemeWrapper.styles";
import ShoppingListsCards from "../../components/shopping-lists/lists/ShoppingListsCards";
import AddShoppingListItemDialog from "../../shopping-list-items/components/add/AddShoppingListItemDialog";
import { fetchShoppingListsByGroupAsync } from "../../shopping-lists/api/ShoppingListSlice";

interface Props {}

const GroupPage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const selectedGroup = useAppSelector(selectedGroupGetter);

  useEffect(() => {
    dispatch(fetchGroupsAsync());
  });

  useEffect(() => {
    // TODO: Find proper way instead od passing ''
    dispatch(fetchSelectedGroupAsync(params.id || ''));
  }, [dispatch, params]);

  useEffect(() => {
    // TODO: Find proper way instead od passing ''
    dispatch(fetchShoppingListsByGroupAsync(selectedGroup?.id || ''))
  }, [dispatch, selectedGroup]);

  return (
    <ThemeWrapper>
      <Navbar />
      <NavigationDrawer />

      <Container sx={{ marginTop: '1rem', paddingBottom: '1rem' }}>
        <Typography variant="h4" color="primary.contrastText">Shopping Lists</Typography>
        <ShoppingListsCards />
      </Container>

      <AddShoppingListItemDialog />
    </ThemeWrapper>
  )
}

export default GroupPage;
