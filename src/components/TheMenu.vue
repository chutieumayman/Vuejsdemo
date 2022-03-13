<template>
  <div>
  <nav class="navbar navbar-expand-lg bg-menu">
  <div class="container-fluid">
    <button class="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <RouterLink to="/" class="nav-link active" >Home</RouterLink>
        </li>
        <li class="nav-item">
           <RouterLink to="/about"  class="nav-link">About</RouterLink>
        </li>
        <li class="nav-item dropdown bg-menu">
          <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu bg-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item bg-menu" href="#">Action</a></li>
            <li><a class="dropdown-item bg-menu" href="#">Another action</a></li>
          </ul>
        </li>
         <li class="nav-item">
           <RouterLink to="/bt" class="nav-link active" >Load more</RouterLink>
        </li>
         <li class="nav-item">
           <RouterLink to="/bt2" class="nav-link active" >phân trang</RouterLink>
        </li>
        <li class="nav-item">
           <RouterLink to="/paginate" class="nav-link active" >Phân trang 2</RouterLink>
        </li>
        <li class="nav-item dropdown bg-menu">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Phân trang
          </a>
          <ul class="dropdown-menu bg-menu " aria-labelledby="navbarDropdown2">
             <li><RouterLink to="/paginate1" class="nav-link active" >Phân trang 1</RouterLink></li>
             <li><RouterLink to="/paginate2" class="nav-link active" >Phân trang 2</RouterLink></li>
          </ul>
        </li>

        <li class="nav-item">
           <RouterLink to="/crud" class="nav-link active" >CRUD</RouterLink>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 bg-menu" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  </div>
</template>

