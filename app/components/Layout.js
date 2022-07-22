/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Container,
  HStack,
  Body,
  Title,
  NativeBaseProvider,
  extendTheme,
  StyleProvider,
  Pressable,
  Center,
  VStack,
  Button,
  IconButton,
  Icon,
  Box,
  StatusBar,
} from 'native-base';
import {View, Text} from 'react-native';

// const theme = extendTheme({ colors: newColorTheme });
const Layout = ({children, left, right, title, footer}) => {
  return (
    <Center display={'flex'} justifyContent='space-between' h={'100%'} bgColor={'gray.400'}>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#6200ee"
        px="2"
        py="3"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <Text style={{fontFamily:'ih'}} color="white" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
      </HStack>
      {children}
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
         {footer}
      </HStack>
    </Center>
  );
};

export default Layout;
