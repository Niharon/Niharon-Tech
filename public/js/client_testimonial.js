const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Md. Riad Hasan",
    position: "Softology ",
    photo: "images/client_testimonial/riad_hasan.jpg",
    text: "<i class='fa fa-quote-left fa-2xl'></i> &nbsp; &nbsp; It was an amazing deal. Your work is so professional. I am happy with that. Next time, I will go with you without any thought. Thank you. &nbsp; &nbsp; <i class='fa fa-quote-right fa-2xl'></i>",
  },
  {
    name: "MD. Rakibul Biswas",
    position: "Founder, Ahoron ",
    photo: "images/client_testimonial/rakib_hasnat.jpg",
    text: "<i class='fa fa-quote-left fa-2xl'></i> &nbsp; &nbsp; We have been very happy with our new website! It looks professional and very easy to navigate. I would highly recommend Niharon Technology. They are great to work with. &nbsp; &nbsp; <i class='fa fa-quote-right fa-2xl'></i>",
  },
];

let idx = 0;

function upadteTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(upadteTestimonial, 10000);
