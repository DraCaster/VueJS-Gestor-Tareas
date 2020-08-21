<template>
  <div>
    <v-text-field label="Nueva Tarea" v-model="task" @keyup.enter="addTask" />
    <v-btn color="green" dark @click="addTask">Agregar</v-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NewTask",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    ...mapMutations(["setTask"]),
    addTask() {
      if (this.task.length > 0) {
        this.setTask(this.task);
        this.task = "";
      } else {
        alert("La tarea no puede estar vacia");
      }
    },
  },
};
</script>
