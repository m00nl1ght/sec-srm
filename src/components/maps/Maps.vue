<template>
    <img
         class="mx-auto img"
         src="@/assets/map.jpg"
     />
</template>

<script>
export default {
    data: () => ({
        rows: 8,
        cols: 8
    }),

    methods: {
        row(i) {
            let parent = document.getElementById('js-mapGrid');
            let row = document.createElement('div');
            row.className = 'map-grid__row';
            row.dataset.row = i;
            parent.appendChild(row);
            return row;
        },

        elem(parent, j) {
            let elem = document.createElement('div');
            elem.className = 'map-grid__row-elem';
            elem.dataset.column = j;
            parent.appendChild(elem);
        }
    }
}

    // <img
    //     class="mx-auto"
    //     src="@/assets/map.jpg"
    // />
</script>

<style scoped>
    .img{
        width: 100%;
    }
</style>