// console.log("connect");
const HeaderNavbar = document.getElementById("header_part");
const texts = ["Product", "Service", "Blog", "About", "Contact Us"];
function abc(x) {
  console.log("connect");
  HeaderNavbar.innerHTML = `

<div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center align-items-center">
            <nav class="navbar navbar-expand-lg navbar-dark nav_float fixed-top bgcolor">

              <a href="#" class=""><img width="150" src="../images/logo/Niharon Logo Renew-02.png" alt="no img"/></a>

              <button class="navbar-toggler"type="button"data-bs-toggle="collapse"data-bs-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav my_nav">
                  <li class="nav-item">
                    <a class="nav-link" href="../index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="products.html">Products</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="our-services.html">Service</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="blog.html">Blog</a>
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
              <h2>${texts[x]}</h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt_20">
          <div class="col-auto">
            <div class="banner_part text-center">
              <p class=" px-3">
                We deliver applied research innovation, technology development and solutions for customers large and
                small across the world.
              </p><br><br>
              <a href="#" class="mt-3 hdr_btn_mdl">Explore Now</a>
            </div>

          </div>
        </div>
      </div>

`;
}

//html
