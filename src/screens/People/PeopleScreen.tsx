import React, { useEffect, useState } from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card } from "../../components/Card";
import { Searcher } from "../../components/Searcher";
import { usePeople } from "../../hooks/usePeople";
import { usePeopleByName } from "../../hooks/usePeopleByName";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { PeopleResults } from "../../utils/types/People.types";
import { peopleStyles } from "./PeopleStylesScreen";

export const PeopleScreen = (): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [peopleList, setPeopleList] = useState<PeopleResults[]>([]);
  const [peopleByNameList, setPeopleByNameList] = useState<PeopleResults[]>([]);
  const [name, setName] = useState<string>();

  const { navigate } = useNavigation();
  const { data: people, isLoading, isFetching } = usePeople(page);
  const { data: peopleByName, isLoading: isLoadingByName } =
    usePeopleByName(name);

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

  const handleClick = () => {
    navigate("PeopleDetails");
  };

  const onChangeInputName = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setName(event.nativeEvent.text);
  };

  const handleEndReached = () => {
    if (people?.next && isPaginationEnabled)
      setPage((prevPage) => prevPage + 1);
  };

  return (
    <SafeAreaLayout>
      <View style={peopleStyles.container}>
        <FlatList
          data={peopleToShow}
          ListHeaderComponent={
            <Searcher value={name} onChange={onChangeInputName} />
          }
          stickyHeaderIndices={[0]}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              birth_year={item.birth_year}
              gender={item.gender}
              onPress={handleClick}
            />
          )}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.2}
          ListFooterComponent={isFetching ? <Text>isLoadingFucker</Text> : null}
        />
      </View>
    </SafeAreaLayout>
  );
};
