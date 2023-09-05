import React from 'react'
import { Box, Image, Flex, HStack, Button, Text } from '@chakra-ui/react';
import logo from '../../assets/Logo.png';
import coin from '../../assets/coin.svg';
import { AiOutlineMenu } from 'react-icons/ai';

const MobileNav = () => {
  return (
    <>
      <Flex
        background={'var(--gray-90, #231F1F)'}
        h={'5rem'}
        borderTopRadius={'1rem'}
        gap={'20%'}
        w={"100%"}
      >
        <Image
          src={logo}
          alt="logo"
          w={'30%'}
          h={'1.5rem'}
          mt={'1.5rem'}
          ml={'2rem'}
        />
        <HStack>
          <Button
            w={'4.871rem'}
            h={'2.5rem'}
            borderRadius={'2.5rem'}
            background={'var(--gray-90, #231F1F)'}
            fontSize={'1rem'}
            fontWeight={600}
            color={'var(--others-body, #D0CCD0)'}
            mr={'1rem'}
          >
            <Flex gap={'5px'}>
              <Image src={coin} alt="coin" />
              <Text>1276</Text>
            </Flex>
          </Button>
          <Box mr={'4rem'}>
            <AiOutlineMenu color="white" fontSize={'2rem'} />
          </Box>
        </HStack>
      </Flex>
    </>
  );
}

export default MobileNav
