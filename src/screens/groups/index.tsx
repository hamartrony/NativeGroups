import { useState } from "react";
import { FlatList } from "react-native";
import { Button } from "../../components/button";
import { GroupCard } from "../../components/groupsCard";
import { Header } from "../../components/header";
import { Hight } from "../../components/higth";
import { ListEmpty } from "../../components/list-empty";
import { Container, Title } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera Rocket",
    "Cora Coralina",
  ]);

  return (
    <Container>
      <Header />
      <Hight title="Grupos" sub="Comece adicionando pessoas!" />
      <FlatList
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhum Grupo Adicionado" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />

      <Button title="Adicionar Gupo" />

      <Title>Hamart Rony Lucena</Title>
    </Container>
  );
}
