import React, { memo, useCallback, useState } from 'react';
import AppBar from '../components/Header';
import { Box, Button, FlatList, HStack, Text, VStack } from 'native-base';
import { Pressable } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

const Page2 = () => {
  const dataArray = _.times(100, index => {
    return { id: index + 1, updated: false };
  });
  const [data, setData] = useState<DataType[]>(dataArray);

  //   const [data, setData] = useState<DataType[]>([
  //     { id: 1, updated: false },
  //     { id: 2, updated: false },
  //     { id: 3, updated: false },
  //     { id: 4, updated: false },
  //     { id: 5, updated: false },
  //   ]);

  const handleUpdate = (index: number) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].updated = !newData[index].updated;
      return newData;
    });
  };

  const renderItem = ({ item, index }: { item: DataType; index: number }) => {
    return <Item item={item} index={index} onPress={() => handleUpdate(index)} />;
    // return <Item2 item={item} index={index} />;
    // console.log(`item ${index + 1} is re-render!`);
    // return (
    //   <HStack justifyContent="space-between" px="20px" py="12px" bg="#FFFFFF" mb="10px">
    //     <Text>item {index + 1}</Text>
    //     <Button
    //       variant={item.updated ? 'solid' : 'outline'}
    //       h="40px"
    //       onPress={() => handleUpdate(index)}
    //       _text={{ lineHeight: 'sm' }}
    //     >
    //       {item.updated ? 'Updated' : 'Not updated yet'}
    //     </Button>
    //   </HStack>
    // );
  };

  return (
    <Box flex={1}>
      <AppBar goBack title="How to avoid re-render the item from Flatlist" />
      <FlatList keyExtractor={v => v.id.toString()} data={data} renderItem={renderItem} />
    </Box>
  );
};

// * Using memo
const Item = memo(
  ({ item, index, onPress }: { item: DataType; index: number; onPress: () => void }) => {
    console.log(`item ${index + 1} is re-render!`);

    return (
      <HStack justifyContent="space-between" px="20px" py="12px" bg="#FFFFFF" mb="10px">
        <Text>item {index + 1}</Text>
        <Button variant={item.updated ? 'solid' : 'outline'} h="40px" onPress={onPress} _text={{ lineHeight: 'sm' }}>
          {item.updated ? 'Updated' : 'Not updated yet'}
        </Button>
      </HStack>
    );
  },
  // * If the props are equal, it won't update
  (prevProps, nextProps) => _.isEqual(prevProps.item, nextProps.item),
);

// * Pass the useState to each item component
type Item2 = { item: DataType; index: number };
// eslint-disable-next-line @typescript-eslint/no-redeclare
const Item2: React.FC<Item2> = (props: Item2) => {
  const [updated, setUpdated] = useState<boolean>(props.item.updated);

  console.log(`item ${props.index + 1} is re-render!`);
  return (
    <HStack justifyContent="space-between" px="20px" py="12px" bg="#FFFFFF" mb="10px">
      <Text>item {props.index + 1}</Text>
      <Button
        variant={updated ? 'solid' : 'outline'}
        h="40px"
        onPress={() => setUpdated(!updated)}
        _text={{ lineHeight: 'sm' }}
      >
        {updated ? 'Updated' : 'Not updated yet'}
      </Button>
    </HStack>
  );
};

type DataType = { id: number; updated: boolean };

export default Page2;
