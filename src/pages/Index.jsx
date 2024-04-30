import { Box, Container, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { FaCity, FaDatabase } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={5} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2}>Welcome to Our Smart City Solutions</Heading>
          <Text fontSize="lg">Pioneering innovative solutions for smart cities, integrating technology to enhance urban life.</Text>
          <Image src="https://images.unsplash.com/photo-1498084393753-b411b2d26b34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHl8ZW58MHx8fHwxNzE0NDgxNzcxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Smart City" borderRadius="md" mt={4} />
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={2} display="flex" alignItems="center">
            <FaDatabase style={{ marginRight: "8px" }} /> Big Data Insights
          </Heading>
          <Text fontSize="lg">Leveraging big data to drive decision making and improve city operations. Our data-driven approach helps in predictive analytics and urban planning.</Text>
          <Image src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiaWclMjBkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTcxNDQ4MTc3MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Big Data Analytics" borderRadius="md" mt={4} />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
