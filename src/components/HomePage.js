import CallToAction from "./CallToAction";
import Specials from "./Specials";
import Nav from "./Nav";
import { Box } from "@chakra-ui/react";


export default function HomePage() {
    return (
        <>
            <Box minHeight={'100vh'}>
                <CallToAction />
                <Specials />
            </Box>
        </>
    )
}