import {
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const foods = [
  {
    image: `${require("../icons_assets/greek salad.jpg")}`,
    title: "Greek Salad",
    price: "12.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: `${require('../icons_assets/bruchetta.svg')}`,
    title: "Bruchetta",
    price: "5.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: `${require("../icons_assets/lemon dessert.jpg")}`,
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }
];

export default function Cards() {
  return (
    <>
      {foods.map((item) => (
        <Card key={item.title} maxW={"2xs"} margin={'5%'}>

          <CardBody bgColor={'brand.3'}>
            <Image boxSize={['8rem', '10rem', '12rem', '15rem']} objectFit={'cover'} src={item.image} margin={'auto'} rounded={'lg'} alt={item.title}/>
            <Stack mt="6" >
            <HStack justifyContent={'space-between'}>
            <Text fontWeight={'semibold'} fontSize={['sm', 'md', 'lg', 'xl']}> {item.title}</Text>
            <Text>${item.price}</Text>
            </HStack>
              <Text noOfLines={2} fontSize={['xs', 'sm', 'md', 'lg']}>
                {item.description}
              </Text>
              <Button size={['xs', 'sm', 'md', 'lg']}> Order a delivery </Button>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
