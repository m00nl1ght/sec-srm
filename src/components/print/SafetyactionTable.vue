<template>
    <table class="main__table">
        <thead>
            <tr>
                <th>Наименование мероприятия</th>
                <th>Срок выполнения</th>
                <th>Исполнитель</th>
                <th>Подпись ответственного исполнителя</th>
                <th>Представитель отдела</th>
                <th>Подпись представителя отдела</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.deadline}}</td>
                <td>{{item.performer}}</td>
                <td></td>
                <td>{{item.employee}}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style lang="scss" scoped>
    .main__table {
        border-collapse: collapse;
        font-size: 10px;

        & th {
            padding: 3px;
            border: 1px solid #000;
        }

        & td {
            padding: 3px;
            border: 1px solid #000;
        }
    }
</style>