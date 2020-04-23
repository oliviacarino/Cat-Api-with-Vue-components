var header = new Vue({
    el: '#header',
    data: {
        // yourName: 'Olivia',
        // description: 'I like mechanical keyboards.',
        link1: 'Bobtail',
        link2: 'Abyssinian',
        link3: 'Aegean',
        link4: 'Shorthair',
        link5: 'Devon Rex',
        // link6: 'Never gonna',
        // link7: 'let you down',
        // avatar: 'images/doomAc.jpg'
    }
})

var introduction = new Vue({
    el: '#top',
    data: {
        introText: 'Cats!',
        subText: 'Click the breeds in the navbar to see some cute slideshows.'
    }
})

// var portfolio = new Vue({
//     el: '#portfolio',
//     data: {
//         portfolioTitle: 'Favorite Mech Boards',
//         image1: 'images/mech1.jpg',
//         imgText1: 'Ducky MIYA Pro Sakura Pink LED 65% Dye Sub PBT Mechanical Keyboard',
//         image2: 'images/mech2.jpg',
//         imgText2: 'Ducky One 2 Horizon TKL Double Shot PBT Mechanical Keyboard',
//         image3: 'images/mech3.jpg',
//         imgText3: 'Ducky x MK Frozen Llama Mecha Mini RGB LED 60% Double Shot PBT Mechanical Keyboard'
//     }
// })

var about = new Vue({
    el: '#about',
    data: {
        aboutImage: 'images/doomAc.jpg',
        aboutText: 'I have been enjoying Doom Eternal and Animal Crossing New Horizons.'
    }
})

var list = new Vue({
    el: '#list',
    data: {
        favoriteSwitches: ['Cherry MX Brown Switch', 'Cherry MX Red Switch', 'Cherry MX Clear'],
        link6: 'https://mechanicalkeyboards.com/'
        // linkText: 'MechanicalKeyboards.com'
    }
})

var conditional = new Vue({
    el: '#conditional',
    data: {
        teacherName: '',
        switchName: '',
    }
})

var getColor = new Vue({
    el: '#function',
    data: {
        bgColor: '',
        colors: ['red', 'green', 'blue'],
        newWidth: '',
        width: []
    },
    methods: {
        changeColor(color) {
            this.bgColor = color
        },
        // changeWidth(width){
        //     let width = ['50px', '100px','150px'];
        //     for(i = 0; i < width.length; i++){
        //         this.changeWidth
        //     }
        // }
    }
})

var contact = new Vue({
    el: '#contact',
    data: {
        fillerText: 'This is where you can contact me.'
    }
})