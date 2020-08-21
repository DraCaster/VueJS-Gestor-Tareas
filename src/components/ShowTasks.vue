<template>
  <ul>
    <li class="ma-2" v-for="(task, index) in getTasksFilter" :key="index">
      <template v-if="editing === index">
        <v-row>
          <v-col cols="8">
            <v-text-field
              hide-details
              dense
              solo
              type="text"
              v-model="text"
              @keyup.enter="emitUpdateTask"
            />
          </v-col>
          <v-col cols="4">
            <v-btn class="mt-1" small color="success" @click="emitUpdateTask"
              >Confirmar</v-btn
            >
          </v-col>
        </v-row>
      </template>

      <template v-else>
        {{ task }}
        <v-btn
          icon
          x-small
          color="red"
          class="float-right"
          @click="removeTask(index)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn
          icon
          x-small
          color="blue"
          class="float-right"
          @click="taskUpdate(index, task)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-divider></v-divider>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ShowTasks",
  data() {
    return {
      editing: null,
      text: "",
    };
  },
  computed: {
    ...mapGetters(["getTasksFilter"]), //this.obtenerTareasFiltradas
  },
  methods: {
    ...mapMutations(["removeTask", "updateTask"]),
    taskUpdate(index, task) {
      this.editing = index;
      this.text = task;
    },
    emitUpdateTask() {
      this.updateTask({ index: this.editing, task: this.text });
      this.editing = null;
      this.text = "";
    },
  },
};
</script>

<style>
.eliminar {
  border: none;
  background-color: transparent;
  color: red;
}

.editar {
  border: none;
  background-color: transparent;
  color: blue;
}
</style>
