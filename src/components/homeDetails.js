import { Box} from '@chakra-ui/react'
import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { sidebarData } from './data'

const HomeDetails = () => {
    const details = sidebarData.slice(0, 4);
    const detailss = sidebarData.slice(5, 9);
  return (
    <>
      <Box
        id="homeDetails"
        background={'var(--gray-100, #100E0E)'}
        height={{ base: '100%', lg: '50rem' }}
        fontFamily={"font-family: 'Inter', sans-serif;"}
        overflow={'hidden'}
      >
        <Navbar /> <Sidebar page1={details} page2={detailss} login={false} />
      </Box>
    </>
  );
}

export default HomeDetails
