/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React, {useState, useContext} from 'react';
import {Button, TextArea, FormControl, Item, Stack, Input, Box, Text} from 'native-base';
import Layout from './../components/Layout';
import { NoteContext } from '../context/NoteContext';
import uuid from 'react-native-uuid';

const AddNoteScreen = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const context=useContext(NoteContext)
  const saveNote = () => {
    const note = {
      _id: uuid.v4(),
      title,
      content,
    };

    context.addNote(note)
    navigation.navigate('Home');
  };
  return (
    <Layout
      footer={
        <>
          <Button width={'50%'} mx={2} onPress={saveNote}>
            ذخیره یادداشت
          </Button>
          <Button width={'50%'} onPress={() => navigation.navigate('Home')}>
            انصراف
          </Button>
        </>
      }>
      <FormControl style={styles.container}w={'full'} >
        <Box w={'full'} space={5}>
          <Box w={'full'}>
            <Input w={'full'} variant="underlined" placeholder='عنوان' p={2} onChangeText={title=>setTitle(title)} />
          </Box>
          <Stack>
            <FormControl.Label color={'red.300'}>متن</FormControl.Label>
            <TextArea w={'full'} p={2} placeholder="متن یادداشت" onChangeText={text=>setContent(text)}/>
          </Stack>
        </Box>
      </FormControl>
    </Layout>
  );
};

export default AddNoteScreen;

const styles = StyleSheet.create({container: {flex: 1}});
