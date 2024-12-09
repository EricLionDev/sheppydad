function Nav() {
  return (
    <>
      <ol className="flex text-white list-none border-b-4 border-neutral-800 m-0 p-0 text-center">
        <li
          className="list-none flex-1 py-2 hover:bg-neutral-800 font-lato lg:text-lg"
          key="home"
        >
          home
        </li>
        <li
          className="lg:text-lg font-lato border-l-2 border-neutral-800 list-none flex-1 py-2 hover:bg-neutral-800"
          key="contact"
        >
          gallery
        </li>
      </ol>
    </>
  );
}
export default Nav;
