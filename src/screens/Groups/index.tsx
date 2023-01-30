import { useState } from 'react';
import { FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import { Container } from './styles';

import { Highlight } from '../../components/Highlight'
import { Header } from '../../components/Header'
import { GroupCard } from '../../components/GroupCard'


export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da faculdade']);
 
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('players')
  }

  return (
    <Container>
     <Header/>
     <Highlight 
        title="Grupos"
        subtitle="Avance para comecar o role!"
      />
      
     <GroupCard
     title="Crie seu grupo"/**** */
     plus="+"
     onPress={handleNewGroup}
     />

<FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
            
            
        )}
      />
     
    </Container>
  );
}