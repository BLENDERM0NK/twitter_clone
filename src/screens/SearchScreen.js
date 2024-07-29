import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Dimensions, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TrendingCard from '../components/TrendingCard';
import SearchProfCard from '../components/SearchProfCard';
import { TrendingData, DummyData } from '../mock/DummyData';

const screenWidth = Dimensions.get('window').width;

export default function SearchScreen({ navigation }) {
  const [user, setUser] = useState([]);
  const data = DummyData;

  const searchUser = (text) => {
    if (text) {
      setUser(data.filter(userData => userData.name.toLowerCase().includes(text.toLowerCase())));
    } else {
      setUser([]);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TextInput
          placeholder='Search Twitter'
          placeholderTextColor={'#807c7c'}
          style={styles.searchText}
          onChangeText={searchUser}
        />
      ),
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, marginLeft: 15 }}
          source={{ uri: 'https://imgs.search.brave.com/DFk5bIilYkt_5dJO9oUwuhxM0Z4gwk8LoUC3TQjM6Oc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnJl/dHJvemFwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/Ni9DYXB0YWluLUFt/ZXJpY2EtM18wMjct/QXZlbmdlcnNIUS1U/cmFpbGVyLmpwZz9y/ZXNpemU9MTE3MCw0/ODAmcXVhbGl0eT04/OSZzc2w9MQ' }}
        />
      ),
      headerRight: () => (
        <MaterialIcons
          name='settings' color={'white'} size={25} style={styles.settingIcon}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {user?.map(userData => (
          <SearchProfCard key={userData.id} prof={userData.prof} id={userData.id} name={userData.name} verified={userData.verified} />
        ))}
        {TrendingData.map(trendingData => (
          <TrendingCard
            key={trendingData.id}
            topic={trendingData.topic}
            hashtag={trendingData.hashtag}
            count={trendingData.count}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchText: {
    flex: 2,
    backgroundColor: '#262626',
    paddingLeft: 15,
    textAlignVertical: 'center',
    textAlign: 'center',
    height: '80%',
    width: screenWidth - 150,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 50,
    color: 'white',
    borderWidth: 0,
  },
  settingIcon: {
    marginRight: 15,
  },
});
