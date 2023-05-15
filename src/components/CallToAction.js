import {
  Button,
  Heading,
  Image,
  Text,
  HStack,
  Box,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import heroImage from "../icons_assets/restauranfood.jpg";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <>

      <HStack
        justifyContent={"center"}
        bgColor={"brand.1"}
        paddingLeft={['5', '10', '16', '28']}
        paddingRight={['5', '10', '16', '28']}

      >
        <HStack justifyContent={"space-between"} width={"full"} paddingY={6}>
          <Box maxW={"40%"} display={"flex"} flexWrap={"wrap"} height={['2xs', 'xs', 'sm', 'md']} >
            <Stack>
              <Box>
                <Text
                  as={"h1"}
                  fontSize={['3xl', '5xl', '6xl', '7xl']}
                  fontFamily={"displayTitle"}
                  fontWeight={'medium'}
                  color={"brand.2"}
                  mb={'-7%'}
                >
                  Little Lemon
                </Text>
                <Text
                  fontSize={['xl', '3xl', '4xl', '5xl']}
                  fontFamily={"displayTitle"}
                  color={"brand.3"}
                  marginBottom={'3%'}
                >
                  Chicago
                </Text>
              </Box>

              <Text fontSize={['xs', 'sm', 'md', 'lg']} fontWeight={'medium'} color={"brand.3"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Stack>

            <Button bgColor={'brand.2'} paddingX={5} size={['xs', 'sm', 'md', 'lg']} alignSelf={"flex-end"} onClick={() => navigate('/booking')}> Reserve a Table </Button>
          </Box>

          <Box maxW={"52%"} display={"flex"}>
          <Image
            src={heroImage}
            objectFit="cover"
            borderRadius="lg"
            boxSize={['18rem', '20rem', '25rem', '30rem']}
            alt="hero-img"
          />
          </Box>
        </HStack>
      </HStack>

    </>
  );
}
