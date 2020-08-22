<template>
  <div class="home">
    <div class="cards-container">
      <div class="container">
        <div class="card-columns">
          <PraiseCard></PraiseCard>
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
  }
}
</script>

<style lang="scss">
  .cards-container {
    background-color: $golden-rod;
    padding: 6rem 0;
  }
</style>