import { Button, Heading, Image, Text, HStack, Box } from "@chakra-ui/react";
import heroImage from "../icons_assets/restauranfood.jpg";

export default function CallToAction() {
  return (
    <>
      <HStack
        justifyContent={"center"}
        bgColor={"#495E57"}
        paddingLeft={"15%"}
        paddingRight={"15%"}
      >
        <HStack justifyContent={"space-between"} width={"full"} paddingY={6}>
          <Box maxW={"sm"} display={"flex"} flexWrap={"wrap"} height={"xs"}>
            <Box>
              <Heading as={"h1"} size={"xl"}>
                Little Lemon{" "}
              </Heading>
              <Text fontSize={"lg"} marginBottom={6}>
                Chicago
              </Text>

              <Text fontSize={"md"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </Text>
            </Box>

            <Button alignSelf={"flex-end"}> Reserve a Table </Button>
          </Box>

          <Image
            src={heroImage}
            objectFit="cover"
            boxSize={"xs"}
            borderRadius="lg"
          />
        </HStack>
      </HStack>
    </>
  );
}
