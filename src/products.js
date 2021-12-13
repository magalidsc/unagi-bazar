const productsAvailable = [
    {
        id: 1,
        name: "Tuppers Amanda",
        price: 1000,
        category: "kitchen",
        img: "./img/tupper.png",
        stockProd: 10
    },
    {
        id: 2,
        name: "Caja Organizadora",
        price: 1500,
        category: "orden",
        img: "./img/box.png",
        stockProd: 15
    },
    {
        id: 3,
        name: "Espejo Make Up",
        price: 2500,
        category: "bathroom",
        img: "./img/mirror.png",
        stockProd: 8
    },
    {
        id: 4,
        name: "Porta Cepillo Ananá",
        price: 500,
        category: "bathroom",
        img: "./img/baño2.jpeg",
        stockProd: 5
    },
    {
        id: 5,
        name: "Cepillo Corporal",
        price: 1600,
        category: "bathroom",
        img: "./img/baño1.jpeg",
        stockProd: 25
    },
    {
        id: 6,
        name: "Organizador de pared",
        price: 2600,
        category: "orden",
        img: "./img/orden1.jpeg",
        stockProd: 6
    },
    {
        id: 7,
        name: "Gancho para puerta",
        price: 1600,
        category: "orden",
        img: "./img/orden2.jpeg",
        stockProd: 25
    },
    {
        id: 8,
        name: "Organizador Laundry",
        price: 4600,
        category: "orden",
        img: "./img/orden3.webp",
        stockProd: 14
    },
    {
        id: 9,
        name: "Organizador de Cajón",
        price: 600,
        category: "orden",
        img: "./img/orden4.jpeg",
        stockProd: 55
    },
    {
        id: 10,
        name: "Plato Infantíl Kitten",
        price: 800,
        category: "kitchen",
        img: "./img/cocina1.jpeg",
        stockProd: 26
    },
    {
        id: 11,
        name: "Especieros Alba",
        price: 1200,
        category: "kitchen",
        img: "./img/cocina2.jpeg",
        stockProd: 12
    },
    {
        id: 12,
        name: "Picadora",
        price: 3600,
        category: "kitchen",
        img: "./img/cocina3.jpeg",
        stockProd: 8
    },
    {
        id: 13,
        name: "Moldes para helado",
        price: 500,
        category: "kitchen",
        img: "./img/cocina4.jpeg",
        stockProd: 25
    },

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
            resolve(productsAvailable)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        const productById = productsAvailable.find(element => productsAvailable.id === id)
        setTimeout(() => {
            resolve(productById)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productByCategory = productsAvailable.find(element => productsAvailable.category === categoryId)
        setTimeout(() => {
            resolve(productByCategory)
        }, 2000)
    })
} 
