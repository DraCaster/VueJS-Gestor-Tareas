<template>
    <v-snackbar top :color="type" dark v-model="snack" :timeout="800" @input="setNotify(null)">
        {{message}}
    </v-snackbar>
</template>

<script>
    import {mapMutations} from 'vuex'

    let types = ['delete', 'update', 'add']

    export default {
        name: "SnackbarTask",
        props: {
            notify: {type: String, validator: value => types.includes(value)}
        },
        data(){
            return {
                snack: false
            }
        },
        watch: {
          notify(val){
              if(val){
                  this.snack= true
              }
          }
        },
        methods: {
            ...mapMutations(['setNotify'])
        },
        computed: {
            type(){
                switch (this.notify) {
                    case 'delete':
                        return 'error'
                    case 'update':
                        return 'warning'
                    case 'add':
                        return 'success'
                    default:
                        return 'info'
                }
            },
            message() {
                switch (this.notify) {
                    case 'delete':
                        return 'Se elimino una tarea'
                    case 'update':
                        return 'Se edito una tarea'
                    case 'add':
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

    .delete {
        border: 1px solid grey;
        background-color: red;
        color: white;
    }

    .update {
        border: 1px solid grey;
        background-color: blue;
        color: white;
    }

    .add {
        border: 1px solid grey;
        background-color: green;
        color: white;
    }
</style>
