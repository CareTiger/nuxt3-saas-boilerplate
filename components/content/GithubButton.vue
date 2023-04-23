<template>
    <div>
        <button class="col-span-3 rounded-lg text-zinc-100 bg-green-800 dark:bg-green-600 p-2" type="submit"
            @click="log">GitHub
            Button</button>
    </div>
</template>
<script setup>
function log () {
    console.log('Hello World');
};
</script>