<template>
   <ul></ul>
</template>

<script>
export default {
  data() {
    return {
      Name: "Hello I'm Andrian Elemento",
      hero: "Life is like proramming full of exploration and failure mistakes and error but in every error theres always solution to solve the problems and make it better",
    }
  },
};
</script>

<style>
.brand a{
    text-decoration: none;
}.header{
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: rgb(18, 216, 123);
}
.brand h1 {
    font-size: 20px;
    text-transform: uppercase;
    color: #212121;
    float: right;
    margin: 10px 30px 30px 10px;
  }
  .brand h1 span {
    color: rgb(231, 57, 14);
  }
.hero{
    position: relative;
    width: 100%;
    
}
nav{
    display: flex;
    width: 84;
    margin: auto;
    align-items: center;
    justify-content: space-between;
}nav ul li{
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
}nav ul li a{
 text-decoration: none;
 color: #000;
 font-weight: bold;
}nav ul li a:hover{
    color: crimson;
}
</style>