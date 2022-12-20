export interface itemType {
    name: string;
    details: string;
    price:number,
    image:string
};


const menuList:itemType[] = [
    {
        name: "Kabab",
        details:"Tikka Kabab is the special item we have so far in this",
        price : 23.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc="
    },
    {
        name: "Qabili Pualow",
        details:"Qablili Pualow is the most special item in our restaurant",
        price : 25.8,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc="
    },
    {
        name: "Chicken",
        details:"Chicken is prepared will with chef ramazan is the preping",
        price : 22.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc="
    },
    {
        name: "Biryani",
        details:"Biryani is eaten with chicken rice and biryani",
        price : 21.99,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc="
    },
    {
        name: "Grill",
        details:"This is one KG grilled chicken chicken is special (superb). ",
        price : 30.99,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc="
    },
    {
        name: "Hommus",
        details:"Hommus is well served with bread dandori bread.",
        price : 14.5,
        image: "https://media.istockphoto.com/id/1142603303/photo/grilled-meat-and-vegetables-on-skewers.jpg?s=612x612&w=is&k=20&c=ZvzrvBa7xeVxOQYU6BQoroFizrvsISxWhzNt1AwDWhc="
    },
]
export default menuList;