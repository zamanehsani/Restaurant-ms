
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
]