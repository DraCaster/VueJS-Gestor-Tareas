<template>
    <v-snackbar top :color="tipo" dark v-model="snack" :timeout="800" @input="setNotificar(null)">
        {{mensaje}}
    </v-snackbar>
</template>

<script>
    import {mapMutations} from 'vuex'
    let types = ['eliminar', 'editar', 'agregar']
    export default {
        name: "SnackbarTask",
        props: {
            notificar: {type: String, validator: value => types.includes(value)}
        },
        data(){
            return {
                snack: false
            }
        },
        watch: {
          notificar(val){
              if(val){
                  this.snack= true
              }
          }
        },
        methods: {
            ...mapMutations(['setNotificar'])
        },
        computed: {
            tipo(){
                switch (this.notificar) {
                    case 'eliminar':
                        return 'error'
                    case 'editar':
                        return 'warning'
                    case 'agregar':
                        return 'success'
                    default:
                        return 'info'
                }
            },
            mensaje() {
                switch (this.notificar) {
                    case 'eliminar':
                        return 'Se elimino una tarea'
                    case 'editar':
                        return 'Se edito una tarea'
                    case 'agregar':
                        return 'Se agrego una tarea'
                    default:
                        return ''
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        position: absolute;
        top: 1%;
        left: 45%;
        width: 10%;
        padding: 10px;
    }

    .eliminar {
        border: 1px solid grey;
        background-color: red;
        color: white;
    }

    .editar {
        border: 1px solid grey;
        background-color: blue;
        color: white;
    }

    .agregar {
        border: 1px solid grey;
        background-color: green;
        color: white;
    }
</style>
