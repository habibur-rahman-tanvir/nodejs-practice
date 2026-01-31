const Header = () => {
  return (
    <header className="py-2 text-2xl italic text-center text-purple-600 uppercase rounded-b-2xl shadow-sm/12 bg-white/40 font-extralight text-shadow-md text-shadow-purple-300">
      Cloudinary{" "}
      <span className="relative font-serif not-italic font-bold text-white isolate after:rounded-xs text-shadow-none after:-inset-1 after:-skew-x-10 after:bg-pink-500 after:absolute after:-z-1">
        photo
      </span>{" "}
      management
    </header>
  );
};

export default Header;
