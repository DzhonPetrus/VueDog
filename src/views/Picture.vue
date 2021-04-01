<template>
  <div class="tab-content">
    <div class="tab-pane is-centered has-text-centered is-capitalized">
      <figure>
        <img
          :src="this.dog.message"
          alt="Fetching Dog"
          class="cent"
        />
      </figure>
      <h1>{{ this.dog.breed }}</h1>
      <button :disabled="isBtnDisabled" @click="fetchPicture" class="button is-primary">Fetch New Picture</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dog: [],
      isBtnDisabled: true
    }
  },
  methods: {
    async fetchPicture() {
      this.isBtnDisabled = true;
      const res = await fetch('https://dog.ceo/api/breeds/image/random');

      const data = await res.json();

      this.dog = data;
      this.dog.breed = data.message.split('/')[4];

      this.isBtnDisabled = false;
    },
  },
  async created() {
    await this.fetchPicture();
  },
};
</script>