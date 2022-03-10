import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const CardItem = ({data}) => {
  const navigation = useNavigation();
  const [collabData, setCollabData] = useState(undefined);
  const currentData = data;

  return (
    <View style={{flex: 1, padding: 20}}>
      <SharedElement id={currentData.id}>
        <Image
          style={{width: 140, height: 140, borderRadius: 10, padding: 20}}
          source={{uri: currentData.url}}
        />
      </SharedElement>
      <Text style={{fontSize: 17, alignSelf: 'center', color: 'black'}}>
        {currentData.title}
      </Text>
    </View>
  );
};

export default CardItem;
