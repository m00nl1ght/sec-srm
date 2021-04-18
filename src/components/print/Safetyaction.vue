<template>
    <section>
        <div class="act-print">
            <h2 class="main__table-name">Приложение №2 План мероприятий "До"/ Appendix №2 Action Plan "Before"</h2>
            <SafetyactionTable :data="getActions('До начала работ')"/>
        </div>

        <div class="act-print">
            <h2 class="main__table-name">Приложение №3 План мероприятий "Во время"/ Appendix №3 Action Plan "During"</h2>
            <SafetyactionTable :data="getActions('Во время работ')"/>
        </div>

        <div class="act-print">
            <h2 class="main__table-name">Приложение №4 План мероприятий "После"/ Appendix №4 Action Plan "After"</h2>
            <SafetyactionTable :data="getActions('После завершения работ')"/>
        </div>
    </section>
</template>

<script>
import SafetyactionTable from '@/components/print/SafetyactionTable'

export default {
    components: { SafetyactionTable },
    props: ['checkedActions'],

    beforeMount() {
        this.$store.dispatch('checkboxBlock/getActions', this.checkedActions)
    },

    methods: {
        getActions(deadline) {
            return this.$store.getters['checkboxBlock/getActions'](deadline)
        }
    },

    computed: {
        actions(deadline) {
            return this.$store.getters['checkboxBlock/getActions'](deadline)
        }
    }
}
</script>

<style lang="scss" scoped>
    .main__table-name {
        font-size: 16px;
    }

    @media print {
        .no-print, .no-print * {
            display: none !important;
        }

        .act-print {
            page-break-after: always;
        }
    }
</style>