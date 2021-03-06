import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart:{
    toolbar:{
      show: false,
    },
    zoom:{
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-11-18T00:00:00.00Z',
      '2021-11-19T00:00:00.00Z',
      '2021-11-20T00:00:00.00Z',
      '2021-11-21T00:00:00.00Z',
      '2021-11-22T00:00:00.00Z',
      '2021-11-23T00:00:00.00Z',
      '2021-11-24T00:00:00.00Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  },
};

const series = [
  { name: 'series1', data: [12, 5, 36, 17, 63, 90, 101]}
]

export default function Dashboard(){
  return (
    <Flex direction="column" h="100vh" >
      <Header /> 

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start" >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
            >
              <Text fontSize="lg" mb="4" >Subscribers of the week</Text>
              <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
            >
              <Text fontSize="lg" mb="4" >Opening fee</Text>
              <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}