<template>
    <div>
        <v-text-field hide-details label="Filtrar Tareas" type="text"
                      v-model="filtro" />
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "FilterTask",

        computed:{
            filtro: {
                get(){
                    return this.value
                },
                set(val){
                    this.setFiltro(val)
                }
            }
        },
        methods: {
            ...mapMutations(['setFiltro']) //this.setFiltro
        }
    }
</script>

<style scoped>

</style>
