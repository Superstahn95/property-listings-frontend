import gm from "../assets/images/gm.jpg";
import ceo from "../assets/images/ceo.jpg";
import analytics from "../assets/images/analytics.jpg";

function Team() {
  return (
    <section class="py-5 font-montserrat">
      <div class="container mx-auto w-4/5 flex flex-col items-center">
        <h1 class="font-bold text-5xl py-4">Family.</h1>
        <p class="py-4 text-2xl">Meet our leadership team</p>
        <div class="flex justify-around items-center my-4">
          <div class="w-1/4">
            <img src={gm} alt="" class="max-h-full min-w-full object-cover" />
            <p class="py-3 text-center text-2xl">General Manager</p>
          </div>
          <div class="w-1/4">
            <img src={ceo} alt="" class="max-h-full min-w-full object-cover" />
            <p class="py-3 text-center text-2xl">CEO & founder</p>
          </div>
          <div class="w-1/4">
            <img
              src={analytics}
              alt=""
              class="max-h-full min-w-full object-cover"
            />
            <p class="py-3 text-center text-2xl">Analytics and Control</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
