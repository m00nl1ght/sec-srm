<template>
</template>

<script>
export default {
    beforeMount() {
        this.$store.dispatch('user/logout')
        this.$router.push({name: 'home'})
    }
}
</script>