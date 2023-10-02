
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice"

const Product = ({post}) => {
  const dispatch = useDispatch() 
  const {cart} = useSelector((state)=>state)
  function addPost(){
    dispatch(add(post))
    toast.success("Item Added")
  }
  function removePost(){
    dispatch(remove(post.id))
    toast.error("Item removed")
  }
  return(
    <div className=" w-[100%] h-[100% ] mx-auto shadow-2xl rounded-2xl border-2 " >
      <div className="flex  w-[100%] py-4 px-3 h-[100%] flex-col hover:scale-110 transition-all items-center justify-evenly gap-7 bg-white rounded-2xl">
        <h2 className=" text-center">{post.title.substring(0,15)}..</h2>
        <p className=" text-xs text-center">{post.description.substring(0 , 50)}...</p>
        <img src={post.image} className=" h-48 w-18"></img>
        <div className=" flex justify-between w-[100%]">
          <h2 className=" text-green-700 ml-2">${post.price}</h2>
            {
              cart.some((p)=> p.id==post.id)? (<button onClick={removePost} className=" flex flex-wrap w-[70%] border-2 rounded-lg border-black text-sm justify-center bg-slate-900 text-white">Remove from Cart</button>) : (<button onClick={addPost} className=" flex flex-wrap w-[50%] rounded-lg border-2 border-black text-sm justify-center">Add to Cart</button>)
            }
        </div>
      </div>
    </div>
  );
};

export default Product;
