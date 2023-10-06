const views = document.getElementById('views-value');
const pricing = document.getElementById('pricing-value');

const billingYear = document.getElementById('year');
const billingMonth = document.getElementById('month');

const slider = document.getElementById('slider-range');
const toggle = document.getElementById('toggle-input');

const discount = 25;

const pricingData = {
  1: { views: "10K", monthly: 8},
  2: { views: "50K", monthly: 12},
  3: { views: "100K", monthly: 16},
  4: { views: "500K", monthly: 24},
  5: { views: "1M", monthly: 36},
};

function checkToggle() {
  setPrice();
}

function setPrice() {

  const sliderValue = parseInt(slider.value);
  const data = pricingData[sliderValue];

  slider.style.setProperty('--slider-value', sliderValue);
  views.innerHTML = data.views;
  pricingValue = getPrice(toggle.checked, data.monthly);
  pricing.innerHTML = `$${pricingValue.toFixed(2)}`;

}

function getPrice(checked, pricingValue) {

  const discountedPrice = checked ? pricingValue * (1 - discount / 100) : pricingValue;
  billingYear.style.display = checked ? 'block' : 'none';
  billingMonth.style.display = checked ? 'none' : 'block';
  return discountedPrice;

}

slider.addEventListener('input', setPrice);
toggle.addEventListener('change', checkToggle);
