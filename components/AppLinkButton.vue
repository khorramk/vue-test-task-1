<template>
    <div class="link-tag">
        <NuxtLink :to="page"><slot/></NuxtLink>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(['page'])
</script>

<style scoped lang="scss">
 .link-tag :deep(a) {
    padding: 0.5rem 1rem;
    border: 2px solid #000000;
    text-decoration: none;
    border-radius: 20px;
    color: rgb(154, 23, 23);
    background-color: #ffffff;


    &:hover {
        background-color: rgb(234 227 227);
        color: rgb(214, 2, 2);
    }
 }

 
</style>
