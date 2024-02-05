<template>
    <v-app-bar app color="white" dark>
        <v-app-bar-nav-icon
            @click.stop="$emit('toggle-drawer')"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Coding</v-toolbar-title>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>
