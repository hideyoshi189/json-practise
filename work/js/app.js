document.addEventListener('DOMContentLoaded', function () {
  fetch('./data/product.json')
    .then(response => response.json())
    .then(products => {
      const itemList = document.getElementById('productTable');
      for (let i = 0; i < products.length; i++) {
        const item = products[i];
        const row = document.createElement('tr');
        const idCell = document.createElement('td');
        idCell.textContent = item.id;
        row.appendChild(idCell);
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        const priceCell = document.createElement('td');
        priceCell.textContent = item.price;
        row.appendChild(priceCell);
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = item.description;
        row.appendChild(descriptionCell);
        itemList.appendChild(row);
        const itemTag = document.createElement('td');
      }
    })
    .catch(error => console.error('エラー:', error));
});