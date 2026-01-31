const Header = () => {
  return (
    <header className="text-2xl py-2 rounded-b-2xl italic shadow-sm/12 bg-white/40 text-center uppercase font-semibold text-purple-600 text-shadow-md text-shadow-purple-300">
      Cloudinary{" "}
      <span className="text-white not-italic isolate after:rounded-xs text-shadow-none relative after:-inset-0.5 after:-skew-1 after:bg-pink-500 after:absolute after:-z-1">
        photo
      </span>{" "}
      management
    </header>
  );
};

export default Header;
