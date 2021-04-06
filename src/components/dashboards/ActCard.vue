<template>
  <v-card class="pa-4">
    <v-row>
        <v-col cols="6">
            <v-card-title>{{`${item.firm.form} ${item.firm.name}`}}</v-card-title>

            <v-card-text>
                <div class="d-flex flex-column">
            
                    <div class="">
                        <span><strong>Номер договора:</strong> {{item.contract.number}}</span>

                        <a class="ml-5" :href="item.contract.url">Открыть в Sharepoint</a>
                    </div>

                    <div class="">
                        <span><strong>Номер ТЗ:</strong> {{item.tz.number}}</span>

                        <a class="ml-5" :href="item.contract.url">Открыть в Sharepoint</a>
                    </div>

                    <v-divider class="mx-4 mt-3"></v-divider>

                    <div class="d-flex flex-column py-3">
                        <span>
                            <strong>Руководитель проекта: </strong>
                            {{item.person.coordinator.surname}}
                        </span>

                        <span><strong>Координатор проекта со стороны КЛААС: </strong>{{item.person.representative.surname}}</span>
                        <span><strong>Представитель подрядной организации: </strong>{{item.person.contractor.surname}}</span>
                    </div>

                    <v-divider class="mx-4"></v-divider>

                    <div class="d-flex flex-column py-3">
                        <span><strong>Время проведения работ: </strong>{{`c ${item.times[0]} по ${item.times[1]}`}}</span>
                        <span v-if="item.weekend"><strong>Включая выходные дни</strong></span>
                    </div>

                    <v-divider class="mx-4"></v-divider>

                    <h3 class="mt-4">Место провердения работ</h3>
                    <p class="mb-0 mt-1">{{ item.work.place }}</p>

                    <h3 class="mt-4">Описание работ</h3>
                    <p class="mb-0 mt-1">{{ item.work.description }}</p>

                    <ul class="mt-5">
                        <li>
                            <h4 class="d-inline-block">Статус СТО:</h4>
                            <span class="ml-5">{{ item.approvers.sto }}</span>
                        </li>

                        <li>     
                            <h4 class="d-inline-block">Статус ЭЗиС:</h4>
                            <span class="ml-5">{{ item.approvers.cc }}</span>
                        </li>

                        <li>
                            <h4 class="d-inline-block">Статус СБ:</h4>
                            <span class="ml-5">{{ item.approvers.sd }}</span>
                        </li>
                    </ul>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                    v-if="currentStatus !== 'owner'"
                    outlined 
                    color="green darken-2" 
                    @click="changeStatus(index, 'approve')">
                Согласовать</v-btn>

                <v-btn
                    v-if="currentStatus !== 'owner'"
                    class="ml-5" 
                    outlined 
                    color="red darken-2" 
                    @click="changeStatus(index, 'disapprove')">
                Отклонить</v-btn>
                
                <router-link 
                    class="ml-5 reset_underline" 
                    :to="{name: 'printact', params: {id: index}}"
                >
                    <v-btn
                        v-if='everyoneAgree'
                        outlined 
                        color="orange darken-2"
                        >
                        <v-icon class="mr-3">mdi-printer</v-icon>
                        Печать
                    </v-btn>
                </router-link>
            </v-card-actions>
        </v-col>

        <v-col cols="6">
            <Maps 
                :checkedItems='item.maps'
            />
        </v-col>
    </v-row>

    <v-row>
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>Добавить документы/сотрудников</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <Worker :actId='item.id' />
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header>Виды работ</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <ActCheckbox :item="item.checkboxs" />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
    
  </v-card>
</template>

<script>
import Maps from '@/components/maps/Maps'
import ActCheckbox from '@/components/dashboards/ActCheckbox'
import Worker from '@/components/dashboards/workerItems/Worker'

  export default {
    components: {Maps, ActCheckbox, Worker},
    props: ['item', 'index', 'currentStatus'],

    methods: {
        changeStatus: function(index, status) {
            this.$store.dispatch('acts/changeStatus', {index, status, roles: this.$store.state.user.roles})
        },
    },

    computed: {
        everyoneAgree() {
            for(let key in this.item.approvers) {
                if(this.item.approvers[key] == 'disapprove' || this.item.approvers[key] == 'new') {
                    return false
                }
            }
            return true
        }
    }
  }
</script>

<style lang="scss" scoped>
    .reset_underline {
        text-decoration: none;
    }
</style>