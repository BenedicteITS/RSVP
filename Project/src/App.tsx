import CardKomponent from "./components/Card";

function App() {
  return (
    <div className="min-h-screen bg-sage-light-100 px-4">
      <div className="mx-auto max-w-md md:max-w-2xl py-8 sm:py-10 lg:py-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-sage-500">
          RSVP
        </h1>
        {/* PlaceholderText */}
        <p className="my-4 text-xs sm:text-sm lg:text-base text-sage-dark-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, vel
          reprehenderit quas maxime minima accusantium, dignissimos doloremque
          rerum nam aspernatur iste, eius earum quisquam necessitatibus aliquid
          amet quod ab quaerat.
        </p>
        <CardKomponent />
      </div>
    </div>
  );
}

export default App;
