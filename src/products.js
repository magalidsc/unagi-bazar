const productsAvailable = [
    {
        id: 1,
        name: "tupper",
        price: 1000,
        category: "kitchen",
        img: "./img/tupper.png",
        stockProd: 10
    },
    {
        id: 2,
        name: "box",
        price: 1500,
        category: "deco",
        img: "./img/box.png",
        stockProd: 15
    },
    {
        id: 3,
        name: "mirror",
        price: 2500,
        category: "bathroom",
        img: "./img/mirror.png",
        stockProd: 8
    }
]


export const getProductsAvailable = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsAvailable)
        }, 2000)
    })
}


export const getProductDetail = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsAvailable[0])
        }, 2000)
    })
} 