import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SafeGoBackLayout } from "../../../layouts/SafeGoBackLayout";
import { starshipStyles } from "./StarshipStyles";
import { Typography } from "../../../components/Typography";
import { COLORS } from "../../../utils/constants/COLORS";
import { StackParamList } from "../../../components/Navigators/AppNavigator";

type StarshipDetailsProps = NativeStackScreenProps<
  StackParamList,
  "StarshipDetails"
>;

export const StarshipDetails = ({
  route,
  navigation,
}: StarshipDetailsProps): React.ReactElement => {
  const { starship } = route.params;
  const { goBack } = navigation;

  return (
    <SafeGoBackLayout onGoBack={goBack} title={"Starship Details"}>
      <View style={starshipStyles.view}>
        <View style={{ marginVertical: 15 }}>
          <Typography.Title
            text={starship.name}
            fontSize={36}
            textAlign="center"
          />
        </View>
        <View style={starshipStyles.infoView}>
          <Typography.TextRegular
            text={starship.manufacturer}
            style={{
              ...starshipStyles.textDetailInfo,
              color: COLORS.orange,
            }}
          />
        </View>
        <View style={starshipStyles.infoView}>
          <Typography.TextRegular
            text={"Class: "}
            style={starshipStyles.textDetail}
          />
          <Typography.TextRegular
            text={starship.starship_class}
            style={starshipStyles.textDetailInfo}
          />
        </View>
        <View style={starshipStyles.infoView}>
          <Typography.TextRegular
            text={"Passengers: "}
            style={starshipStyles.textDetail}
          />
          <Typography.TextRegular
            text={starship.passengers}
            style={starshipStyles.textDetailInfo}
          />
        </View>
        <View style={starshipStyles.infoView}>
          <Typography.TextRegular
            text={"Cargo Capacity: "}
            style={starshipStyles.textDetail}
          />
          <Typography.TextRegular
            text={starship.cargo_capacity}
            style={starshipStyles.textDetailInfo}
          />
        </View>
        <View style={starshipStyles.infoView}>
          <Typography.TextRegular
            text={"Crew: "}
            style={starshipStyles.textDetail}
          />
          <Typography.TextRegular
            text={starship.crew}
            style={starshipStyles.textDetailInfo}
          />
        </View>
        <View style={starshipStyles.infoView}>
          <Typography.TextRegular
            text={"Max Speed: "}
            style={starshipStyles.textDetail}
          />
          <Typography.TextRegular
            text={starship.max_atmosphering_speed}
            style={starshipStyles.textDetailInfo}
          />
        </View>
      </View>
    </SafeGoBackLayout>
  );
};
