const BASE_URL = "http://127.0.0.1:3000"


document.addEventListener("DOMContentLoaded", () => {
    createCoffeeShopForm()
    fetchCoffeeShops()   
    // document.body.style.backgroundImage = "url('https://res.cloudinary.com/grohealth/image/upload/v1581688713/DCUK/Content/iStock-938993594-1000x600.jpg)";
})

// //read - fetch coffee shops index

function fetchCoffeeShops() {
    fetch(`${BASE_URL}/coffee_shops`)
    .then(resp => resp.json())
    .then(coffee_shops => {
        for (const coffee_shop of coffee_shops) {
            // console.log("ruby obj", coffee_shops)
            let cs = new CoffeeShop(coffee_shop.id, coffee_shop.name, coffee_shop.image, coffee_shop.description, coffee_shop.location, coffee_shop.vibe)
            cs.renderCoffeeShopCard();
            // console.log("js obj", cs)
        }

    })
}

// //read - fetch vibes index

// function fetchVibes() {
//     fetch(`${BASE_URL}/vibes`)
//     .then(resp => resp.json())
//     .then(vibes => {
//         for (const vibe of vibes) {
//             // let v = new Vibe(vibe.id, vibe.name)
//             let v = document.getElementById("vibe")
//             let o = document.createElement("option")
//             o.appendChild(document.createTextNode(vibe.name))
//             o.value = vibe.name
            
//             v.appendChild(o)
            
//         }
//     })
// }

// //render Vibes categories 

// // renderVibesCategory = () => {
// //     let vibesCategoryDiv = document.getElementById("vibes_container")
// //     vibesCategoryDiv.innerHTML +=  
// //     `
// //     <p>See all Coffee Shops for Vibes of:</p>
// //     <button class="button-bttn" data-id=${this.id} onclick="findVibeID(1)">Chill Vibes</button>
// //     <button class="button-bttn" data-id=${this.id} onclick="">Unchill Vibes</button><br>
// //     _________________________
// //     `  

    
// // }



// //create - coffee shop

// //coffee shop form

function createCoffeeShopForm() {
    let coffeeShopForm = document.getElementById("coffee_shop_form_container")
    coffeeShopForm.innerHTML += 

    `
    <form>
     Name: <input type="text" id="name"></input><br>
     Image URL: <input type="text" id="image"></input><br>
     Description: <input type="text" id="description"></input><br>
     Location: <input type="text" id="location"></input><br>
     <p>Select a vibe for the coffee shop</p>
     Vibe: 
     <select id="vibe" name="vibe">
        <option value="Chill Vibes">Chill VIbes</option>
        <option value="Unchill Vibes">Unchill Vibes</option>
    </select>
    <br><br>
    
     <input type="submit" value="Create">
    </form><br>
    `
    coffeeShopForm.addEventListener("submit", coffeeShopFormSubmission)
}

function coffeeShopFormSubmission() {
    event.preventDefault();
    let name = document.getElementById("name").value
    let image = document.getElementById("image").value
    let description = document.getElementById("description").value
    let location = document.getElementById("location").value
    let vibe = document.getElementById("vibe").value

    console.log(name, image, description, location, vibe)

    const coffee_shop = {
        name: name,
        image: image,
        description: description,
        location: location,
        vibe: vibe
    }
    fetch(`${BASE_URL}/coffee_shops`, {
        method: "POST", 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(coffee_shop)
    })
    // .then(resp => console.log(resp))
    .then(resp => resp.json())
    // .then(coffee_shop => {
    //     console.log(coffee_shop);
    // })
    .then(coffee_shop => {
        let cs = new CoffeeShop(coffee_shop.id, coffee_shop.name, coffee_shop.image, coffee_shop.description, coffee_shop.location, coffee_shop.vibe)
        cs.renderCoffeeShopCard();
    })
    
}

//delete cofee shop

function deleteCoffeeShop() {
    
    let csID = parseInt(event.target.dataset.id)
    fetch(`${BASE_URL}/coffee_shops/${csID}`, {
        method: 'DELETE'
    })
    
}










      
