"use strict";

const setData = fetch("js/data.json")
  .then((response) => response.json())
  .then((data) => {
    const stringData = JSON.stringify(data);
    localStorage.setItem("data", stringData);
  })
  .then(() => {
    const data = JSON.parse(localStorage.getItem("data"));

    const showProduct = function (arr, select) {
      let row = `<div class='row' justify-content-center'>`;
      arr.forEach((item) => {
        let li = ``;
        item.des.forEach((item, index) =>
          index < 3 ? (li += `<li>${item}</li>`) : false
        );
        row += `<div class="col-lg-4">
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
      });
      row += `</div>`;

      document.querySelector(select).innerHTML = row;
    };
    // First Section

    const freezer = data.elc[Math.floor(Math.random() * data.elc.length)];
    const washing = data.elc[Math.floor(Math.random() * data.elc.length)];
    const washing2 = data.elc[Math.floor(Math.random() * data.elc.length)];

    let arr = [freezer, washing, washing2];

    showProduct(arr, ".product .products");

    // Second Section

    const mobile1 = data.mobile[Math.floor(Math.random() * data.mobile.length)];
    const mobile2 = data.mobile[Math.floor(Math.random() * data.mobile.length)];
    const mobile3 = data.mobile[Math.floor(Math.random() * data.mobile.length)];

    arr = [mobile2, mobile3, mobile1];

    showProduct(arr, ".mobile .products");

    // Second Section

    const tv1 = data.tv[Math.floor(Math.random() * data.tv.length)];
    const tv2 = data.tv[Math.floor(Math.random() * data.tv.length)];
    const tv3 = data.tv[Math.floor(Math.random() * data.tv.length)];

    arr = [tv3, tv1, tv2];

    showProduct(arr, ".tv .products");
  });
