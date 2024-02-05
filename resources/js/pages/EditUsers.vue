<template>
    <v-dialog :model-value="true">
        <v-sheet width="300" class="mx-auto">
            <v-form ref="form" class="flex py-5 px-5">
                <h3>User Bearbeiten:</h3>
                <v-text-field v-model="user_local.name" label="First name"></v-text-field>
                <v-text-field v-model="user_local.email" label="email"></v-text-field>
                <v-btn>Speichern</v-btn>
            </v-form>
        </v-sheet>
    </v-dialog>
</template>

<script>
export default {
    name: "EditUsers",

    props: ["user"],

    data() {
        return {
            user_local: {
                name: this.user.name,
                email: this.user.email,
            },
        };
    },
};
</script>

<style></style>
