<template>
  <header class="container-fluid">

    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="../../image/header_logo.png" alt="logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Пивная карта</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">О нас</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Контакты</a>
          </li>

        </ul>
        <div class="work-panel my-2 my-lg-0">
          <i class="bi bi-cart4"></i>
        </div>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
name: "header"
}
</script>

<style scoped>

  header.container-fluid {
    padding: 0;
    background-image: url(../../image/navigation-bg.png);
    background-repeat: no-repeat;
    background-position: 0 0;
    -webkit-background-size: 100px;
    background-size: 100% 100%;
  }

  nav.navbar .navbar-nav .nav-item .nav-link {
    color: black;
    font-size: 20px;
    margin: 0 10px;
  }

  .active {
    font-weight: bolder;
    text-decoration: underline;
  }

  i.bi {
    width: 24px;
    height: 24px;
  }
</style>