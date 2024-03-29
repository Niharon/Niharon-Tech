// console.log("connect");
const HeaderNavbar = document.getElementById("header_part");
const texts = [
  "Projects",
  "Services",
  "Vlog",
  "About",
  "Contact Us",
  "Web Development",
  "Software Development",
  "Software As A Service",
  "Data Science & AI",
  "Publication",
  "Branding & Marketing",
  "Education & Training",
  "Class Manager",
  "Shop Manager",
  "OdolBodol",
  "Odurei",
];

const pera_title = [
  "We have done several impactful projects which will make your life easy and introduce you to new systems",
  "We design & develope custom software and applications that solves many problem or achieve specific outcome for our clients and the world.",
  "Vlogs is where, we normally show about what we are doing and what we did so far.",
  "We are a team to execute effective and efficient projects to contribute in this digital era",
  "If you want any technical support and impactful place in this digital world, contact with us",
  "Receive full-cycle web development services from a draft idea to a ready-to-use website, backed by top technologies. ",
  "Reach your users on their favorite devices with native and cross platform development, supported by best industry practices. ",
  "We provide Software as a Service (SaaS) through various platforms and automate complex tasks over the internet.",
  "We have solved data-related problems to gain insights from data and help businesses to grow and help to automate to make life easier.",
  "We have several books on programming and Computer Science to help you to learn easily.",
  "We have a wide range of networks that will help you to grow your business.",
  "We have skillful tutors and effective courses which will help you to increase your knowledge and skills in programming and Computer Science. ",
  "Never miss a class anymore!",
  "Manage your shop at ease!",
  "Buy and sell old books within the people nearby.",
  "Buy and sell old things within the people nearby.",
];

function abc(x) {
  console.log("connect");
  HeaderNavbar.innerHTML = `

    <div class="header_part_overlay">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center align-items-center">
            <nav id="xyz" class="navbar navbar-expand-lg navbar-dark nav_float fixed-top bgcolor ">
              <a href="../index.html" class=""><img width="150" src="../images/logo/Niharon Logo Renew-02.png" alt="no img"/></a>
              <button class="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav my_nav">
                  <li class="nav-item">
                    <a class="nav-link" href="../index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="products.html">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="our-services.html">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="blog.html">Vlog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact-us.html">Contact Us</a>
                    <!-- <i class="fa fa-paper-plane"></i> -->
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <!-- ========type writer======= -->

        <div class="row mt_100">
          <div class="col-lg-12">
            <div class="type_writter text-center">
              <h2 class="mb-0">${texts[x]}</h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt_20">
          <div class="col-auto">
            <div class="banner_part text-center">
              <p class="px-3">
              ${pera_title[x]}
              </p><br><br>
              <div class="scroll-downs">
              <div class="mousey">
                <div class="scroller"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

`;
}

//html
