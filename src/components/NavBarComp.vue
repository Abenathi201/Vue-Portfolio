<template>
    <nav>
      <div class="logo">
        <a href="/">
          <img src="https://i.postimg.cc/jq4VMfdT/v.png" alt="Nav-Comp">
        </a>
      </div>

      <input type="checkbox" id="hamburger" />
      <label for="hamburger">
        <i class="fa-solid fa-bars"></i>
      </label>
        <ul>
          <li><a class="links" href="/">Home</a></li>
          <li><a class="links" href="/about">About</a></li>
          <li><a class="links" href="/testimonials">Testimonials</a></li>
          <li><a class="links" href="/projects">Projects</a></li>
          <li><a class="links" href="/contact">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default{

}
</script>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #333 74%);
        padding: 1em;
    }
    
    nav .links {
      text-decoration: none;
      text-transform: capitalize;
      color: #ffffff;
    }
    #logo {
      font-size: 1.2em;
      font-weight: 600;
    }
    input[type="checkbox"] {
      appearance: none;
    }
    label {
      display: none;
      cursor: pointer;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 1em;
    }
    .links {
      padding: 0.5em;
      border: none;
    }
    .links:hover {
      background-color: #000000;
      background-image: linear-gradient(147deg, #000000 0%, #333 74%);
      border-radius: 0.5em;
      border: none;
    }
    .active {
      border-bottom: 2px solid #ffffff;
    }

    .logo img{
      width: 80px;
      height: 80px;
    }

    @media screen and (max-width: 600px) {
    label {
        display: block;
    }
    ul {
        font-size: 1.2em;
        position: absolute;
        left: -100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #333333;
        gap: 2em;
        top: 100px;
        width: 100%;
        height: 100vh;
        transition: 0.5s;
    }
    input[type="checkbox"]:checked ~ ul {
        left: 0;
      }
    ul .links:hover {
        background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #333 74%);
    }
    }
    </style>