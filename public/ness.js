const HeaderNavbar = document.getElementById("header_part");
HeaderNavbar.innerHTML = `

<div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center align-items-center">
            <nav class="navbar navbar-expand-lg navbar-dark nav_float fixed-top bgcolor">
              <a href="#" class=""
                ><img width="150" src="images/logo/Niharon Logo Renew-02.png" alt="no img"
              /></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav my_nav">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="html/products.html">Projects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="html/our-services.html">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="html/blog.html">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="html/about.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="html/contact-us.html">Contact Us</a>
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
              <h2>
                <a
                  href=""
                  class="typewrite"
                  data-period="2000"
                  data-type='[ "Niharon Techonologies", "Software Development", "Web Development","Class Manager", "Shop Manager","OdolBodol" ]'
                >
                  <span class="wrap"></span
                ></a>
              </h2>
            </div>
          </div>
        </div>

        <div class="row justify-content-center mt_20">
          <div class="col-auto">
            <div class="banner_part">
              <p class="text-center px-3">
                We deliver applied research innovation, technology development and solutions for customers large and
                small across the world.
              </p>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-auto">
            <ul class="nav social_icon">
              <li class="nav-item">
                <a target="blank" href="https://www.facebook.com/niharontechnologies" class="nav-link">
                  <i class="fab fa-facebook-f fa-lg"></i>
                </a>
              </li>
              <li class="nav-item">
                <a target="blank" href="https://www.instagram.com/niharontechnologies" class="nav-link">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li class="nav-item">
                <a target="blank" href="https://www.linkedin.com/company/niharon-technologies" class="nav-link">
                  <i class="fab fa-linkedin fa-lg"></i>
                </a>
              </li>
              <li class="nav-item">
                <a target="blank" href="https://github.com/Niharon" class="nav-link">
                  <i class="fab fa-github fa-lg"></i>
                </a>
              </li>
              <li class="nav-item">
                <a target="blank" href="#" class="nav-link">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row justify-content-center my-5">
          <div class="col-auto">
            <span class="line"> </span>
          </div>
        </div>
      </div>

`;