<template>
    <v-progress-linear
        color="green accent-4"
        class="mt-3"
        :active="active"
        indeterminate
        rounded
        height="6"
    ></v-progress-linear>
</template>

<script>
export default {
    props: ['active']
}
</script>