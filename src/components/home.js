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
        height={{ base: '100%', lg: 'auto' }}
        fontFamily={"font-family: 'Inter', sans-serif;"}
        overflow={'hidden'}
      >
        <Box display={{ base: 'none', lg: 'block' }}>
          <Navbar />
          <Flex>
            <Box>
              <Sidebar page1={sidebar} login={true} />
            </Box>
            <HomePage />
          </Flex>
        </Box>
        <Box display={{ base: 'flex', lg: 'none' }}>
          <HomeMobile />
        </Box>
      </Box>
    </>
  );
}

export default Home
