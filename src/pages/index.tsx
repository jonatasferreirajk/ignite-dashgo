import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      >
      <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      >
        <Stack spacing={"4"}>
          <FormControl>
            <FormLabel htmlFor="email" >E-MAIL</FormLabel>

            <Input
              id="email"
              name="email"
              type="email" 
              focusBorderColor="pink.500"
              bgColor={"gray.900"}
              variant={"filled"}
              _hover={{
                bgColor: 'gray.900'
              }}
              size={"lg"}
              />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" >PASSWORD</FormLabel>

            <Input
              id="password"
              name="password"
              type="password" 
              focusBorderColor="pink.500"
              bgColor={"gray.900"}
              variant={"filled"}
              _hover={{
                bgColor: 'gray.900'
              }}
              size={"lg"}
              />
              </FormControl>
        </Stack>
        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          >
           Sign In
          </Button>
      </Flex>
    </Flex>
  );
}
