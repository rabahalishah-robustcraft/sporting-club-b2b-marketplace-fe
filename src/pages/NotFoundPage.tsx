export default function NotFoundPage() {
  const imageUrl = "/src/assets/FourOFourBG.jpg";

  return (
    <div
      className="relative flex items-center justify-start min-h-screen text-white bg-cover bg-center font-inter"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Semi-transparent overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content container */}
      <div className="relative z-10 p-6 md:p-12 lg:p-24 max-w-2xl mx-auto md:mx-0">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
          404!
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
          Looks like this part of the field hasn't been maintained.
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-8">
          We couldn't find the page you were looking for. It might have been
          moved, but don't worry, we'll get you back to the game.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-white font-medium bg-yellow-600 rounded-full transition duration-300 ease-in-out hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
