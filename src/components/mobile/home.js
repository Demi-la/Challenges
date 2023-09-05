import { Box, Image, Flex} from '@chakra-ui/react';
import React from 'react';
import { mobile } from '../data';
import Challenge from '../challenge';
import mobileHome from '../../assets/mobileHome.svg';
import sidebarLight from '../../assets/sidebarLight.svg';
import SidebarWallet from '../../assets/sidebarWallet.svg';
import profile from '../../assets/profile.svg';
import MobileNav from './mobileNav';

function HomeMobile() {
  return (
    <>
      <Box overflow={'hidden'} color={'white'} width={'100%'}>
        <Box display={{ base: 'flex', lg: 'none' }}>
          <MobileNav />
        </Box>
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

export default HomeMobile;
