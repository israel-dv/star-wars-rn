import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Typography } from "../../../components/Typography/Typography";
import { SafeGoBackLayout } from "../../../layouts/SafeGoBackLayout/SafeGoBackLayout";
import { peopleDetailsStyles } from "./PeopleDetailsStyles";
import { StackParamList } from "../../../components/Navigators/AppNavigator";

type PeopleDetailsProps = NativeStackScreenProps<
  StackParamList,
  "PeopleDetails"
>;

export const PeopleDetailsScreen = ({
  route,
  navigation,
}: PeopleDetailsProps) => {
  const { character } = route.params;
  const { goBack } = navigation;

  return (
    <SafeGoBackLayout onGoBack={goBack} title="Character Details">
      <View style={peopleDetailsStyles.view}>
        <View style={peopleDetailsStyles.nameView}>
          <Typography.Title
            text={character.name}
            fontSize={36}
            textAlign="center"
          />
        </View>
        <View style={peopleDetailsStyles.infoView}>
          <Typography.TextRegular
            text="● Gender: "
            style={peopleDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={character.gender}
            style={peopleDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={peopleDetailsStyles.infoView}>
          <Typography.TextRegular
            text="● Birth Year: "
            style={peopleDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={character.birth_year}
            style={peopleDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={peopleDetailsStyles.infoView}>
          <Typography.TextRegular
            text="● Mass: "
            style={peopleDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={character.mass}
            style={peopleDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={peopleDetailsStyles.infoView}>
          <Typography.TextRegular
            text="● Height: "
            style={peopleDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={`${character.height} cm`}
            style={peopleDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={peopleDetailsStyles.infoView}>
          <Typography.TextRegular
            text="● Hair color: "
            style={peopleDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={`${character.hair_color}`}
            style={peopleDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={peopleDetailsStyles.infoView}>
          <Typography.TextRegular
            text="● Skin Color: "
            style={peopleDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={`${character.skin_color}`}
            style={peopleDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={peopleDetailsStyles.infoView}>
          <Typography.TextRegular
            text="● Eye Color: "
            style={peopleDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={`${character.eye_color}`}
            style={peopleDetailsStyles.textDetailInfo}
          />
        </View>
      </View>
    </SafeGoBackLayout>
  );
};
