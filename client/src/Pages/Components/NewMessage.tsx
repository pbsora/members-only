/* type Props = {}; */
const NewMessage = (/* props: Props */) => {
  return (
    <div className="">
      <form
        action="#"
        className="flex flex-col items-center justify-center gap-9  h-[60vh] font-roboto text-white"
      >
        <div>
          <label htmlFor="title" className="block mb-3 text-3xl">
            Title
          </label>
          <input
            type="text"
            className="px-10 py-3 text-2xl border border-white rounded-lg outline-none md:px-24 bg-zinc-700 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-3 text-3xl">
            Description
          </label>
          <textarea
            name="description"
            cols={30}
            rows={10}
            className="w-[90vw] xl:w-[26vw]  py-3 px-3 text-2xl border border-white rounded-lg outline-none  bg-zinc-700 focus:border-blue-500"
          ></textarea>
        </div>
      </form>
    </div>
  );
};
export default NewMessage;
