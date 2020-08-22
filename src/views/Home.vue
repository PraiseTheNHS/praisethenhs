<template>
  <div class="home">
    <div class="cards-container">
      <div class="container">
        <div class="card-columns">
          <PraiseCard v-for="praise in praises.data" v-bind:key="praise.id" :praise="praise"></PraiseCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PraiseCard from "../components/PraiseCard";
export default {
  name: 'Home',

  components: {
    PraiseCard
  },

  data() {
    return {
      praises: []
    }
  },

  created() {
    fetch(`${process.env.VUE_APP_API_BASE_URL}/praise/get`)
            .then(response => response.json())
            .then((json) => {
              console.log(json.data[0])
              console.log(this)
              this.praises = json;
            });
  },

  methods: {
    GetPraises() {
      console.log(process.env.API_BASE_URL)
    }
  }
}
</script>

<style lang="scss">
  .cards-container {
    background-color: $golden-rod;
    padding: 6rem 0;
  }
</style>