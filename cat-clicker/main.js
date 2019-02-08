// model 

let model = {
    currentCat: null,
    cats: [
        {
            count: 0,
            name: 'Lily',
            imgSrc: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg",

        },
        {
            count: 0,
            name: 'Andy',
            imgSrc: "https://www.springfieldnewssun.com/rf/image_large/Pub/p9/CmgSharedContent/2018/01/06/Images/GettyImages-155256950-RtD12E73KjzHTo558WCxcqN-680x383.jpeg"
        },
        {
            count: 0,
            name: 'Bobby',
            imgSrc: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }
    ]
}

// octopus

let octopus = {
    init: function() {
        model.currentCat = model.cats[0]

        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },
    getCats: function(){
        return model.cats;
    },
    setCurrentCat: function(cat){
        model.currentCat = cat;
    },
    incrementCounter: function() {
        model.currentCat.count++;
        catView.render();
    }
}

// view 

let catView = {
    init: function() {
        this.catElem = $('#cat');
        this.catNameElem = $('#cat-name');
        this.catImageElem = $('#cat-img');
        this.countElem = $('#cat-count');

        this.catImageElem.click(function() {
            octopus.incrementCounter();
        })

        this.render();
    },
    render: function() {
        // update the DOM elements with values from the current cat 
        let currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.count;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
}

let catListView = {
    init: function() {
        this.catListElem = $('#cat-list');
        this.render();
    },
    render: function() {
        let cat, elem, i;
        let cats = octopus.getCats();

        this.catListElem.innerHTML = '';

        for(let i = 0; i < cats.length; i++) {
            cat = cats[i]

            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                }
            })(cat));

            this.catListElem.appendChild(elem);
        }
    }
}

octopus.init();


































// for(let i = 0; i < $(".cat").length; i++){
//     $($(".cat")[i]).hide();
// }

// function bindButtonToCat(idNum){
//     $("#button"+idNum).click(function(){
//         $("#cat"+idNum).show();
//     })
// }


// function bindCounterToCat(idNum){
//     let cat = "#cat" + idNum  
//     $(cat).click(function(){
//         let count = $(cat+" > .counter").text();
//         count = parseInt(count) + 1
//         $(cat+" > .counter").text(count);
//     })
// }


// for(let i = 1; i <= $(".cat").length; i++) {
//     bindCounterToCat(i);
// }

// for(let i = 1; i <= $("button").length; i++){
//     bindButtonToCat(i);
// }

// $("#cat1").show();