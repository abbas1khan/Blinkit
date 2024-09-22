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

const milkProductsList = [
    {
        _id: "889e2ac4-1693-4965-9ceb-cd31dbb3fa97",
        name: 'Amul Taaza Toned Fresh Milk',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143',
        price: 28,
        discountPrice: 52,
        quantity: '500 ml',
        tag: "Toned Milk",
    },
    {
        _id: "8b3004a3-36b2-4656-b6f0-bb418b90e1fe",
        name: 'Heritage Full Cream Fresh Milk',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/a8358077-0a43-4cf1-8e2f-58611cfc9cb7.jpg?ts=1712325587',
        price: 40,
        discountPrice: 60,
        quantity: '500 ml',
        tag: "Full Cream Milk",
    },
    {
        _id: "25b3601e-5b6b-46df-b4c4-cd67c673213d",
        name: 'Amul Gold Full Cream Fresh Milk',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142',
        price: 34,
        discountPrice: 45,
        quantity: '500 ml',
    },
    {
        _id: "45ffd4bd-fc66-4d17-943f-61ff9b5991d9",
        name: 'Jersey Toned Fresh Milk',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/44eda5a4-54dc-4510-9482-6161ab351d69.jpg?ts=1712325605',
        price: 28,
        discountPrice: 30,
        quantity: '500 ml',
    },
    {
        _id: "3d484888-2ff0-4477-80da-ef5258d87228",
        name: 'Amul Taaza Homogenised Toned Milk',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6d41a6e4-eb1b-413c-8e20-7b9e892e42f8.jpg?ts=1712325555',
        price: 74,
        discountPrice: 80,
        quantity: '500 ml',
    },
    {
        _id: "0306f0ac-b3a8-4bbd-9048-4c826a11a8fc",
        name: "Kellogg's Original Cereals Corn Flakes + Amul Taaza Toned Fresh Milk Combo",
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/bca936d2-c435-48c4-a105-535b68db68ac.jpg?ts=1719583120',
        price: 198,
        discountPrice: 223,
        quantity: '500 ml',
    },
    {
        _id: "31b49ee0-3c52-4e39-8345-2caf7ea3f900",
        name: 'Godrej Jersey Curd',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/342271a.jpg?ts=1687525111',
        price: 45,
        discountPrice: 48,
        quantity: '500 ml',
    },
    {
        _id: "9b0c6273-3b24-4eb1-9df0-6c04c9b4976d",
        name: 'Amul Masti Curd',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593',
        price: 35,
        discountPrice: 43,
        quantity: '500 ml',
    },
    {
        _id: "e37f17aa-7c16-4362-8d50-4fb157498067",
        name: 'Jersey Curd',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/1eb7b3f8-3782-4088-a1ce-5e4d085bc7ea.jpg?ts=1708594220',
        price: 25,
        discountPrice: 30,
        quantity: '500 ml',
    },
    {
        _id: "96488afe-6ae2-4cb4-9b84-e10889f6d84a",
        name: 'Mother Dairy Classic Curd',
        image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/329549a.jpg?ts=1690805806',
        price: 50,
        discountPrice: 60,
        quantity: '500 ml',
    },
]



export const categories = [
    {
        _id: "da741b6c-21ef-47d8-af72-5a7330c73a7a",
        name: "Milk, Curd & Paneer",
        image: require('../assets/category/1.png'),
        products: milkProductsList
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