import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail required!').email('E-mail invalid!'),
  password: yup.string().required('Password required!'),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = (values, event) => {
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={"4"}>
          <Input
            name="email"
            type="email"
            label="E-MAIL"
            error={errors.email}
            {...register("email")}
          />
          <Input
            name="password"
            type="password"
            label="PASSWORD"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}
