import { BsCartFill  , BsShop} from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state)=> state)
  return(
    <div className=" w-[100%] bg-gray-800 py-3 flex justify-center items-center">
      <div className=" text-white w-[90%] lg:w-[60%] flex justify-between">
       <NavLink to="/">
       <div className="flex items-end gap-2">
          <BsShop className=" text-5xl"/>
          <h1 className=" text-2xl">ECOMZY</h1>
        </div>
       </NavLink>
        <div className=" flex gap-9 items-center relative">
          <NavLink to="/"><h3>Home</h3></NavLink>
          <NavLink to="/cart"><BsCartFill className=" text-2xl"/>
          {
            cart.length==0? (<span></span>) : (<span className=" bg-slate-500 animate-bounce -right-2 py-1 px-1 w-5 flex items-center justify-center h-5 top-1 text-xs absolute rounded-full">{cart.length}</span>)
          }</NavLink>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
