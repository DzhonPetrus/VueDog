<template>
  <div class="tab-content">
    <div class="tab-pane is-centered has-text-centered is-capitalized">
      <div class="columns is-centered">
        <div class="column is-three-quarters">
          <div class="embed-container image">
            <iframe
              :src="this.videoURL"
              frameborder="0"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <button :disabled="isBtnDisabled" @click="fetchVideo" class="button is-primary">Fetch New Video</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoURL: [],
      isBtnDisabled: true
    }
  },
  methods: {
    async fetchVideo() {
      isBtnDisabled: true;
      const res = await fetch('https://random.dog/woof.json');
      
      const data = await res.json();

      const url = data.url;
      const ext = url.split('.')[2];
      if(ext !== 'mp4')
        this.fetchVideo();
      else
        this.videoURL = url;

      isBtnDisabled: false;
    },
  },
  async created() {
    await this.fetchVideo();

  }
}
</script>