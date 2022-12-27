
// reviews is the number of stars it get per order
// category is the id of category
export interface itemType {
    id:number,
    name: string;
    details: string;
    price:number,
    image:string,
    quantity:number,
    discount: number,
    reviews: number[],
    category:number
};

export const category:{id:number, name:string}[] = [
    {
        id:1,
        name:'Kabab'
    },
    {
        id:2,
        name:'Rice'
    },
    {
        id:3,
        name:'Drinks'
    },
    {
        id:4,
        name:'Mashawe'
    },
    {
        id:5,
        name:'Starters'
    }
]


export const menuList:itemType[] = [
    {
        id:1,
        name: "Kabab",
        details:"Tikka Kabab is the special item we have so far in this",
        price : 23.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 2,
        quantity:0,
        reviews:[],
        discount:0
    },
    {
        id:2,
        name: "Qabili Pualow",
        details:"Qablili Pualow is the most special item in our restaurant",
        price : 25.8,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 2,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:3,
        name: "Chicken",
        details:"Chicken is prepared will with chef ramazan is the preping",
        price : 22.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 2,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:4,
        name: "Biryani",
        details:"Biryani is eaten with chicken rice and biryani Birrani",
        price : 21.99,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 2,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:5,
        name: "Grill",
        details:"This is one KG grilled chicken chicken is special (superb). ",
        price : 30.99,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 1,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:6,
        name: "Hommus",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 1,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:7,
        name: "coca cola",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 1,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:8,
        name: "7 UP",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 1,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:9,
        name: "Soup",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 2,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:10,
        name: "Salad",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 3,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:11,
        name: "Grill",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 3,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:12,
        name: "Coffee",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 3,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:13,
        name: "Green Tea",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 3,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:14,
        name: "Cold Water",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 3,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:15,
        name: "Seakh Kabab",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 4,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:16,
        name: "Tikka Kabab",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 4,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:17,
        name: "Pulow",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 4,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:18,
        name: "White Rice",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 5,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:19,
        name: "Gigaja",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 5,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:20,
        name: "Laban",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 5,
        quantity:0,
        reviews:[],
        discount:0

    },
    {
        id:21,
        name: "Watermelon",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc=",
        category: 5,
        quantity:0,
        reviews:[],
        discount:0

    },
]