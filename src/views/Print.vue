<template>
    <div>
        <Act :items="act" />
    </div>
</template>

<script>
import Act from "@/components/print/Act"

export default {
    components: {Act},
    props: ['id'],

    computed: {
        act() {
            return this.$store.getters['acts/getactbyid'](this.id)
        }
    },

}
</script>