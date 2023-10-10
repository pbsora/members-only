import {DateTime} from "ts-luxon";

const Home = () => {

  const date = DateTime.local().toISODate()
  

  return (
    <div className="mt-10 font-roboto">
      <div id="card" className="text-white w-[90vw] lg:w-[50vw] rounded-xl  m-auto bg-zinc-900 grid grid-cols-4 p-4 h-auto">
      <h1 className="col-span-2 text-2xl">Title</h1>
      <p className="col-span-2">Author</p>
      <p className="col-span-4 my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, laborum. Pariatur commodi labore distinctio, nemo at nisi facere libero totam! Quia laudantium rerum necessitatibus quod earum totam distinctio eius vero?</p>
      <p className="col-span-2">{date}</p>
      </div>
    </div>
  )
}
export default Home