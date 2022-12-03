<template>
    <header class="header">
    <nav class="navegador">
      <ul>
        <li>
          <router-link to="/">Inicio</router-link>
          <router-link to="/nosotros">Nosotros</router-link>
          <router-link to="catalogo">Catalogo</router-link>
          <router-link to="/contacto">Contacto</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header{            
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: #ec2424ff;
    box-shadow: 0 0 30px rgb(3, 42, 238);
  }
  .navegador{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 1%;
  }
  a{
    text-decoration: none;
    padding-bottom: 10px;
    font-weight: 900;
  }
  nav a{
    color: rgb(7, 7, 7);
  }
  nav a:hover{
    color: rgb(75, 6, 250);
  }
  nav ul li{
    display: inline;
    margin-left: 20%;
    display: flex;
    justify-content: space-around;
  }
  ul{
    width: 100%;
    margin-top: 1px;
  }
</style>