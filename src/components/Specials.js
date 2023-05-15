import {
    Button,
    Heading,
    Image,
    Text,
    HStack,
    Box,
    VStack,
  } from "@chakra-ui/react";

import Cards from "./FoodCard";



export default function Specials() {
    return (
        <>
        <VStack
        justifyContent={"center"}
        paddingLeft={['5', '10', '16', '28']}
        paddingRight={['5', '10', '16', '28']}
      >
        <HStack justifyContent={"space-between"} alignContent={'center'} width={"full"} paddingY={4}>
            <Text fontWeight={'medium'} fontSize={['xl', '3xl', '4xl', '5xl']} fontFamily={'displayTitle'}> This weeks specials! </Text>
            <Button bgColor={'brand.2'} paddingX={5} size={['xs', 'sm', 'md', 'lg']}> Online Menu </Button>
        </HStack>

        <Box display={'flex'} flexWrap={'wrap'} width={"full"} paddingBottom={4} justifyContent={'space-around'} alignContent={'center'}>
            <Cards />
        </Box>

      </VStack>
      </>
    )
}