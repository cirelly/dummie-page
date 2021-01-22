<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <h3 class="md-title">Technoclean</h3>
      </md-app-toolbar>
    </md-app>
  </div>
</template>
<style>
.md-app {
  max-height: 50vh;
  border: 1px solid rgba(rgb(0, 0, 0), 0.12);
  background: linear-gradient(-90deg, #6a79cf, #1627c0);
  color: #ffffff;
}
.md-title{
    text-align: center;
}
</style>

<script>
export default {
  name: "Navbar"
};
</script>