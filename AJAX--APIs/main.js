
// $.get("https://www.googleapis.com/books/v1/volumes?q=Name of the Wind", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })


//-- Exercise 1

//  const fetch = function(isbnNum) {
// $.ajax({
//     method: "GET",
//     url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNum}`,
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// });
// }

// fetch(1440633908)

//-Exercise 2 -- 

// const fetch = function(queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     });
//     }

// fetch("title", "The Wise Man's Fears")

// --Exercise 3 ----- 
// const fetch = function (queryType, queryValue) {

//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: function (data) {
//             const items = data.items
//             items.forEach(book => console.log(book.volumeInfo.title, book.volumeInfo.authors[0], book.volumeInfo.industryIdentifiers[0].identifier));

//             // for (let item in data.items) {
//             //    console.log(
//             //     data,
//             //     data.items[item].volumeInfo.title,  
//             //     data.items[item].volumeInfo.authors[0], 
//             //     data.items[item].volumeInfo.industryIdentifiers[0].identifier);
//             // }
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     });
// }

// fetch("title", "The Alchemist")

















