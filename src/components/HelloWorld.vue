<template>
  <div class="container">

    <div class="content">
      <h1>Abenathi Sindapi</h1>
      <p>
        A young fledgeling aspiring to become full
        fledged full-stack developer.
      </p>
      <button>Explore</button>
    </div>

    <div class="socials">
      <!-- <a href="#">FaceBook</a>
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
      <a href="#">Twitter</a>

        -->
        <a href="https://www.facebook.com/abenathi.sindaphi.5/"><i class="fa-brands fa-facebook" style="color: #1660df;"></i></a>
        <a href="https://www.linkedin.com/in/abenathi-sindapi-420969270/"><i class="fa-brands fa-linkedin" style="color: #125dde;"></i></a>
        <a href="https://github.com/Abenathi201"><i class="fa-brands fa-github"></i></a>
        <a href="https://twitter.com/AbenathiSindapi"><i class="fa-brands fa-twitter" style="color: #3f7fee;"></i></a>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(https://i.postimg.cc/K8PSx4g5/pexels-hasan-albari-1229860.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .content{
    /* background: #d9d9d9; */
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .socials{
    transform: rotate(-90deg);
    right: 10px;
    position: absolute;
    bottom: 50%;
  }

  .socials a i{
    font-size: 30px;
    /* transform: rotate(90deg); */
    transition: 0.3s;
    padding-inline: 5px;
  }

  .socials a i:hover{
    transform: scale(1.5) rotate(90deg);
    /* transform: ; */
  }

  button{
    margin-block: 10px;
    padding: 10px;
    background: transparent;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 17px;
    color: white;
    cursor: pointer;
    transition: ease-in 1s;
  }

  button:hover{
    background: #333;
    border: none;
    color: #d9d9d9;
  }

  .socials a{
    text-decoration: none;
    color: azure;
    padding-left: 5px;
    font-size: 16px;
  }
</style>
