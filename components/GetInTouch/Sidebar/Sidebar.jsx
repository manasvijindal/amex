import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Link,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  IconButton,
  Textarea,
  HStack,
  VStack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { CiLink } from "react-icons/ci";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { FaSearch, FaUser, FaImage, FaFileAlt, FaThumbsUp } from "react-icons/fa"; // Import the necessary icons
import { BiLogOut } from "react-icons/bi";
import { MdFeed } from "react-icons/md";
import { BellIcon, AddIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sidebarItems = [
    {
      icon: <MdFeed size={25} />,
      text: "Feed",
      link: "/get-in-touch",
    },
    {
      icon: <FaSearch size={20} />,
      text: "Search Consultants",
      link: "/get-in-touch/search",
    },
    {
      icon: <BellIcon boxSize={6} />,
      text: "Notifications",
      link: "/get-in-touch/notifications",
    },
    {
      icon: <AddIcon boxSize={6} />,
      text: "Share Your Thoughts",
      link: "#",
      onClick: onOpen // Open modal on click
    },
    {
      icon: <FaUser size={20} />, // Use FaUser icon for the Profile section
      text: "Profile",
      link: "/:username",
    },
    {
      icon: <FaUser size={20} />, // Use FaUser icon for the Profile section
      text: "Stock Geeks Corner",
      link: "/Stocks",
    },
    
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"3px solid"}
      borderColor={"white"}
      py={10}
      position={"sticky"}
      top={18}
      left={0}
      px={{ base: 2, md: 4 }}
      bg={'#007bff'}
      pt={20} // Add padding top to move the items down
    >
      <Flex direction={"column"} gap={10} w='full' height={"full"}>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement='right'
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.700" }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: "full" }}
                onClick={item.onClick || null}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>

      {/* Share Your Thoughts Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share Your Thoughts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center" mb={4}>
              <Avatar name="John Doe" src="/consultant1.png" mr={4} />
              <Text fontWeight="bold">John Doe</Text>
            </Flex>
            <Textarea placeholder="Write your thoughts..." mb={4} />
            <HStack spacing={4}>
              <IconButton icon={<FaImage />} aria-label="Add Image" />
              <IconButton icon={<FaFileAlt />} aria-label="Add Document" />
              <IconButton icon={<CiLink />} aria-label="Add Like" />
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Post
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Sidebar;
