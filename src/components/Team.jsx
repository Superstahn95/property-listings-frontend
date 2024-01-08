import gm from "../assets/images/gm.jpg";
import ceo from "../assets/images/ceo.jpg";
import analytics from "../assets/images/analytics.jpg";

function Team() {
  return (
    <section class="py-5 font-montserrat ">
      <div class="container mx-auto w-4/5 flex flex-col items-center">
        <h1 class="font-bold text-xl md:text-5xl py-1 md:py-4">Family.</h1>
        <p class=" py-1 md:py-4 text-lg md:text-2xl">
          Meet our leadership team
        </p>
        {/* <div class="flex  flex-col md:flex-row justify-around items-center my-4"> */}
        <div class="grid md:grid-cols-3 gap-4">
          <div>
            <img src={gm} alt="" class="max-h-full min-w-full object-cover" />
            <p class="py-3 text-center text-sm md:text-xl">General Manager</p>
          </div>
          <div>
            <img src={ceo} alt="" class="max-h-full min-w-full object-cover" />
            <p class="py-3 text-center text-sm md:text-xl">CEO & founder</p>
          </div>
          <div>
            <img
              src={analytics}
              alt=""
              class="max-h-full min-w-full object-cover"
            />
            <p class="py-3 text-center text-sm md:text-xl">
              Analytics and Control
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
// class="w-1/4"
export default Team;
