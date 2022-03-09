// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
// import {SharedElement} from 'react-navigation-shared-element';
const CollabDetails = () => {
  // const navigation = useNavigation();
  const [collabData, setCollabData] = useState(undefined);

  return (
    <View style={{flex:1}}>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>Outro</Text>
      <View style={{flex: 1, width: '80%', alignSelf: 'center'}}>
        <Button
          title="Voltar pra home"
          // onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default CollabDetails;
