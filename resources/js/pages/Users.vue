<template>
    <div>
        <editUsers v-if="selectedUser != null" @click:outside="closeDialog()" :user="selectedUser"></editUsers>
        <v-table>
            <thead>
                <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">ID</th>
                    <th class="text-left">Registiert am:</th>
                    <th class="text-left">Bearbeiten</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.id }}</td>
                    <td>{{ formatDateTime(user.created_at) }}</td>
                    <td>
                        <v-btn @click="selectUser(user)">Bearbeiten</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import editUsers from "./EditUsers.vue";

export default {
    name: "App",
    components: { editUsers },

    data() {
        return {
            users: [],
            selectedUser: null,
        };
    },

    created() {
        axios
            .get("/api/users")
            .then((response) => {
                this.users = response.data;
            })
            .catch((error) => {
                console.error("Fehler beim Abrufen der Benutzerdaten: ", error);
            });
    },

    methods: {

        closeDialog() {
            this.selectedUser = null;
        },

        formatDateTime(dateTime) {
            const date = new Date(dateTime);
            return date.toLocaleString();
        },

        selectUser(user) {
            this.selectedUser = user;
        },
    },
};
</script>
