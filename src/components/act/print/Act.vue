<template>
    <div class="main">
        <section class="main-info">
            <h2 class="main-info__head">Акт-допуск для производства работ на территории организации</h2>
            <div class="main-info__city-date">
                <div class="main-info__city-date_column">
                    <span>г. Краснодар</span>
                    <span class="main_border-top">(место составления)</span>
                </div>
                <div class="main-info__city-date_column">
                    <span>{{ currentDate() }}</span>
                    <span class="main_border-top">(дата)</span>
                </div>
            </div> 

            <p class="main__paragraph-claas">ООО "КЛААС"</p>
            <p class="main_border-top">(наименование действующего производственного объекта)</p>

            <p class="main__paragraph-employee">1. Мы, нижеподписавшиеся, представитель организации</p>
            <p class="main__paragraph-employee-name">{{ coordinator }}</p>
            <p class="main_border-top">(ФИО., должность)</p>

            <p class="main__paragraph-contractor">представитель подрядчика</p>
            <p class="main__paragraph-contractor-name">{{ contractor }}</p>
            <p class="main_border-top">(ФИО., должность)</p>

            <p class="main__paragraph-place-head">составили настоящий акт о нижеследующем.</p>
            <p>Организация предоставляет участок (территорию), ограниченный координатами:</p>

            <p class="main__paragraph-place $userDat">{{ items.work.place }}</p>
            <p class="main_border-top">(наименование осей, отметок и номер чертежа)</p>

            <p class="main__paragraph-work-head">для производства на нем:</p>
            <p class="main__paragraph-work">{{ items.work.description }}</p>
            <p class="main_border-top">(наименование работ)</p>

            <p class="main__paragraph-contractors-head">под руководством представителя подрядчика на следующий срок:</p>
            <div class="flex-container_row">
                <div>
                    <span>начало</span>
                    <span class="main__date">{{ parseDate(items.dates[0]) }}</span>
                </div>
                <div>
                    <span>окончание</span>
                    <span class="main__date">{{ parseDate(items.dates[1]) }}</span>
                </div>  
            </div>
            <div class="main__time-box">
                <span>время с</span>
                <span class="main__time">{{ items.times[0].slice(0,-3) }}</span>
                <span>по</span>
                <span class="main__time">{{ items.times[1].slice(0,-3) }}</span>
                <span v-if="items.weekend" class="main__weekend">включая выходные дни</span>
            </div>
        </section>

        <section class="main-include">
            <p class="main-include__elem">2. До начала строительного производства необходимо выполнить следующие мероприятия, обеспечивающие безопасность производства работ:</p>
            <p class="main-include__elem">3. Во время производства работ необходимо выполнять следующие мероприятия, обеспечивающие безопасность производства работ:</p>
            <p class="main-include__elem">4. По завершении производства работ необходимо выполнить следующие мероприятия:</p>
        </section>

        <section class="signature-box act-print">
            <div class="clearfix">
                <p>Представитель организации</p>
                <p class="main__signature main_border-top">(подпись)</p>
            </div>
            <div class="signature-box__item clearfix">
                <p>Представитель подрядчика</p>
                <p class="main__signature main_border-top">(подпись)</p>
            </div>
            <p class="notes">Примечание: При необходимости производства работ после истечения срока действия настоящего акта-допуска составляется акт-допуск на новый срок.</p>
        </section>

        <Safetyaction :checkedActions="items.checkboxs" />
    </div>
</template>

<script>
import Safetyaction from '@/components/act/print/Safetyaction'

export default {
    components: { Safetyaction },
    props: ['items'],

    methods: {
        currentDate() {
            return new Date().toLocaleDateString()
        },

        parseDate(date) {
            return new Date(Date.parse(date)).toLocaleDateString()
        },
    },

    computed: {
        coordinator: function() {
            return (`
                ${this.items.person.coordinator.surname} ${this.items.person.coordinator.name.slice} ${this.items.person.coordinator.patronymic}, 
                ${this.items.person.coordinator.position}
            `)
        },
        contractor: function() {
            return (`
                ${this.items.person.contractor.surname} ${this.items.person.coordinator.name} ${this.items.person.contractor.patronymic}, 
                ${this.items.person.contractor.position}
            `)
        },
    }
}
</script>

<style lang="scss" scoped>
    @media print {
        .act-print {
            page-break-after: always;
        }
    }

    .main {
        width: 210mm;
        padding: 10mm 10mm;
        margin: 0 auto;

        font-size: 14px;
    }

    .flex-container_row {
        display: flex;
        justify-content: space-between;
    }

    .clearfix::after { 
        content: ""; /* Генерируем пустой элемент */
        clear: both; /* Отменяем обтекание*/
        display: block; /* Блочный элемент */
    }

    p {
        margin: 0;
    }
        .main_border-top {
            width: 100%;
            border-top: 1px solid #505050;
            text-align: center;
            font-size: 12px;
            color: #505050;
        }

    .main-info {
        padding: 25px 35px 0 20px;
    }
    .main-info__head {
        width: 230px;
        margin: 0 auto;

        text-align: center;
        line-height: 1.3;
        font-size: inherit;
    }

    .main-info__city-date {
        display: flex;
        justify-content: space-between;

        padding-top: 15px;
    }

    .main-info__city-date_column {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .main__paragraph-claas {
        margin-top: 30px;
        text-align: center;
    }

    .main__paragraph-employee {
        margin-top: 30px;
    }

    .main__paragraph-employee-name {
        margin-top: 20px;
        padding: 0 10px;;
    }

    .main__paragraph-contractor {
        margin-top: 20px;
    }

    .main__paragraph-contractor-name {
        margin-top: 25px;
        padding: 0 10px;;
    }

    .main__paragraph-place-head {
        margin-top: 10px;
    }

    .main__paragraph-place {
        margin-top: 10px;
        padding: 0 10px;;
    }

    .main__paragraph-work-head {
        margin-top: 10px;
    }

    .main__paragraph-work {
        margin-top: 10px;
        padding: 0 10px;;
    }

    .main__paragraph-contractors-head {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .main__date {
        display: inline-block;
        width: 120px;

        text-align: center;
        border-bottom: 1px solid #505050;
    }

    .main__time-box {
        margin-top: 20px;
    }

    .main__time {
        display: inline-block;
        width: 60px;

        text-align: center;
        border-bottom: 1px solid #505050;
    }

    .main__weekend {
        float: right;
    }

    .main-include {
        padding: 25px 35px 0 20px;
    }

    .main-include__elem {
        margin: 10px 0;
    }

    .signature-box {
        padding: 25px 50px 10px 20px;
    }

    .signature-box__item {
        margin-top: 20px;
    }

    .main__signature {
        width: 150px;
        float: right;
    }

    .notes {
        margin-top: 30px;
    }
</style>