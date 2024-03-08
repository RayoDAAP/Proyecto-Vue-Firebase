<script setup>
import { ref } from "vue";
    import FeedPage from '@/components/FeedPage.vue';

    const push = ref();
</script>

<template>
    <FeedPage @hidefeed="push = undefined" />
</template>

<style scoped>

</style>