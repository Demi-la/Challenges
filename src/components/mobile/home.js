import { Box, Image, Flex, HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../assets/Logo.png"
import coin from "../../assets/coin.svg"
import {AiOutlineMenu} from "react-icons/ai"
import { mobile } from '../data'
import Challenge from '../challenge'
import mobileHome from '../../assets/mobileHome.svg';
import sidebarLight from '../../assets/sidebarLight.svg';
import SidebarWallet from '../../assets/sidebarWallet.svg';
import profile from '../../assets/profile.svg';

function HomeMobile() {

  return (
    <>
      <Box overflow={'hidden'} color={'white'}>
        <Flex
          background={'var(--gray-90, #231F1F)'}
          h={'5rem'}
          borderTopRadius={'1rem'}
          gap={'20%'}
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
        <Box>
          <Challenge data={mobile} height={'37rem'} width={'100vw'} />
        </Box>

        <Flex
          background={'black'}
          h={'5rem'}
          borderBottomRadius={'1rem'}
          display={{ base: 'flex', lg: 'none' }}
          gap={'3rem'}
        >
          <Image
            src={mobileHome}
            alt="Home"
            w={'6rem'}
            height={'3rem'}
            mt={'1rem'}
            ml={'1rem'}
          />
          <Flex gap={'3rem'} mt={'1.3rem'}>
            <Image src={sidebarLight} alt="" w={'2rem'} height={'2rem'} />
            <Image
              src={SidebarWallet}
              alt="whallet"
              w={'2rem'}
              height={'2rem'}
            />
            <Image src={profile} alt="profile" w={'2rem'} height={'2rem'} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default HomeMobile
