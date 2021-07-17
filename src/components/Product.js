import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )
    
    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10" >
            <p className="absolute top-2 right-2 text-xs italic" >{category}</p>
            
            <Image src={image} height={200} width={200} objectFit="contain" />
            
            <h4 className="my-3" >{title}</h4>
            
            <div className="flex">
                {
                    Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon className="h-5 text-yellow-500" />
                        ))
                }
            </div>

            <p className="text-xs my-2 line-clamp-2" >{description}</p>

            <div className="mb-5" >
                <Currency quantity={price * 60} currency="INR"/>
            </div>

            <button className="mt-auto button" > Add to Cart</button>

        </div>
    )
}

export default Product
