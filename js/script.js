
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    document.getElementById('confirmation').textContent = `Order placed: ${quantity} x ${item}`;
});
