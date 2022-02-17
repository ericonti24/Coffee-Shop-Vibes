class CoffeeShop {
    constructor(id, name, image, description, location, vibe) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.location = location;
        // this.vibe_id = vibe_id;
        this.vibe = vibe;
        
        CoffeeShop.all.push(this);
    }
        

    renderCoffeeShopCard() {
        let coffeeShopDiv = document.getElementById("coffee_shop_container")
        coffeeShopDiv.innerHTML +=  
        `
        <p> Name: ${this.name}</p>
        <img src="${this.image}" style="width:10%">
        <p> Description: ${this.description}</p>
        <p>Location: ${this.location}</p>
        <p>Vibe: ${this.vibe}</p>

        <button class="button-bttn" data-id=${this.id} onclick="deleteCoffeeShop()">Delete Coffee Shop</button><br>
        _________________________
        `
    }

    // renderCoffeeShopByVibeID() {

    // }

    // static findVibeID = (vibe_id) => this.all.find((coffee_shop) => parseInt(coffee_shop.vibe_id) === vibe_id)
}

CoffeeShop.all = [];