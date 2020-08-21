<template>
    <v-app>
        <v-app-bar app color="amber lighten-1" dark>
            <v-toolbar-title class="title">Gestor de Tareas</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon target="_blank" href="https://github.com/DraCaster">
                <v-icon>mdi-link</v-icon>
            </v-btn>
        </v-app-bar>
        <v-content class="grey lighten-3">
            <Tasks/>
        </v-content>
    </v-app>
</template>

<script>
    import Tasks from "./components/Tasks";
    export default {
        name: 'App',
        components: {Tasks},
    }
</script>
