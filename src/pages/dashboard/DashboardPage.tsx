import { FC, useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";

import Navbar from "../../components/dashboard/layout/Navbar";
import NavigationDrawer from "../../components/dashboard/layout/NavigationDrawer";
import { fetchGroupsAsync } from "../../components/groups/GroupSlice";
import { ThemeWrapper } from "../../components/shared/ThemeWrapper.styles";
import GroupCards from "../groups/GroupCards";

interface Props {}

const DashboardPage: FC<Props> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGroupsAsync());
  });

  return (
    <ThemeWrapper>
      <Navbar />
      <NavigationDrawer />
      <GroupCards />
    </ThemeWrapper>
  )
}

export default DashboardPage;
