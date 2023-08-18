import { GlobalContext } from "../context/GlobalState";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Badge,
  CardBody,
  Card,
  Heading,
  Text,
  Stack,
  Image,
  CardHeader,
  Button,
  Center,
  CardFooter,
  HStack,
} from "@chakra-ui/react";
import Calculate from "./calculate";
import { BreadcrumbPage } from "./Breadcrumb";

function Detail() {
  const { employees } = useContext(GlobalContext);
  const [dataDetail, setDataDetail] = useState();
  let { id } = useParams();
  const date = new Date();

  const breadcrumbData = [
    {
      path: "/",
      title: "Homepage",
    },
    {
      path: "",
      title: "Detail Lowongan Kerja",
    },
  ];

  useEffect(() => {
    employees.forEach((item) => {
      console.log("1 >>", item.jobVacancyCode);

      if (item.jobVacancyCode === id) {
        console.log("2 >>", item);

        setDataDetail(item);
      }
    });
  }, [dataDetail, employees, id]);
  console.log("detail >>", dataDetail);
  return (
    <>
      <BreadcrumbPage data={breadcrumbData} />
      <Card p={6} m={6} border={"1px solid #c9cacd"}>
        <CardHeader>
          <Heading size="md">Detail Lowongan Kerja</Heading>
        </CardHeader>
        {dataDetail !== undefined && (
          <CardBody>
            <Center color="white">
              <Stack textAlign={"center"}>
                <Image
                  src={dataDetail.corporateLogo}
                  alt="logo corporate"
                  borderRadius="lg"
                  maxW={"400px"}
                  maxH={"300px"}
                />
                <Text color={"black"} fontWeight={"bold"} fontSize={"18px"}>
                  PT. {dataDetail.corporateName}
                </Text>
              </Stack>
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="xl">{dataDetail.positionName}</Heading>
              <Text fontSize="18px" fontWeight={"bold"}>
                Kewajiban :
              </Text>
              <Text px={4}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: dataDetail.descriptions,
                  }}
                ></div>
              </Text>
              <HStack>
                <Text w={"60px"}>Status </Text>
                <Text>
                  {" "}
                  : <Badge>{dataDetail.status} </Badge>{" "}
                </Text>
              </HStack>
              <HStack>
                <Text w={"60px"}>Gaji </Text>
                <Text>
                  {" "}
                  :{" "}
                  <Badge>
                    {dataDetail.salaryFrom
                      ? dataDetail.salaryFrom + "-" + dataDetail.salaryTo
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
                {Calculate(date, dataDetail.postedDate)}
              </Text>
            </Stack>
          </CardBody>
        )}
        <CardFooter>
          <Button
            color={"#d85448"}
            w={"100%"}
            _hover={{ color: "white", bgColor: "#d85448" }}
          >
            Kirim Lamaran
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default Detail;
