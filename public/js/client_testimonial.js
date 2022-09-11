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
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.",
  },
  {
    name: "MD. Rakib Hasnat Biswas",
    position: "Founder, Ahoron ",
    photo: "images/client_testimonial/rakib_hasnat.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.",
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
