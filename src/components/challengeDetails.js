import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { burnaboy, sidebarData } from './data';
import burna from '../assets/burna.png';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RiShareForwardFill } from 'react-icons/ri';
import { upNext } from './data';
import nextIcon from '../assets//nextIcon.svg';
import headphone from '../assets/headphone.svg';
import erik from '../assets/erik.png';
import musicCover from '../assets/musicCover.svg';
import { views } from './data';
import mobiledollarbag from '../assets/mobiledollarbag.svg';
import MobileNav from './mobile/mobileNav';

const ChallengeDetails = () => {
  const details = sidebarData.slice(0, 4);
  const detailss = sidebarData.slice(5, 9);
  return (
    <>
      <Box
        id="challengeDetails"
        background={'var(--gray-100, #100E0E)'}
        height={{ base: '100%', lg: '63rem' }}
        fontFamily={"font-family: 'Inter', sans-serif;"}
        overflow={'hidden'}
        color={'white'}
      >
        <Box display={{ base: 'flex', lg: 'none' }}>
          <MobileNav />
        </Box>

        <Box display={{ base: 'none', lg: 'flex' }} w={'100%'}>
          <Navbar />
        </Box>

        <Flex>
          <Box display={{ base: 'none', lg: 'flex' }}>
            <Sidebar page1={details} page2={detailss} login={false} />
          </Box>
          <Flex display={{ base: 'block', lg: 'flex' }}>
            <Box>
              <Box
                backgroundImage={` url(${burna})`}
                backgroundSize={{ base: 'cover', lg: 'cover' }}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                height={{ base: '30rem', lg: '35rem' }}
                width={{ base: '100%', lg: '98%' }}
                borderRadius={'1rem'}
                ml={{ base: '0', lg: '1rem' }}
                mt={{ base: '0', lg: '1rem' }}
              >
                <Flex justifyContent={'space-between'}>
                  <Button
                    mt={'1rem'}
                    ml={'1rem'}
                    h={{ base: '2.25rem', lg: '3.5rem' }}
                    w={{ base: '6rem', lg: '9rem' }}
                    borderRadius={'2.5rem'}
                  >
                    <Flex gap={{ base: '0.5rem', lg: '1rem' }}>
                      <Box fontSize={{ base: '1rem', lg: '1.5rem' }}>
                        <AiOutlineArrowLeft />
                      </Box>
                      <Text
                        fontSize={{ base: '1rem', lg: '1.25rem' }}
                        fontWeight={600}
                        mb={{ base: '2px', lg: '0rem' }}
                      >
                        Back
                      </Text>
                    </Flex>
                  </Button>
                  <Button
                    background={'var(--brand-primary, #EA4162)'}
                    color={'white'}
                    borderRadius={'3rem'}
                    h={{ base: '2.25rem', lg: '4rem' }}
                    w={{ base: '6rem', lg: '14rem' }}
                    mt={'1rem'}
                    mr={{ base: '10%', lg: '1rem' }}
                  >
                    <Flex gap={'0.5rem'}>
                      <Box fontSize={{ base: '1rem', lg: '2rem' }}>
                        <RiShareForwardFill />
                      </Box>

                      <Text
                        fontSize={'1.125rem'}
                        fontWeight={600}
                        mt={'3px'}
                        display={{ base: 'none', lg: 'flex' }}
                      >
                        Share Challenge
                      </Text>
                      <Text
                        fontSize={'0.875rem'}
                        fontWeight={600}
                        display={{ base: 'flex', lg: 'none' }}
                        mt={'3px'}
                      >
                        Share
                      </Text>
                    </Flex>
                  </Button>
                </Flex>
              </Box>
              <Box display={{ base: 'none', lg: 'block' }}>
                <Flex ml={'1rem'} gap={'0.5rem'} mt={'2rem'}>
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
            <Box position={'relative'}>
              <Box
                w={{ base: '100%', lg: '28rem' }}
                height={{ base: '60rem', lg: '52rem' }}
                backgroundColor={'var(--gray-90, #231F1F)'}
                mt={{ base: '0', lg: '0.5rem' }}
                ml={{ base: '0', lg: '1rem' }}
                color={'white'}
                borderBottomRadius={'1rem'}
              >
                <Flex justifyContent={'space-between'}>
                  <Button
                    mt={'1rem'}
                    w={'7rem'}
                    h={'2rem'}
                    borderRadius={'0.5rem'}
                    ml={'1rem'}
                  >
                    <Flex gap={'0.5rem'}>
                      <Image src={headphone} />
                      <Text fontSize={' 0.7rem'} fontWeight={'600'} mt={'5px'}>
                        Song-Use
                      </Text>
                    </Flex>
                  </Button>
                  <Box mt={'1rem'} mr={'1rem'}>
                    <Text
                      fontSize={'1rem'}
                      fontWeight={'600'}
                      letterSpacing={'0.025rem'}
                    >
                      Challenge by:
                    </Text>
                    <Flex mt={'0.5rem'} gap={'5px'}>
                      <Image src={erik} />
                      <Text fontWeight={'400'}>@erik_emmerich</Text>
                    </Flex>
                  </Box>
                </Flex>
                <Flex ml={'1rem'} gap={'1rem'}>
                  <Image src={musicCover} mt={'0.5rem'} />
                  <Box>
                    <Text fontSize={'1.5rem'} fontWeight={'700'} mb={'0.7rem'}>
                      Holiday Merry
                    </Text>
                    <Text fontSize={'0.875rem'} fontWeight={'400'}>
                      How was everyone’s Christmas ?
                    </Text>
                  </Box>
                </Flex>
                <Flex
                  flexDir={'row'}
                  gap={'1rem'}
                  ml={'1rem'}
                  mr={'1rem'}
                  mt={'1rem'}
                >
                  {views.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        w={'90%'}
                        height={'5rem'}
                        borderRadius={'0.5rem'}
                        backgroundColor={'var(--gray-80, #3B3838)'}
                      >
                        <Text
                          textAlign={'center'}
                          w={'4.5rem'}
                          m={'auto'}
                          mt={'1rem'}
                          fontSize={'0.875rem'}
                          fontWeight={'400'}
                          color={'var(--gray-30, #B5B4B4)'}
                        >
                          {item.views}
                        </Text>
                        <Flex
                          color={'white'}
                          w={'2.5rem'}
                          m={'auto'}
                          mt={'5px'}
                          gap={'5px'}
                        >
                          <Image src={mobiledollarbag} alt="icon" />
                          <Text fontSize={'1.125rem'} fontWeight={'600'}>
                            {item.amount}
                          </Text>
                        </Flex>
                      </Box>
                    );
                  })}
                </Flex>

                <Text
                  fontSize={'1.25rem'}
                  fontWeight={'600'}
                  mt={'1rem'}
                  ml={'1rem'}
                >
                  Campaign Brief
                </Text>
                <Text
                  fontSize={{ base: '1rem', lg: '0.9rem' }}
                  fontWeight={'400'}
                  pl={'1rem'}
                  pr={'1rem'}
                >
                  Web six emails ping call teams invested silently adoption
                  synchronise. Conversation field then dunder quick first-order.
                  World sandwich food have sandwich cause this. Nor then journey
                  stronger whatever crank downloaded watches i'm price.
                  Intersection group individual incompetent production. Driving
                  solutionize devil quick-win files.
                  <br /> <br />
                  Staircase door site well request. So do cause design asserts
                  ask stand low-hanging look. And downloaded pin sorry
                  re-inventing recap hits. Staircase guys attached algorithm
                  heads-up while options big sexy. Enable new able stand ipsum
                  search closing status.
                </Text>

                <Text fontSize={'1.25rem'} fontWeight={'600'} ml={'1rem'}>
                  Our Favorites
                </Text>

                <Flex
                  flexDir={'row'}
                  gap={'1rem'}
                  ml={'1rem'}
                  mr={'1rem'}
                  mt={'1rem'}
                >
                  {burnaboy.map((item, index) => {
                    return (
                      <Box
                        key={index}
                        w={'90%'}
                        borderRadius={'0.5rem'}
                        backgroundColor={'var(--gray-80, #3B3838)'}
                      >
                        <Image src={item.image} />
                      </Box>
                    );
                  })}
                </Flex>
                <Flex
                  h={'10rem'}
                  w={'100%'}
                  position={'absolute'}
                  backgroundColor={'var(--others-bg, #1C1718)'}
                  bottom={'0rem'}
                  borderBottomRadius={'1rem'}
                  direction="column"
                  justify="center"
                  align="center"
                >
                  <Button
                    background={'var(--brand-secondary, #3CDDD8)'}
                    color={'black'}
                    mt={'1rem'}
                    height={'3.5rem'}
                    w={{ base: '90%', lg: '90%' }}
                    fontSize={'1rem'}
                    fontWeight={'700'}
                    letterSpacing={'0.05rem'}
                    borderRadius={'0.5rem'}
                  >
                    Log In to do this challenge
                  </Button>
                  <Button
                    color={'white'}
                    mt={'1rem'}
                    height={'3.5rem'}
                    w={{ base: '90%', lg: '90%' }}
                    fontSize={'1rem'}
                    fontWeight={'700'}
                    letterSpacing={'0.05rem'}
                    borderRadius={'0.5rem'}
                    background={'transparent'}
                    border={'1px solid var(--gray-20, #CECDCD)'}
                  >
                    No Thanks
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ChallengeDetails;
