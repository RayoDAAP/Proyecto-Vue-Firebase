<script setup>
import { ref, onMounted, computed } from "vue";
import LoginPage from "./pages/LoginPage.vue";
import NavBar from "./components/NavBar.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/Firebase.js";
import FeedPage from "./components/FeedPage.vue";
  
  const isUserAuthenticated = computed(() => user.value !== null);
  const user = ref();

  onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser !== null) {
        user.value = currentUser;
      }else{
        user.value = null;
      }
    })
  })

  //Navbar
  //pageShown("about-us" | "explore" | "reviews")
  const pageShown = ref("about-us");

  function changePage(page) {
    pageShown.value = page;
  }
</script>

<template>
  <!-- Login -->
  <LoginPage @hideLogin="isLoginShown = false" v-if="isUserAuthenticated === false"/>

  <!-- Contenido de la app--> 
  <div v-else>
    <NavBar @changePage="changePage" @hideLogin="isLoginShown = true"/>

    <FeedPage v-if="pageShown === 'feed'"/>

    <ProfilePage v-if="pageShown === 'profile'"/>

  </div>
</template>

<style scoped>

</style>
./components/FeedPage.vue