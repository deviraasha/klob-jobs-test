import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../context/GlobalState";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  HStack,
  Text,
  Button,
  Spacer,
  Textarea,
} from "@chakra-ui/react";

export default function Edit() {
  const navigate = useNavigate();

  const { editEmployee, employees } = useContext(GlobalContext);
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    employees.forEach((item) => {
      if (item.jobVacancyCode === id) {
        setValue("corporateLogo", item.corporateLogo);
        setValue("corporateName", item.corporateName);
        setValue("descriptions", item.descriptions);
        setValue("positionName", item.positionName);
        setValue(
          "salaryForm",
          item.salaryFrom ? item.salaryFrom.toString() : ""
        );
        setValue("salaryTo", item.salaryTo ? item.salaryTo.toString() : "");
        setValue("status", item.status);
        setValue("postedDate", item.postedDate);
        setValue("jobVacancyCode", item.jobVacancyCode);
        setValue("corporateId", item.corporateId);
      }
    });
  }, [employees, id, setValue]);

  const onSubmit = (e) => {
    const editLoker = {
      corporateLogo: e.corporateLogo,
      corporateName: e.corporateName,
      descriptions: e.descriptions,
      positionName: e.positionName,
      salaryFrom: e.salaryFrom,
      salaryTo: e.salaryTo,
      status: e.status,
      jobVacancyCode: e.jobVacancyCode,
      corporateId: e.corporateId,
      applied: null,
      postedDate: e.postedDate,
    };
    console.log("payload>>", editLoker);

    editEmployee(editLoker);
    navigate("/");
  };

  return (
    <Box p={10} m={8} border={"1px solid #e2e8f0"} borderRadius={"md"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl py={2} isInvalid={errors.corporateLogo} isRequired>
          <FormLabel> Logo Perusahaan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Logo"
            {...register("corporateLogo", { required: true })}
          />
          <FormHelperText>Dalam bentuk Link</FormHelperText>
        </FormControl>
        <FormControl py={2} isInvalid={!!errors.corporateName} isRequired>
          <FormLabel> Nama Perusahaan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Nama Perusahaan"
            {...register("corporateName", { required: true })}
          />
        </FormControl>
        <FormControl py={2} isInvalid={errors.positionName} isRequired>
          <FormLabel>Posisi Pekerjaan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Posisi yang dicari"
            {...register("positionName", { required: true })}
          />
        </FormControl>
        <FormControl py={2} isInvalid={errors.status} isRequired>
          <FormLabel>Status Karyawan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Status Karyawan"
            {...register("status", { required: true })}
          />
        </FormControl>
        <FormLabel>Kisaran Gaji Karyawan</FormLabel>
        <HStack w={"100%"}>
          <FormControl
            py={2}
            _invalid={true}
            isInvalid={errors.salaryForm}
            isRequired
          >
            <NumberInput min={0} keepWithinRange={false}>
              <NumberInputField
                {...register("salaryFrom", { required: true })}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Text>Sampai dengan</Text>
          <FormControl isInvalid={errors.salaryTo} isRequired>
            <NumberInput>
              <NumberInputField {...register("salaryTo", { required: true })} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </HStack>
        <FormControl py={2} isInvalid={errors.postedDate} isRequired>
          <FormLabel>Tanggal Posting</FormLabel>
          <Input
            type="date"
            placeholder="Ketikkan Status Karyawan"
            {...register("postedDate", { required: true })}
          />
        </FormControl>
        <FormControl py={2} isInvalid={errors.descriptions} isRequired>
          <FormLabel>Deskripsi</FormLabel>
          <Textarea
            placeholder="Ketikkan deskripsi pekerjaan"
            {...register("descriptions", { required: true })}
          />
        </FormControl>

        <HStack mt={4}>
          <Spacer />
          <Button
            type="submit"
            color={"#d85448"}
            _hover={{ color: "white", bgColor: "#d85448" }}
          >
            Add Employee
          </Button>
          <Link to="/">
            {" "}
            <Button
              type="submit"
              color={"#d85448"}
              _hover={{ color: "white", bgColor: "#d85448" }}
            >
              Cancel
            </Button>
          </Link>
        </HStack>
      </form>
    </Box>
  );
}
