import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <nav className="flex justify-around w-full p-6 text-white border-b border-white bg-zinc-900 font-roboto">
        <Link to={"/"} className="text-xl">
          Midnight Club
        </Link>
        <Link to={"/log-in"}>Login/Sign-up</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
