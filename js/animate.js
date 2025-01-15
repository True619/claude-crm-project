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
