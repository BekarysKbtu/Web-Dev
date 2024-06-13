import React from 'react'

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: '$1350',
    description: 'The Lightning connector has been upgraded to the fast USB Type-C. The A17 Pro processor is much more powerful than previous models, making it possible to play games with greater comfort. Titanium facets that make the iPhone lighter and more protected.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium',
      'https://www.mechta.kz/export/1cbitrix/import_files/21/2193277c-5398-11ee-a261-005056b6dbd7-480.webp',
      'https://www.mechta.kz/export/1cbitrix/import_files/21/2193277d-5398-11ee-a261-005056b6dbd7-480.webp',
    ]
  },

  {
    id: 2,
    name: 'iPhone 15',
    price: '$850',
    description: 'The improved camera has a resolution of 48 megapixels and shoots very well.The Lightning connector has been upgraded to the fast USB Type-C. Instead of the old style of "Notch", Dynamic Island is used, which makes it very easy to see background applications.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-goluboi-113137929/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd1/h07/83559339032606.png?format=gallery-large',
      'https://www.mechta.kz/export/1cbitrix/import_files/6c/6cb62cea-5394-11ee-a261-005056b6dbd7-480.webp',
      'https://www.mechta.kz/export/1cbitrix/import_files/6c/6cb62ceb-5394-11ee-a261-005056b6dbd7-480.webp',
    ]
  },

  {
    id: 3,
    name: 'Samsung Galaxy S24',
    price: '$1100',
    description: 'New Galaxy AI features include cropping unnecessary objects from photos, stylizing text, and translating during a call. Cutting-edge smartphone featuring a sleek design, a powerful processor, and a stunning high-resolution display.',
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-128-gb-chernyi-podarok-117317376/?c=750000000',
    image: [
      'https://mtscdn.ru/upload/iblock/75e/SMG_PC_S24_YELLOW_1.png',
      'https://ss7.vzw.com/is/image/VerizonWireless/samsung-eureka-e1-amberyellow-e?wid=465&hei=465&fmt=webp',
      'https://images.samsung.com/kz_ru/smartphones/galaxy-s24/buy/Device/product_color_yellow.png?imwidth=480',
    ]
  },

  {
    id: 4,
    name: 'Google Pixel 8',
    price: '$650',
    description: 'New AI features include cropping unnecessary objects from photos, stylizing text, and translating during a call. The new improved processor provides better protection for the display.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/google-pixel-8-8-gb-128-gb-zelenyi-117684000/?c=750000000',
    image: [
      'https://microless.com/cdn/products/2b4ce0e9be5fa1849dc2c61a97a0e48f-hi.jpg',
      'https://lh3.googleusercontent.com/BjsHyja6--bSJSh3FFTJfM59P-NZglOaixJ3AmuYwCTkjxtpR2gjmSidTmz5cR1B4AnwQXjxq1kGDB9pQ6Nj0dU2oDYGhdR3d4g',
      'https://techwarehouse.co.za/cdn/shop/files/google-pixel-8-2_89e47029-de42-4faf-bc0b-b63b81a8db37_300x300.jpg?v=1699298547',
    ]
  },

  
  {
    id: 5,
    name: 'Google Pixel 8 Pro',
    price: '$1650',
    description: 'New AI features include cropping unnecessary objects from photos, stylizing text, and translating during a call. The new improved processor provides better protection for the display.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-sinii-113692626/?c=750000000',
    image: [
      'https://www.yaphone.com/5865-large_default/google-pixel-8-pro.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h66/h3c/84136090075166.jpg?format=gallery-medium',
      'https://lh3.googleusercontent.com/aFKiJ18M6dkmFNRtTYfgsmQ5wLaooFnricbORWi19wbi1qQGFWHuxlHlI0iOuJ8S-nCTeigLvZa6kNUhwZ2PCp6R2WXQvNhkbg',
    ]
  },

  {
    id: 6,
    name: 'Xiaomi 14 Ultra',
    price: '$1200',
    description: 'The cameras on this smartphone are some of the best available, and they take very high-quality photos at a level similar to that of professional cameras. They also have some cool AI features that enhance the photos.',
    rating: 4.7,
    link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-belyi-117684822/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h73/hd9/85504363560990.jpg?format=gallery-medium',
      'https://files.refurbed.com/ii/xiaomi-14-ultra-1713431152469290413.jpg?t=resize&h=630&w=1200',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBG4-DNEf2LA_t2SgNyVh-ov0hZQRMSnrHw&s',
    ]
  },

  {
    id: 7,
    name: 'Xiaomi 14 Pro',
    price: '$1250',
    description: 'A new and improved processor. The titanium facets make the smartphone lighter and more secure. The enhanced cameras take very cool shots. AI features are added.',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/xiaomi-14-pro-titanium-special-edition-china-version-16-gb-1024-gb-seryi-116866740/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h15/h56/85243984543774.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf6/hbe/85243984609310.jpg?format=gallery-medium',
      'https://www.kickmobiles.com/images/thumbs/0074485_xiaomi-14-pro_808.jpeg',
    ]
  },

  {
    id: 8,
    name: 'Honor Magic6 Pro ',
    price: '$1250',
    description: 'The camera shoots excellent quality and has the best stabilizers. With it, the video becomes very smooth. The connection between applications is great, so you can instantly search for what you need without leaving the app or looking at the map, among other things.',
    rating: 5,
    link: 'https://kaspi.kz/shop/p/honor-magic6-pro-12-gb-512-gb-zelenyi-117855687/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbd/hc7/85557965750302.png?format=gallery-medium',
      'https://www.mechta.kz/export/1cbitrix/import_files/2f/2f241553-f171-11ee-a265-005056b6e990-480.webp',
      'https://www.mechta.kz/export/1cbitrix/import_files/2f/2f241555-f171-11ee-a265-005056b6e990-480.webp',
    ]
  },

  {
    id: 9,
    name: 'Samsung Galaxy Z Fold5',
    price: '$1200',
    description: 'There is no gap between the screens, and the cameras are excellent. Thanks to the new processor, the optimization has been improved. A Galaxy AI feature has also been added, making this phone great for multitasking.',
    rating: 4.3,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold5-5g-12-gb-256-gb-goluboi-112861820/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h2a/h6c/82762033758238.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h71/h1b/83172948738078.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h43/h9d/83172953489438.jpg?format=gallery-medium',
    ]
  },

  {
    id: 10,
    name: 'Samsung Galaxy Z Flip5',
    price: '$800',
    description: 'There is no gap between the two screens. The cameras are good. Adding a Galaxy AI feature. The front screen even more fascinating, as it allows you to take selfies using the rear camera.',
    rating: 4.9,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-flip5-8-gb-256-gb-zelenyi-112861706/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h97/h4b/83172312907806.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha1/h16/83172316479518.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha2/h33/83172318576670.png?format=gallery-medium',
    ]
  },

  {
    id: 11,
    name: 'TECNO Phantom V Flip',
    price: '$600',
    description: 'Stylish smartphone with a unique flip design, high-resolution display, advanced cameras, and a powerful processor. It offers smooth performance, long battery life, and a blend of modern technology with a nostalgic touch.',
    rating: 4,
    link: 'https://kaspi.kz/shop/p/tecno-phantom-v-flip-5g-8-gb-256-gb-chernyi-114017185/?c=750000000',
    image:[
      'https://resources.cdn-kaspi.kz/img/m/p/h47/h3a/84328664793118.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5e/h80/84328665055262.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h59/h11/84328665186334.jpg?format=gallery-medium',
    ]
  },

  {
    id: 12,
    name: 'Huawei Mate X3 ',
    price: '$1600',
    description: 'Premium foldable smartphone featuring a sleek design, a high-resolution flexible display, and advanced camera capabilities. It offers powerful performance, long battery life, and the latest connectivity options, making it a standout device in the foldable phone market.',
    rating: 4.5,
    link: 'https://kaspi.kz/shop/p/huawei-mate-x3-12-gb-512-gb-zelenyi-110326631/?c=750000000',
    image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/h84/80737556398110.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/hff/80737556463646.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h77/h0a/80737556430878.jpg?format=gallery-medium',
    ]
  },
];

export default products;