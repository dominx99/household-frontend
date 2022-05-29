import { FC } from "react";

import Navbar from "../../components/dashboard/layout/Navbar";
import NavigationDrawer from "../../components/dashboard/layout/NavigationDrawer";
import { ThemeWrapper } from "../../components/shared/ThemeWrapper.styles";
import ListCards from "../lists/ListCards";

interface Props {}

const DashboardPage: FC<Props> = () => {
  return (
    <ThemeWrapper>
      <Navbar />
      <NavigationDrawer />
      <ListCards />
    </ThemeWrapper>
  )
}

export default DashboardPage;
