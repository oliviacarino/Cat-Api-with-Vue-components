//Create a new component by combining the data, methods, etc 

Vue.component('portfolio', {
    template: `<section id="portfolio" class="two">
    <div class="container">
        <header>
            <h2>Portfolio</h2>
        </header>

        <p>Here are three cool boards that I like:</p>

        <div class="row">
            <div class="col-4 col-12-mobile">
                <article class="item">
                    <a href="#" class="image fit"><img :src="image1" /></a>
                    <header>
                        <h3>{{imgText1}}</h3>
                    </header>
                </article>
            </div>
            <div class="col-4 col-12-mobile">
                <article class="item">
                    <a href="#" class="image fit"><img :src="image2" /></a>
                    <header>
                        <h3>{{imgText2}}</h3>
                    </header>
                </article>
            </div>
            <div class="col-4 col-12-mobile">
                <article class="item">
                    <a href="#" class="image fit"><img :src="image3" /></a>
                    <header>
                        <h3>{{imgText3}}</h3>
                    </header>
                </article>
            </div>
        </div>
    </div>
</section>`,
    data() {
        return {
            portfolioTitle: 'Favorite Mech Boards',
            image1: 'images/mech1.jpg',
            imgText1: 'Ducky MIYA Pro Sakura Pink LED 65% Dye Sub PBT Mechanical Keyboard',
            image2: 'images/mech2.jpg',
            imgText2: 'Ducky One 2 Horizon TKL Double Shot PBT Mechanical Keyboard',
            image3: 'images/mech3.jpg',
            imgText3: 'Ducky x MK Frozen Llama Mecha Mini RGB LED 60% Double Shot PBT Mechanical Keyboard'
        }
    }
})

var portfolio = new Vue({
    el: '#po'
    // data: {
    //     portfolioTitle: 'Favorite Mech Boards',
    //     image1: 'images/mech1.jpg',
    //     imgText1: 'Ducky MIYA Pro Sakura Pink LED 65% Dye Sub PBT Mechanical Keyboard',
    //     image2: 'images/mech2.jpg',
    //     imgText2: 'Ducky One 2 Horizon TKL Double Shot PBT Mechanical Keyboard',
    //     image3: 'images/mech3.jpg',
    //     imgText3: 'Ducky x MK Frozen Llama Mecha Mini RGB LED 60% Double Shot PBT Mechanical Keyboard'
    // }
})