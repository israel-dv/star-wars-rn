import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

import { COLORS } from "../../utils/constants/COLORS";
import { Typography } from "../Typography";

type StyleIconProps = {
  focused: boolean;
  route: any;
};

enum TapOptions {
  People = "People",
  Films = "Films",
  Planets = "Planets",
}

const styleIcon = ({ focused, route }: StyleIconProps): React.ReactElement => {
  const color = focused ? COLORS.textPrimaryColor : COLORS.textSecondaryColor;

  const size = focused ? 24 : 20;

  switch (route.name) {
    case TapOptions.People:
      return <Fontisto name="persons" size={size} color={color} />;
    case TapOptions.Films:
      return <Ionicons name="earth" size={size} color={color} />;
    case TapOptions.Planets:
      return (
        <MaterialCommunityIcons name="movie-open" size={size} color={color} />
      );
    default:
      return <Fontisto name="persons" size={size} color={color} />;
  }
};

const styleLabel = ({ focused, route }: StyleIconProps) => {
  return (
    <Typography.TextRegular
      text={route.name}
      style={{
        color: focused ? COLORS.textPrimaryColor : COLORS.textSecondaryColor,
        fontSize: 12,
      }}
    />
  );
};

export const styleNavigator = (routeProps: any): BottomTabNavigationOptions => {
  const { route } = routeProps;

  return {
    tabBarIcon: ({ focused }) => styleIcon({ focused, route }),
    tabBarLabel: ({ focused }) => styleLabel({ focused, route }),
    tabBarStyle: {
      backgroundColor: COLORS.secondaryBackground,
    },
    headerShown: false,
  };
};
