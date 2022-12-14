import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Typography } from "../../../components/Typography";
import { SafeGoBackLayout } from "../../../layouts/SafeGoBackLayout";
import { filmDetailsStyles } from "./FilmDetailsStyles";
import { StackParamList } from "../../../components/Navigators/AppNavigator";

type FilmDetailsProps = NativeStackScreenProps<StackParamList, "FilmDetails">;

export const FilmDetails = ({
  route,
  navigation,
}: FilmDetailsProps): React.ReactElement => {
  const { film } = route.params;
  const { goBack } = navigation;

  return (
    <SafeGoBackLayout onGoBack={goBack} title="Film Details">
      <View style={filmDetailsStyles.view}>
        <View style={{ margin: 15 }}>
          <Typography.Title
            text={film.title}
            fontSize={36}
            textAlign="center"
          />
        </View>
        <View style={filmDetailsStyles.infoView}>
          <Typography.TextRegular
            text={"Director: "}
            style={filmDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={film.director}
            style={filmDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={filmDetailsStyles.infoView}>
          <Typography.TextRegular
            text={"Producer: "}
            style={filmDetailsStyles.textDetail}
          />
          <Typography.TextRegular
            text={film.producer}
            style={filmDetailsStyles.textDetailInfo}
          />
        </View>
        <View style={filmDetailsStyles.opneningView}>
          <Typography.TextRegular
            text={"Opening crawl: "}
            style={filmDetailsStyles.textCrawl}
          />
          <Typography.TextRegular
            text={film.opening_crawl.replace(/(\r\n|\n|\r)/gm, "")}
            style={filmDetailsStyles.textCrawlInfo}
          />
        </View>
      </View>
    </SafeGoBackLayout>
  );
};
