import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Image, Badge, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {Flex, Grid, GridItem } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../Admin/Navbar";
import { addToCart } from "../../redux/CartPage/action";
import { useNavigate } from "react-router-dom";

const DogsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.CartReducer);
console.log("gasdga",product)
  const { id,name, image_url, price, badge, addToCart,breed,rating } = product;
  // const handleAddToCart = (data) => {
  //   const existingItem = cart.findIndex((item) => item._id === data._id);
  //   if (existingItem === -1) {
  //     data.quantity = 1;
  //     dispatch(addToCart(data));
  //     // dispatch(removeFromWishlist(data._id));
  //     setTimeout(() => {
  //       navigate("/cart");
  //     }, 1000);
  //   } else {
  //     alert("Product Already Add in Cart");
  //   }
  // };

  return (
    <>
    <div className="pets-box">
    {/* <Grid
  m="20px 10px"
  templateColumns={{
    base: "repeat(1,1fr)",
    sm: "repeat(1,1fr)",
    md: "repeat(2,1fr)",
    lg: "repeat(3,1fr)"
  }}
  height="60vh"
  gap={7}
> */}
   
    <Box
              position="relative"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="3%"
              p="10px"
              _hover={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              }}
              mb="7"
            >
     <Box>
                <Image
                  m="auto"
                  width="80%"
                  src={image_url}
                  alt="image"
                  _hover={{ transform: "scale(1.1)" }}
                />

                <Box p="10px">
                  <Flex justifyContent="space-between" alignItems="center">
                    <Flex
                      w="25%"
                      borderRadius="20px"
                      alignItems="center"
                      gap="5px"
                      p="5px 10px"
                      bgColor="#eeeef5"
                      fontSize="15px"
                    >
                      <Text>
                        {rating
                          ? rating
                          : (Math.random() * (5 - 1) + 1).toFixed(1)}
                      </Text>
                      <AiFillStar size="15px" color="#0fbd95" />
                      {/* <Text>
                        {ele.userRated
                          ? ele.userRated
                          : Math.floor(Math.random() * 999 + 1)}
                      </Text> */}
                    </Flex>
                  </Flex>

                  {/* <Text
                    mt="5px"
                    fontWeight="700"
                    color="#000042"
                    fontSize="15px"
                    textTransform="capitalize"
                  >
                    {ele.productRefLink}{" "}
                  </Text> */}
                  <Text
                    mt="5px"
                    fontWeight="400"
                    color="gray.400"
                    fontSize="14px"
                  >
                    {name}{" "}
                  </Text>
                  {/* <Text
                    mt="5px"
                    fontWeight="400"
                    color="#000042"
                    fontSize="14px"
                  >
                    Shape : {ele.shape}
                  </Text> */}
                  <Text
                    mt="5px"
                    fontWeight="bold"
                    color="#gray.700"
                    fontSize="15px"
                  >
                    ₹{price}{" "}
                    {/* <span
                      style={{
                        fontSize: "15px",
                        fontWeight: "lighter",
                        color: "#727297",
                        textDecoration: "line-through"
                      }}
                    >
                      {"  "}₹{ele.mPrice}
                    </span> */}
                    {/* <span
                      style={{
                        color: "#727297",
                        fontSize: "15px",
                        fontWeight: "lighter"
                      }}
                    >
                      {"  "}(+tax)
                    </span> */}
                  </Text>
                </Box>
                {/* <Button
                          colorScheme="red"
                          onClick={(e) => handleAddToCart(e)}
                        >
                          Add to Cart
                        </Button> */}
                <Button
              size="lg"
              bg="whiteAlpha.900"
              fontSize="14px"
              fontWeight="400"
              onClick={() => navigate("")}
            >
              ADD TO CART
            </Button>
              </Box>
</Box>
   


   
    
    


    {/* {
      product?.map((ele)=>{
        <GridItem>
          <Box
            position="relative"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="3%"
            p="10px"
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
            }}
            mb="7"
          >
            <Box>
              <Image
                m="auto"
                width="80%"
                src={ele.image_url}
                alt="image"
                _hover={{ transform: "scale(1.1)" }}
              />
              <br />
              <br />
              <br />

              <Box p="10px">
                <Flex justifyContent="space-between" alignItems="center">
                  <Flex
                    w="25%"
                    borderRadius="20px"
                    alignItems="center"
                    gap="5px"
                    p="5px 10px"
                    bgColor="#eeeef5"
                    fontSize="15px"
                  >
                    <Text>
                      {ele.rating
                        ? ele.rating
                        : (Math.random() * (5 - 1) + 1).toFixed(1)}
                    </Text>
                    <AiFillStar size="15px" color="#0fbd95" />
                    <Text>
                      {ele.userRated
                        ? ele.userRated
                        : Math.floor(Math.random() * 999 + 1)}
                    </Text>
                  </Flex>
                </Flex>

                <Text
                  mt="5px"
                  fontWeight="700"
                  color="#000042"
                  fontSize="15px"
                  textTransform="capitalize"
                >
                  {ele.productRefLink}{" "}
                </Text>
                <Text
                  mt="5px"
                  fontWeight="400"
                  color="gray.400"
                  fontSize="14px"
                >
                  {ele.name}{" "}
                </Text>
                <Text
                  mt="5px"
                  fontWeight="400"
                  color="#000042"
                  fontSize="14px"
                >
                  Shape : {ele.shape}
                </Text>
                <Text
                  mt="5px"
                  fontWeight="bold"
                  color="#gray.700"
                  fontSize="15px"
                >
                  ₹{ele.price}{" "}
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "lighter",
                      color: "#727297",
                      textDecoration: "line-through"
                    }}
                  >
                    {"  "}₹{ele.mPrice}
                  </span>
                  <span
                    style={{
                      color: "#727297",
                      fontSize: "15px",
                      fontWeight: "lighter"
                    }}
                  >
                    {"  "}(+tax)
                  </span>
                </Text>
              </Box>
            </Box>
          
          </Box>
      </GridItem>
      })
    } */}
    {/* <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="sm"
    >
      <Image src={image_url} alt={name} objectFit="cover" h="200px" />

      <Box p="4">
        {badge && (
          <Badge colorScheme="teal" mb="2">
            {badge}
          </Badge>
        )}
        <Text fontWeight="bold" fontSize="md" mb="2">
          {name}
        </Text>
        <Text color="gray.500" fontSize="sm" mb="4">
          {price}
        </Text>
        <Button
          colorScheme="teal"
          size="sm"
          onClick={addToCart}
          w="100%"
          mb="2"
        >
          Add to Cart
        </Button>
        <Button
          colorScheme="gray"
          variant="ghost"
          size="sm"
          w="100%"
          onClick={() => console.log("View Details")}
        >
          View Details
        </Button>
      </Box>
    </Box> */}
{/* //  </Grid> */}
</div>
    </>
 
  );
};

export default DogsCard;
