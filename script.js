
// -------------------------------------------------------------------------------------

let cards = document.getElementsByClassName("card");

let con_prods=0;

fetch('https://dummyjson.com/products/')
.then(res => res.json())
.then(json => {
    // console.log(json)
    con_prods=json.products;
    // console.log(con_prods);
    convert(con_prods);
})

function convert(json) {

    for (let j = 0; j < 6; j++) {

        // console.log(json);
        let img =cards[j].querySelector(".card-img");

        img.setAttribute("src",`${json[j].thumbnail}`)

        cards[j].querySelector(".card-header").textContent=`${json[j].title}`

        cards[j].querySelector(".card-title").textContent=`price : ${json[j].price}`

    }
}

// -------------------------------------------------------------------------------------

function fetch_data(event) {

    let modal_title = document.getElementsByClassName("modal-title")
    let con_tumb = document.getElementById('con_thumbnail')
    let con_price = document.getElementById("con_price")    
    let con_description = document.getElementById("con_description")
    let con_img = document.getElementsByClassName("con_img")

    // console.log(asd);

    let idx_val = event.target.parentElement;
    let xx = idx_val.getAttribute('index')
    console.log(xx);

    for (let i = 0; i < 6; i++) {
           
        if (xx==con_prods[i].id) {
            console.log('index matched');

            let prod = con_prods[i];
            console.log(prod);

            con_tumb.setAttribute('src',`${prod.thumbnail}`);
            
            for (let k = 0; k < 2; k++) {
                modal_title[k].textContent=`${prod.title}`;
                
                con_img[k].setAttribute('src',`${prod.images[k]}`)
            }
                
            con_price.textContent=`price : ${prod.price}`;
            con_description.textContent=`${prod.description}`;

        } 
    }
}

