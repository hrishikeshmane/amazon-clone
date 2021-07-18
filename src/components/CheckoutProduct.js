import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ id, title, price, description, category, image }) {
    const dispatch = useDispatch();
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFir="contain" />
            
            <div className="col-span-3 mx-5" >
                <p>{title}</p>
                <div className="flex">
                    <p className="text-xs my-2 line-clamp-3">{description}</p>
                </div>
                    <Currency quantity={price * 60} currency="INR"/>
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                {/* <button   button className="button">Remove from cart</button> */}
                <button className="button" onClick={removeItemFromBasket} >Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
