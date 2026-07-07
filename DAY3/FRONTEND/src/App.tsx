import ListItem from "./components/ListItem";

export default function App(){

  const listData = [1,2,3,4,5,6];

  return (
    <>
        <div className="w-full items-center flex justify h-screen">

          <div>
            {listData.map(item)=>{
              <ListItem number={item} />

            }}
          </div>

        </div>
    </>
  );

}