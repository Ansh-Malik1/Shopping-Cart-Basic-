import { useSelector } from "react-redux";
import {useState , useEffect} from "react"
import {NavLink} from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state)=> state)
  const [totalAmount , setTotalAmount] = useState(0)
  useEffect(()=>{
    setTotalAmount(cart.reduce( (acc , curr)=> acc+curr.price ,0))
  },[cart])
  return(
    <div className=" lg:h-full overflow-y-scroll flex justify-center ">
       {
        cart.length>0 ? (
        <div className="  px-10 justify-center lg:flex-row-reverse flex-col flex gap-x-5 w-[100%] lg:w-[80%] gap-4">
          <div className="  lg:w-[40%] flex flex-col justify-between items-center py-2 my-12">
           <div className="w-[100%] text-center flex flex-col gap-6">
             <h1 className=" text-2xl underline">Your Cart</h1>
             <h1>Summary</h1>
             <p className=" text-2xl">Total item: {cart.length}</p>
           </div>
           <div className=" w-[100%] text-center flex flex-col gap-6"> 
              <p className=" text-2xl">Total Amount ${totalAmount.toFixed(2)}</p>
              <button className=" text-2xl bg-green-700 w-[50%] mx-auto text-white py-2 rounded-2xl">Check Out</button>
           </div> 
          </div>
          <div className=" md:w-[60%] md:mx-auto w-[90%] lg:w-[40%]">
           { cart.map((item , index)=>{
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
            }
          </div>
        </div>

        )  : (
          <div className="  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[100%]  flex justify-center items-center flex-col gap-5" >
            <h1 className=" text-2xl">Your cart is empty</h1>
            <NavLink to="/"><button className=" bg-green-700 text-white py-2 px-6 rounded-xl">Shop Now</button></NavLink>
          </div>
        )
       }
    </div>
  )
};

export default Cart;
