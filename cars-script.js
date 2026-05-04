// Change view between grid and list with animation
function changeView(view) {
    var container = document.getElementById('carsContainer');
    var gridBtn = document.getElementById('gridBtn');
    var listBtn = document.getElementById('listBtn');
    
    // Add fade out effect
    container.style.opacity = '0';
    
    setTimeout(function() {
        if (view === 'grid') {
            container.className = 'cars-grid-view';
            gridBtn.classList.add('active');
            listBtn.classList.remove('active');
        } else {
            container.className = 'cars-list-view';
            listBtn.classList.add('active');
            gridBtn.classList.remove('active');
        }
        
        // Fade in
        container.style.opacity = '1';
    }, 200);
}

// Search cars with smooth filtering
function searchCars() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var cars = document.getElementsByClassName('car-item');
    var count = 0;
    
    for (var i = 0; i < cars.length; i++) {
        var carName = cars[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
        
        if (carName.includes(input)) {
            cars[i].style.display = '';
            count++;
        } else {
            cars[i].style.display = 'none';
        }
    }
    
    // Show no results message if needed
    if (count === 0 && input !== '') {
        console.log('No cars found matching: ' + input);
    }
}

// Filter cars by brand and price
function filterCars() {
    var brandFilter = document.getElementById('brandFilter').value;
    var priceFilter = document.getElementById('priceFilter').value;
    var cars = document.getElementsByClassName('car-item');
    
    for (var i = 0; i < cars.length; i++) {
        var brand = cars[i].getAttribute('data-brand');
        var price = parseInt(cars[i].getAttribute('data-price'));
        
        var showBrand = (brandFilter === 'all' || brand === brandFilter);
        var showPrice = true;
        
        // Updated price ranges for USD
        if (priceFilter === 'low') {
            showPrice = (price < 22000);
        } else if (priceFilter === 'medium') {
            showPrice = (price >= 22000 && price <= 35000);
        } else if (priceFilter === 'high') {
            showPrice = (price > 35000);
        }
        
        if (showBrand && showPrice) {
            cars[i].style.display = '';
        } else {
            cars[i].style.display = 'none';
        }
    }
}

// Add transition effect to container
window.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('carsContainer');
    if (container) {
        container.style.transition = 'opacity 0.3s ease';
    }
})
