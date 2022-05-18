import { FC } from "react";
import Navbar from "../../components/dashboard/layout/Navbar";
import NavigationDrawer from "../../components/dashboard/layout/NavigationDrawer";
import { ThemeWrapper } from "../../components/shared/ThemeWrapper.styles";

interface Props {}

const DashboardPage: FC<Props> = () => {
  return (
    <ThemeWrapper>
      <Navbar />
      <NavigationDrawer />
    </ThemeWrapper>
  )
}

export default DashboardPage;
