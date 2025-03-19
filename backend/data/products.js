const products=[
    {
      "name": "Classic Suit",
      "description": "Elegant Ceramic Suit",
      "price": 2000,
      "discountPrice": 1800,
      "countInStock": 200,
      "sku": "SLlTH123",
      "category": "Apparel",
      "brand": "raymond",
      "sizes": ["XS", "S", "M", "L", "XL"],
      "colors": ["Blue", "Black", "Red", "White"],
      "collections": ["Spring Collections"],
      "material": "Denim",
      "gender": "men",
      "images": [
        {
          "url": "https://plus.unsplash.com/premium_photo-1661387540261-c40e1c2d4a87?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xhc3NpYyUyMFN1aXR8ZW58MHx8MHx8fDA%3D",
          "altText": "Front view of the Suits"
        },
        {
          "url": "https://images.unsplash.com/photo-1676377630534-a08fd9778701?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xhc3NpYyUyMFN1aXR8ZW58MHx8MHx8fDA%3D",
          "altText": "Front view of suits"
        },
        {
          "url": "https://media.istockphoto.com/id/516141885/photo/businesswear.webp?a=1&b=1&s=612x612&w=0&k=20&c=MEcmwcy2v35pSxsp8GlJzMCZFIxahHaftWkIkRBkgN0=",
          "altText": "Front view of the suits"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "tags": ["denim", "Sneakers", "casual",,"suits", "formal", ],
      "dimensions": {
        "length": 12,
        "width": 8,
        "height": 1
      },
      "weight": 1.5
    },
    {
      "name": "Slim Fit Blazer",
      "description": "Perfect fit for every occasion",
      "price": 2200,
      "discountPrice": 1900,
      "countInStock": 150,
      "sku": "NLlTH124",
      "category": "Apparel",
      "brand": "suits",
      "sizes": ["S", "M", "L", "XL"],
      "colors": ["Grey", "Black", "Navy"],
      "collections": ["Winter Collections"],
      "material": "Wool",
      "gender": "men",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1592343516109-362f7bd871aa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2xpbSUyMEZpdCUyMEJsYXplcnxlbnwwfHwwfHx8MA%3D%3D",
          "altText": "Front view of the Blazer"
        },
        {
          "url": "https://images.unsplash.com/photo-1595929287357-74f1d41d5a5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2xpbSUyMEZpdCUyMEJsYXplcnxlbnwwfHwwfHx8MA%3D%3D",
          "altText": "Side view of the Blazer"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "tags": ["business", "formal", "winter", "fashion"],
      "dimensions": {
        "length": 14,
        "width": 8,
        "height": 2
      },
      "weight": 2
    },
    {
      "name": "Casual Sneakers",
      "description": "Comfortable sneakers for everyday use",
      "price": 1500,
      "discountPrice": 1300,
      "countInStock": 300,
      "sku": "CAUSALNELlTH125",
      "category": "Footwear",
      "brand": "Puma",
      "sizes": ["7", "8", "9", "10", "11"],
      "colors": ["White", "Black", "Red"],
      "collections": ["Casual Wear"],
      "material": "Synthetic",
      "gender": "men",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FzdWFsJTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
          "altText": "Front view of the Sneakers"
        },
        {
          "url": "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FzdWFsJTIwU25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
          "altText": "Sneakers side view"
        }
      ],
      "isFeatured": false,
      "isPublished": true,
      "tags": ["casual", "comfortable", "footwear"],
      "dimensions": {
        "length": 12,
        "width": 8,
        "height": 6
      },
      "weight": 1.2
    },
    {
      "name": "Luxury Watch",
      "description": "Stylish and Elegant Watch for Men",
      "price": 3500,
      "discountPrice": 3000,
      "countInStock": 80,
      "sku": "WLlTH126",
      "category": "Accessories",
      "brand": "Rolex",
      "sizes": ["One Size"],
      "colors": ["Gold", "Silver"],
      "collections": ["Luxury Collection"],
      "material": "Stainless Steel",
      "gender": "men",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8THV4dXJ5JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
          "altText": "Front view of the Watch"
        },
        {
          "url": "https://images.unsplash.com/photo-1548171838-1fd4cb4ab854?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8THV4dXJ5JTIwV2F0Y2h8ZW58MHx8MHx8fDA%3D",
          "altText": "Side view of the Watch"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "tags": ["luxury", "accessories", "watch", "men"],
      "dimensions": {
        "length": 6,
        "width": 6,
        "height": 1
      },
      "weight": 0.5
    },
    {
      "name": "Classic Leather Wallet",
      "description": "Genuine leather wallet for men",
      "price": 800,
      "discountPrice": 700,
      "countInStock": 150,
      "sku": "WAlLlTH127",
      "category": "Accessories",
      "brand": "Gucci",
      "sizes": ["One Size"],
      "colors": ["Brown", "Black"],
      "collections": ["Premium Collection"],
      "material": "Leather",
      "gender": "men",
      "images": [
        {
          "url": "https://plus.unsplash.com/premium_photo-1680796470939-9cb82226ebaf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2xhc3NpYyUyMExlYXRoZXIlMjBXYWxsZXR8ZW58MHx8MHx8fDA%3D",
          "altText": "Front view of the Wallet"
        },
        {
          "url": "https://plus.unsplash.com/premium_photo-1679943052125-10f5bc1fc518?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENsYXNzaWMlMjBMZWF0aGVyJTIwV2FsbGV0fGVufDB8fDB8fHww",
          "altText": "Wallet side view"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "tags": ["leather", "accessories", "wallet"],
      "dimensions": {
        "length": 4,
        "width": 3,
        "height": 1
      },
      "weight": 0.2
    },
    {
      "name": "Running Shoes",
      "description": "Lightweight shoes designed for runners",
      "price": 1000,
      "discountPrice": 800,
      "countInStock": 220,
      "sku": "RLlTH128",
      "category": "Footwear",
      "brand": "Adidas",
      "sizes": ["6", "7", "8", "9", "10"],
      "colors": ["Blue", "Red", "Black"],
      "collections": ["Sports Collection"],
      "material": "Mesh",
      "gender": "men",
      "images": [
        {
          "url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
          "altText": "Running shoes"
        },
        {
          "url": "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww",
          "altText": "Side view of running shoes"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "tags": ["sports", "running", "footwear", "activewear"],
      "dimensions": {
        "length": 12,
        "width": 8,
        "height": 6
      },
      "weight": 1.3
    },
    {
      "name": "Winter Coat",
      "description": "Warm and stylish coat for cold weather",
      "price": 2500,
      "discountPrice": 2200,
      "countInStock": 120,
      "sku": "CLlTH129",
      "category": "Apparel",
      "brand": "Uniqlo",
      "sizes": ["M", "L", "XL"],
      "colors": ["Black", "Grey", "Navy"],
      "collections": ["Winter Collection"],
      "material": "Wool",
      "gender": "men",
      "images": [
        {
          "url": "https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ludGVyJTIwQ29hdHxlbnwwfHwwfHx8MA%3D%3D",
          "altText": "Front view of the Winter Coat"
        },
        {
          "url": "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2ludGVyJTIwQ29hdHxlbnwwfHwwfHx8MA%3D%3D",
          "altText": "Side view of the Winter Coat"
        }
      ],
      "isFeatured": true,
      "isPublished": true,
      "tags": ["winter", "coat", "warm", "outerwear"],
      "dimensions": {
        "length": 15,
        "width": 10,
        "height": 4
      },
      "weight": 2.5
    },
    {
        "name": "Winter Jeans",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "JLlTH129",
        "category": "Apparel",
        "brand": "Wranglers",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://images.unsplash.com/photo-1668104365801-07d269fda1dc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "altText": "Front view of the Winter Coat"
          },
          {
            "url": "https://images.unsplash.com/photo-1603919362751-9a77a26b2460?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2ludGVyJTIwSmVhbnN8ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of the Winter Coat"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "Cheater Jacket",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "JAClTH129",
        "category": "Apparel",
        "brand": "Wranglers",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1731498608732-545560d7a6d2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlYXRlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Front view of the Winter Coat"
          },
          {
            "url": "https://images.unsplash.com/photo-1576993537667-c6d2386f90a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlYXRlciUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Side view of the Winter Coat"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "T shirt",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "TLlTH129",
        "category": "Apparel",
        "brand": "Puma",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VCUyMHNoaXJ0fGVufDB8fDB8fHww",
            "altText": "Front view of the Winter Coat"
          },
          {
            "url": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VCUyMHNoaXJ0fGVufDB8fDB8fHww",
            "altText": "Side view of the Winter Coat"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "Winter Pants",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "PLlTH129",
        "category": "Apparel",
        "brand": "Uniqlo",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFudHN8ZW58MHx8MHx8fDA%3D",
            "altText": "Front view of the Winter Coat"
          },
          {
            "url": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudHN8ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of the Winter Coat"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "Novels",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "NovelLlTH129",
        "category": "Apparel",
        "brand": "Uniqlo",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://images.unsplash.com/photo-1622567905740-74539aa99bcf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Tm92ZWxzfGVufDB8fDB8fHww",
            "altText": "Front view of the Novels"
          },
          {
            "url": "https://images.unsplash.com/photo-1603162532773-8bcf72814836?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Tm92ZWxzfGVufDB8fDB8fHww",
            "altText": "Side view of the Novels"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "flowers pots",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "PLLTH129",
        "category": "Apparel",
        "brand": "Uniqlo",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://images.unsplash.com/photo-1503513883989-25ef8b2f1a53?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMHBvdHN8ZW58MHx8MHx8fDA%3D",
            "altText": "Front view of the flowers pots"
          },
          {
            "url": "https://images.unsplash.com/photo-1486306885345-1256d25cd259?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VycyUyMHBvdHN8ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of the flowers pots"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "grocery items",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "GLlTH129",
        "category": "Apparel",
        "brand": "Uniqlo",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1663040589382-88caf6b2bc60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeSUyMGl0ZW1zfGVufDB8fDB8fHww",
            "altText": "Front view of the grocery items"
          },
          {
            "url": "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeSUyMGl0ZW1zfGVufDB8fDB8fHww",
            "altText": "Side view of the grocery items"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "I-Phones",
        "description": "Warm and stylish coat for cold weather",
        "price": 125000,
        "discountPrice": 10000,
        "countInStock": 120,
        "sku": "IPLTH129",
        "category": "Apparel",
        "brand": "Apple",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://images.unsplash.com/photo-1580566052257-7b3b27c5d6d1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SXBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Front view of the I-Phones"
          },
          {
            "url": "https://images.unsplash.com/photo-1616876195047-522271be4e66?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Side view of the I-Phones"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      {
        "name": "Mustang cars",
        "description": "Warm and stylish coat for cold weather",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 120,
        "sku": "CARLlTH129",
        "category": "Apparel",
        "brand": "Uniqlo",
        "sizes": ["M", "L", "XL"],
        "colors": ["Black", "Grey", "Navy"],
        "collections": ["Winter Collection"],
        "material": "Wool",
        "gender": "men",
        "images": [
          {
            "url": "https://images.unsplash.com/photo-1532245128003-3db26c775465?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TXVzdGFuZyUyMGNhcnN8ZW58MHx8MHx8fDA%3D",
            "altText": "Front view of the Mustang cars"
          },
          {
            "url": "https://images.unsplash.com/photo-1626945128210-5a3f30f06ae7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TXVzdGFuZyUyMGNhcnN8ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of the Mustang cars"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["winter", "coat", "warm", "outerwear"],
        "dimensions": {
          "length": 15,
          "width": 10,
          "height": 4
        },
        "weight": 2.5
      },
      //Add 10 more product for women
      {
        "name": "Luxury Cashmere Coat",
        "description": "Premium cashmere coat for a classy winter look",
        "price": 3200,
        "discountPrice": 2900,
        "countInStock": 60,
        "sku": "CASHWOM006",
        "category": "Top Wear",
        "brand": "Chanel",
        "sizes": ["M", "L", "XL"],
        "colors": ["Beige", "Grey", "Black"],
        "collections": ["Luxury Collection"],
        "material": "Cashmere",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1670266032642-075422dc2fe3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8THV4dXJ5JTIwQ2FzaG1lcmUlMjBDb2F0fGVufDB8fDB8fHww",
            "altText": "Front view of Luxury Cashmere Coat"
          },
          {
            "url": "https://plus.unsplash.com/premium_photo-1727427850181-b73f87fd7342?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8THV4dXJ5JTIwQ2FzaG1lcmUlMjBDb2F0fGVufDB8fDB8fHww",
            "altText": "Side view of Luxury Cashmere Coat"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["luxury", "coat", "cashmere", "winter"],
        "dimensions": {
          "length": 16,
          "width": 10,
          "height": 4
        },
        "weight": 2.9
      },
      {
        "name": "Chic Woolen Blazer",
        "description": "A stylish woolen blazer perfect for formal wear",
        "price": 2000,
        "discountPrice": 1800,
        "countInStock": 100,
        "sku": "BLAZWOM007",
        "category": "Top Wear",
        "brand": "Ralph Lauren",
        "sizes": ["S", "M", "L"],
        "colors": ["Navy", "Black", "Maroon"],
        "collections": ["Formal Collection"],
        "material": "Wool Blend",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1731267168199-0febf3a676fb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpYyUyMFdvb2xlbiUyMEJsYXplciUyMGZvciUyMHdvbWVufGVufDB8fDB8fHww",
            "altText": "Front view of Chic Woolen Blazer"
          },
          {
            "url": "https://plus.unsplash.com/premium_photo-1664391753897-b12da2576eb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENoaWMlMjBXb29sZW4lMjBCbGF6ZXIlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Side view of Chic Woolen Blazer"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["formal", "blazer", "wool", "elegant"],
        "dimensions": {
          "length": 13,
          "width": 9,
          "height": 3
        },
        "weight": 2.1
      },
      {
        "name": "Sporty Windbreaker",
        "description": "Lightweight and water-resistant windbreaker",
        "price": 1300,
        "discountPrice": 1100,
        "countInStock": 200,
        "sku": "WINDBWOM008",
        "category": "Top Wear",
        "brand": "Nike",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Red", "White", "Black"],
        "collections": ["Sports Collection"],
        "material": "Polyester",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1718386002080-b98161137171?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNwb3J0eSUyMFdpbmRicmVha2VyJTIwZm9yJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
            "altText": "Front view of Sporty Windbreaker"
          },
          {
            "url": "https://images.unsplash.com/photo-1528812969535-4bcefc071532?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNwb3J0eSUyMFdpbmRicmVha2VyJTIwZm9yJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of Sporty Windbreaker"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["sports", "windbreaker", "lightweight", "jacket"],
        "dimensions": {
          "length": 12,
          "width": 8,
          "height": 2
        },
        "weight": 1.2
      },
      {
        "name": "Leather Moto Jacket",
        "description": "Edgy and stylish leather moto jacket",
        "price": 2500,
        "discountPrice": 2200,
        "countInStock": 80,
        "sku": "MOTOWOM009",
        "category": "Top Wear",
        "brand": "AllSaints",
        "sizes": ["S", "M", "L"],
        "colors": ["Black", "Brown"],
        "collections": ["Urban Wear"],
        "material": "Genuine Leather",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1661315433099-4aa7da91e130?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGVhdGhlciUyME1vdG8lMjBKYWNrZXQlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Front view of Leather Moto Jacket"
          },
          {
            "url": "https://images.unsplash.com/photo-1547222246-6d68a0f35395?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fExlYXRoZXIlMjBNb3RvJTIwSmFja2V0JTIwZm9yJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of Leather Moto Jacket"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["leather", "jacket", "moto", "stylish"],
        "dimensions": {
          "length": 14,
          "width": 9,
          "height": 3
        },
        "weight": 2.5
      },
      {
        "name": "Comfy Sherpa Jacket",
        "description": "Soft and warm sherpa fleece jacket",
        "price": 1900,
        "discountPrice": 1700,
        "countInStock": 120,
        "sku": "SHERPWOM010",
        "category": "Top Wear",
        "brand": "Patagonia",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Cream", "Grey", "Pink"],
        "collections": ["Cozy Wear"],
        "material": "Sherpa Fleece",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1695604460164-a1387b4ef5e9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29tZnklMjBTaGVycGElMjBKYWNrZXQlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Front view of Comfy Sherpa Jacket"
          },
          {
            "url": "https://images.unsplash.com/photo-1542318418-572cbf7eb3be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbWZ5JTIwU2hlcnBhJTIwSmFja2V0JTIwZm9yJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of Comfy Sherpa Jacket"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["cozy", "jacket", "sherpa", "fleece"],
        "dimensions": {
          "length": 13,
          "width": 8,
          "height": 3
        },
        "weight": 2.0
      },
      {
        "name": "Elegant Long Cardigan",
        "description": "Soft knit cardigan for layering",
        "price": 1200,
        "discountPrice": 1000,
        "countInStock": 140,
        "sku": "CARDIWOM011",
        "category": "Top Wear",
        "brand": "H&M",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Beige", "Grey", "Navy"],
        "collections": ["Fall Collection"],
        "material": "Cotton Blend",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1737659209063-32e2b1a385a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxlZ2FudCUyMExvbmclMjBDYXJkaWdhbiUyMGZvciUyMHdvbWVufGVufDB8fDB8fHww",
            "altText": "Front view of Elegant Long Cardigan"
          },
          {
            "url": "https://plus.unsplash.com/premium_photo-1661688271566-d1f5697fbb1e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxlZ2FudCUyMExvbmclMjBDYXJkaWdhbiUyMGZvciUyMHdvbWVufGVufDB8fDB8fHww",
            "altText": "Side view of Elegant Long Cardigan"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["fall", "cardigan", "knit", "casual"],
        "dimensions": {
          "length": 12,
          "width": 8,
          "height": 2
        },
        "weight": 1.4
      },
      {
        "name": "Chic Pea Coat",
        "description": "Timeless wool blend pea coat",
        "price": 2300,
        "discountPrice": 2000,
        "countInStock": 100,
        "sku": "PEAWOM012",
        "category": "Top Wear",
        "brand": "Banana Republic",
        "sizes": ["S", "M", "L"],
        "colors": ["Navy", "Black", "Camel"],
        "collections": ["Winter Wear"],
        "material": "Wool Blend",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1674343617986-170d653f9249?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpYyUyMFBlYSUyMENvYXQlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Front view of Chic Pea Coat"
          },
          {
            "url": "https://plus.unsplash.com/premium_photo-1723549679890-ca13112dc50a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2hpYyUyMFBlYSUyMENvYXQlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Side view of Chic Pea Coat"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["coat", "pea", "winter", "wool"],
        "dimensions": {
          "length": 14,
          "width": 9,
          "height": 3
        },
        "weight": 2.3
      },
      {
        "name": "Boho Fringe Kimono",
        "description": "Lightweight kimono with boho-style fringe",
        "price": 1100,
        "discountPrice": 900,
        "countInStock": 160,
        "sku": "KIMONOWOM013",
        "category": "Top Wear",
        "brand": "Free People",
        "sizes": ["S", "M", "L"],
        "colors": ["White", "Beige", "Black"],
        "collections": ["Boho Collection"],
        "material": "Rayon",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1682095993627-33a5cbcd4ec3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9obyUyMEZyaW5nZSUyMEtpbW9ubyUyMHdvbWVufGVufDB8fDB8fHww",
            "altText": "Front view of Boho Fringe Kimono"
          },
          {
            "url": "https://plus.unsplash.com/premium_photo-1664304420529-baa91c52ffbc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJvaG8lMjBGcmluZ2UlMjBLaW1vbm8lMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Side view of Boho Fringe Kimono"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["boho", "kimono", "lightweight", "casual"],
        "dimensions": {
          "length": 12,
          "width": 8,
          "height": 1
        },
        "weight": 1.2
      },
      {
        "name": "Casual Hoodie",
        "description": "Comfortable and warm pullover hoodie",
        "price": 1500,
        "discountPrice": 1300,
        "countInStock": 180,
        "sku": "HOODIEWOM014",
        "category": "Top Wear",
        "brand": "Adidas",
        "sizes": ["S", "M", "L", "XL"],
        "colors": ["Grey", "Black", "Pink"],
        "collections": ["Casual Wear"],
        "material": "Cotton Fleece",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1663956003445-2eee2ea833c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FzdWFsJTIwSG9vZGllJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
            "altText": "Front view of Casual Hoodie"
          },
          {
            "url": "https://plus.unsplash.com/premium_photo-1738948074090-7a57a5770950?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENhc3VhbCUyMEhvb2RpZSUyMHdvbWVufGVufDB8fDB8fHww",
            "altText": "Side view of Casual Hoodie"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["hoodie", "casual", "warm", "fleece"],
        "dimensions": {
          "length": 13,
          "width": 9,
          "height": 3
        },
        "weight": 1.8
      },
      {
        "name": "Elegant Velvet Blazer",
        "description": "Luxurious velvet blazer for evening wear",
        "price": 2800,
        "discountPrice": 2500,
        "countInStock": 60,
        "sku": "VELBLAZWOM015",
        "category": "Top Wear",
        "brand": "Dolce & Gabbana",
        "sizes": ["M", "L"],
        "colors": ["Burgundy", "Black", "Navy"],
        "collections": ["Luxury Collection"],
        "material": "Velvet",
        "gender": "women",
        "images": [
          {
            "url": "https://plus.unsplash.com/premium_photo-1714335491743-5d636e92bfba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEVsZWdhbnQlMjBWZWx2ZXQlMjBCbGF6ZXIlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
            "altText": "Front view of Elegant Velvet Blazer"
          },
          {
            "url": "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8fDA%3D",
            "altText": "Side view of Elegant Velvet Blazer"
          }
        ],
        "isFeatured": true,
        "isPublished": true,
        "tags": ["luxury", "blazer", "velvet", "formal"],
        "dimensions": {
          "length": 14,
          "width": 9,
          "height": 3
        },
        "weight": 2.5
      }
  ];

  //exports 
  module.exports=products;
  