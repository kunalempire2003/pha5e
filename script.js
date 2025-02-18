function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;
  function updateCounter() {
    if (currentValue === 100) {
      return;
    }
    currentValue += Math.floor(Math.random() * 10) + 1;
    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}

startLoader();
gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
  onComplete: function () {
    // Remove the overlay from DOM after animation
    document.querySelector(".overlay").remove();
    document.querySelector(".counter").remove();
  },
});

gsap.from(".h1", 1.5, {
  x: "-100vw", // Start far left offscreen
  opacity: 0, // Start hidden
  duration: 1.5,
  delay: 4, // Delay to match preloader
  ease: "power4.out",
  stagger: 0.3, // Add stagger to animate each letter individually (optional)
});

// Hover bounce effect for .h1 elements
document.querySelectorAll(".h1").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      x: 20, // Bounce upwards
      rotation: 360, // Slight rotation for effect
      color: "white", // Text color
      backgroundColor: "lawngreen", // Black background on hover
     // Add shadow on hover
      duration: 1,
      ease: "bounce.out", // Bounce effect on hover
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      y: 0, // Return to original position
      rotation: 0, // Reset rotation
      color: "lawngreen", // Return to original color
      backgroundColor: "black",
      boxShadow: "none", // Remove shadow when not hovered
      duration: 1,
      ease: "bounce.out", // Smooth return effect
    });
  });
});

gsap.from(".hero", 3, {
  delay: 4.5,
  y: 400,
  height: 20,
  ease: "power4.inOut",
});
setTimeout(() => {
  document.querySelectorAll(".happy a").forEach((anchor) => {
    anchor.classList.add("active");
  });
}, 4500); // Apply after 4.5s (after animations)

/*const audio = new Audio('dragon_ball_gt_piano.mp3');  // Correct path to your sound file
    audio.loop = true;  // Set the audio to loop continuously
    audio.volume=0.8;
    setTimeout(() => {
        audio.play().catch((error) => {
            console.log("Error playing audio:", error);
        });  // Attempt to play the sound
    }, 4500);  // After 4.5 seconds
*/









gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const cards = [
    { id: "#card-1", endTranslateX: -2000, rotate: 45 },
    { id: "#card-2", endTranslateX: -1000, rotate: -30 },
    { id: "#card-3", endTranslateX: -2000, rotate: 45 },
    { id: "#card-4", endTranslateX: -1500, rotate: -30 },
  ];

  ScrollTrigger.create({
    trigger: ".wrapper-404",
    start: "top top",
    end: "+=900vh",
    scrub: 1,
    pin: true,
    onUpdate: (self) => {
      gsap.to(".wrapper-404", {
        x: `${-350 * self.progress}vw`,
        duration: 0.5,
        ease: "power3.out",
      });
    },
  });

  cards.forEach((card) => {
    ScrollTrigger.create({
      trigger: "card.id",
      start: "top top",
      end: "+=1200vh",
      scrub: 1,
      onUpdate: (self) => {
        gsap.to(card.id, {
          x: `${card.endTranslateX * self.progress}px`,
          rotate: `${card.rotate * self.progress * 2}`,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });
  });
});




document.addEventListener("DOMContentLoaded", function () {
  let introSection = document.querySelector(".intro");
  let gojoVideo = document.getElementById("gojoVideo");

  introSection.addEventListener("mouseenter", function () {
    gojoVideo.muted = false; // Unmute on hover
    gojoVideo.play();
  });

  introSection.addEventListener("mouseleave", function () {
    gojoVideo.pause();
    gojoVideo.currentTime = 0; // Reset video when hover ends
  });
});



