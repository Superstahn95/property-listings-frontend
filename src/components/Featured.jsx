import featuredImg from "../assets/images/featured.jpg";

function Featured({ action }) {
  return (
    <section class="my-7">
      <div class="relative h-96">
        <img
          src={featuredImg}
          alt=""
          class="max-h-full min-w-full object-cover"
        />

        <div class="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center z-40">
          <h2 class="text-white text-3xl uppercase font-bold p-3">
            featured property
          </h2>
          <p class="p-3 text-white font-bold text-2xl">Ikeja, Lagos</p>
          <a href="#" class="uppercase bg-white text-dark p-3 rounded-md">
            {action} listing
          </a>
        </div>
        <div class="absolute bg-black/50 text-white top-0 left-0 bottom-0 right-0"></div>
      </div>
    </section>
  );
}

export default Featured;
