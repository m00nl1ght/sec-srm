<template>
    <div id="js-map-grid" class="map js-map-grid">
        <div 
            v-for="(row, index) in rows"

            class="grid__row"
            :key="index" 
            v-bind:style="height">
                <MapsColumnItem 
                    v-for="(col, i) in cols"
                    :key="i"
                    class="grid__col" 

                    v-bind:style="width"
                    :col='i'
                    :row='index'
                    :checkedItems='checkedItems'
                    @onChange="(e) => $emit('onChange', e)"
                />
        </div>
    </div>
</template>

<script>
import MapsColumnItem from "@/components/maps/MapsColumnItem"

export default {
    props: ['checkedItems'],

    components: { MapsColumnItem },

    computed: {
        cols() {
            return this.$store.getters['maps/getCols']
        },

        rows() {
            return this.$store.getters['maps/getRows']
        },

        width() {
            return 'width: ' + 100/this.cols + '%'
        },
        height() {
             return 'height: ' + 100/this.rows + '%'
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

        width: 700px;
        height: 450px;

        margin: 0 auto;
    }

    @media screen and (max-width: 1400px) {
        .map {
            width: 400px;
            height: 260px;
        }
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