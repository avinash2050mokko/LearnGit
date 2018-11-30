import { DrawerNavigator } from "react-navigation";

import TopHeadlines from "./screen/TopHeadlines";
import Everything from "./screen/Everything";
import Sources from "./screen/Sources";

export default DrawerNavigator({
  TopHeadlines: {
    screen: TopHeadlines
  },
  Everything: {
    screen: Everything
  },
  Sources: {
    screen: Sources
  }
});
