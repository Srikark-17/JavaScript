/*
    Fetch Data from an API
*/
let userPromise = fetch("https://randomuser.me/api/");
console.log(userPromise);
userPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.results[0].name.first);
    console.log(data.results[0].name.last);
  })
  .catch((error) => {
    console.log(error);
  });
