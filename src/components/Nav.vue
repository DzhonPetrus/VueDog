<template>
  <div class="tabs is-boxed is-centered main-menu" id="nav">
    <ul>
      <li :class="isActive('/picture') ? 'is-active' : ''">
          <router-link to="/picture">Dog Pictures</router-link>
      </li>
      <li :class="isActive('/video') ? 'is-active' : ''">
          <router-link to="/video">Dog Videos</router-link>
      </li>
      <li :class="isActive('/fact') ? 'is-active' : ''">
          <router-link to="/fact">Dog Facts</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    isActive(page) {
      if(this.$route.path === page)
        return true
      else
        return false
    }
  }
}
</script>