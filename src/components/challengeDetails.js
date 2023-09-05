import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { sidebarData } from './data';
import burna from '../assets/burna.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RiShareForwardFill } from 'react-icons/ri';
import { upNext } from './data';
import nextIcon from '../assets//nextIcon.svg';
import headphone from '../assets/headphone.svg';

const ChallengeDetails = () => {
  const details = sidebarData.slice(0, 4);
  const detailss = sidebarData.slice(5, 9);
  return (
    <>
      <Box
        id="challengeDetails"
        background={'var(--gray-100, #100E0E)'}
        height={{ base: '100%', lg: '50rem' }}
        fontFamily={"font-family: 'Inter', sans-serif;"}
        overflow={'hidden'}
        color={'white'}
      >
        <Navbar />
        <Flex>
          <Sidebar page1={details} page2={detailss} login={false} />
          <Flex>
            <Box>
              <Box
                backgroundImage={` url(${burna})`}
                backgroundSize="contain"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                height={'30rem'}
                width={'46.5rem'}
                borderRadius={'1rem'}
                ml={'1rem'}
              >
                <Flex justifyContent={'space-between'}>
                  <Button
                    mt={'2rem'}
                    ml={'1rem'}
                    h={'3.5rem'}
                    w={'9rem'}
                    borderRadius={'2.5rem'}
                  >
                    <Flex gap={'1rem'}>
                      <AiOutlineArrowLeft fontSize={'2rem'} />
                      <Text fontSize={'1.25rem'} fontWeight={600}>
                        Back
                      </Text>
                    </Flex>
                  </Button>
                  <Button
                    background={'var(--brand-primary, #EA4162)'}
                    color={'white'}
                    borderRadius={'3rem'}
                    h={'4rem'}
                    w={'14rem'}
                    mt={'2rem'}
                    mr={'1rem'}
                  >
                    <Flex gap={'0.5rem'}>
                      <RiShareForwardFill fontSize={'2rem'} />
                      <Text fontSize={'1.125rem'} fontWeight={600} mt={'3px'}>
                        Share Challenge
                      </Text>
                    </Flex>
                  </Button>
                </Flex>
              </Box>
              <Box>
                <Flex ml={'1rem'} gap={'0.5rem'}>
                  <Image src={nextIcon} alt="Next" fontSize={'1.25rem'} />
                  <Text fontSize={'1rem'} fontWeight={'600'}>
                    Up Next
                  </Text>
                </Flex>

                <Flex flexDir={'row'} gap={'1rem'} ml={'1rem'} mt={'1rem'}>
                  {upNext.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        w={'11rem'}
                        height={'12rem'}
                        borderRadius={'0.5rem'}
                        backgroundImage={` url(${item.image})`}
                      >
                        <Text
                          textAlign={'center'}
                          w={'7rem'}
                          m={'auto'}
                          mt={'4rem'}
                          fontSize={'1.125rem'}
                          fontWeight={'700'}
                          textShadow={'0px 2px 8px rgba(0, 0, 0, 0.32)'}
                        >
                          {item.text}
                        </Text>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </Box>

            {/************************************************************ right side *****************************************************************************/}
            <Box>
              <Box
                w={'28rem'}
                height={'50rem'}
                backgroundColor={'var(--gray-90, #231F1F)'}
                mt={'0.5rem'}
                ml={'1rem'}
              >
                <Flex></Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ChallengeDetails;
