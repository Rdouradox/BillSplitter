import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { ButtonIcon } from "../../components/ButtonIcon";
import { PlayerCard } from "../../components/PlayerCard";
import { Button } from "../../components/Button";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Filter } from "../../components/Filter";

import { useState } from "react";
import { FlatList } from "react-native";

export function Players() {
  const [players, setPlayers] = useState([])
  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Divide ae"
        subtitle="adicione a galera e organize o role"
      />

<Form>
        <Input 
          placeholder="Nome da pessoa"
          // AutoCorrect para nao corrigir escrita (ex: apelido)
          autoCorrect={false}
        />

        <ButtonIcon 
          icon="add" 
        />
      </Form>
      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
      />
         <Button 
        title="Remover Turma"
        type="SECONDARY"
      />
      
    </Container>
  )
}