import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import hashtag from '../assets/hashtag.svg';
import clock from '../assets/clock.svg';
import hourglass from '../assets/hourglass.svg';
import Challenge from './challenge';
import { Data } from './data';

const HomePage = () => {
  return (
    <>
      <Box color={'white'} overflow={'hidden'}>
        <Challenge data={Data} />

        <Flex ml={'1rem'} mt={'1rem'} gap={'1rem'}>
          <Box
            height={'11rem'}
            width={'53rem'}
            borderRadius={'1rem'}
            backgroundColor={'var(--others-bg, #1C1718)'}
          >
            <Flex gap={'0.5rem'} mt={'1rem'} ml={'1.5rem'}>
              <Image src={hashtag} />
              <Text fontSize={'1rem'} fontWeight={'600'}>
                Trending Hashtags
              </Text>
            </Flex>
            <Grid
              gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}
              rowGap={'2rem'}
              fontSize={'0.875rem'}
              fontWeight={'600'}
              color={'var(--gray-60, #6C6A6A)'}
              ml={'2rem'}
              mt={'2rem'}
              pr={'3rem'}
            >
              <Text>#nigeriantiktok</Text>
              <Text>#GenerasiHappyTikTokChallenge</Text>
              <Text>#freezeframe</Text>
              <Text>#zotatarutorial</Text>
              <Text>#Merrychristmas</Text>
              <Text>#artistsoftiktok</Text>
              <Text>#makemefamous</Text>
              <Text>#bblondon</Text>
            </Grid>
          </Box>
          <Box
            backgroundColor={'var(--others-bg, #1C1718)'}
            height={'16rem'}
            width={'22rem'}
            borderRadius={'1rem'}
            position={'relative'}
            top={'-5rem'}
          >
            <Flex ml={'2rem'} mt={'2rem'} gap={'0.5rem'}>
              <Image src={clock} alt="clock" />
              <Text fontSize={'1rem'} fontWeight={'600'} color={'white'}>
                Active Challenge Countdown
              </Text>
            </Flex>
            <Flex
              flexDir={'column'}
              textAlign={'center'}
              justifyContent={'center'}
              alignItems={'center'}
              mt={'4rem'}
            >
              <Image
                src={hourglass}
                alt="hour glass"
                w={'2.5rem'}
                h={'2.5rem'}
              />
              <Text
                fontSize={'0.875rem'}
                fontWeight={'400'}
                color={' var(--gray-40, #9D9B9B)'}
                letterSpacing={'0.01563rem'}
              >
                You have no active challenge yet!!
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default HomePage;
