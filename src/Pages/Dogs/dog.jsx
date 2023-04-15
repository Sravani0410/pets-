import React from "react"
import DogsCard from "./dogsCard";


const Dogs=()=>{
    const product = {
        name: "Example Product",
        image: "https://example.com/product-image.jpg",
        price: "$19.99",
        badge: "New",
        addToCart: () => {
          console.log("Added to cart");
        },
      };
    return (
<>
<DogsCard product={product} />
</>
    )

}

export default Dogs