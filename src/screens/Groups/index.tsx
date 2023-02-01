import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { groupsGetAll } from "../../storage/group/groupsGetAll";

import { Container } from "./styles";

import { Highlight } from "../../components/Highlight";
import { Header } from "../../components/Header";
import { GroupCard } from "../../components/GroupCard";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subtitle="Avance para comecar o role!" />

      <GroupCard
        title="Crie seu grupo" /**** */
        plus="+"
        onPress={handleNewGroup}
      />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
