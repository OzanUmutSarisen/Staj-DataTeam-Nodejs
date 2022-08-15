<template>
<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="http://localhost:8080/">
      <img src="https://cdn.pixabay.com/photo/2020/07/07/08/49/wolf-5379713_960_720.png" width="50" height="50">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <strong class="navbar-item">Special FrontEnd Try</strong>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-Link to="/create" class="button is-primary">
            <strong>Send Data</strong>
          </router-Link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>