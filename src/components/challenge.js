import React from 'react';
import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';

const Challenge = ({ data, height, width }) => {
  return (
    <>
      <Grid
        gridTemplateColumns={'1fr 1fr 1fr'}
        gap={'1rem'}
        ml={{ base: '0px', lg: '1rem' }}
        mt={{ base: '0px', lg: '1rem' }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            backgroundImage={` linear-gradient( 179deg, rgba(11, 7, 7, 0.00) 3.78%, #1C1718 101.94%), url(${item.Image}),;`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            h={index === data.length - 1 ? '25rem' : '30rem'}
            w={index === data.length - 1 ? '22rem' : '26rem'}
            borderRadius={'0.5rem'}
            height={height}
            width={width}
            position={'relative'}
          >
            <Box position={'absolute'} bottom={'1rem'} ml={'1rem'}>
              <Flex gap={'1rem'}>
                <Text
                  fontSize={'0.875rem'}
                  fontWeight={'400'}
                  letterSpacing={'0.01563rem'}
                >
                  {item.challenge}
                </Text>
                <Flex gap={'0.5rem'}>
                  <Image src={item.userImage} />
                  <Text
                    fontSize={'0.75rem'}
                    fontWeight={'400'}
                    letterSpacing={'0.025rem'}
                  >
                    {item.userName}
                  </Text>
                </Flex>
              </Flex>
              <Flex gap={'1rem'}>
                <Image src={item.challengeImage} />
                <Box>
                  <Text
                    fontSize={'2rem'}
                    fontWeight={'700'}
                    lineHeight={'2.525rem'}
                  >
                    {item.challengeTitle}
                  </Text>
                  <Text
                    fontSize={'1rem'}
                    fontWeight={'400'}
                    position={'relative'}
                    top={'0.3rem'}
                  >
                    {item.challengeCaption}
                  </Text>
                </Box>
              </Flex>
              <Flex mt={'1rem'}>
                <Button
                  background={'var(--brand-primary, #EA4162)'}
                  borderRadius={'0.5rem'}
                  w={'12rem'}
                  h={'3rem'}
                >
                  {item.earning}
                </Button>
                <Button
                  fontSize={'1rem'}
                  fontWeight={'700'}
                  textAlign={'center'}
                  border={'none'}
                  background={'transparent'}
                  color={'white'}
                  mt={'0.5rem'}
                >
                  {item.ad}
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Challenge;
