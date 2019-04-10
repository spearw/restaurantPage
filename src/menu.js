

  
const potatoes = {name: "Potatoes", price: 10, description: "Baked to perfection and served way too hot"};
const asparagus = {name: "Asparagus", price: 8, description: "Not your mom's recipe! Seasoned with butter and garlic"};
const chipsDip = {name: "Classic Chips and Dip", price: 12, description: "Corn Chips made in house with our famous dip. At $0.50 a chip it's a steal!"};
const starters = [potatoes, asparagus, chipsDip];

const filet = {name: "Filet Mignon", price: 25, description: "Filet mignon cooked to perfection. Need I say more?"};
const sirloin = {name: "Sirlion", price: 22, description: "So fresh it's still mooing"};
const tBone = {name: "T-Bone Steak", price: 18, description: "For those who like bones in their food."};
const tuna = {name: "Tuna", price: 23, description: "Technically a steak"};
const entries = [filet, sirloin, tBone, tuna];

const iceCream = {name: "Ice Cream", price: 6, description: "It's just ice cream. Sure it's overpriced, but you want to impress your date don't you?"};
const cake = {name: "Death by Chocolate Cake", price: 8, description: "Don't worry -- no one has died in years"};
const fruit = {name: "Fruit Cup", price: 7, description: "Fruit for dessert. Something your grandma would say"};
const desserts = [iceCream, cake, fruit];


const menu = [starters, entries, desserts];

export default menu;