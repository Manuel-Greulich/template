<template>
    <v-app id="main">
        <navbar ref="navbar"></navbar>

        <app-header
            @toggle-drawer="$refs.navbar.drawer = !$refs.navbar.drawer"
        ></app-header>

        <v-main>
            <v-container>
                <!-- <h1>Content goes here</h1> -->
                <!-- Benutzer geht auf URL (z. B. "/home" oder "/about"), Vue Router die entsprechende Komponente laden und in das <router-view>-Element einfügen -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <app-footer></app-footer>
    </v-app>
</template>

<script>
import { RouterView } from "vue-router";

import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
    name: "App",
    components: {
        navbar: Navbar,
        "app-header": Header,
        "app-footer": Footer,
    },
};
</script>
