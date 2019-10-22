<template>
  <div>
      
  </div>
</template>

<style lang="scss" scoped>
  .md-card {
    padding-top:5px;
    margin:5% auto;
    text-align:center;
  }
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>

<script>
export default {
  name: 'UsersComponent',
  methods:{
      login (){
          this.$router.push( '/app' );
      }
  }
}
</script>