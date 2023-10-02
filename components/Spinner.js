import "./spinner.css"

export default function Spinner(){
    return(
        <div className=" w-[100%] h-full grid place-items-center absolute left-[50%] top-[50%]  -translate-y-[50%] -translate-x-[50%]">
            <div class="custom-loader"></div>
        </div>
    )
}