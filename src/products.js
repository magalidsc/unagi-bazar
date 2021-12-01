const productsAvailable = [
    {
        id: 1,
        name: "tupper",
        price: 1000,
        category: "kitchen",
        img: "./img/tupper.png"
    },
    {
        id: 2,
        name: "box",
        price: 1500,
        category: "deco",
        img: "./img/box.png"
    },
    {
        id: 3,
        name: "mirror",
        price: 2500,
        category: "bathroom",
        img: "./img/mirror.png"
    }
]


export const getProductsAvailable = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsAvailable)
        }, 2000)
    })
} 