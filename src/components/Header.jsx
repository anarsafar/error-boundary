import {
  Avatar,
  Box,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  Text,
  useBoolean,
  WrapItem,
  MenuList,
} from "@chakra-ui/react";

function Header() {
  const [open, setOpen] = useBoolean(false);

  return (
    <>
      <Flex margin={"2rem"} justifyContent="space-around" height={"3rem"}>
        <Box p={"0"}>
          <Flex justifyContent={"center"} alignItems="center" gap={"2rem"}>
            <Heading m={"0"} fontSize={"2rem"}>
              <Link
                textDecoration={"none"}
                color="black"
                href="https://chakra-ui.com"
              >
                sneakers
              </Link>
            </Heading>
            <Text
              m={"0"}
              //   p="30px 0"
              _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
            >
              Collection
            </Text>
            <Text
              m={"0"}
              //   p="30px 0"
              _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
            >
              Men
            </Text>
            <Text
              m={"0"}
              //   p="30px 0"
              _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
            >
              Women
            </Text>
            <Text
              m={"0"}
              //   p="30px 0"
              _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
            >
              About
            </Text>
            <Text
              m={"0"}
              //   p="30px 0"
              _hover={{ cursor: "pointer", borderBottom: "3px solid orange" }}
            >
              Contact
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex alignItems={"center"} gap="40px">
            <Box>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      border="0"
                      bgColor={"#fff"}
                      _hover={{ cursor: "pointer" }}
                    ></MenuButton>
                    <MenuList>
                      <Box w={"300px"} height="250px" bgColor={"green"}>
                        <Heading borderBottom={"1px solid #000"} p="1rem 2rem ">
                          Cart
                        </Heading>

                        <Text>Cart is empty</Text>
                      </Box>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
            <WrapItem></WrapItem>
          </Flex>
        </Box>
      </Flex>
      <hr />
    </>
  );
}

export default Header;
