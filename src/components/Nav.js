import { Box, HStack, Image, Link } from "@chakra-ui/react";
import logo from '../icons_assets/Logo.svg'
import { Link as ReactLink } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <HStack justifyContent={'space-between'} padding={3} paddingLeft={'15%'} paddingRight={'15%'}>
                <Box>
                    <Image src={logo} />
                </Box>

                <Box>
                    <HStack spacing={4} justifySelf={'end'}>
                        <Link as={ReactLink} to={'/home'}> Home </Link>
                        <Link as={ReactLink} to={'/about'}> About </Link>
                        <Link as={ReactLink} to={'/home'}> Menu </Link>
                        <Link as={ReactLink} to={'/home'}> Reservations </Link>
                        <Link as={ReactLink} to={'/home'}> Order Online </Link>
                        <Link as={ReactLink} to={'/home'}> Login </Link>
                    </HStack>
                </Box>

            </HStack>
        
        </>
    )
}