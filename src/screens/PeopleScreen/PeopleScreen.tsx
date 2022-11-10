import React, { useEffect, useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Card } from "../../components/Card";
import { Searcher } from "../../components/Searcher";
import { usePeople } from "../../hooks/usePeople";
import { usePeopleByName } from "../../hooks/usePeopleByName";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { PeopleResults } from "../../utils/types/People.types";
import { FooterLoading } from "../../components/FooterLoading";
import { ScreenLoading } from "../../components/ScreenLoading";
import { EmptyList } from "../../components/EmptyList";
import { StackParamList } from "../../components/Navigators/AppNavigator";

type PeopleScreenProps = NativeStackScreenProps<
  StackParamList,
  "PeopleDetails"
>;

export const PeopleScreen = ({
  navigation,
}: PeopleScreenProps): React.ReactElement => {
  const { navigate } = navigation;

  const [page, setPage] = useState<number>(1);
  const [peopleList, setPeopleList] = useState<PeopleResults[]>([]);
  const [peopleByNameList, setPeopleByNameList] = useState<PeopleResults[]>([]);
  const [name, setName] = useState<string>();

  const {
    data: people,
    isLoading,
    isFetching,
    isError,
  } = usePeople(page, { keepPreviousData: true });
  const { data: peopleByName } = usePeopleByName(name);

  const isPaginationEnabled = !name?.length;
  const peopleToShow = !name?.length ? peopleList : peopleByNameList;

  useEffect(() => {
    if (!isLoading && people?.results) {
      setPeopleList([...peopleList, ...people.results]);
    }
  }, [people, page]);

  useEffect(() => {
    if (peopleByName?.results) setPeopleByNameList(peopleByName.results);
  }, [peopleByName]);

  const handleClick = (character: PeopleResults) => {
    navigate("PeopleDetails", {
      character,
    });
  };

  const onChangeInputName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setName(event.nativeEvent.text);
  };

  const handleEndReached = () => {
    if (people?.next && isPaginationEnabled) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <SafeAreaLayout>
      {isLoading ? (
        <ScreenLoading showSearcher />
      ) : (
        <FlatList
          data={peopleToShow}
          ListHeaderComponent={
            <Searcher value={name} onChange={onChangeInputName} />
          }
          ListEmptyComponent={<EmptyList isErrorContentType={isError} />}
          stickyHeaderIndices={[0]}
          renderItem={({ item }) => (
            <Card
              title={item.name}
              primaryText={`Gender: ${item.gender}`}
              secondayText={`Birth Year: ${item.gender}`}
              onPress={() => handleClick(item)}
            />
          )}
          onEndReached={handleEndReached}
          ListFooterComponent={isFetching ? <FooterLoading /> : null}
        />
      )}
    </SafeAreaLayout>
  );
};
