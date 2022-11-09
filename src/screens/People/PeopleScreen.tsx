import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { Card } from "../../components/Card";
import { usePeople } from "../../hooks/usePeople";
import { SafeAreaLayout } from "../../layouts";
import { PeopleResults } from "../../utils/types/People.types";
import { peopleStyles } from "./PeopleStylesScreen";

export const PeopleScreen = (): React.ReactElement => {
  const [page, setPage] = useState<number>(1);
  const [peopleList, setPeopleList] = useState<PeopleResults[]>([]);

  const { data: people, isLoading, isFetching } = usePeople(page);

  useEffect(() => {
    if (!isLoading && people?.results) {
      setPeopleList([...peopleList, ...people.results]);
    }
  }, [people, page]);

  const handleClick = () => {
    console.log("Go to page");
  };

  const handleEndReached = () => {
    if (people?.next) setPage((prevPage) => prevPage + 1);
  };

  return (
    <SafeAreaLayout>
      <View style={peopleStyles.container}>
        <FlatList
          data={peopleList}
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
