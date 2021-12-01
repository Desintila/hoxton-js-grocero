const state={
    products:[
        {
            id:1,
            name:'beetroot',
            price:0.35,
            img:'assets/icons/001-beetroot.svg'
        },
        {
            id:2,
            name:'carrot',
            price:0.65,
            img:'assets/icons/002-carrot.svg'
        },
        {
            id:3,
            name:'apple',
            price:0.55,
            img:'assets/icons/003-apple.svg'
        },
        {
            id:4,
            name:'apricot',
            price:2.05,
            img:'assets/icons/004-apricot.svg'
        },
        {
            id:5,
            name:'avocado',
            price:2.35,
            img:'assets/icons/005-avocado.svg'
        },
        {
            id:6,
            name:'bananas',
            price:0.45,
            img:'assets/icons/006-bananas.svg'
        },
        {
            id:7,
            name:'bell-pepper',
            price:0.64,
            img:'assets/icons/007-bell-pepper.svg'
        },
        {
            id:8,
            name:'berry',
            price:1.25,
            img:'assets/icons/008-berry.svg'
        },
        {
            id:9,
            name:'blueberry',
            price:1.35,
            img:'assets/icons/009-blueberry.svg'
        },
        {
            id:10,
            name:'eggplant',
            price:0.75,
            img:'assets/icons/010-eggplant.svg'
        }
    ]
}
console.log(state)
function createProductCarts(){
    for(const product of state.products ){
        const liEl=document.createElement('li')
        const divEl=document.createElement('div')
        divEl.setAttribute('class','store--item-icon')
        const imgEl=document.createElement('img')
        imgEl.setAttribute('src', product.img)
        imgEl.setAttribute('alt',product.name)
        const buttonEl=document.createElement('button')
        buttonEl.textContent='Add to cart'
        divEl.append(imgEl)
        liEl.append(divEl,buttonEl)
        const productList=document.querySelector('.item-list.store--item-list')
        productList.append(liEl)
        buttonEl.addEventListener('click',function(){
           addNewItem(product)
        })
    }
}
createProductCarts()
function addNewItem(product){
        const liEl=document.createElement('li')
        const imgEl=document.createElement('img')
        imgEl.setAttribute('class', 'cart--item-icon')
        imgEl.setAttribute('src', product.img)
        imgEl.setAttribute('alt',product.name)
        const pEL=document.createElement('p')
        pEL.textContent=product.name
        const removeButtonEl=document.createElement('button')
        removeButtonEl.textContent='-'
        removeButtonEl.setAttribute('class', 'quantity-btn remove-btn center')
        const spanEl=document.createElement('span')
        spanEl.textContent=1
        spanEl.setAttribute('class', 'quantity-text center')
        const addButtonEl=document.createElement('button')
        addButtonEl.textContent='+'
        addButtonEl.setAttribute('class', 'quantity-btn add-btn center')
        liEl.append(imgEl,pEL,removeButtonEl,spanEl,addButtonEl)
        const cartList=document.querySelector('.item-list.cart--item-list')
        cartList.append(liEl)
}
