<template>

<header class="header"> 
  <router-link to="/"> 
  <img class="logo" src="@/assets/logo-full-white.png" alt="" width="150" > </router-link>
  <h1 class="title">
    {{title}}
  </h1>
 
  </header>   
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  }

}
</script>

<style>
.header {
  grid-area: header;
  background: linear-gradient(to right, #6F58D0, #9044C5);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-height: 70px;
}
.title {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;
}
.logo{
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 30px;
}
@media (max-width: 500px){
  .title{
    display: none;
  }
}

</style>