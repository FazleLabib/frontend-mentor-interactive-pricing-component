const views = document.getElementById('views-value');
const pricing = document.getElementById('pricing-value');

const billingYear = document.getElementById('year');
const billingMonth = document.getElementById('month');

const slider = document.getElementById('slider-range');

const toggle = document.getElementById('toggle-input');

let pricingValue = 16;
const discount = 25;

function checkToggle() {
    setPrice();
}

function setPrice() {
    slider.style.setProperty('--slider-value', slider.value);
    if (slider.value === "1") {
        views.innerHTML = "10K";
        pricingValue = getPrice(toggle.checked, 8);
        pricing.innerHTML = `$${pricingValue.toFixed(2)}`;
    } else if (slider.value === "2") {
        views.innerHTML = "50K";
        pricingValue = getPrice(toggle.checked, 12);
        pricing.innerHTML = `$${pricingValue.toFixed(2)}`;
    } else if (slider.value === "3") {
        views.innerHTML = "100K";
        pricingValue = getPrice(toggle.checked, 16);
        pricing.innerHTML = `$${pricingValue.toFixed(2)}`;
    } else if ((slider.value === "4")) {
        views.innerHTML = "500K";
        pricingValue = getPrice(toggle.checked, 24);
        pricing.innerHTML = `$${pricingValue.toFixed(2)}`;
    } else {
        views.innerHTML = "1M";
        pricingValue = getPrice(toggle.checked, 36);
        pricing.innerHTML = `$${pricingValue.toFixed(2)}`;
    }
}

function getPrice(checked, pricingValue) {

    if (checked) {
        pricingValue = pricingValue - (pricingValue * discount/100);
        billingYear.style.display = 'block';
        billingMonth.style.display = 'none';
    } else {
        billingYear.style.display = 'none';
        billingMonth.style.display = 'block';
    }
    return pricingValue

}

slider.addEventListener('input', setPrice);
toggle.addEventListener('change', checkToggle);

