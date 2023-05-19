# Nice Store API Documentation

Welcome to the documentation for the Nice Store REST API. This API allows you to interact with the Nice Store platform and perform various operationsf. The API is designed to be simple, intuitive, and follows the principles of Representational State Transfer (REST).

## Base URL

The base URL for accessing the Nice Store API is:

```
https://nice-store-api.onrender.com
```

All endpoints mentioned in this documentation should be appended to this base URL to form the complete API endpoint.

## Error Handling

If an error occurs while making an API request, the API will respond with an appropriate HTTP status code and an error message in the response body. The possible error codes include:

- `400 Bad Request`: The request was invalid or missing required parameters.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

## Endpoints

### 1. Retrieve Product List

```
GET /products
```

Use this endpoint to retrieve a list of products available in the Nice Store.

#### Parameters

Query parameters:
 - page
 - count - per page limit
 - query - for searching by name
 - sort - newest/oldest/cheapest
 
```
https://nice-store-api.onrender.com/products?page=1&count=6&query=apple&sort=newest
```

#### Response

```
{
  "data":[
    {
      "id":"83",
      "category":"phones",
      "itemId":"apple-iphone-14-pro-512gb-spaceblack",
      "name":"Apple iPhone 14 Pro 512GB Space Black",
      "fullPrice":1600,
      "price":1530,
      "screen":"6.1' OLED",
      "capacity":"512GB",
      "color":"spaceblack",
      "ram":"6GB",
      "year":2022,
      "image":"img/phones/apple-iphone-14-pro/spaceblack/00.webp","createdAt":"2023-05-14T19:30:25.833Z","updatedAt":"2023-05-14T19:30:25.833Z"
    },
    ...
  ],
"pages":32
}
```

### 2. Retrieve Product Category List

```
GET /products/phones
GET /products/tablets
GET /products/accessories
```

Use this endpoint to retrieve a list of products of exact category available in the Nice Store.

#### Parameters

Query parameters:
 - page
 - count - per page limit
 - query - for searching by name
 - sort - newest/oldest/cheapest

```
https://nice-store-api.onrender.com/products/phones?page=1&count=6&query=apple&sort=newest
```

#### Response

```
{
  "data":[
    {
      "id":"83",
      "category":"phones",
      "itemId":"apple-iphone-14-pro-512gb-spaceblack",
      "name":"Apple iPhone 14 Pro 512GB Space Black",
      "fullPrice":1600,
      "price":1530,
      "screen":"6.1' OLED",
      "capacity":"512GB",
      "color":"spaceblack",
      "ram":"6GB",
      "year":2022,
      "image":"img/phones/apple-iphone-14-pro/spaceblack/00.webp","createdAt":"2023-05-14T19:30:25.833Z","updatedAt":"2023-05-14T19:30:25.833Z"
    },
    ...
  ],
"pages":32
}
```

### 3. Retrieve Product Details

```
GET /products/{itemId}
```

Use this endpoint to retrieve detailed information about a specific product.

#### Parameters

- `itemId` (string, required): The unique identifier of the product.

#### Response

```
{
  "id":"apple-iphone-14-pro-512gb-spaceblack",
  "namespaceId":"apple-iphone-14-pro",
  "name":"Apple iPhone 14 Pro 512GB Space Black",
  "capacityAvailable":["128GB","256GB","512GB","1TB"],
  "capacity":"512GB",
  "priceRegular":1466,
  "priceDiscount":1378,
  "colorsAvailable":["spaceblack","gold"],
  "color":"spaceblack",
  "images":["img/phones/apple-iphone-14-pro/spaceblack/00.webp","img/phones/apple-iphone-14-pro/spaceblack/01.webp","img/phones/apple-iphone-14-pro/spaceblack/02.webp","img/phones/apple-iphone-14-pro/spaceblack/03.webp","img/phones/apple-iphone-14-pro/spaceblack/04.webp"],
  "description":[{"title":"And then was a Pro","text":["A transformative triple-camera system that adds tons of capability without complexity.","An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."]},{"title":"Camera","text":["Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."]},{"title":"Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.","text":["iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."]}],
  "screen":"6.1' OLED (Super Retina XDR)",
  "resolution":"2556x1179",
  "processor":"Apple A16 Bionic",
  "ram":"6GB",
  "camera":"12 Mp + 12 Mp + 12MP",
  "zoom":"Digital 5x, Optical 2x",
  "cell":["GPRS","EDGE","WCDMA","UMTS","HSPA","LTE","5G"],
  "createdAt":"2023-05-14T19:30:25.818Z",
  "updatedAt":"2023-05-14T19:30:25.818Z"}
```

### 4. Get recommended products of specific item

```
GET /products/{itemId}/recommended
```

Use this endpoint to retrieve detailed information about recommends of a specific product.

#### Parameters

- `itemId` (string, required): The unique identifier of the product.

#### Response

```
[
  {
    "id":"apple-iphone-14-pro-512gb-spaceblack",
    "namespaceId":"apple-iphone-14-pro",
    "name":"Apple iPhone 14 Pro 512GB Space Black",
    "capacityAvailable":["128GB","256GB","512GB","1TB"],
    "capacity":"512GB",
    "priceRegular":1466,
    "priceDiscount":1378,
    "colorsAvailable":["spaceblack","gold"],
    "color":"spaceblack",
    "images":["img/phones/apple-iphone-14-pro/spaceblack/00.webp","img/phones/apple-iphone-14-pro/spaceblack/01.webp","img/phones/apple-iphone-14-pro/spaceblack/02.webp","img/phones/apple-iphone-14-pro/spaceblack/03.webp","img/phones/apple-iphone-14-pro/spaceblack/04.webp"],
    "description":[{"title":"And then was a Pro","text":["A transformative triple-camera system that adds tons of capability without complexity.","An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."]},{"title":"Camera","text":["Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."]},{"title":"Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.","text":["iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."]}],
    "screen":"6.1' OLED (Super Retina XDR)",
    "resolution":"2556x1179",
    "processor":"Apple A16 Bionic",
    "ram":"6GB",
    "camera":"12 Mp + 12 Mp + 12MP",
    "zoom":"Digital 5x, Optical 2x",
    "cell":["GPRS","EDGE","WCDMA","UMTS","HSPA","LTE","5G"],
    "createdAt":"2023-05-14T19:30:25.818Z",
    "updatedAt":"2023-05-14T19:30:25.818Z"
  },
  ...
]
```

### 5. Get 10 newest or sale products

```
GET /products/new
GET /products/discount
```

Use this endpoint to retrieve detailed information about recommends of a specific product.

#### Response

```
[
  {
    "id":"apple-iphone-14-pro-512gb-spaceblack",
    "namespaceId":"apple-iphone-14-pro",
    "name":"Apple iPhone 14 Pro 512GB Space Black",
    "capacityAvailable":["128GB","256GB","512GB","1TB"],
    "capacity":"512GB",
    "priceRegular":1466,
    "priceDiscount":1378,
    "colorsAvailable":["spaceblack","gold"],
    "color":"spaceblack",
    "images":["img/phones/apple-iphone-14-pro/spaceblack/00.webp","img/phones/apple-iphone-14-pro/spaceblack/01.webp","img/phones/apple-iphone-14-pro/spaceblack/02.webp","img/phones/apple-iphone-14-pro/spaceblack/03.webp","img/phones/apple-iphone-14-pro/spaceblack/04.webp"],
    "description":[{"title":"And then was a Pro","text":["A transformative triple-camera system that adds tons of capability without complexity.","An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro."]},{"title":"Camera","text":["Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."]},{"title":"Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.","text":["iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with."]}],
    "screen":"6.1' OLED (Super Retina XDR)",
    "resolution":"2556x1179",
    "processor":"Apple A16 Bionic",
    "ram":"6GB",
    "camera":"12 Mp + 12 Mp + 12MP",
    "zoom":"Digital 5x, Optical 2x",
    "cell":["GPRS","EDGE","WCDMA","UMTS","HSPA","LTE","5G"],
    "createdAt":"2023-05-14T19:30:25.818Z",
    "updatedAt":"2023-05-14T19:30:25.818Z"
  },
  ...
]
```

### 6. Create an Order

```
POST /orders
```

Use this endpoint to create a new order in the Nice Store.

Example Request Body:

```
{
  "userId": "user_2Vkglophugvkhvg"
  "products": [
    {
      "id":"83",
      "category":"phones",
      "itemId":"apple-iphone-14-pro-512gb-spaceblack",
      "name":"Apple iPhone 14 Pro 512GB Space Black",
      "fullPrice":1600,
      "price":1530,
      "screen":"6.1' OLED",
      "capacity":"512GB",
      "color":"spaceblack",
      "ram":"6GB",
      "year":2022,
      "image":"img/phones/apple-iphone-14-pro/spaceblack/00.webp","createdAt":"2023-05-14T19:30:25.833Z","updatedAt":"2023-05-14T19:30:25.833Z",
      "count": 5,
    },
  ],
  "address": "Germany, Leipzig, Zwickauer str. 11, 23",
  "totalPrice": 2000,
  "createdAt": 2023-05-18 15:23:54.521+00,
  "updatedAt": 2023-05-18 15:23:54.521+00
}
```

### 7. Retrieve User's Orders

```
GET /orders/{userId}
```

Use this endpoint to retrieve detailed information about orders of specific user.

#### Parameters

- `userId` (string, required): The unique identifier of the user.

#### Response

```
[
  {
    "userId": "user_2Vkglophugvkhvg"
    "products": [
      {
        "id":"83",
        "category":"phones",
        "itemId":"apple-iphone-14-pro-512gb-spaceblack",
        "name":"Apple iPhone 14 Pro 512GB Space Black",
        "fullPrice":1600,
        "price":1530,
        "screen":"6.1' OLED",
        "capacity":"512GB",
        "color":"spaceblack",
        "ram":"6GB",
        "year":2022,
        "image":"img/phones/apple-iphone-14-pro/spaceblack/00.webp","createdAt":"2023-05-14T19:30:25.833Z","updatedAt":"2023-05-14T19:30:25.833Z",
        "count": 5,
      },
    ],
    "address": "Germany, Leipzig, Zwickauer str. 11, 23",
    "totalPrice": 2000,
    "createdAt": 2023-05-18 15:23:54.521+00,
    "updatedAt": 2023-05-18 15:23:54.521+00
  },
  ...
]
```

## Conclusion

This concludes the documentation for the Nice Store REST API. You can use the provided endpoints to interact with the Nice Store platform and build e-commerce applications or integrate it with other systems. If you have any further questions or need assistance, please refer to the Nice Store documentation or contact our support team.
