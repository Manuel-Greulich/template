<template>
    <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
            <!-- <v-list>
                <v-img
                    src="./resources/images/Zaluma_Logo.jpg"
                    :width="100"
                    aspect-ratio="16/9"
                >
                </v-img>
            </v-list> -->
            <v-list>
                <v-list-item
                    prepend-avatar="https://media.licdn.com/dms/image/C4E0BAQGCwv5NYBG5wQ/company-logo_200_200/0/1680189803805?e=2147483647&v=beta&t=ZOisDu9VG11h7eOnZY6aH4fX_aVyx995CBFMtZrfRMo"
                    title="Gast User"
                    subtitle="Logged In"
                ></v-list-item>
            </v-list>

            <v-list-item link exact :to="{ name: 'Dashboard' }">
                <template v-slot:prepend>
                    <v-icon icon="mdi-view-dashboard"></v-icon>
                </template>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-group value="Users">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
                </template>
                <v-list-group value="Admin">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" title="Admin"></v-list-item>
                    </template>
                </v-list-group>
            </v-list-group>

            <v-list-item link exact :to="{ name: 'about' }">
                <template v-slot:prepend>
                    <v-icon icon="mdi-information"></v-icon>
                </template>
                <v-list-item-content>
                    <v-list-item-title>About</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link exact :to="{ name: 'users' }">
                <template v-slot:prepend>
                    <v-icon icon="mdi-account"></v-icon>
                </template>
                <v-list-item-content>
                    <v-list-item-title>Users</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link exact :to="{ name: 'posts' }">
                <template v-slot:prepend>
                    <v-icon icon="mdi-note-text-outline"></v-icon>
                </template>
                <v-list-item-content>
                    <v-list-item-title>Posts</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-list-item link exact :to="{ name: 'contact' }">
                <template v-slot:prepend>
                    <v-icon icon="mdi-email"></v-icon>
                </template>
                <v-list-item-content>
                    <v-list-item-title>Contact</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link exact :to="{ name: 'gallery' }">
                <template v-slot:prepend>
                    <v-icon icon="mdi-image-edit"></v-icon>
                </template>
                <v-list-item-content>
                    <v-list-item-title>Gallery</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            open: ["Users"],
            drawer: true,
        };
    },
};
</script>

<style scoped>
/* vuetify klassen anpassen */
/* :deep(.v-list-item-title) {
	font-size: 23px !important;
} */

/* .v-list-item__content {
    widows: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
} */

/* :deep(.v-list-item__content) {
    width: 100% !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
} */
</style>
