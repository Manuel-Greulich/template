<template>
    <div class="container">
        <div class="row gap">
            <div v-for="(image, index) in images" :key="index" class="col-md-2 imageBox">
                <div>
                    <img :src="'/images/' + image.url" class="customImage img-fluid card-img-top" />
                </div>

                <div class="card-body">
                    <h6 class="card-text">{{ image.name }}</h6>
                    <div class="form-check form-switch">
                        <input type="checkbox" v-model="selectedImages" :value="index" name="checkbox" class="form-check-input" />
                    </div>
                </div>
            </div>

            <button @click="deleteSelectedImages" class="btn btn-outline-primary">Bilder löschen</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gallery",
    data() {
        return {
            images: [
                { id: 1, name: "Erdbeere", url: "/erdbeere.jpg" },
                { id: 2, name: "Skyline", url: "/skyline.jpg" },
                { id: 3, name: "Apple", url: "/apple.jpg" },
                { id: 4, name: "Zaluma", url: "./Zaluma_Logo.png" },
                { id: 5, name: "Rock", url: "/rock.jpg" },
                { id: 6, name: "Coding", url: "/coding.jpg" },
                { id: 7, name: "Apfel", url: "/apfel.jpg" },
                { id: 8, name: "Sunlight", url: "/sunlight.jpg" },
                { id: 9, name: "Banane", url: "/banane.jpg" },
                { id: 10, name: "Waterrock", url: "/waterrock.jpg" },
                { id: 11, name: "Town", url: "/town.jpg" },
                { id: 12, name: "Kiwi", url: "/kiwi.jpg" },
                { id: 13, name: "Smyle", url: "/smyle.jpg" },
                { id: 14, name: "Heaven", url: "/heaven.jpg" },
                { id: 15, name: "Coffee", url: "/coffee.jpg" },
                { id: 16, name: "Astronaut", url: "/astronaut.jpg" },
                { id: 17, name: "Ballons", url: "/ballons.jpg" },
                { id: 18, name: "Car", url: "/car.jpg" },
                { id: 19, name: "Pizza", url: "/pizza.jpg" },
                { id: 20, name: "Sweet", url: "/sweet.jpg" },
            ],
            selectedImages: [],
        };
    },
    methods: {
        // ausgewählte Bilder (id) zu selectedImages hinzugefügt
        // this.images = nicht ausgewählte bilder
        // selectedImages wird gelöscht und zurückgesetzt
        deleteSelectedImages() {
            this.images = this.images.filter((image) => !this.selectedImages.includes(image.id));
            this.selectedImages = [];
        },
    },
};
</script>

<style>
/* main {
    background-color: #edf2f7;
} */
.imageBox {
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
}

.customImage {
    width: 100%;
    height: 150px;
    object-fit: cover;
}
.imageName {
    background-color: #edf2f7;
    width: 100%;
    text-align: center;
}
.gap {
    gap: 1rem;
}

.card-body {
    padding: unset;
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 8px;
    justify-content: space-between;
}
</style>
