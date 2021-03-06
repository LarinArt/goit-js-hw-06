const list = document.querySelector('.gallery');
const imgList = document.querySelector('ul');

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const item = images.map((element) => `<li><img src='${element.url}' alt='${element.alt}' width = "200" height = "140"/></li>`).join("");

imgList.style.listStyle = 'none';
imgList.style.display = 'flex';
imgList.style.justifyContent = 'center';

list.insertAdjacentHTML("beforeend", item);