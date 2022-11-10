import React, { useEffect, useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card } from "../../components/Card";
import { Searcher } from "../../components/Searcher";
import { usePeople } from "../../hooks/usePeople";
import { usePeopleByName } from "../../hooks/usePeopleByName";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { PeopleResults } from "../../utils/types/People.types";
import { FooterLoading } from "../../components/FooterLoading";
import { ScreenLoading } from "../../components/ScreenLoading";

export const PeopleScreen = (): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [peopleList, setPeopleList] = useState<PeopleResults[]>([]);
  const [peopleByNameList, setPeopleByNameList] = useState<PeopleResults[]>([]);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();
  const {
    data: people,
    isLoading,
    isFetching,
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
    navigation.navigate("PeopleDetails", {
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
