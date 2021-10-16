import { Box, Image } from "@chakra-ui/react";

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
            <Image></Image>
          </Box>
          <Box></Box>
        </Box>
      </header>
    </>
  );
}

export default Banner;
