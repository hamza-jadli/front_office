export const products = [
  {
    id: '1',
    name: 'Harry Potter',
    price: 119.99,
    discount: 30,
    quantityAvailable: 2,
    category: 'T-shirt',
    currentPrice: 29.99,
    sizes: ['xl', 'l'], 
    images: [
      'https://target.scene7.com/is/image/Target/GUEST_f23d73cf-1699-4248-a6bf-471ef08a4a65?wid=488&hei=488&fmt=pjpeg',
    ],
   
  },
  {
    id: '2',
    name: 'The coumpond effect',
    price: 119.99,
    quantityAvailable: 2,
    category: 'T-shirt',
    currentPrice: 29.99,
    sizes: ['xl', 'l'], 
    images: [
      'https://lh5.googleusercontent.com/0GMDYtCdNAoyIK0-995gbpiP4tvvFfs3OkFGzvAG_DF7r81-m2ot5CUMjHnc8uA3SQn2BwKlSt5IMaeGjG2hHT15STvrE33WWluzHF6uaWwJOIH3bRidyxdI2O6YUxog8I7OlV6u=w400-h300',
    ],
    
   
  },
  {
    id: 'Fairy_Tail',
    name: 'Fairy Tail',
    price: 119.99,
    quantityAvailable: 2,
    category: 'T-shirt',
    currentPrice: 19.99,
    sizes: ['xl', 'l'], 
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11-InuXiJbQyfNiLswbyJrXD3rP-IUJIafQ&usqp=CAU',
    ],
  
  },
  {
    id: 'Hell_Of_a_Book',
    name: 'Hell Of a Book',
    price: 119.99,
    quantityAvailable: 2,
    category: 'T-shirt',
    currentPrice: 19.99,
    sizes: ['xl', 'l'], 
    images: [
      'https://i0.wp.com/www.nationalbook.org/wp-content/uploads/2021/11/Hell-of-a-Book-by-Jason-Mott.jpg?fit=294%2C444&ssl=1',
    ],
   
  },
  {
    id: 'The_Chronicles_of_Narnia',
    name: 'The Chronicles of Narnia',
    price: 119.99,
    quantityAvailable: 2,
    category: 'T-shirt',
    currentPrice: 29.99,
    sizes: ['xl', 'l'], 
    images: [
      'https://mgbookvillage.files.wordpress.com/2019/07/51k6isgquql._sx329_bo1204203200_.jpg?w=331',
    ],
  },
  {
    id: '6',
    name: 'T-Shirt Summer Vibes',
    price: 119.99,
    discount: 30,
    quantityAvailable: 2,
    category: 'T-shirt',
    currentPrice: 89.99,
    images: [
      '/images/products/product-6.jpg',
    ],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1
        },
        {
          value: 2,
          count: 10
        },
        {
          value: 3,
          count: 10
        },
        {
          value: 4,
          count: 20
        },
        {
          value: 5,
          count: 40
        },
      ]
    },
    reviews: [
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 2
      },
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 4
      },
      {
        name: 'John Doe',
        avatar: '/images/featured-1.jpg',
        description: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>',
        punctuation: 5
      },
    ]
  },
];

export default products;