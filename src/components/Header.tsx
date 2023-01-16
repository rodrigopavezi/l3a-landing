import { Navbar } from "./Navbar";
import { Box, Image } from "grommet";

export const Header = () => {
  return (
    <header>
      <Box
        direction="row"
        align="center"
        justify="start"
        margin={{ left: "xlarge" }}
        pad="small"
        gap="xlarge"
      >
        <Box width="139px">
          <Image src="images/logo.webp"></Image>
        </Box>
        <Navbar />
      </Box>
    </header>
  );
};
