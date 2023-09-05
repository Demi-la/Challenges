import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { Box, Flex } from '@chakra-ui/react'
import HomePage from './homePage'
import HomeMobile from './mobile/home';
import { sidebarData } from './data'

const Home = () => {
    
  const sidebar = sidebarData.slice(0,3)
  return (
    <>
      <Box
        background={'var(--gray-100, #100E0E)'}
        height={{ base: '100%', lg: '50rem' }}
        fontFamily={"font-family: 'Inter', sans-serif;"}
        overflow={'hidden'}
      >
        <Box display={{ base: 'none', lg: 'block' }}>
          <Navbar />
          <Flex>
            <Sidebar page1={sidebar} login={true} />
            <HomePage />
          </Flex>
        </Box>
        <HomeMobile />
      </Box>
    </>
  );
}

export default Home
