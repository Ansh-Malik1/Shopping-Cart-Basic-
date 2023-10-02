import {useState , useEffect} from "react"
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [posts , setPosts] = useState([])
  const [loading  , setLoading] = useState(false)
  async function fetchData(){
    try{
      setLoading(true)
      const res = await fetch(API_URL)
      const data  = await res.json()
      setPosts(data)
      console.log(data)
    }
    catch(err){
      alert("Something went wrong , Please try again")
      setPosts([])
    }
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return(
    <div className=" py-12">
     {
      loading? (<Spinner/> ) : 
      (
        posts.length==0? (<div/>) : (<div className=" w-[80%] mx-auto grid gap-6 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {
          posts.map((post)=>(
           <Product key= {posts.id} post={post}/>
      ))
        }
      </div>)
      )

     } 
    </div>
  )
};

export default Home;
