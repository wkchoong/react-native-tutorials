import React, { useCallback, useState } from 'react';
import AppBar from '../components/Header';
import { Box, Button, Circle, FlatList, HStack, Text, VStack } from 'native-base';
import { Shadow } from 'react-native-shadow-2';
import FastImage from 'react-native-fast-image';

import Gym1 from '@assets/page1/gym1.png';
import Gym2 from '@assets/page1/gym2.jpg';
import Gym3 from '@assets/page1/gym3.png';

// * How to create a custom shadow with color
const Page1 = () => {
  const renderHeader = () => {
    return (
      <Box bg="#FFFFFF" px="20px" mb="12px">
        <Text fontWeight="700" fontSize="20px">
          Store
        </Text>
      </Box>
    );
  };

  const renderItem = ({ item, index }: { item: DataProps; index: number }) => {
    return (
      <Box mx="20px" mb="25px" key={index}>
        <Shadow
          // sides={{ start: true, end: false, top: true, bottom: false }}
          // corners={{ topStart: true, topEnd: true, bottomStart: false, bottomEnd: false }}
          // offset={[0, -1]}
          // disabled
          // paintInside={false}
          offset={item.offset}
          distance={12}
          startColor={item.shadowColor}
          style={{ width: '100%', borderRadius: 12 }}
        >
          <Box bg={item.bgColor} p="10px" rounded="12px" h="120px">
            {item.image && (
              <FastImage source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
            )}
            <Text
              shadow="2"
              fontWeight="600"
              fontSize="16px"
              position="absolute"
              color="#FFFFFF"
              bottom="10px"
              left="10px"
              numberOfLines={1}
            >
              {item.label}
            </Text>
          </Box>
        </Shadow>
      </Box>
    );
  };

  return (
    <Box flex={1}>
      <AppBar goBack title="How to create a custom shadow with the color" />

      <FlatList
        style={{ backgroundColor: '#FFFFFF' }}
        data={data}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
      />

      <BottomNavigationBar />
    </Box>
  );
};

const BottomNavigationBar = () => (
  <Box position="absolute" bottom={0} left={0} right={0}>
    <Shadow
      style={{ width: '100%', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
      offset={[0, 4]}
      distance={14}
      startColor="#D3D3D3"
    >
      <HStack h="65px" space="12px" alignItems="center" borderTopRadius="16px" bg="#FFFFFF">
        <VStack flex={1} alignItems="center" justifyContent="center">
          <Circle h="16px" width="16px" bg="gray.400" />
          <Text textAlign="center" color="gray.500" fontSize="12px" mt="8px">
            Title 1
          </Text>
        </VStack>
        <VStack flex={1} alignItems="center" justifyContent="center">
          <Circle h="16px" width="16px" bg="gray.400" />
          <Text textAlign="center" color="gray.500" fontSize="12px" mt="8px">
            Title 2
          </Text>
        </VStack>
        <VStack flex={1} alignItems="center" justifyContent="center">
          <Circle h="16px" width="16px" bg="gray.400" />
          <Text textAlign="center" color="gray.500" fontSize="12px" mt="8px">
            Title 3
          </Text>
        </VStack>
        <VStack flex={1} alignItems="center" justifyContent="center">
          <Circle h="16px" width="16px" bg="gray.400" />
          <Text textAlign="center" color="gray.500" fontSize="12px" mt="8px">
            Title 4
          </Text>
        </VStack>
      </HStack>
    </Shadow>
  </Box>
);

const data: DataProps[] = [
  {
    label: 'Training Plan',
    bgColor: '#0087CC',
    shadowColor: '#A7E7F6',
    offset: [0, 3],
    image: Gym1,
  },
  {
    label: 'Meal Plan',
    bgColor: '#F2ACC6',
    shadowColor: '#F2D5DB',
    offset: [0, 3],
    image: Gym2,
  },
  {
    label: 'Supplement Plan',
    bgColor: '#F2A057',
    shadowColor: '#F2DFBB',
    offset: [0, 3],
    image: Gym3,
  },
];

type DataProps = {
  label: string;
  bgColor: string;
  shadowColor: string;
  offset: [x: number | string, y: number | string];
  image?: any;
};

export default Page1;
