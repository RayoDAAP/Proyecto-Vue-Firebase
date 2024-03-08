<script setup>
const emits = defineEmits(['hidefeed']);
</script>

<template>
    <h2>Publicaciones</h2>
    <span class="boton" @click="emits('hidefeed')">Agregar Publicacion</span>
</template>

<style scoped>
h2 {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
}
.boton {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
}
</style>    