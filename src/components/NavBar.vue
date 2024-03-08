<script setup>
    const emits = defineEmits(["changePage"]);
    import { signOut } from 'firebase/auth';
    import { auth } from '@/Firebase';

    async function signout() {
      await signOut(auth);
      alert("Sesion cerrada con exito");
    }
</script>

<template>
    <nav>
      <div class="image">
        <img src="@/images/image.png" alt="">
      </div>
      <div>
        <span @click="emits('changePage', 'feed')">Feed</span>
        <span @click="emits('changePage', 'profile')">Perfil</span>
        <span @click="signout">Cerrar sesion</span>
      </div>
    </nav>
</template>

<style scoped>
    h2 {
      color: black;
    }
    nav { 
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#fff;
    width: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  nav > div > span {
    font-size: 30px;
    margin-right: 20px;
    cursor: pointer;
    font-weight: 500;
    transition: color 0.3s, transform 0.3s;
    color: black;
  }

  nav > div > span:hover {
    color: #ff5733; 
    transform: translateY(-3px);
  }

  section {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
 img {
  margin: auto;
  max-width: 100px;
 }
</style>