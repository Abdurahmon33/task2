const magazine = document.getElementById("magazine");

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        data.forEach(clothes => {

            const magazineEl = document.createElement("ul");
            const productsImgEl = document.createElement("img");
            const priceEL = document.createElement("li");
            const discountEl = document.createElement("li");
            const nameEl = document.createElement("li");
            const removeEl = document.createElement("img");

            productsImgEl.src = clothes.image;

            priceEL.innerHTML = "<strong> Price: <strong/>" + clothes.price + "<br><br/>";
            discountEl.innerHTML = "<strong>Discount:</strong>  " + clothes.description.split("").splice(1, 70).join("") + "..." + " ";
            nameEl.innerHTML = "<br><br/><strong> Name:</strong> " + clothes.title;

            magazine.appendChild(magazineEl);
            magazineEl.appendChild(productsImgEl);
            magazineEl.appendChild(priceEL);
            magazineEl.appendChild(discountEl);
            magazineEl.appendChild(nameEl);

            magazineEl.className = "products";
            productsImgEl.className = "products-img";

            magazineEl.appendChild(removeEl)
            removeEl.src = "img/remove.svg"
            removeEl.className = "iconDelete";

            removeEl.addEventListener('click', removee)



            function removee() {
                if (modal_wrapper.style.display = "none") {
                    modal_wrapper.style.display = "flex"
                    const p = document.createElement("strong");
                    modal.appendChild(p);
                    p.className = "pel"
                    p.innerHTML = " O`chirilsinmi <br><br/>"
                    const ha = document.createElement("button");
                    ha.innerText = "ha"
                    ha.className = "button__yas"
                    const yoq = document.createElement("button");
                    yoq.innerText = "yo`q"
                    yoq.className = "button__no"
                    p.innerHTML=""

                    yoq.addEventListener("click", (e) => {
                        modal_wrapper.style.display = "none"
                    })
                    ha.addEventListener("click", (e) => {
                            fetch('https://dummyjson.com/products/' + data.id, {
                                    method: 'DELETE',
                                })
                                .then(res => res.json())
                                .then(console.log);
                            magazine.removeChild(magazineEl)
                            modal_wrapper.style.display = "none"


                        
                    })
                    modal.appendChild(ha)
                    modal.appendChild(yoq)
 }


                // function openModal(){
                // }
                // function closeModal(){
                //     modalWrapperEl.style.display =  "none"
                // }
                // closeBtnEl.addEventListener("click",  closeModal);




            }

        });
    })