<template>
  <section class="hero is-info">
    <Header />

    <Nav />

    <router-view />
  </section>
</template>


<script>
import Nav from "./components/Nav";
import Header from "./components/Header";

export default {
  components: {
    Nav,
    Header,
  },
};
</script>


<style>
.tabs {
  margin-bottom: -1px !important;
  position: relative;
}
.tab-content {
  padding: 60px;
  top: 197px;
  color: #000;
  background-color: white;
}
.tab-pane {
  display: block;
  width: 50%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.is-active {
  display: initial;
}

.cent {
  display: block;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid #ccc;
  max-height:500px;
}

.video {
  display: block;
  margin: 0 auto;
}

/* CSS from http://embedresponsively.com */
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>