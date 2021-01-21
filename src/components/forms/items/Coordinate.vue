<template>
    <div class="row">
        <div class="col-3">
            <v-text-field
                :label="person.surname.label"
            ></v-text-field>
        </div>

        <div class="col-3">
            <v-text-field
                :label="person.name.label"
            ></v-text-field>
        </div>

        <div class="col-3">
            <v-text-field
                :label="person.patronymic.label"
            ></v-text-field>
        </div>

        <div class="col-3">
            <v-text-field
                :label="person.position.label"
            ></v-text-field>
        </div>
    </div>
</template>

<script>
export default {
    props: ['person']
}
</script>