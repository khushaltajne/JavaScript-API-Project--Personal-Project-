function bodyload() {
  let container = document.getElementById("container");

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((obj) => {
        container.innerHTML += `
          <div class="card">
            <img src="${obj.image}" alt="${obj.title}" />
            <p style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; text-align:center;font-size:20px;">
              ${obj.title}
            </p>
            <p style="text-align:left; font-size:16px; font-style: italic;">
              ${obj.description}
            </p>
            <p style="text-align:left;">₹${obj.price}</p>
            <div style="display: flex; justify-content: space-between; font-size: 14px;">
              <span>⭐ ${obj.rating.rate} / 5</span>
              <span>${obj.rating.count} reviews</span>
            </div>
          </div>
        `;
      });
    });
}
