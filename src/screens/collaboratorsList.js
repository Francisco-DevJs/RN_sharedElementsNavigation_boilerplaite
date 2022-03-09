import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, Button} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';
const CollaboratorsList = () => {
  // const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>Test</Text>
      <View style={{flex:1, width:'80%', alignSelf:'center'}}>
        <Button
          title="outra página"
          // onPress={() => navigation.navigate('details')}
        />
      </View>
    </View>
  );
};

export default CollaboratorsList;
