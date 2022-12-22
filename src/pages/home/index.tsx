import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Spacer,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

// ICONS
import { AiOutlineHome } from "react-icons/ai";
import { BsChevronDoubleDown } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { BiTaxi } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";

const HomePage = () => {
  return (
    <Container maxWidth={960}>
      <Heading as="h1" size="3xl" className="p-12">
        Budgetor
      </Heading>
      <Box maxW="80%" margin="0 auto">
        <Box>
          <Box
            padding={5}
            backgroundColor="#F0FAF7"
            color="11444A"
            className="shadow"
          >
            <Flex>
              <Box>
                <Text fontSize="lg"> R10,000</Text>
                <Text fontSize="xs">Income</Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize="lg"> R9,415</Text>
                <Text fontSize="xs">Expenses</Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize="lg"> R585</Text>
                <Text fontSize="xs">Under Budget</Text>
              </Box>
            </Flex>
          </Box>

          <Box textAlign="center" className="mb-6 shadow-md pt-6 pb-4">
            <Text fontSize="xl" className="font-bold leading-loose">
              Montly Expenses
            </Text>
            <Text>How much you intend to spend on each item</Text>
          </Box>
          <Stack spacing={5} divider={<StackDivider borderColor="gray.200" />}>
            <Box>
              <Grid templateColumns="repeat(6, 1fr)">
                <GridItem
                  w="100%"
                  className="items-center flex justify-center "
                >
                  <Icon as={AiOutlineHome} boxSize={6} color="#5BB5A5" />
                </GridItem>
                <GridItem w="100%" className="items-center flex justify-start">
                  Home
                </GridItem>
                <GridItem
                  w="100%"
                  colStart={5}
                  className="items-center flex justify-start"
                >
                  R8,000
                </GridItem>
                <GridItem w="100%" className="items-center flex justify-center">
                  <Icon as={BsChevronDoubleDown} boxSize={4} />
                </GridItem>
              </Grid>

              <Box hidden={false}>Transactions</Box>
            </Box>
            <Box>
              <Grid templateColumns="repeat(6, 1fr)">
                <GridItem
                  w="100%"
                  className="items-center flex justify-center "
                >
                  <Icon as={IoFastFoodOutline} boxSize={6} color="#5BB5A5" />
                </GridItem>
                <GridItem w="100%" className="items-center flex justify-start">
                  Food
                </GridItem>
                <GridItem
                  w="100%"
                  colStart={5}
                  className="items-center flex justify-start"
                >
                  R500
                </GridItem>
                <GridItem w="100%" className="items-center flex justify-center">
                  <Icon as={BsChevronDoubleDown} boxSize={4} />
                </GridItem>
              </Grid>

              <Box hidden={false}>Transactions</Box>
            </Box>

            <Grid templateColumns="repeat(6, 1fr)">
              <GridItem w="100%" className="items-center flex justify-center ">
                <Icon as={BiTaxi} boxSize={6} color="#5BB5A5" />
              </GridItem>
              <GridItem w="100%" className="items-center flex justify-start">
                Transportation
              </GridItem>
              <GridItem
                w="100%"
                colStart={5}
                className="items-center flex justify-start"
              >
                R250
              </GridItem>
              <GridItem w="100%" className="items-center flex justify-center">
                <Icon as={BsChevronDoubleDown} boxSize={4} />
              </GridItem>
            </Grid>
            <Box>
              <Grid templateColumns="repeat(6, 1fr)">
                <GridItem
                  w="100%"
                  className="items-center flex justify-center "
                >
                  <Icon as={FaRegLightbulb} boxSize={6} color="#5BB5A5" />
                </GridItem>
                <GridItem w="100%" className="items-center flex justify-start">
                  Utilies
                </GridItem>
                <GridItem
                  w="100%"
                  colStart={5}
                  className="items-center flex justify-start"
                >
                  R120
                </GridItem>
                <GridItem w="100%" className="items-center flex justify-center">
                  <Icon as={BsChevronDoubleDown} boxSize={4} />
                </GridItem>
              </Grid>
              <Box hidden={false}>Transactions</Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
