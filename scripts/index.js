// 밀크터치 | milktouch

const menu_popup = document.querySelector('.menu_popup') // 데스크탑 전체 메뉴
const shop_btn = document.querySelector('nav #shop_btn') // shop 버튼
const menu_popup_close_btn = document.querySelectorAll('.menu_popup_close_btn') // 닫기 버튼
const search_btn = document.querySelector('.search_btn') // 검색버튼
const search_popup = document.querySelector('.search_popup') //검색창

gsap.registerPlugin(ScrollTrigger);

//====================================헤더
//데스크탑 전체메뉴
shop_btn.addEventListener('click',()=>{
    menu_popup.classList.remove('active');
    search_popup.classList.remove('active');
    menu_popup.classList.toggle('active')
})

// 검색 팝업
search_btn.addEventListener('click',()=>{
    menu_popup.classList.remove('active');
    search_popup.classList.remove('active');
    search_popup.classList.toggle('active')
})

//닫기 버튼
menu_popup_close_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        menu_popup.classList.remove('active');
        search_popup.classList.remove('active');
    });
});

//====================================히어로
const heroSwiper = new Swiper('.hero_wrap',{
    slidesPerView:1,
    loop:true,
    speed: 1000,
    autoplay:{
        delay: 5000,        
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:'#hero_sec .hero_next',
        prevEl:'#hero_sec .hero_prev',
    },
})

//====================================베스트

//메이크업
function bestPd() {
    const ulElement = document.querySelector("#best_sec .best1 .best_pd");
    let listHTML = "";
    for (let i = 0; i < bestProductMakeup.length; i++) {
        const product = bestProductMakeup[i];
        let colorChipsHTML = "";
        if (product.colors && product.colors.length > 0) {
            let chips = "";
            for (let j = 0; j < product.colors.length; j++) {
                chips += `<span class="color_chip" style="background-color: ${product.colors[j]};"></span>`;
            }
            colorChipsHTML = `
                <div class="color_chip_container">
                    ${chips}
                    <span class="color_text">${product.colorText}</span>
                </div>
            `;
        }
        listHTML += `
            <li class="product_item">
                <div class="img_box">
                    <img src="${product.thumbnail}" alt="${product.name}">
                </div>
                <div class="info_box">
                    <p class="product_name">${product.name}</p>
                    <div class="price_area">
                        <span class="discount">${product.discountRate}%</span>
                        <span class="price">${product.price.toLocaleString()}원</span>
                        <del class="original_price">${product.originalPrice.toLocaleString()}원</del>
                    </div>
                    ${colorChipsHTML}
                </div>
            </li>
        `;
    }
    ulElement.innerHTML = listHTML;
}

//스킨케어
function bestPdSkincare() {
    const ulElement = document.querySelector("#best_sec .best2 .best_pd");
    let listHTML = "";
    for (let i = 0; i < bestProductSkincare.length; i++) {
        const product = bestProductSkincare[i];
        let colorChipsHTML = "";
        if (product.colors && product.colors.length > 0) {
            let chips = "";
            for (let j = 0; j < product.colors.length; j++) {
                chips += `<span class="color_chip" style="background-color: ${product.colors[j]};"></span>`;
            }
            colorChipsHTML = `
                <div class="color_chip_container">
                    ${chips}
                    <span class="color_text">${product.colorText}</span>
                </div>
            `;
        }
        listHTML += `
            <li class="product_item">
                <div class="img_box">
                    <img src="${product.thumbnail}" alt="${product.name}">
                </div>
                <div class="info_box">
                    <p class="product_name">${product.name}</p>
                    <div class="price_area">
                        <span class="discount">${product.discountRate}%</span>
                        <span class="price">${product.price.toLocaleString()}원</span>
                        <del class="original_price">${product.originalPrice.toLocaleString()}원</del>
                    </div>
                    ${colorChipsHTML}
                </div>
            </li>
        `;
    }
    ulElement.innerHTML = listHTML;
}
bestPd();
bestPdSkincare();

// 베스트 스와이프
const bestPdSwiper = new Swiper('.best_wrap',{
    loop :true,
        navigation:{
        nextEl:'#best_sec .best_next',
        prevEl:'#best_sec .best_prev',
    },
}) 

// 베스트 스크롤트리거
gsap.fromTo("#best_sec > h2, #best_sec > p, .best_wrap", 
    { opacity: 0, y: -40 }, 
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#best_sec",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    }
);

// ==================================== 핫

function hotPd() {
    const ulElement = document.querySelector("#hot_sec .hot_swiper .swiper-wrapper");
    let listHTML = "";
    for (let i = 0; i < hotProductList.length; i++) {
        const product = hotProductList[i];
        let colorChipsHTML = "";
        if (product.colors && product.colors.length > 0) {
            let chips = "";
            for (let j = 0; j < product.colors.length; j++) {
                chips += `<span class="color_chip" style="background-color: ${product.colors[j]};"></span>`;
            }
            colorChipsHTML = `
                <div class="color_chip_container">
                    ${chips}
                    <span class="color_text">${product.colorText || ""}</span>
                </div>
            `;
        }
        listHTML += `
            <li class="swiper-slide product_item">
                <div class="img_box">
                    <img src="${product.thumbnail}" alt="${product.name}">
                </div>
                <div class="info_box">
                    <p class="product_name">${product.name}</p>
                    <div class="price_area">
                        <span class="discount">${product.discountRate}%</span>
                        <span class="price">${product.price.toLocaleString()}원</span>
                        <del class="original_price">${product.originalPrice.toLocaleString()}원</del>
                    </div>
                    ${colorChipsHTML}
                </div>
            </li>
        `;
    }
    ulElement.innerHTML = listHTML;
}
hotPd();

//hot 스와이프
const hot_swiper = new Swiper('.hot_swiper',{
    slidesPerView:4,
    spaceBetween:10,
    scrollbar: {
        el: '.hot_wrap .swiper-scrollbar',
        draggable: true,
    },
})

//hot 스크롤트리거
gsap.fromTo("#hot_sec > h2, #hot_sec > p, #hot_sec .hot_thum, #hot_sec .hot_swiper", 
    { opacity: 0, y: -40 }, 
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#hot_sec",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    }
);

//======================================== 띠배너

// 모바일 스와이프
const lineBnr_swiper = new Swiper('#line_bnr_sec .line_bnr_m',{
    slidesPerView:1,
})

// 띠배너 스크롤 트리거
gsap.fromTo("#line_bnr_sec .line_bnr_wrap a:nth-child(1)", 
    { opacity: 0, x: -80 }, 
    {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#line_bnr_sec",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    }
);

gsap.fromTo("#line_bnr_sec .line_bnr_wrap a:nth-child(2)", 
    { opacity: 0, x: 80 }, 
    {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#line_bnr_sec",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    }
);


//========================================= 뉴
function newPd() {
    const ulElement = document.querySelector("#new_sec .new_swiper .swiper-wrapper");
    let listHTML = "";
    for (let i = 0; i < newproductList.length; i++) {
        const product = newproductList[i];
        let colorChipsHTML = "";
        if (product.colors && product.colors.length > 0) {
            let chips = "";
            for (let j = 0; j < product.colors.length; j++) {
                chips += `<span class="color_chip" style="background-color: ${product.colors[j]};"></span>`;
            }
            colorChipsHTML = `
                <div class="color_chip_container">
                    ${chips}
                    <span class="color_text">${product.colorText || ""}</span>
                </div>
            `;
        }
        listHTML += `
            <li class="swiper-slide product_item">
                <div class="img_box">
                    <img src="${product.thumbnail}" alt="${product.name}">
                </div>
                <div class="info_box">
                    <p class="product_name">${product.name}</p>
                    <div class="price_area">
                        <span class="discount">${product.discountRate}%</span>
                        <span class="price">${product.price.toLocaleString()}원</span>
                        <del class="original_price">${product.originalPrice.toLocaleString()}원</del>
                    </div>
                    ${colorChipsHTML}
                </div>
            </li>
        `;
    }
    ulElement.innerHTML = listHTML;
}
newPd();

// 뉴 스와이프
const new_swiper = new Swiper('.new_swiper', {
    slidesPerView: 4,
    spaceBetween: 10,
    scrollbar: {
        el: '.new_wrap .swiper-scrollbar',
        draggable: true,
    },
});

// 뉴 스크롤트리거
gsap.fromTo("#new_sec > h2, #new_sec > p, #new_sec .new_thum, #new_sec .new_swiper", 
    { opacity: 0, y: -40 }, 
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#new_sec",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    }
);

//============================================== 이벤트

//이벤트 스크롤 트리거
gsap.fromTo("#event_sec > h2, #event_sec > p", 
    { opacity: 0, y: -40 }, 
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#event_sec",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    }
);