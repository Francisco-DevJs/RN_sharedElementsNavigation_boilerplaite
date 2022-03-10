import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
// import {SharedElement} from 'react-navigation-shared-element';
const CollabDetails = ({route}) => {
  const navigation = useNavigation();
  const [collabData, setCollabData] = useState(undefined);
  const {data} = route.params;

  return (
    <SafeAreaView>
      <SharedElement id={data.id}>
        <View >
          
          <Image
            style={{width: '100%', height: '100%'}}
       
            source={{uri: data.url}}
          />
        </View>
      </SharedElement>
    </SafeAreaView>
  );
};

export default CollabDetails;
