import React from 'react';
import { Box, Text, VStack } from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorParams } from '@src/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AppBar from '../components/Header';

type Navigation = NativeStackNavigationProp<RootNavigatorParams, 'Home'>;
const Home = () => {
  const navigation = useNavigation<Navigation>();

  const data: DataType[] = [
    // {
    //   title: 'How to create a custom shadow with the color',
    //   description:
    //     'Using react-native-shadow-2 package to create a custom shadow with the color for both iOS and Android. Because if you are setting the shadowColor from react native it not works from other lower android devices.',
    //   onPress: () => navigation.push('Page1'),
    // },
    {
      title: 'How to avoid re-render the item from Flatlist',
      description: 'When update data from flatlist and all items will re-render again.',
      onPress: () => navigation.push('Page2'),
    },
  ];

  const renderItem = ({ item, index }: { item: DataType; index: number }) => {
    return (
      <TouchableOpacity onPress={item.onPress} key={index}>
        <VStack bg="#FFFFFF" mx="20px" p="12px" mb="10px" rounded="12px">
          <Text fontWeight="500" fontSize="14px" mb="4px" numberOfLines={1}>
            {`${index + 1}. ${item.title || ''}}`}
          </Text>
          {item.description && (
            <Text fontWeight="400" fontSize="12px" color="gray.500" numberOfLines={5}>
              {item.description || ''}
            </Text>
          )}
        </VStack>
      </TouchableOpacity>
    );
  };

  return (
    <Box flex={1} bg="#F2F2F2">
      <AppBar />
      <Text px="20px" textAlign="center" fontWeight="600" fontSize="16px" py="12px">
        Tutorials
      </Text>
      <FlatList data={data} renderItem={renderItem} />
    </Box>
  );
};

type DataType = { title: string; description: string; onPress: () => void };

export default Home;
