<template>
    <section>
        <section class="">
    <!--to navbar start -->
    <div class="container">
      <div class="d-flex bd-highlight">
        <div class="me-auto bd-highlight">Get 10% offer this month</div>
        <div class="bd-highlight"> <span class="m-1">Order Track</span> </div>
        <div class="bd-highlight"> <span class="m-1">My Account</span> </div>
        <div class="bd-highlight"> <span class="m-1">Shopping cart(2)</span> </div>
      </div>
    </div>
    <hr/>
    <!--top navbar end -->

    <!--start of navbar main part -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Shop</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Login</a></li>
                <li><router-link class="dropdown-item" to="/admin/register">Register</router-link></li>
                <li><router-link class="dropdown-item" to="/admin/list">list</router-link></li>
              </ul>
            </li>
          </ul>
          <div class="d-flex">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href=""
                  ><span class="material-symbols-outlined">
                    shopping_cart
                  </span></a
                >
              </li>
              <li class="nav-item">
                <a href="" class="nav-link"
                  ><span class="material-symbols-outlined"> search </span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!--end of navbar main part -->


  </section>
    </section>
</template>