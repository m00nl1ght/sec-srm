<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Имя</th>
                    <th class="text-left">Фамилия</th>
                    <th class="text-left">Отчество</th>
                    <th class="text-left">Должность</th>
                    <th class="text-left">Фирма</th>
                    <th class="text-left">Согласовать</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, key) in getInstructWorker" :key="key">
                    <td>{{ item.name }}</td>
                    <td>{{ item.surname }}</td>
                    <td>{{ item.patronymic }}</td>
                    <td>{{ item.position }}</td>
                    <td>{{ item.firm }}</td>
                    <td>
                        <ThumbUpBtn @onClick="onClick(item.id)"/>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
import ThumbUpBtn from "@/components/app/button/ThumbUp"
export default {
    components: { ThumbUpBtn },

    methods: {
        onClick(id) {
            this.$store.dispatch('worker/setInstruct', id)
        }
    },

    computed: {
        getInstructWorker() {
            return this.$store.getters['worker/getInstruct']
        }
    }
};
</script>