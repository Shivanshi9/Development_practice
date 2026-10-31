// const searchInput = document.getElementById('search_input');
// const productList = document.querySelectorAll('.product li');

// // Objective: Set the initial search value to "nana"

// searchInput.value = "nana";


// // Function to filter products based on input

// function filterProducts() {
// const filterValue = searchInput.value.toLowerCase();

// productList.forEach(item =>{
// const dataName = item.getAttribute('data-name').toLowerCase();

// // Objective: Display product if search input is part of its name, otherwise hide

//     if (dataName.includes(filterValue)) {
//     item.style.display =""; // Show element
//     } else {
//     item.style.display = "none"; // Hide element
//     }
// });

// }
// // Run filter initially to match the pre-filled "nana" search value
// filterProducts();
// // Add event listener for real-time user filtering
// searchInput.addEventListener('input', filterProducts);

const searchvalue = document.getElementById('search_input');
const productvalue = document.querySelectorAll('.product li');

searchvalue.value = "nana";

function filterproduct()
{
    const filtervalue = searchvalue.value.toLowerCase();
    
    productvalue.forEach(item => {
        const productitem = item.getAttribute('data-name').toLowerCase();

    if (productitem.includes(filtervalue)) {
    item.style.display =""; // Show element
    } else {
    item.style.display = "none"; // Hide element
    }
    });
}

filterproduct();

searchvalue.addEventListener('input', filterproduct);











