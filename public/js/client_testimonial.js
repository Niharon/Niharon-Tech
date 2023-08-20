const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
  {
    photo: 'url("images/client_testimonial/rakib_hasnat.jpg")',
    name: "Md. Rakibul Biswas",
    profession: "Founder, Ahoron",
    description:
      "We have been very happy with our new website! It looks professional and very easy to navigate. I would highly recommend Niharon Technology. They are great to work with.",
  },

  {
    photo: 'url("images/client_testimonial/riad_hasan.jpg")',
    name: "Md. Riad Hasan",
    profession: "Founder, Softology",
    description:
      "It was an amazing deal. Your work is so professional. I am happy with that. Next time, I will go with you without any thought. Thank you.",
  },

  {
    photo: 'url("images/client_testimonial/Dr.Bipul.jpeg")',
    name: "Dr. Bipul Kumer Sarker",
    profession: "Founder, BOCS Academy",
    description:
      "I'm truly impressed with this BOCS course app! The seamless execution and user-friendly interface make learning a breeze. The app's flawless performance and comprehensive content have transformed the way I study, exceeding my expectations. The prompt and knowledgeable support throughout the learning journey demonstrates the team's commitment to learners' success. Undoubtedly, this app has become an invaluable tool for my education.",
  },

  {
    photo: 'url("images/client_testimonial/MuftiShahadatSadman.jpg")',
    name: "Mufti Shahadat Sadman",
    profession: "Language Instructor, Madrasatul Insaf CEO, Tamrin Institute",
    description:
      "This software project is a game-changer. Its intuitive interface makes navigation a breeze, while its powerful features streamline our tasks efficiently. The attention to detail is evident in its flawless performance, providing a reliable tool we can depend on. Regular updates keep bringing fresh improvements, and the responsive support team ensures a smooth experience. A must-have for anyone seeking enhanced productivity.",
  },
  {
    photo: 'url("images/client_testimonial/profile-avatar.png")',
    name: "Nafiur Rahman Niloy",
    profession: "Founder, dLifes",
    description:
      "This software is a game-changer. Its powerful features, combined with an intuitive interface, make tasks effortless. Regular updates showcase the developers' commitment to excellence, ensuring a top-notch user experience.",
  },
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
  let reviewWrapWidth = reviewWrap.offsetWidth + "px";
  let descriptionHeight = description.offsetHeight + "px";
  //(+ or -)
  let side1symbol = whichSide === "left" ? "" : "-";
  let side2symbol = whichSide === "left" ? "-" : "";

  let tl = gsap.timeline();

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 0,
    });
  }

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 0,
    translateX: `${side1symbol + reviewWrapWidth}`,
  });

  tl.to(reviewWrap, {
    duration: 0,
    translateX: `${side2symbol + reviewWrapWidth}`,
  });

  setTimeout(() => {
    imgDiv.style.backgroundImage = people[personNumber].photo;
  }, 400);
  setTimeout(() => {
    description.style.height = descriptionHeight;
  }, 400);
  setTimeout(() => {
    personName.innerText = people[personNumber].name;
  }, 400);
  setTimeout(() => {
    profession.innerText = people[personNumber].profession;
  }, 400);
  setTimeout(() => {
    description.innerText = people[personNumber].description;
  }, 400);

  tl.to(reviewWrap, {
    duration: 0.4,
    opacity: 1,
    translateX: 0,
  });

  if (isChickenVisible) {
    tl.to(chicken, {
      duration: 0.4,
      opacity: 1,
    });
  }
}

function setNextCardLeft() {
  if (currentPerson === 3) {
    currentPerson = 0;
    slide("left", currentPerson);
  } else {
    currentPerson++;
  }

  slide("left", currentPerson);
}

function setNextCardRight() {
  if (currentPerson === 0) {
    currentPerson = 3;
    slide("right", currentPerson);
  } else {
    currentPerson--;
  }

  slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
  if (chicken.style.opacity === "0") {
    chicken.style.opacity = "1";
    imgDiv.classList.add("move-head");
    surpriseMeBtn.innerText = "Remove the chicken";
    surpriseMeBtn.classList.remove("surprise-me-btn");
    surpriseMeBtn.classList.add("hide-chicken-btn");
    isChickenVisible = true;
  } else if (chicken.style.opacity === "1") {
    chicken.style.opacity = "0";
    imgDiv.classList.remove("move-head");
    surpriseMeBtn.innerText = "Surprise me";
    surpriseMeBtn.classList.add("surprise-me-btn");
    surpriseMeBtn.classList.remove("hide-chicken-btn");
    isChickenVisible = false;
  }
});

window.addEventListener("resize", () => {
  description.style.height = "100%";
});
