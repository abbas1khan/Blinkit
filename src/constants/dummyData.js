export const imageData = [
    require('../assets/products/1.png'),
    require('../assets/products/2.png'),
    require('../assets/products/3.png'),
    require('../assets/products/4.png'),
    require('../assets/products/5.png'),
    require('../assets/products/6.png'),
    require('../assets/products/7.png'),
    require('../assets/products/8.png'),
    require('../assets/products/9.png'),
    require('../assets/products/10.png'),
    require('../assets/products/11.png'),
    require('../assets/products/12.png'),
    require('../assets/products/13.png'),
    require('../assets/products/14.png'),
    require('../assets/products/15.png'),
    require('../assets/products/16.png'),
]

export const adData = [
    require('../assets/products/c1.jpg'),
    require('../assets/products/c2.jpg'),
    require('../assets/products/c3.jpg'),
    require('../assets/products/c4.jpg'),
    require('../assets/products/c5.jpg'),
]

const productsList =
    [
        {
            id: 1,
            name: 'Amul Taaza Toned Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143',
            price: 28,
            quantity: '500 ml',
            tag: "Toned Milk",
        },
        {
            id: 2,
            name: 'Heritage Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/a8358077-0a43-4cf1-8e2f-58611cfc9cb7.jpg?ts=1712325587',
            price: 40,
            quantity: '500 ml',
            tag: "Full Cream Milk",
        },
        {
            id: 3,
            name: "Kellogg's Original Cereals Corn Flakes + Amul Taaza Toned Fresh Milk Combo",
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/bca936d2-c435-48c4-a105-535b68db68ac.jpg?ts=1719583120',
            price: 198,
            quantity: '475 g + 500 ml',
            tag: "Combo of 2",
            discountPrice: 223,
            discountPercentage: 11,
        },
        {
            id: 4,
            name: 'Amul Gold Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
            price: 34,
            discountPrice: 45,
            quantity: '500 ml',
        },
        {
            id: 5,
            name: 'Amul Gold Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
            price: 34,
            discountPrice: 45,
            quantity: '500 ml',
        },
        {
            id: 6,
            name: 'Amul Gold Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
            price: 34,
            discountPrice: 45,
            quantity: '500 ml',
        },
        {
            id: 7,
            name: 'Amul Gold Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
            price: 34,
            discountPrice: 45,
            quantity: '500 ml',
        },
        {
            id: 8,
            name: 'Amul Gold Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
            price: 34,
            discountPrice: 45,
            quantity: '500 ml',
        }
        , {
            id: 9,
            name: 'Amul Gold Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
            price: 34,
            discountPrice: 45,
            quantity: '500 ml',
        }
        , {
            id: 10,
            name: 'Amul Gold Full Cream Fresh Milk',
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
            price: 34,
            discountPrice: 45,
            quantity: '500 ml',
        }
    ]



export const categories = [
    {
        _id: "da741b6c-21ef-47d8-af72-5a7330c73a7a",
        name: "Milk, Curd & Paneer",
        image: require('../assets/category/1.png'),
        products: productsList
    },
    {
        _id: "df08229d-9122-4962-9ab1-b1754c0e2f5e",
        name: "Pharma & Wellness",
        image: require('../assets/category/2.png')
    },
    {
        _id: "da78b6ce-6667-4c86-a6a0-088c3b3f9029",
        name: "Vegetables & Fruits",
        image: require('../assets/category/3.png')
    },
    {
        _id: "6fc620e9-f9a3-4847-a6b0-6066138a041d",
        name: "Munchies",
        image: require('../assets/category/4.png')
    },
    {
        _id: "15d0ee42-5971-4b5a-8e28-079157c6a02a",
        name: "Home & Office",
        image: require('../assets/category/5.png')
    },
    {
        _id: "8b483dde-af24-4d24-af5c-af3ef30c9ff5",
        name: "Baby Care",
        image: require('../assets/category/6.png')
    },
    {
        _id: "a3cd1c51-b226-4fec-a610-9237b55a758d",
        name: "Ata, Rice & Dal",
        image: require('../assets/category/7.png')
    },
    {
        _id: "ea63d45c-64ac-4c0a-ac43-6e9c680fa0cf",
        name: "Cleaning Essentials",
        image: require('../assets/category/8.png')
    },
]


export const wavyData = "M 0 2000 0 500 Q 62.5 280 125 500 t 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0 125 0   125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0  125 0 125 0 125 0 v1000 z"





export const orders = [
    {
        orderId: 'ORDER21312',
        items: [
            { id: 'a', item: { name: 'Milk' }, count: 2 },
            { id: 'b', item: { name: 'Tea' }, count: 1 },
        ],
        totalPrice: 25.00,
        createdAt: '2024-08-10T10:00:00Z',
        status: 'delivered'
    },
    {
        orderId: 'ORDER21212',
        items: [
            { id: 'c', item: 'Burger', count: 1 },
            { id: 'd', item: 'Fries', count: 3 },
        ],
        totalPrice: 15.00,
        createdAt: '2024-08-11T11:30:00Z',
        status: 'available'
    },
];