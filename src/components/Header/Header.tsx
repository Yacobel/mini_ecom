interface Iprops {
  title: string;
  btnContent: string;
}

function Header({ title, btnContent }: Iprops) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-lg capitalize font-bold">{title}</h1>
        <button className="px-3 py-2 bg-blue-800 rounded-lg text-white text-m cursor-pointer">
          {btnContent}
        </button>
      </div>
    </>
  );
}

export default Header;
