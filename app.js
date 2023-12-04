
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

function filterExample(){
    //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
    let results;
    results = dishes.filter(function(el){
        console.log("el inside filterExample's filter: ", el)
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    return results;
}

let mexicanFood = filterExample();
console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;
    results = dishes.filter(function(element){
        console.log("element inside problemOne's filter". element)
        if(element.cuisine === "Vegetarian"){
            return true;
        } else{
            return false;
        }})

    return results;
}
let vegetarianFood = problemOne();
console.log(`Vegetarian food`, vegetarianFood)

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter
let userInput = prompt("Please enter a cuisine type")
function problemTwo(userInput){
    let results;
    results = dishes.filter(function(element){
        console.log("element inside problem Two's filter". element)
        if(element.cuisine === userInput){
            return true;
        } else {
            return false;
        }})

    return results;
}
let userCuisine = problemTwo(userInput);
console.log(`${userInput} food`, userCuisine)

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function problemThree(){

    let results;
    results = dishes.filter(function(element){
        console.log("element inside problem Three filter". element)
        if(element.cuisine === "Italian" && element.servings > 5){
            return true;
        } else{
            return false;
        }})

    return results;
}
let italianFoodAndServing = problemThree();
console.log(`Italian food with serving size greater than 5`, italianFoodAndServing)

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter
function problemFour(){
    let results;
    results = dishes.filter(function(el){
        if(el.id === el.servings){
            return true;
        }else{
            return false;
        }
    })
    return results;
}
let idMatchingServingSize = problemFour();
console.log(`Dish ID matching the servings`, idMatchingServingSize)

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function problemFive(){
    let results;
    results = dishes.filter(function(el){
        if(el.servings % 2 === 0){
            return true;
        } else{
            return false;
        }
    })
    return results;
}
let evenServings = problemFive();
console.log(`Dishes who has an even servings`, evenServings)
//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter
function filterDishes(){
    let results;
    results = dishes.filter(function(el){
       if (el.ingredients.includes("chickpea")){
        return true;
       } else{
        return false;
       }
    })
    return results;
}
let chickpeaDishes = filterDishes();
console.log(`Dishes that include chickpea`, chickpeaDishes)


//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

let userIngrediant = prompt("Please enter an ingrediant")
function ingrediants(userIngrediant){
    let results;
    results = dishes.filter(function(el){
        if(el.ingredients.includes(userIngrediant)){
            return true;
        }else{
            return false; 
        }

    })
    return results;
}
let userResultIngrediant = ingrediants(userIngrediant);
console.log(`${userIngrediant} contains dishes`,userResultIngrediant);

//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

let cuisineTypes = dishes.map(function(el){
    return el.cuisine
})
console.log(`All cuisine types:`, cuisineTypes)

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 
let cuisineDishType = dishes.map(function(el){
    return el.cuisine + " " + el.name
})
console.log(`All cuisine types and name of Dish:`, cuisineDishType )


//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]

let vegetarianDish = dishes.filter(function(el){
    return el.cuisine.includes("Vegetarian");
}).map(function(el){
    return "Vegetarian" +" " + el.name;
});
console.log(`Vegetarian cuisine and name of Dish:`, vegetarianDish )



//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.
let uniqueCuisineTypes = cuisineTypes.filter((item, index) => cuisineTypes.indexOf(item) === index );
console.log(`All unique cuisine types`, uniqueCuisineTypes)
//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function filteredDishes(){
    let results;
    results = dishes.filter(function(el){
       if (el.ingredients.includes("tomato" || "cheese")){
        return true;
       } else{
        return false;
       }
    })
    return results;
}
let tomatoCheeseIngrediants = filteredDishes();
console.log(`Dishes that include tomato or cheese`, tomatoCheeseIngrediants)
//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
let total = dishes.reduce(function (total, el) {
    return el.servings + total;
  }, 0);
console.log(`The total serving size for these dishes combined are `, total);
//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
function uniqueCuisineDishes(dishes) {
    return dishes.filter(dish => {
        return !dishes.some(otherDish => otherDish.cuisine === dish.cuisine && otherDish !== dish);
    });
 }
 let uniqueDishes = uniqueCuisineDishes(dishes);
console.log(`Unique cuisine dishes:`, uniqueDishes);