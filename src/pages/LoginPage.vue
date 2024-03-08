<script setup>
    import { ref } from "vue";
    import { signInWithEmailAndPassword,
       createUserWithEmailAndPassword,
       } from "firebase/auth";
    import { auth } from "@/Firebase"

    const emits = defineEmits(["hideLogin"]);

    const email = ref();
    const password = ref();

    async function login () {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        emits("hideLogin");
      } catch (e) {
        alert(" Ocurrio un error :c")
      }
  }

  async function signup() {
    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        alert("Cuenta creada con exito! :D")
      } catch (e) {
        alert(" Ocurrio un error :c")
      }
  }
</script>

<template>
  <div class="login-container">
    <img src="@/images/image.png" alt="">
    <form @submit.prevent method="post">
      <div class="info">
        <label for="">Email: </label>
        <input v-model="email" type="text" name="email" />
      </div>
      <div class="info">
        <label for="">Contraseña: </label>
        <input v-model="password" type="text" name="password" >
      </div>
      <div class="button-container">
        <div>
          <button type="button" class="login" @click="login">Entrar</button>
        </div>
        <div>
          <button type="button" class="signup" @click="signup">Crear cuenta</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
 .login-container {
    font-family: Arial, Helvetica, sans-serif;
    color: #707171;
    width:400px ;
    margin: 50px auto;
    background-color: rgb(159, 207, 231);
    padding-block: 30px;
    border-radius: 30px;
  }

  .login-container > h1 {
    text-align: center;
  }

  .login-container > form {
    display: block;
    padding: 20px;
  }
  
  label {
    padding-bottom: 10px;
    font-weight: 600;
  }

  input {
    border-radius: 5px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .info {
    margin-bottom: 15px;
  }

  .info label {
    display: block;
  }

  .info input {
    width: 100%;
    border: none;
    font-size: 20px;
  }

  .button-container {
    display: block;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .login .signup {
    text-align: center;
  }
  button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin: 0 auto;
    background-color: #84a2dc;
    border: none;
    border-radius: 10px;
    color: #fff;;
    cursor: pointer;
  }
  
  .login {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: #fff;
      background-color: black;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
  }

  .login:hover {
    background-color: #707171;
  }

  .signup {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      color: #fff;
      background-color: #fd7e14;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
  }

  .signup:hover {
    background-color: #cd5c20;
  }

  img {
    max-width: 100px;
    padding-left: 150px;
  }
</style>