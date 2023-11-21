import Sidebar from "../components1/Sidebar"
import Navbar from "../components1/Navbar"


const List = () => {
  return (
    <div className="flex w-full">
      <Sidebar/>
      <div className="flex-[6]">
        <Navbar/>
      </div>
    </div>
  )
}

export default List