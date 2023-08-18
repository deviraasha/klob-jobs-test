import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  Badge,
  CardBody,
  Card,
  Heading,
  Text,
  Stack,
  Image,
  CardFooter,
  Button,
  SimpleGrid,
  Box,
  HStack,
  IconButton,
  Center,
  CardHeader,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Calculate from "./calculate";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export const List = () => {
  const { employees, removeEmployee } = useContext(GlobalContext);
  const date = new Date();
  console.log("employee", employees);

  return (
    <SimpleGrid minChildWidth="40rem" spacing="40px">
      {employees.length === 0 ? (
        <Center color="white">
          <Heading size="md" color={"gray.600"}>
            ~ Tidak ada pekerjaan ~
          </Heading>
        </Center>
      ) : (
        employees.map((item) => (
          <Box
            key={item.jobVacancyCode}
            p={2}
            maxW={{ md: "100%", xl: "100%", base: "50%", sm: "70%" }}
          >
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              p={6}
            >
              <Image
                objectFit="fill"
                maxW={{ base: "200px", sm: "200px" }}
                maxH={{ base: "200px", sm: "200px" }}
                src={item.corporateLogo}
                alt="Logo Corporate"
              />

              <Stack>
                <CardBody py={0}>
                  <Heading size="lg">{item.positionName}</Heading>
                  <Text fontSize={"18px"} fontWeight={"bold"}>
                    {item.corporateName}
                  </Text>
                  <HStack>
                    <Text w={"60px"}>Status </Text>
                    <Text> : {item.status}</Text>
                  </HStack>
                  <HStack>
                    <Text w={"60px"}>Gaji </Text>
                    <Text>
                      {" "}
                      :{" "}
                      <Badge>
                        {item.salaryFrom
                          ? item.salaryFrom + "-" + item.salaryTo
                          : "-"}
                      </Badge>
                    </Text>
                  </HStack>
                  <Text
                    fontSize={"16fx"}
                    fontWeight={"light"}
                    color={"gray.600"}
                    as="i"
                  >
                    {Calculate(date, item.postedDate)}
                  </Text>
                </CardBody>

                <CardFooter>
                  <HStack gap={4}>
                    <Link role="link" to={"/detail/" + item.jobVacancyCode}>
                      <Button
                        color={"#d85448"}
                        _hover={{ color: "white", bgColor: "#d85448" }}
                      >
                        Lihat Detail
                      </Button>
                    </Link>
                    <Link role="link" to={"/edit/" + item.jobVacancyCode}>
                      <IconButton
                        color={"#d85448"}
                        _hover={{ color: "white", bgColor: "#d85448" }}
                        aria-label="Search database"
                        icon={<EditIcon />}
                      />
                    </Link>

                    <IconButton
                      onClick={() => removeEmployee(item.jobVacancyCode)}
                      color={"#d85448"}
                      _hover={{ color: "white", bgColor: "#d85448" }}
                      aria-label="Search database"
                      icon={<DeleteIcon />}
                    />
                  </HStack>
                </CardFooter>
              </Stack>
            </Card>
          </Box>
        ))
      )}
    </SimpleGrid>
  );
};
