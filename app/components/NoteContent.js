/* eslint-disable prettier/prettier */
import React from 'react';
import {VStack, Box, Divider,Text} from 'native-base';
import { View } from 'react-native';
const NoteContent = ({note}) => {
  // console.log(note);
  return (
    <Box bg={'gray.500'} w={'full'} border="2" borderRadius="md" mt={2} py={4} borderColor={'amber.800'}>
      <VStack space="4" divider={<Divider />}>
        <View>
        <Text fontFamily={'ih'} color={'white'} ml={4}>{note.title} : </Text>
        <Box>
          <Text fontFamily={'ih'} color={'white'} ml={8} fontWeight="bold" fontSize={18}>
            {note?.content?.length > 120
              ? `${note?.content?.substr(0, 100)}...`
              : note.content}
          </Text>
        </Box>
        </View>
      </VStack>
    </Box>
  );
};

export default NoteContent;
