import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import Routes from './src/Routes';
import dummy_data from './DUMMY_DATA';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Get_data} from './src/services/http_axios';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{collaborators:[]}])
 useEffect(() => {
   const callApi = async () => {
      await Get_data()
      .then((dt) => setData(JSON.parse(dt)))
      .then(() => setCache(JSON.stringify({allCollabs:data[0].collaborators} )))
      .then(()=> setLoading(false))
   }

   callApi()
   console.log(data, '<<dt')
 }, [loading])
  
  
  
  const setCache = async value => {
    try {
      await AsyncStorage.setItem('cacheCollab', value)
      .then(() => setLoading(false))
        .catch(() => setLoading(true));
    } catch (error) {
      console.log(error, 'error no SETCache');
      setLoading(true);
    }
  };

  return <>{loading ? <ActivityIndicator size={'large'} /> : <Routes />}</>;
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
