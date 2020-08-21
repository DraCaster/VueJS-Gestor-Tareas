<template>
  <div>
    <v-text-field
      hide-details
      label="Filtrar Tareas"
      type="text"
      v-model="filter"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "FilterTask",
  computed: {
    filter: {
      get() {
        return this.value;
      },
      set(val) {
        this.setFilter(val);
      },
    },
  },
  methods: {
    ...mapMutations(["setFilter"])
  },
};
</script>
