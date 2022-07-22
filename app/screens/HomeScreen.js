/* eslint-disable prettier/prettier */
import React, {useCallback, useContext, useState} from 'react';
import {TouchableOpacity, Text, FlatList, View} from 'react-native';
import {Button} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import Layout from '../components/Layout';
import NoteContent from '../components/NoteContent';
import {NoteContext} from '../context/NoteContext';
const HomeScreen = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const context = useContext(NoteContext);

  useFocusEffect(
    useCallback(() => {
      setNotes(context.notes);
    }, [context.notes]),
  );
 
  return (
    <Layout
      title={'یادداشت های من'}
      footer={
        <Button
          w={'100%'}
          colorScheme="purple"
          onPress={() => navigation.navigate('AddNote')}>
          <Text style={{fontFamily: 'ih'}}>اضافه کردن یادداشت جدید</Text>
        </Button>
      }>
      <View style={{flex: 1, width: '100%'}}>
        <FlatList
          data={notes}
          keyExtractor={note => note._id}
          renderItem={({item}) => (
            <View style={{flex: 1, width: '100%'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateNote', {id: item._id})}>
                <NoteContent note={item} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Layout>
  );
};

export default HomeScreen;
