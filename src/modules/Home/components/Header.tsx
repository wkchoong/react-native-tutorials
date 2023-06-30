import React from 'react';
import { Box, Button, HStack, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

type AppBarProps = { goBack?: boolean; title?: string };
const AppBar: React.FC<AppBarProps> = props => {
  const navigation = useNavigation();

  return (
    <>
      <Box safeAreaTop bg="#FFFFFF" />
      {props.goBack && (
        <VStack px="20px" py="10px" bg="#FFFFFF">
          <HStack mb="4px">
            <Button
              _pressed={{ bg: '#F2F2F2' }}
              p="0px"
              m="0px"
              variant="ghost"
              onPress={() => navigation.goBack()}
              flex={1}
            >
              Back
            </Button>
            <Box flex={3} />
            <Box flex={3} />
          </HStack>
          {props.title && (
            <Text textAlign="center" numberOfLines={1} fontWeight="500" fontSize="14px">
              {props.title || ''}
            </Text>
          )}
        </VStack>
      )}
    </>
  );
};

export default AppBar;
