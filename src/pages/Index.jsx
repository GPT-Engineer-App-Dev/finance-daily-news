import { Box, Container, Flex, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);

  useEffect(() => {
    // Mock data for latest news and trending topics
    setLatestNews([
      { title: "Global Market Update", summary: "Stocks are fluctuating as investors react to new economic data." },
      { title: "Tech Innovations 2023", summary: "The latest advancements in technology are set to change the world." },
      { title: "Political Shifts", summary: "New policies are being introduced in various countries." },
    ]);

    setTrendingTopics([
      "Market Trends",
      "Tech Giants",
      "Global Politics",
      "Health Innovations",
      "Climate Change",
    ]);
  }, []);

  return (
    <Container maxW="container.xl" p={4} bg="#f3f2ef">
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">World</Link>
          <Link href="#">Business</Link>
          <Link href="#">Opinion</Link>
          <Link href="#">Technology</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            {latestNews.map((news, index) => (
              <Box key={index} p={4} shadow="md" borderWidth="1px">
                <Heading size="md">{news.title}</Heading>
                <Text mt={2}>{news.summary}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.50" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="lg" mb={4}>Trending Topics</Heading>
          <VStack spacing={2} align="stretch">
            {trendingTopics.map((topic, index) => (
              <Box key={index} p={2} shadow="md" borderWidth="1px">
                <Text>{topic}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;