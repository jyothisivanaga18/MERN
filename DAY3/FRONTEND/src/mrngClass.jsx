

import Hello from "./components/Hello";

function App(){
  return(
    <>
    <Hello name="Jyothi"/>
    <Hello name="Siva" />
    

    <h1 className=" text-7xl"> heloooooo</h1>
    <h1 className=" text-7xl text-gray-800 "> heloooooo</h1>
    
    <div className =" flex h-screen items-center justify-center bg-amber-300 ">
      <h1 className="text-7xl"> heloooooo</h1>
    </div>


    <div className =" gap-4 flex bg-white h-screen items-center justify-center p-2">
      <div className ="flex bg-amber-800 flex-col items-center justify-center ">
        <h1 className=" justify-center gap-2.5 items-center text-white text-2xl">LOGIN PAGE</h1>
        <input type="email" placeholder="Email" 
        className="text-4xl text-white p-4 "></input>

        <input type="password" placeholder="Password" className="text-4xl text-white gap-1.5 p-4 "/>
        <button className="bg-amber-500 text-white text-2xl p-4 rounded-md">Login</button>
      </div>
    </div>

    <div className ="w-full flex justify-between bg-blue-400 h-screen px-5 py-5">
      <div className="justify-center">LOGO</div>
      <div className="flex gap-4 items-center">
        <div className="hover:text-amber-500 hover:bg-amber-950 px-5 py-5 rounded-lg" >HOME</div>
        <div>ABOUT </div>
        <div>CONTACT</div>
        <div>SERVICES</div>

        <div>LOGIN</div> 

        </div>

      </div>
    </div>

    import ListItem from "./components/ListItem";

    

  </>

  );
}

export default App;