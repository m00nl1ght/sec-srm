<template>
    <div id="js-map-grid" class="map js-map-grid">
        <div 
            v-for="(row, index) in rows"

            class="grid__row"
            :key="index" 
            v-bind:style="height">
                <div
                    v-for="(col, i) in cols"

                    class="grid__col" 
                    :key="i"
                    v-bind:style="width"
                    @click="onClick"   
                ></div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        rows: 8,
        cols: 8,
    }),

    methods: {
        onClick(e) {
           console.log(e.target)
            this.$set(e.target, 'checked')
            console.log(e.target)
        }
    },

    computed: {
        width() {
            return 'width: ' + 100/this.rows + '%'
        },
        height() {
             return 'height: ' + 100/this.cols + '%'
        }
    },



}

    // <img
    //     class="mx-auto"
    //     src="@/assets/map.jpg"
    // />
</script>

<style scoped>
    .map {
        background-image: url('../../assets/map.jpg');
        background-size: 100% 100%;

        width: 100%;
        height: 100%;

    }

    .grid__row {
        display: flex;
    }
    .grid__col {
        height: 100%;
    }

    .active {
        background: #431cebe0;
        opacity: .5;
    }
</style>