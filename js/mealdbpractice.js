document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear Data
    searchText.textContent = '';

    document.getElementById('error-message').style.display = 'none';
    if(searchText == ''){
        // Error Message
    }
   else{
    const url =  (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    .catch(error => displayError(error));
   }
}

const displaySearchResult = meals => {
    console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
     meals.forEach(meal => {
         const div = document.createElement('div');
         div.classList.add('col');
         div.innerHTML = `
         <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
         </div>
         </div>
         `;
         searchResult.appendChild(div);
     })
     
}

const loadMealDetail = meal => {
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealId}`)
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.idMeal[0]))
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
         div.classList.add('col');
         div.innerHTML = `
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go SomeWhere </a>
         </div>
         `;
         mealDetails.appendChild(div);
}