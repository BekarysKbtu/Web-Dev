import React, { useState } from 'react';
import ProductList from './components/ProductList';

const categories = {
  'Smartphone': [
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
    id: 3,
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
     id: 4,
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
     id: 5,
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
  ],

  'Smart Watch':[
    {
     id: 6,
     name: 'Apple Watch Ultra 2',
     price: '$850',
     description: 'This watch is a rugged, high-end smartwatch designed for extreme sports and adventure. It features a durable titanium case, an always-on Retina display, extended battery life, advanced health and fitness tracking, and enhanced environmental sensors.',
     rating: 5,
     link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-gps-cellular-49-mm-serebristyi-oranzhevyi-113574602/?c=750000000',
     image: [
      'https://www.mechta.kz/export/1cbitrix/import_files/e8/e8cbcf41-65c2-11ee-a262-005056b6dbd7-480.webp',
      'https://www.mechta.kz/export/1cbitrix/import_files/e8/e8cbcf40-65c2-11ee-a262-005056b6dbd7-480.webp',
      'https://www.mechta.kz/export/1cbitrix/import_files/4f/4ff96104-3e29-11ed-a24a-005056b6dbd7-480.webp',
     ]
    },

    {
     id: 7,
     name: 'Samsung Galaxy Watch 6',
     price: '$250',
     description: 'This watch  is a versatile smartwatch designed for everyday use. It features a sleek design with a vibrant AMOLED display, advanced health and fitness tracking, including ECG and blood pressure monitoring, and improved battery life.',
     rating: 4.7,
     link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-classic-serebristyi-seryi-112404574/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h97/hac/82621671047198.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5b/hf6/82621671079966.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5c/h8d/82621671112734.jpg?format=gallery-large',
     ]
    },

    {
     id: 8,
     name: 'Google Pixel Watch',
     price: '$300',
     description: 'This watch is a sleek and stylish smartwatch that integrates seamlessly with Google ecosystem. It features a vibrant circular AMOLED display, advanced health and fitness tracking powered by Fitbit, and various smart functionalities such as notifications, Google Assistant',
     rating: 4.1,
     link: 'https://kaspi.kz/shop/p/google-pixel-watch-serebristyi-bezhevyi-108757191/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc8/h61/68659106021406.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h39/hdb/68659108118558.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h88/hae/68659109167134.jpg?format=gallery-medium',
     ]
    },

    {
     id: 9,
     name: 'Huawei Watch GT 4',
     price: '$150',
     description: 'This watch is a stylish and versatile smartwatch and impressive battery life, lasting up to two weeks on a single charge. It features a vibrant AMOLED display, advanced health and fitness tracking, including heart rate monitoring, SpO2 measurement, and sleep tracking.',
     rating: 4.4,
     link: 'https://kaspi.kz/shop/p/huawei-watch-gt-4-46-mm-serebristyi-zelenyi-113400161/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h53/h94/83881081372702.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/h73/83881593012254.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h0f/h82/83881593045022.jpg?format=gallery-medium',
     ]
    },

    {
     id: 10,
     name: 'Xiaomi Smart Band 8 ',
     price: '$40',
     description: 'This band is an affordable and lightweight fitness tracker with a sleek design.With up to 14 days of battery life, water resistance, and smart notifications, it provides essential health insights and connectivity in a compact form.',
     rating: 5,
     link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-global-version-chernyi-113260965/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h05/h87/83701583446046.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf2/h47/83701585805342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he8/h93/83701586001950.jpg?format=gallery-medium',
     ]
    },
  ],

  'Earphone':[
    {
     id: 11,
     name: 'AirPods Max ',
     price: '$550',
     description: 'This headphone is Apple high-end over-ear headphones with excellent audio quality, active noise cancellation, and seamless integration with Apple devices via Bluetooth. They feature a sleek design, spatial audio, and up to 20 hours of battery life.',
     rating: 3.4,
     link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h97/h0d/64141045628958.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h0b/ha5/64141047791646.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hce/h61/64141055590430.jpg?format=gallery-medium',
     ]
    },

    {
     id: 12,
     name: 'Sony WH-1000XM4 ',
     price: '$250',
     description: 'This headphone is top-tier wireless headphones known for their outstanding noise cancellation, high-quality sound, and long battery life up to 30 hours. They also feature touch controls and are perfect for travel and music enthusiasts.',
    rating: 5,
     link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-serebristyi-100509735/?c=750000000',
     image: [
      'https://www.mechta.kz/export/1cbitrix/import_files/0d/0df994b3-f63c-11ea-a230-005056b6dbd7-480.webp',
      'https://www.mechta.kz/export/1cbitrix/import_files/0d/0df994b5-f63c-11ea-a230-005056b6dbd7-480.webp',
      'https://www.mechta.kz/export/1cbitrix/import_files/0d/0df994b7-f63c-11ea-a230-005056b6dbd7-480.webp',
     ]
    },

    {
     id: 13,
     name: 'Apple AirPods 3',
     price: '$180',
     description: 'This earphone is the latest wireless earbuds from Apple, featuring improved sound quality, spatial audio, and a comfortable fit. They also include Active Noise Cancellation and support for Siri voice commands.',
     rating: 4.9,
     link: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd2/hc8/64341971140638.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h67/hb0/64341974220830.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h20/hae/64341980938270.jpg?format=gallery-medium',
     ]
    },

    {
     id: 14,
     name: 'Nothing Ear 2',
     price: '$250',
     description: 'This earphone is stylish wireless earbuds known for their transparent design, quality sound, active noise cancellation, and touch controls. They offer a unique blend of aesthetics and functionality in the earbud market.',
     rating: 4,
     link: 'https://kaspi.kz/shop/p/nothing-ear-2-belyi-109894498/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h69/h15/80100625383454.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he3/h1e/80792520982558.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h15/ha8/80792521179166.png?format=gallery-medium',
     ]
    },

    {
     id: 15,
     name: 'Realme Buds T100',
     price: '$30',
     description: 'This earphone is budget-friendly wired earphones known for their lightweight design, clear sound quality, and comfortable fit. They offer basic functionality with an in-line remote for easy control of music and calls, making them ideal for everyday use.',
     rating: 3.8,
     link: 'https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h70/h1a/65147416477726.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h4a/h5a/65147417002014.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h07/haf/65147417526302.jpg?format=gallery-medium',
     ]
    },
  ],

  'Powerbank':[
    {
     id: 16,
     name: 'Apple MagSafe Battery Pack ',
     price: '$150',
     description: 'This powerbank is a compact and magnetic wireless charging accessory designed for iPhone users. It provides on-the-go power with a seamless attachment to iPhone 12 models and later via MagSafe technology, offering convenient charging without the need for cables.',
     rating: 4.3,
     link: 'https://kaspi.kz/shop/p/apple-magsafe-battery-pack-belyi-102171911/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8d/hf0/64081335189534.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h45/64081339056158.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h27/h2f/64081341087774.jpg?format=gallery-medium',
     ]
    },

    {
     id: 17,
     name: 'Baseus PPCX070005 ',
     price: '$50',
     description: 'This powerbank  is a portable power bank known for its high capacity and compact design. It offers reliable charging for various devices, featuring multiple ports for simultaneous charging and fast recharging capabilities. Ideal for users needing portable power on the go.',
     rating: 4.6,
     link: 'https://kaspi.kz/shop/p/baseus-ppcx070005-10000-mach-fioletovyi-108488001/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/hf7/84871480508446.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h98/hcc/84871480573982.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1e/hc6/84871480705054.png?format=gallery-medium',
     ]
    },

    {
     id: 18,
     name: 'Solar Charge 111 ',
     price: '$15',
     description: 'This powerbank has a lot of energy, and can charge by sun. It is very needable to travelling.',
     rating: 4,
     link: 'https://kaspi.kz/shop/p/solar-charge-111-20000-mach-chernyi-104793436/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h92/h08/84871455997982.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hde/h71/84871456063518.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5a/h13/85209138888734.jpg?format=gallery-medium',
     ]
    },

    {
     id: 19,
     name: 'Xiaomi Mi Pocket Edition Pro',
     price: '$25',
     description: 'This powerbank  is a compact and portable power bank known for its sleek design and high capacity. It offers fast charging capabilities and is compatible with a wide range of devices, making it an ideal choice for users needing reliable power on the go.',
     rating: 4.8,
     link: 'https://kaspi.kz/shop/p/xiaomi-mi-pocket-edition-pro-10000-mach-sinii-104570469/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h4f/h11/86071337779230.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h60/h8d/86071337844766.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h72/h7d/86071337811998.png?format=gallery-medium',
     ]
    },

    {
     id: 20,
     name: 'Union UP06',
     price: '$20',
     description: 'This powerbank has wireless charging by MagSafe and very cheap in this category. Also have a lot of energy, so you can charge your iPhone 3 times.',
     rating: 4.7,
     link: 'https://kaspi.kz/shop/p/union-up06-10000-mach-seryi-116385344/?c=750000000',
     image: [
      'https://resources.cdn-kaspi.kz/img/m/p/h24/h3d/85161856892958.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h59/h5e/85161856958494.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc7/h19/85161857024030.png?format=gallery-medium',
     ]
    }
  ]
}

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
  <div>
       <div id='page-title'>
         <h1>Tech Store</h1>
       </div>
    <div>
      <div>
        {Object.keys(categories).map(category => (
          <button id = 'category-button' key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      {selectedCategory && (
        <ProductList products={categories[selectedCategory]} />
      )}
    </div>
  </div>
   
  );
};

export default App;
