const getData = localStorage.getItem('data');

const data = JSON.parse(getData);

const urlParams = new URLSearchParams(location.search);

const page = urlParams.get('page');

let row = `<div class='row'>`
const productArr = data[page].forEach(item => {
    let li = ``;
    item.des.forEach((item, index) => index < 3 ? li += `<li>${item}</li>` : false)
    row += `<div class="col-lg-6 col-xl-4">
                <div class="single-product m-auto">
                    <div class="image">
                        <img src="${item.src}" alt="">
                    </div>
                    <div class="des">
                        <h3 class="name">${item.name}</h3>
                        <ul class="detalis">
                            ${li}
                        </ul>
                        <p class="price">${item.price}</p>
                        <a href="single-product.html?name=${item.name}&&page=${item.type}" class="btn">المزيد</a>
                    </div>
                </div>
            </div>`;
})
row += `</div>`;

document.querySelector('.product-show .container').innerHTML = row;