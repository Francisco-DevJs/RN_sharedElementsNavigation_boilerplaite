import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, Button} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import CardItem from './../components/cardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CollaboratorsList = () => {
  const [allCachedCollab, setAllCachedCollab] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const getCache = async () => {
      return await AsyncStorage.getItem('cacheCollab')
        .then(dt => setAllCachedCollab(JSON.parse(dt)))
        .then(() => setLoading(false));
    };

    getCache();
  }, [allCachedCollab, loading]);
  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>O Universo</Text>
      {allCachedCollab == undefined ? null : (
        <FlatList
          horizontal={false}
          data={allCachedCollab.allCollabs}
          numColumns={2}
          keyExtractor={e => e.id}
          renderItem={e => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('details', {data: e.item})}>
              <CardItem data={e.item} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default CollaboratorsList;
