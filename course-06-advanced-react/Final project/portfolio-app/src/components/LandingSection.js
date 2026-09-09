import React from "react";
import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio = "A frontend developer specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkSection={true}
    backgroundColor="#2A4365"
  >
    <VStack spacing={10} textAlign="center">
      <VStack spacing={4} alignItems="center">
        <Avatar
          src="https://i.pravatar.cc/150?img=7"
          size="2xl"
          name="Pete"
        />
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <Text fontSize="3xl" fontWeight="bold" maxWidth="700px">
        {bio}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;