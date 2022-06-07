const getData = localStorage.getItem('data');

const data = JSON.parse(getData);

const urlParams = new URLSearchParams(location.search);

const nameProduct = urlParams.get('name');
const page = urlParams.get('page');

const productArr = data[page].filter(item => item.name == nameProduct);

console.log(productArr)

let li = `<li><h4>المميزات</h4></li>`;
productArr[0].des.forEach((item, index) => index < 3 ? li += `<li>${item}</li>` : false)

let row = `<div class="row">
                <div class="col-md-4">
                    <div class="image">
                        <img src="${productArr[0].src}" alt="${productArr[0].type}">
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="product m-auto">
                        <div class="des">
                            <h3 class="name">${productArr[0].name}</h3>
                            <ul class="detalis">
                                ${li}
                            </ul>
                            <p class="price">${productArr[0].price}</p>
                        </div>
                    </div>
                </div>
            </div>`;

document.querySelector('.product-show .container').innerHTML = row;