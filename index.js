const state = {
    products: [
        {
            id: 1,
            name: 'beetroot',
            price: 0.35,
            img: 'assets/icons/001-beetroot.svg',
            productInCart: 0,
            productType: 'vegetable'
        },
        {
            id: 2,
            name: 'carrot',
            price: 0.65,
            img: 'assets/icons/002-carrot.svg',
            productInCart: 0,
            productType: 'vegetable'
        },
        {
            id: 3,
            name: 'apple',
            price: 0.55,
            img: 'assets/icons/003-apple.svg',
            productInCart: 5,
            productType: 'fruit'
        },
        {
            id: 4,
            name: 'apricot',
            price: 2.05,
            img: 'assets/icons/004-apricot.svg',
            productInCart: 10,
            productType: 'fruit'
        },
        {
            id: 5,
            name: 'avocado',
            price: 2.35,
            img: 'assets/icons/005-avocado.svg',
            productInCart: 5,
            productType: 'vegetable'
        },
        {
            id: 6,
            name: 'bananas',
            price: 0.45,
            img: 'assets/icons/006-bananas.svg',
            productInCart: 6,
            productType: 'fruit'
        },
        {
            id: 7,
            name: 'bell-pepper',
            price: 0.64,
            img: 'assets/icons/007-bell-pepper.svg',
            productInCart: 5,
            productType: 'vegetable'
        },
        {
            id: 8,
            name: 'berry',
            price: 1.25,
            img: 'assets/icons/008-berry.svg',
            productInCart: 5,
            productType: 'fruit'
        },
        {
            id: 9,
            name: 'blueberry',
            price: 1.35,
            img: 'assets/icons/009-blueberry.svg',
            productInCart: 5,
            productType: 'fruit'
        },
        {
            id: 10,
            name: 'eggplant',
            price: 0.75,
            img: 'assets/icons/010-eggplant.svg',
            productInCart: 5,
            productType: 'vegetable'
        }
    ]
}
console.log(state)
function createProductCarts() {
    const productList = document.querySelector('.item-list.store--item-list')
    productList.innerHTML = ''
    for (const product of state.products) {
        const liEl = document.createElement('li')
        const divEl = document.createElement('div')
        divEl.setAttribute('class', 'store--item-icon')
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src', product.img)
        imgEl.setAttribute('alt', product.name)
        const buttonEl = document.createElement('button')
        buttonEl.textContent = 'Add to cart'
        divEl.append(imgEl)
        liEl.append(divEl, buttonEl)

        productList.append(liEl)
        buttonEl.addEventListener('click', function () {
            product.productInCart++
            render()

        })


    }
}


function addNewItem(product) {
    const liEl = document.createElement('li')
    const imgEl = document.createElement('img')
    imgEl.setAttribute('class', 'cart--item-icon')
    imgEl.setAttribute('src', product.img)
    imgEl.setAttribute('alt', product.name)
    const pEL = document.createElement('p')
    pEL.textContent = product.name
    const removeButtonEl = document.createElement('button')
    removeButtonEl.textContent = '-'
    removeButtonEl.setAttribute('class', 'quantity-btn remove-btn center')
    const spanEl = document.createElement('span')
    spanEl.textContent = product.productInCart
    spanEl.setAttribute('class', 'quantity-text center')
    const addButtonEl = document.createElement('button')
    addButtonEl.textContent = '+'
    addButtonEl.setAttribute('class', 'quantity-btn add-btn center')
    liEl.append(imgEl, pEL, removeButtonEl, spanEl, addButtonEl)
    const cartList = document.querySelector('.item-list.cart--item-list')
    cartList.append(liEl)
    removeButtonEl.addEventListener('click', function () {
        product.productInCart--
        render()
    })
    addButtonEl.addEventListener('click', function () {
        product.productInCart++
        render()
    })
}
function renderCart() {
    const cartList = document.querySelector('.item-list.cart--item-list')
    cartList.innerHTML = ''
    for (const product of state.products) {
        if (product.productInCart > 0) {
            addNewItem(product)
        }
    }
}
function getTotal() {
    let total = 0
    for (const product of state.products) {
        total += product.productInCart * product.price

    }
    return total
}
function renderTotal() {
    const totalEl = document.querySelector(".total-number")
    totalEl.textContent = `£${getTotal().toFixed(2)}`
}
function filterFruitProducts() {
    return state.products.filter(function (product) {
        return product.productType === 'fruit'
    })

}
function filterVegetableProducts() {
    return state.products.filter(function (product) {
        return product.productType === 'vegetable'
    })

}
function sortProducts() {
    return state.products.sort(function (a, b) {
        return a.price - b.price
    })
}
function listenTosort() {
    const sortProduct = document.querySelector('.sortButton')
    sortProduct.addEventListener('click', function () {
        sortProducts()
        render()
    })
}
listenTosort()
function render() {
    renderCart()
    renderTotal()
    createProductCarts()

}
render()
