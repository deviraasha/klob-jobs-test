import React, { useState, useContext } from "react";
import { Link, useNavigate, redirect, Routes,Route, Redirect } from "react-router-dom";
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

export default function AddNew() {
  const navigate = useNavigate();
  const { addEmployee, employees } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [designation, setDesignation] = useState("");

  const onSubmit = (e) => {
    console.log("Submit>>", e);

    // e.preventDefault();
    const newLoker = {
      corporateLogo: e.corporateLogo,
      corporateName: e.corporateName,
      descriptions: e.description,
      positionName: e.positionName,
      salaryFrom: e.salaryForm,
      salaryTo: e.salaryTo,
      status: e.status,
      jobVacancyCode: (employees.length + 1).toString(),
      corporateId: (employees.length + 1).toString(),
      applied: null,
      postedDate: e.postedDate,
    };
    console.log("payload>>", newLoker);

    addEmployee(newLoker);
    navigate("/");
  };

  return (
    <Box p={10} m={8} border={"1px solid #e2e8f0"} borderRadius={"md"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl py={2}>
          <FormLabel> Logo Perusahaan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Logo"
            {...register("corporateLogo", { required: true })}
          />
          <FormHelperText>Dalam bentuk Link</FormHelperText>
        </FormControl>
        <FormControl py={2}>
          <FormLabel> Nama Perusahaan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Nama Perusahaan"
            {...register("corporateName", { required: true })}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel>Posisi Pekerjaan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Posisi yang dicari"
            {...register("positionName", { required: true })}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel>Status Karyawan</FormLabel>
          <Input
            type="text"
            placeholder="Ketikkan Status Karyawan"
            {...register("status", { required: true })}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel>Kisaran Gaji Karyawan</FormLabel>
          <HStack w={"100%"}>
            <NumberInput>
              <NumberInputField
                {...register("salaryForm", { required: true })}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Text>Sampai dengan</Text>
            <NumberInput>
              <NumberInputField {...register("salaryTo", { required: true })} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </FormControl>
        <FormControl py={2}>
          <FormLabel>Tanggal Posting</FormLabel>
          <Input
            type="date"
            placeholder="Ketikkan Status Karyawan"
            {...register("postedDate", { required: true })}
          />
        </FormControl>
        <FormControl py={2}>
          <FormLabel>Deskripsi</FormLabel>
          <Textarea
            placeholder="Ketikkan deskripsi pekerjaan"
            {...register("description", { required: true })}
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
