const cartItems = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');

// Sample doll data
const dolls = [
  { id: 1, name: 'Doll 1', price: 5000, image: 'doll.jpeg' },
  { id: 2, name: 'Doll 2', price: 5000, image: 'doll1.jpeg' },
  { id: 3, name: 'Doll 3', price: 10000, image: 'doll b2.jpeg' },
  { id: 4, name: 'Doll 3', price: 7000, image: 'doll3.jpeg' },

];

// Render dolls
function renderDolls() {
  dolls.forEach(doll => {
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
      <img src="${doll.image}" alt="${doll.name}">
      <span>{doll.name}</span>
      <span>$${doll.price}</span>
      <button onclick="addToCart(${doll.id})">Add to Cart</button>
    `;
    cartItems.appendChild(item);
  });
}

// Add doll to cart
function addToCart(id) {
  const selectedDoll = dolls.find(doll => doll.id === id);
  if (selectedDoll) {
    alert(`Added ${selectedDoll.name} to cart!`);
  }
}

// Initialize
renderDolls();
