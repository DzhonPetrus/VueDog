<template>
  <div class="tab-content">
    <div class="tab-pane is-centered has-text-centered is-capitalized">

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            fact: [],
            isBtnDisabled: true
        }
    },
    methods: {
        async fetchFact() {
            this.isBtnDisabled = true;

            // const res = await fetch('https://dog-api.kinduff.com/api/facts');
            // const res = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1');
            const res = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1');

            const data = await res.json();

            console.log(data);

            this.isBtnDisabled = false;
        }
    },
    async created() { 
        await this.fetchFact();
    }

}
</script>