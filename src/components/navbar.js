import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/Logo.png"
import lightning from "../assets/lightning.svg" 
import { BiLogIn } from 'react-icons/bi';
import dollar from "../assets/dollar.svg"
import help from "../assets/help.svg"

const Navbar = () => {
  return (
    <>
      <Box
      
       
      >
        <Flex position={'relative'} top={'1rem'} gap={'35%'}>
          <Box>
            <Image src={logo} alt="logo" ml={'1.5rem'} />
          </Box>
          <Flex>
            <HStack>
              <Button
                background={'var(--brand-primary, #EA4162)'}
                color={'white'}
                borderRadius={'3rem'}
                h={'3rem'}
                w={'12.5rem'}
              >
                <Flex>
                  <Image src={lightning} alt="icon" mr={'0.2rem'} />
                  <Text
                    fontSize={'1rem'}
                    fontWeight={700}
                    letterSpacing={'0.05rem'}
                  >
                    Create Challenge
                  </Text>
                </Flex>
              </Button>
              <Image src={help} alt="help icon" ml={'1.5rem'} />
            </HStack>
            <HStack>
              <Button
                w={'7rem'}
                h={'2.5rem'}
                borderRadius={'2.5rem'}
                background={'var(--gray-90, #231F1F)'}
                fontSize={'1rem'}
                fontWeight={600}
                color={'var(--others-body, #D0CCD0)'}
                ml={'5rem'}
              >
                <Flex>
                  <Image src={dollar} alt="icon" />
                  <Text>$ 00.00</Text>
                </Flex>
              </Button>
              <Button
                w={'9rem'}
                h={'3rem'}
                borderRadius={'2rem'}
                background={'var(--brand-secondary, #3CDDD8)'}
                fontSize={'1.125rem'}
                fontWeight={700}
                color={'hsla(0, 6%, 13%, 1)'}
                ml={'1rem'}
              >
                <Flex>
                  <BiLogIn fontSize={'2rem'} />{' '}
                  <Text ml={'1rem'} mt={'4px'}>
                    Log In
                  </Text>
                </Flex>
              </Button>
            </HStack>
          </Flex>
        </Flex>
        <Box mt={'2rem'} borderBottom={'1px solid hsla(0, 1%, 52%, 1)'}>
          {/* <hr /> */}
        </Box>
      </Box>
    </>
  );
}

export default Navbar
