Vue.component('cats', {
    template: `<div class="fixImg">
    <h2>{{image.breeds[0].name}}</h2>
    <h4>{{image.breeds[0].description}}</h4>
    <h4><strong>Temperament: </strong>{{image.breeds[0].temperament}}</h4>
    <h4 :class="{hyper: image.breeds[0].energy_level > 2, calm: image.breeds[0].energy_level <= 3}">Energy Level: {{image.breeds[0].energy_level}}</h4>
    <h4><strong>Origin: </strong>{{image.breeds[0].origin}}</h4>
    <img :src="image.url">
    <button v-on:click="slideshow()">Slideshow</button>
    </div>`,
    props: {
        whichcat: String
    },
    data() {
        return {
            breeds: [],
            image: "",
            whichcat: "abob",
            allofit: [],
            i: 0
        }
    },
    //call loadNextImage() and use whichCat as parameter
    created() {
        this.loadNextImage(this.whichcat);
    },
    methods: {
        //use loadNextImage(breedID) to inject data into slideshow()
        async loadNextImage(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                    params: {
                        limit: 10,
                        size: "full"
                    }
                })
                this.allofit = response.data;

            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        //create a slideshow
        async slideshow() {
            //set beginning of slideshow to first image in array
            if (this.i >= this.allofit.length) {
                this.i = 0;
            }
            //make slideshow set image to each element in array
            this.image = this.allofit[this.i];
            this.i++;
        }
    }

})

new Vue({
    el: '#bobcat'
})