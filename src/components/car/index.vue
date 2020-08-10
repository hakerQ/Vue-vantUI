<template>
  <div class="mycar">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot>
        <div>这是后备内容</div>
      </slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
  export default{
    name:'index',
    data(){
      return {
         person:{
           name:'lili',
           age:20,
           height:170,
         }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
