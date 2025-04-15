import Carousel from "../ui/CarouselAnimado";

function GaleriaPage() {
  return (
    <>
      <main className="md:min-h-screen bg-slate-200 relative z-[10]">
        <section className="py-16 px-24 flex flex-col gap-5 lg:flex-row lg:justify-between">
          <div className="lg:w-[40%] h-full sticky top-5">
            <img
              src="./salamone/monumento.jpg"
              alt="Palacio Municipal"
              className="w-full h-full rounded-xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-start mx-auto">
            <h1 className="text-5xl font-bold text-[#98217E]">
              Palacio Municipal
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Descripción del contenido...
            </p>
          </div>
        </section>
      </main>

      <footer className="sticky bottom-0 bg-white shadow-lg">
        <Carousel />
      </footer>
    </>
  );
}

export default GaleriaPage;
