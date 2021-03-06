1.

let recipe =
{
  "name": "Mashed Potatoes",
  "serves": 4,
  "healthy": true,
  "calories": 250,
  "ingredients": [

    {
      "name": "garlic powder",
      "count": 2,
      "unit": "tablespoons"
    },
    {
      "name": "water"
    },
    {
      "name": "potatoes",
      "count": 2
    },
    {
      "name": "butter",
      "count": 2,
      "unit": "tablespoons"
    },

    {
      "name": "salt",
      "count": 0.5,
      "unit": "teaspoon"
    },
    {
      "name": "pepper",
      "count": 0.25,
      "unit": "teaspoons"
    }

  ],
  "directions": [
    "Cut potatoes into half inch thick slices.",
    "Add potatoes to a pot and cover with an inch of water.",
    "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
    "Simmer for 20 minutes or until potatoes are fork tender.",
    "Drain water from potatoes, leaving the potatoes in the original pot.",
    "Add remaining ingredients to the pot with the potatoes.",
    "Mash potatoes until they reach the desired consistency.",
    "Serve immediately, or cover and refrigerate."
  ]
}
// console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count)
// console.log(recipe.directions[0])
// console.log(recipe.healthy)
// console.log(recipe.calories)

2.
let animal =
{
  "name": "elephant",
  "weight": {
    "kilos": 4000,
    "tons": 4
  },
  "habitat": [
    "savanna",
    "grassland",
    "forest"
  ],
  "endangered": true,
  "foods": [
    {
    "roots": 8.33
    },
    {
    "fruits": 66
    },
    {
    "grass": 16.66,
    },
    {
    "bark": 9
    },
  ],

  "eats-animals": false,

  "deliciousity": 1,
}
