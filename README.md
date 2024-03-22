# Welcome Aboard to Cabinet & Quill!

You've been hired to build an ecommerce website for the stationary store Cabinet & Quill! 

They have provided you with an ERD of their database and not much else.
![](./C&Q_ERD.png)

## Setup
1. Clone the repository 
2. Navigate to the project directory `Cabinet-Quill`
3. Run `npm install`
4. To start the application, run `npm run dev`

**API**
1. In your `workspace` directory, create a new directory called `cq-api`
2. Navigate to `cq-api`
3. `touch database.json`
4. Copy the `json` below and paste in `database.json`
5. In your terminal, run `json-server -p 8088 database.json`

<details>
    <summary>Expand to get your JSON data</summary>

```json
{
  "users": [
    {
      "id": 1,
      "username": "R.Carroll",
      "email": "r.carroll@bujo.com"
    },
    {
      "id": 2,
      "username": "AmandaRachLee",
      "email": "amanda@arl.com"
    },
    {
      "id": 3,
      "username": "Blossom",
      "email": "bb@blossombujo.com"
    }
  ],
  "productTypes": [
    {
      "id": 1,
      "name": "Notebook"
    },
    {
      "id": 2,
      "name": "Washi Tape"
    },
    {
      "id": 3,
      "name": "Stickers"
    },
    {
      "id": 4,
      "name": "Pens"
    },
    {
      "id": 5,
      "name": "Bags & Cases"
    }
  ],
  "products": [
    {
      "id": 1,
      "name": "Jewel Collection Pens",
      "productTypeId": 4,
      "stock": 5,
      "price": 35.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/products/7-pack-jewel.jpg?v=1631288903"
    },
    {
      "id": 2,
      "name": "Tropical Collection Pens",
      "productTypeId": 4,
      "stock": 3,
      "price": 35.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/products/3-packbrights.jpg?v=1631288899"
    },
    {
      "id": 3,
      "name": "Primary Collection Pens",
      "productTypeId": 4,
      "stock": 4,
      "price": 35.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/products/3-primarypack_b3b91c2f-7f2c-425d-936d-8c34f67b4fef.jpg?v=1631288896"
    },
    {
      "id": 4,
      "name": "Glow-In-The-Dark Washi",
      "productTypeId": 2,
      "stock": 7,
      "price": 15.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/products/HWWT301_HalloweenWashiTape.jpg?v=1632510358"
    },
    {
      "id": 5,
      "name": "A5 Forest Night Dot",
      "productTypeId": 1,
      "stock": 0,
      "price": 35.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/products/forest-sky-192.jpg?v=1631288869"
    },
    {
      "id": 6,
      "name": "B6 Storybook Ruled",
      "productTypeId": 1,
      "stock": 1,
      "price": 35.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/files/EveryDayCollectionproduct1.2024-13.jpg?v=1704749084"
    },
    {
      "id": 7,
      "name": "A5 Wonderstruck Dot",
      "productTypeId": 1,
      "stock": 2,
      "price": 35.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/files/EveryDayCollectionproduct1.2024-5.jpg?v=1704748632"
    },
    {
      "id": 8,
      "name": "Storybook Washi",
      "productTypeId": 2,
      "stock": 3,
      "price": 19.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/files/EveryDayCollectionproduct1.2024-35.jpg?v=1704749353"
    },
    {
      "id": 9,
      "name": "Books & Flowers Stickers",
      "productTypeId": 3,
      "stock": 3,
      "price": 11.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/files/Spring24Stickers-5.jpg?v=1708111182"
    },
    {
      "id": 10,
      "name": "Vintage Typewriter Stickers",
      "productTypeId": 3,
      "stock": 2,
      "price": 11.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/files/Spring24Stickers-1.jpg?v=1708111153"
    },
    {
      "id": 11,
      "name": "Nostalgia Theme Stickers",
      "productTypeId": 3,
      "stock": 3,
      "price": 11.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/files/Nostalgialaunch-17.jpg?v=1696628440"
    },
    {
      "id": 12,
      "name": "Denim & Daisies Stickers",
      "productTypeId": 3,
      "stock": 0,
      "price": 11.0,
      "imageUrl": "https://www.archerandolive.com/cdn/shop/files/Nostalgialaunch-16.jpg?v=1696629419"
    },
    {
      "id": 13,
      "name": "Teddy Retractable Pencil Case",
      "productTypeId": 5,
      "stock": 1,
      "price": 34.0,
      "imageUrl": "https://shoparl.co/cdn/shop/files/TexturedPencilCases-5.jpg?v=1705519196&width=713"
    },
    {
      "id": 14,
      "name": "Corduroy Tote Bag",
      "productTypeId": 5,
      "stock": 0,
      "price": 45.0,
      "imageUrl": "https://shoparl.co/cdn/shop/products/KeepDoodlingToteBag-2.jpg?v=1648446230&width=713"
    },
    {
      "id": 15,
      "name": "Denim Retractable Pencil Case",
      "productTypeId": 5,
      "stock": 3,
      "price": 34.0,
      "imageUrl": "https://shoparl.co/cdn/shop/files/TexturedPencilCases-13.jpg?v=1705519302&width=713"
    }
  ],
  "orders": [
    {
      "id": 1,
      "userId": 1,
      "complete": true
    },
    {
      "id": 2,
      "userId": 1,
      "complete": false
    },
    {
      "id": 3,
      "userId": 2,
      "complete": false
    },
    {
      "id": 4,
      "userId": 3,
      "complete": false
    }
  ],
  "orderItems": [
    {
      "id": 1,
      "orderId": 1,
      "productId": 4
    },
    {
      "id": 2,
      "orderId": 1,
      "productId": 3
    },
    {
      "id": 3,
      "orderId": 1,
      "productId": 8
    },
    {
      "id": 4,
      "orderId": 1,
      "productId": 3
    },
    {
      "id": 5,
      "orderId": 2,
      "productId": 9
    },
    {
      "id": 6,
      "orderId": 2,
      "productId": 13
    },
    {
      "id": 7,
      "orderId": 2,
      "productId": 7
    },
    {
      "id": 8,
      "orderId": 3,
      "productId": 6
    },
    {
      "id": 9,
      "orderId": 4,
      "productId": 15
    }
  ]
}
```
</details>

### [✏️ Instructor Guide](./InstructorGuide.md)





