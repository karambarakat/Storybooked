import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { gsap } from "gsap";

// eslint-disable-next-line
const FeaturedProjectEx = component$(() => {
  const refT2 = useSignal<HTMLElement>();
  const refT1 = useSignal<HTMLElement>();
  useVisibleTask$(
    () => {
      if (!refT2.value || !refT1.value) return;

      const tl2 = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          trigger: refT1.value,
          markers: true,
          start: "top 50%",
          end: "bottom 40%",
        },
      });
      // refT1.value.nextElementSibling?.setAttribute("style", "opacity:0");
      tl2.fromTo(
        refT1.value.nextElementSibling,
        {
          opacity: 0,
          translateY: 40,
        },
        { opacity: 1, translateY: 0 }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: true,
          trigger: refT2.value,
          markers: true,
          start: "top 10%",
          end: "bottom 0%",
        },
      });

      // (refT2.value.nextElementSibling as HTMLDivElement).style = { opacity: 0 };
      tl.fromTo(
        refT2.value.nextElementSibling,
        {
          opacity: 0,
          translateY: 40,
        },
        { opacity: 1, translateY: 0 }
      );
      tl.fromTo(
        refT1.value.nextElementSibling,
        {
          opacity: 1,
          translateY: 0,
        },
        { opacity: 0, translateY: -40 },
        "<"
      );
    },
    { strategy: "document-ready" }
  );

  return (
    <div class="text-center">
      <h2 class="text-16">Featured Project</h2>
      <div>
        <span ref={refT1} />
        <div class="flex flex-col items-center">
          <p class="max-w-600px text-8 font-1 mb-2">
            I made this project to learn more about web development and learn
            about maintaining a large project with many moving parts.
          </p>
          <div class="flex gap-6 text-6 font-3"></div>
        </div>
        <span ref={refT2} />
        <div class="flex flex-col items-center">
          <p class="max-w-600px text-8 font-1 mb-2">
            I made this proje projecte projecte projecte projecte projecte
            projecte projecte project with many moving parts.
          </p>
        </div>
      </div>
    </div>
  );
});

export default {
  title: "gsap",
  component: FeaturedProjectEx,
};

export const Basic = {};
