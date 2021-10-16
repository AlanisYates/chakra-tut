import { Box, Image, Button } from "@chakra-ui/react";
import brandLogo from "../assets/brand-logo.svg";

function Banner() {
  return (
    <>
      <header>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          ml={6}
          mr={6}
        >
          <Box>
            <Image boxSize="90px" src={brandLogo} alt="brand" />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              Log In
            </Button>
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
              Sign Out
            </Button>
          </Box>
        </Box>
      </header>
    </>
  );
}

export default Banner;
