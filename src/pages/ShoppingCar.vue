<template>
  <div class="shoppingcar">
    <mycar>
      <template #header>
        <h1>头部</h1>
      </template>
      <!-- <div>主体</div>
      <div>另一部分内容</div> -->
      <template #footer>
        <div>底部</div>
      </template>
    </mycar>
  </div>
</template>

<script>
  import mycar from '@/components/car/index.vue'
  export default {
    name: 'shoppingcar',
    data() {
      return {
        init: 3
      }
    },
    components: {
      mycar
    }
  }
</script>

<style lang="scss" scoped>
  .lv {
    color: red;
  }
</style>
