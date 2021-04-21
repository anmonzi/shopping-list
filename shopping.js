//* Shopping List Array of Objects
const shoppingList = [
  {
    id: 1,
    name: "Milk",
    price: 4.49,
  },
  {
    id: 2,
    name: "Eggs",
    price: 3.99,
  },
  {
    id: 3,
    name: "Pizza Rolls",
    price: 5.5,
  },
  {
    id: 4,
    name: "Chicken",
    price: 7.89,
  },
  {
    id: 5,
    name: "Apples",
    price: 4.99,
  },
  {
    id: 6,
    name: "Sandwich Buns",
    price: 2.78,
  },
  {
    id: 7,
    name: "Ketchup",
    price: 6.5,
  },
];

// console.log(shoppingList)

//* Function to Add New List Items with ID and Date

const addToShoppingList = (itemObject) => {
  const lastIndex = shoppingList.length - 1;
  const currentLastItem = shoppingList[lastIndex];
  const maxId = currentLastItem.id;
  const idForNewItem = maxId + 1;
  const dateCreated = Date();
  
  itemObject.date = dateCreated
  itemObject.id = idForNewItem;
  shoppingList.push(itemObject);
};

const orangeJuice = {
  name: "Orange Juice",
  price: 8.5,
};

const bubly = {
  name: "Bubly Cheery",
  price: 4.49,
};

const cheese = {
  name: "Yellow Cheese Slices",
  price: 8.90,
};

const cereal = {
  name: "Frosted Flakes",
  price: 6.60,
};

const steak = {
  name: "Steak",
  price: 15.95,
};

addToShoppingList(orangeJuice)
addToShoppingList(bubly)
addToShoppingList(cheese)
addToShoppingList(cereal)
addToShoppingList(steak)


// console.log(shoppingList)

//* For.. of Loop with If Statement to Find Highest Ticket Item

for (const item of shoppingList) {
    if (item.price > 8) {
        console.log(`${item.name} costs $${item.price}`)
    }
}