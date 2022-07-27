import { Container, Divider, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";

import Navbar from "../../components/dashboard/layout/Navbar";
import NavigationDrawer from "../../components/dashboard/layout/NavigationDrawer";
import { fetchGroupsAsync } from "../../components/groups/GroupSlice";
import { ThemeWrapper } from "../../components/shared/ThemeWrapper.styles";
import ShoppingListsCards from "../../components/shopping-lists/lists/ShoppingListsCards";

interface Props {}

const GroupPage: FC<Props> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGroupsAsync());
  });

  return (
    <ThemeWrapper>
      <Navbar />
      <NavigationDrawer />

      <Container sx={{ marginTop: '1rem' }}>
        <Typography variant="h4" color="primary.contrastText">Shopping Lists</Typography>
        <ShoppingListsCards />
      </Container>

    </ThemeWrapper>
  )
}

export default GroupPage;
