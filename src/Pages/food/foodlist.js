import React, { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "./foodCard";
// import Navbar from "./Navbar";
import Navbar from "../../Components/Navbar/Navbar";
const FoodList = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // axios.get("https://19f1-49-204-162-180.ngrok-free.app/app/get_dog_data")
    //   .then(response =>{
    //     console.log("hghds",response)
    //         setDogs(response.data)

    //     })

    //   .catch(error => console.error(error));

    const dataFun = async () => {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      };

      let reqOptions = {
        url: "https://6de4-49-204-162-180.ngrok-free.app/app/get_food",
        method: "GET",
        headers: headersList,
      };

      let response = await axios.request(reqOptions);
      setDogs(response.data);
      console.log("hastsdhgsa", response);
    };
    dataFun();
  }, []);

  console.log("ahdgh", dogs);

  return (
    <div>
      <Navbar />
      {dogs?.length !== 1386 &&
        dogs?.map((dog) => <FoodCard key={dog.id} product={dog} />)}
    </div>
  );
};

export default FoodList;
