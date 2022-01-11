// JavaScript Document

// window scroll
window.scrollTo(0, 0); 
// smooth scrolling
window.scroll({
	top: 0,
	left: 0,
	behavior: 'smooth'
});

/////////////////////////////////////////////////////////////
//IF PRICES ARE:
//FLOWER VASE: $20
//CLOUD: $13
//MALA BEADS: $35 
//REIKI: $50
//ADD TAX CALCULATOR: 
//PRICE UNDER $10 -> 10% TAX
//GREATER THAN $10 OR LESS THAN $20 -> 7.25% TAX  
//$20 OR GREATER -> 5%
//OUTPUT THE TOTAL CHARGE OF COST WAS ENTERED AFTER BUTTON IS PRESSED
//WRITE A LOOP IN JS -> PRICE OUT ONLY MUSTIPLES OF 7 UP TO 1000
////////////////////////////////////////////////////////////

let carts = document.querySelectorAll(".add-cart");

let products = [
	{
		name: "Flower Vase",			//FLOWER VASE
		tag: "flowervase", 			//tag: TO GRAB IMAGE
		price: 20,
		inCart: 0
	},
	{
		name: "Cloud",			//CLOUD
		tag: "cloud",
		price: 13,
		inCart: 0
	},
	{
		name: "Mala Beads",			//MALA BEADS
		tag: "malabeads",
		price: 35,
		inCart: 0
	},
	{
		name: "Reiki",			//REIKI
		tag: "reiki",
		price: 50,
		inCart: 0
	},
];

//carts[0] TO GRAB CART1, carts[1] TO GRAB CART2 AND carts[2] TO GRAB CART3 SO CHOSING "LOOP" HERE
for (let i=0; i < carts.length; i++){						
	carts[i].addEventListener("click", () => {
	//USE console.log("added to cart"); TO CHECK IF IT IS WORKING
	cartNumbers(products[i]); //LINE: 11
	totalCost(products[i])
})
}

//THIS FUNCTION WILL CHECK CART NUMBERS IF ITS EXIST IN LOCAL STORAGE
function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem("cartNumbers");

	if (productNumbers){
		document.querySelector(".cart span").textContent = productNumbers; 
	}
}

//TO KNOW HOW MANY ADDED TO THE CART USE "function cartNumbers()" 
function cartNumbers(product) {
	//console.log("This product clicked is", product); 
	//localStorage => LOCAL STORAGE IS UNDER CHROME (DEVELOPER TOOL => APPLICATION => LOCAL STORAGE) SHOWS HOW MANY PRODUCTS ADDED TO THE CART ETC.
	let productNumbers = localStorage.getItem("cartNumbers");

	//console.log(productNumbers); TO CHECK 
	productNumbers = parseInt(productNumbers);
	
	if (productNumbers ) {
			localStorage.setItem("cartNumbers", productNumbers + 1);
			document.querySelector(".cart span").textContent = productNumbers + 1; //check if this is right
	}else {
			localStorage.setItem("cartNumbers", 1);
			document.querySelector(".cart span").textContent = 1; //check
	}
	setItems(product);
}

function setItems(product) {
	//console.log("Inside of setItems function");
	//console.log("My product is", product);
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	//console.log("My cartItems are", cartItems);

	if (cartItems != null) {
		//cartItems["morninglift"] THIS IS EXACT SAME AS BELOW
		if (cartItems[product.tag] == undefined) {
			cartItems = {
				...cartItems,
				[product.tag]: product
			}
		}
		cartItems[product.tag].inCart += 1;
	} else {
		product.inCart = 1;
		cartItems = {
			[product.tag]: product
	}
	}
	

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
	//console.log("The product price is", product.price);
	let cartCost = localStorage.getItem("totalCost");
	
	console.log("My cartCost is", cartCost);
	console.log(typeof cartCost );

	if (cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);

	}

}
//THIS WILL CALL IT AND CHECK THE CART WHENEVER THE PAGE IS RELOADED 
onLoadCartNumbers(); 