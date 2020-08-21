<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-card>
          <v-card-title><v-icon left>mdi-pen-plus</v-icon>Nueva</v-card-title>
          <v-card-subtitle>Agregar nuevas tareas</v-card-subtitle>
          <v-card-text>
            <NewTask />
          </v-card-text>
        </v-card>

        <v-card class="mt-3">
          <v-card-title>
            <v-icon left>mdi-file-table-outline </v-icon> Tareas</v-card-title
          >
          <v-card-subtitle>Ver, editar y eliminar las tareas</v-card-subtitle>
          <v-card-text>
            <div v-if="loading" class="cargando">
              <v-progress-circular
                :size="40"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </div>
            <ShowTasks v-else />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card>
          <v-card-title><v-icon left>mdi-magnify</v-icon> Filtrar</v-card-title>
          <v-card-subtitle>Buscar entre las tareas</v-card-subtitle>
          <v-card-text>
            <FilterTask />
          </v-card-text>
        </v-card>

        <v-card class="mt-3">
          <v-card-title
            ><v-icon left>mdi-chart-bar-stacked </v-icon>
            Estadisticas</v-card-title
          >
          <v-card-subtitle>Historial de tareas</v-card-subtitle>
          <v-card-text>
            <v-chip class="ma-2" color="green" text-color="white">
              <v-avatar left class="green darken-4">
                {{ getCurrentTasks }}
              </v-avatar>
              Vigentes
            </v-chip>

            <v-chip class="ma-2" color="red" text-color="white">
              <v-avatar left class="red darken-4">
                {{ tasksDeleted }}
              </v-avatar>
              Eliminadas
            </v-chip>

            <v-chip class="ma-2" color="indigo" text-color="white">
              <v-avatar left class="indigo darken-4">
                {{ getTotalTasks }}
              </v-avatar>
              Totales
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <SnackbarTask :notify="notify" />
  </v-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import NewTask from "./NewTask";
import ShowTasks from "./ShowTasks";
import FilterTask from "./FilterTask";
import SnackbarTask from "./SnackbarTask";

export default {
  name: "Tasks",
  components: { ShowTasks, NewTask, FilterTask, SnackbarTask },
  mounted() {
    this.getTasks();
  },
  computed: {
    ...mapState(["loading", "tasks", "notify", "tasksDeleted"]), //this.cargando
    getCurrentTasks() {
      return this.tasks.length;
    },
    getTotalTasks() {
      return this.getCurrentTasks + this.tasksDeleted;
    },
  },
  methods: {
    ...mapActions(["getTasks"]),
    ...mapMutations(["setNotify"]),
  },
};
</script>

<style scoped>
.cargando {
  color: blue;
}
</style>
