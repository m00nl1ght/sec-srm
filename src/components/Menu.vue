<template v-slot:extension>
    <v-tabs align-with-title>
        <router-link :to="{name: 'home'}" class="router__link">
            <v-tab class="router__block">Главная</v-tab>
        </router-link>

        <router-link :to="{name: 'about'}" class="router__link">
            <v-tab class="router__block">About</v-tab>
        </router-link>
    </v-tabs>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .router__link {
        text-decoration: none;
    }

    .router__block {
        height: 100%;
    }
</style>