<template>
    <ul>
        <li class="ma-2" v-for="(tarea,index) in obtenerTareasFiltradas" :key="index">

            <template v-if="editando === index">
                <v-row>
                    <v-col cols="8">
                        <v-text-field hide-details dense solo type="text" v-model="texto" @keyup.enter="emitirTareaEditada" />

                    </v-col>
                    <v-col cols="4">
                        <v-btn class="mt-1" small color="success" @click="emitirTareaEditada">confirmar</v-btn>

                    </v-col>
                </v-row>
            </template>

            <template v-else>
                {{tarea}}
                <v-btn icon x-small color="red" class="float-right" @click="removerTarea(index)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-btn icon x-small color="blue" class="float-right" @click="editarTarea(index,tarea)">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>

            </template>

            <v-divider></v-divider>
        </li>
    </ul>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: 'TareasListar',
        data(){
            return {
                editando: null,
                texto: ''
            }
        },
        computed: {
          ...mapGetters(['obtenerTareasFiltradas']) //this.obtenerTareasFiltradas
        },
        methods:{
            ...mapMutations(['removerTarea', 'modificarTarea']),
            editarTarea(index,tarea){
                this.editando = index
                this.texto = tarea
            },
            emitirTareaEditada(){
                this.modificarTarea({index: this.editando, tarea: this.texto})
                this.editando = null
                this.texto = ''
            }
        }
    }
</script>

<style>
    .eliminar {
        border: none;
        background-color: transparent;
        color: red
    }

    .editar {
        border: none;
        background-color: transparent;
        color: blue
    }

</style>
