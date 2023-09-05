import { Box, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import homelogin from '../assets/homelogin.svg';
import detailslogin from '../assets/detailslogin.svg';

const Sidebar = ({  page1, page2, login }) => {
  return (
    <>
      <Box position={'relative'} height={""}>
        <Box color={'white'} >
          <Flex
            maxWidth={'6rem'}
            flexDir={'column'}
            borderRight={'1px solid  var(--gray-50, #858383)'}
            height={'40rem'}
            position={'relative'}
          >
            {page1.map((item, index) => {
              return (
                <Box>
                  <Box
                    w={'6rem'}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDir={'column'}
                    gap={'2.5rem'}
                    paddingBottom={'1rem'}
                    key={index}
                  >
                    <Image src={item.icon} mt={'2rem'} />
                  </Box>
                </Box>
              );
            })}

            <Box
              w={'6rem'}
              borderTop={'1px solid  var(--gray-50, #858383)'}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDir={'column'}
              gap={'2.5rem'}
              paddingTop={'1rem'}
            >
              <Text
                color={'var(--gray-50, #858383)'}
                fontSize={'0.75rem'}
                fontWeight={600}
              >
                Challenges
              </Text>
              <Box position={"relative"} top={"-3rem"}>
                {page2?.map((item, index) => {
                  return (
                    <Box key={index}>
                      <Image src={item.icon} mt={'2rem'} />
                    </Box>
                  );
                })}
              </Box>

              <Box position={'absolute'} bottom={'2rem'}>
                {login ? (
                  <Image src={homelogin} mt={'2rem'} />
                ) : (
                  <Image
                    src={detailslogin}
                    
                  />
                )}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
