/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {
  Button,
  TextArea,
  FormControl,
  Item,
  Stack,
  Input,
  Box,
  Text,
} from 'native-base';
import Layout from './../components/Layout';
import {NoteContext} from '../context/NoteContext';
import uuid from 'react-native-uuid';

const UpdateNoteScreen = ({navigation, route}) => {
  const [note, setNote] = useState();
  const {id} = route.params;
  const context = useContext(NoteContext);
  useEffect(() => {
    let noteIndex = context.notes.findIndex(
      n => n._id === id,
    );

    if (noteIndex > -1) {
      setNote({
        _id: id,
        title: context.notes[noteIndex].title,
        content: context.notes[noteIndex].content,
      });
    }
  }, [context.notes, id]);

  const saveNote =async () => {
   await context.updateNote(note,id);
    navigation.navigate('Home');
  };
  const deleteNote =async () => {
    await context.deleteNote(id);
     navigation.navigate('Home');
   };
  if (!note) return <Text>در حال بارگزاری ...</Text>;
  return (
    <Layout
      footer={
        <>
          <Button width={'33%'} onPress={saveNote}>
            ذخیره یادداشت
          </Button>
          <Button width={'33%'}  mx={2} onPress={() => navigation.navigate('Home')}>
            انصراف
          </Button>
          <Button width={'33%'} onPress={deleteNote}>
            حذف
          </Button>
        </>
      }>
      <FormControl style={styles.container} w={'full'}>
        <Box w={'full'} space={5}>
          <Box w={'full'}>
            <Input
              w={'full'}
              variant="underlined"
              placeholder="عنوان"
              p={2}
              value={note?.title}
              onChangeText={title => setNote({title:title.toString(), content: note.content})}
            />
          </Box>
          <Stack>
            <FormControl.Label color={'red.300'}>متن</FormControl.Label>
            <TextArea
            value={note?.content}
              w={'full'}
              p={2}
              placeholder="متن یادداشت"
              onChangeText={content => setNote({title: note.title, content:content.toString()})}
            />
          </Stack>
        </Box>
      </FormControl>
    </Layout>
  );
};

export default UpdateNoteScreen;

const styles = StyleSheet.create({container: {flex: 1}});
