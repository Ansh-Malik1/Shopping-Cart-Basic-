import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice"
import { BsFillTrashFill } from "react-icons/bs";
import { toast } from "react-hot-toast";
const CartItem = ({item}) => {
  const dispatch = useDispatch() 
  function removePost(){
    dispatch(remove(item.id))
    toast.error("Item removed")
  }
  return (
    <div className="flex gap-8 border-b-4 pb-4 border-gray-600 my-12">
      <div className="w-[80%]">
        <img src={item.image} ></img>
      </div>
      <div className=" flex flex-col justify-evenly gap-3">
        <h1>{item.title}</h1>
        <p>{item.description.substring(0,60)}....</p>
        <div className=" flex justify-between">
          <p>${item.price}</p>
          <button onClick={removePost} className=" bg-red-400 py-2 px-2 rounded-full text-white"><BsFillTrashFill className=" opacity-75"/></button>
        </div>
      </div>
    </div>


  )
};

export default CartItem;
