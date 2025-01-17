const productImg = document.querySelectorAll('.product_img_feed');
const productButton = document.querySelectorAll('.product_btn');
const productList = document.querySelectorAll('.card_product');

productButton.forEach((button, index) => {
  button.addEventListener('click', () => {
    
    let cloneElement = productImg[index].cloneNode(true);

    cloneElement.classList.add('clone_img');

    cloneElement.classList.add('produc_animate');

    productList[index].appendChild(cloneElement);


  });
});
function findPosition() {
  const element = document.getElementById('basket_product');
  const rect = element.getBoundingClientRect();
  
  // Ekrandagi element pozitsiyasi
  const position = {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX
  };

  // Natijani ekranda chiqarish
  document.getElementById('position').innerText = `Top: ${position.top}px, Left: ${position.left}px`;
}
