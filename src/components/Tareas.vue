<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                <v-card>
                    <v-card-title><v-icon left>mdi-pen-plus</v-icon>Nueva</v-card-title>
                    <v-card-subtitle>Agregar nuevas tareas</v-card-subtitle>
                    <v-card-text>
                        <tareas-nueva></tareas-nueva>
                    </v-card-text>
                </v-card>

                <v-card class="mt-3" >
                    <v-card-title> <v-icon left>mdi-file-table-outline </v-icon>
                        Tareas</v-card-title>
                    <v-card-subtitle>Ver, editar y eliminar las tareas</v-card-subtitle>
                    <v-card-text>
                        <div v-if="cargando" class="cargando">
                            <v-progress-circular
                                    :size="40"
                                    color="primary"
                                    indeterminate
                            ></v-progress-circular>
                        </div>
                        <TareasListar v-else/>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="4">

                <v-card >
                    
                    <v-card-title><v-icon left>mdi-magnify</v-icon> Filtrar</v-card-title>
                    <v-card-subtitle>Buscar entre las tareas</v-card-subtitle>
                    <v-card-text>
                        <tareas-filtrar></tareas-filtrar>
                    </v-card-text>
                </v-card>

                <v-card class="mt-3">
                    <v-card-title><v-icon left>mdi-chart-bar-stacked </v-icon>
                        Estadisticas</v-card-title>
                    <v-card-subtitle>Historial de tareas</v-card-subtitle>
                    <v-card-text>
                        <v-chip
                                class="ma-2"
                                color="green"
                                text-color="white"
                        >
                            <v-avatar
                                    left
                                    class="green darken-4"
                            >
                                {{obtenerTareasvigentes}}
                            </v-avatar>
                            Vigentes
                        </v-chip>

                        <v-chip
                                class="ma-2"
                                color="red"
                                text-color="white"
                        >
                            <v-avatar
                                    left
                                    class="red darken-4"
                            >
                                {{contadorEliminadas}}
                            </v-avatar>
                            Eliminadas
                        </v-chip>

                        <v-chip
                                class="ma-2"
                                color="indigo"
                                text-color="white"
                        >
                            <v-avatar
                                    left
                                    class="indigo darken-4"
                            >
                                {{obtenerTareasTotales}}
                            </v-avatar>
                            Totales
                        </v-chip>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>


        <tareas-notificador :notificar="notificar"></tareas-notificador>
    </v-container>

</template>

<script>
    import {mapActions, mapState, mapMutations} from 'vuex'
    import TareasNueva from "./TareasNueva";
    import TareasListar from "./TareasListar";
    import TareasFiltrar from "./TareasFiltrar";
    import TareasNotificador from "./TareasNotificador";

    export default {
        name: 'Tareas',
        components: {TareasListar, TareasNueva, TareasFiltrar, TareasNotificador},
        mounted() {
            this.cargarTareas()
        },
        computed: {
            ...mapState(['cargando', 'tareas', 'notificar', 'contadorEliminadas']), //this.cargando
            obtenerTareasvigentes() {
                return this.tareas.length
            },
            obtenerTareasTotales() {
                return this.obtenerTareasvigentes + this.contadorEliminadas
            }
        },
        methods: {
            ...mapActions(['cargarTareas']),
            ...mapMutations(['setNotificar'])
        }
    }
</script>


<style scoped>
    .cargando {
        color: blue
    }
</style>
