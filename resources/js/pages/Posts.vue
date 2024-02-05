<template>
    <v-sheet width="300" class="mx-auto">
        <!-- v-model=valid boolean, quasi doppelte absicherung, nützlich für zusätzliche validierungen oder regeln vorm absenden des formulars -->
        <v-form ref="form" v-model="valid" @submit.prevent>
            <v-text-field
                v-model="firstName"
                :rules="rules"
                label="First name"
            ></v-text-field>
            <v-text-field
                v-model="lastName"
                :rules="rules"
                label="Last name"
            ></v-text-field>
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
            ></v-text-field>
            <v-text-field
                v-model="message"
                :rules="messageRules"
                label="Nachricht an uns:"
            ></v-text-field>
            <v-btn @click="submitForm" type="submit" block class="mt-2"
                >Send Post</v-btn
            >
        </v-form>
    </v-sheet>
</template>

<script>
export default {
    data: () => ({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        valid: false,
        rules: [(value) => !!value || "Name is required."],
        emailRules: [
            (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
        ],
        messageRules: [
            (value) =>
                (typeof value === "string" && value.length <= 50) ||
                "Message must be text and can't exceed 50 characters.",
        ],
    }),

    methods: {
        resetForm() {
            this.$refs.form.reset();
            // this.$refs.form.resetValidation(); // not working for now
        },
        submitForm() {
            axios
                .post("/api/posts", {
                    firstname: this.firstName,
                    lastname: this.lastName,
                    email: this.email,
                    message: this.message,
                })
                .then((response) => {
                    console.log(response.data);
                    this.resetForm();
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>
