import { useState }  from "react";

export default function Calc(){

    const [num1,setNum1] = useState(0);

    const [num2,setNum2] = useState(0);

    return(
        <>
          <div className="flex w-full h-screen justify items-center">
             <div className = "w-1/2 h-full flex justify-center items-center">
             <div ></div>
          </div>
        </>
    )


}