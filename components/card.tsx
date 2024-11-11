import { Box } from '@chakra-ui/react'; // Chakra UI
import { Avatar, Text, Flex } from '@chakra-ui/react'; // Chakra UI for Avatar and Text
import * as CardPrimitive from '@radix-ui/react-primitives'; // Radix UI primitiv
const CustomCard = () => {
  return (
    <Box maxWidth="240px">
      {/* Radix UI Primitive Card */}
      <CardPrimitive.Root as="div" className="card-root">
        <Flex gap="3" align="center">
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="T"
          />
          <Box>
            <Text as="div" fontSize="lg" fontWeight="bold">
              Teodros Girmay
            </Text>
            <Text as="div" fontSize="sm" color="gray.500">
              Engineering
            </Text>
          </Box>
        </Flex>
      </CardPrimitive.Root>
    </Box>
  );
};

export default CustomCard;
