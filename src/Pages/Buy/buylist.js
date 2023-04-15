// import React from "react";
// import axios from "axios";
// import Navbar from "../../Components/Navbar/Navbar";
// // import Razorpay from "razorpay";
// import useRazorpay from "react-razorpay";
// import {
//   DrawerCloseButton,
//   Button,
//   Box,
//   useDisclosure,
//   HStack,
//   Image,
//   Input,
//   Drawer,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerFooter,
//   DrawerBody,
//   Heading,
//   Avatar,
//   Text,
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   Flex,
// } from "@chakra-ui/react";
// const Razorpay = useRazorpay();
// const PaymentForm = () => {
//   const handlePayment = async () => {
//     try {
//       // Make an API call to create a Razorpay order
//       const response = await axios.post("/api/razorpay/createOrder", {
//         amount: 500, // amount in your desired currency (e.g. INR)
//         currency: "INR", // currency code
//       });

//       const { order } = response.data;

//       // Initialize Razorpay with the order details
//       const rzp = new window.Razorpay({
//         key: "rzp_test_4wnhcEMXW5jwdi",
//         amount: order.amount,
//         currency: order.currency,
//         order_id: order.id,
//         name: "Your Company Name",
//         description: "Purchase Description",
//         handler: function (response) {
//           // Callback function to handle successful payment
//           console.log(response);
//         },
//         prefill: {
//           name: "John Doe",
//           email: "john@example.com",
//           contact: "+919876543210",
//         },
//         notes: {
//           address: "Razorpay Corporate Office",
//         },
//         theme: {
//           color: "#F37254",
//         },
//       });

//       // Open Razorpay payment form
//       rzp.open();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />

//       <Button
//         backgroundColor={"#12daac"}
//         color="#FFFFFF"
//         _hover={{
//           backgroundColor: "#12daac",
//           color: "#FFFFFF",
//         }}
//         borderRadius={"10px"}
//         padding="15px"
//         fontSize={"16px"}
//         w="64"
//         fontWeight={"700"}
//         onClick={handlePayment}
//       >
//         Pay Now
//       </Button>
//     </div>
//   );
// };

// export default PaymentForm;

// // ====================================================
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import FoodCard from "./foodCard";
// // // import Navbar from "./Navbar";
// // import Navbar from "../../Components/Navbar/Navbar";
// // const BuyList = () => {
// //   const [dogs, setDogs] = useState([]);

// //   useEffect(() => {
// //     // axios.get("https://19f1-49-204-162-180.ngrok-free.app/app/get_dog_data")
// //     //   .then(response =>{
// //     //     console.log("hghds",response)
// //     //         setDogs(response.data)

// //     //     })

// //     //   .catch(error => console.error(error));

// //     const dataFun = async () => {
// //       let headersList = {
// //         Accept: "*/*",
// //         "User-Agent": "Thunder Client (https://www.thunderclient.com)",
// //       };

// //       let reqOptions = {
// //         url: "https://7208-49-204-162-180.ngrok-free.app/app/get_food",
// //         method: "GET",
// //         headers: headersList,
// //       };

// //       let response = await axios.request(reqOptions);
// //       setDogs(response.data);
// //       console.log("hastsdhgsa", response);
// //     };
// //     dataFun();
// //   }, []);

// //   console.log("ahdgh", dogs);

// //   return (
// //     <div>
// //       <Navbar />

// //       <Button
// //           backgroundColor={"#12daac"}
// //           color="#FFFFFF"
// //           _hover={{
// //             backgroundColor: "#12daac",
// //             color: "#FFFFFF"
// //           }}
// //           borderRadius={"10px"}
// //           padding="15px"
// //           fontSize={"16px"}
// //           w="64"
// //           fontWeight={"700"}
// //           onClick={handlePayment}
// //         >
// //           Pay Now
// //         </Button>
// //       {/* {dogs?.length !== 1386 &&
// //         dogs?.map((dog) => <FoodCard key={dog.id} product={dog} />)} */}
// //     </div>
// //   );
// // };

// // export default BuyList;
