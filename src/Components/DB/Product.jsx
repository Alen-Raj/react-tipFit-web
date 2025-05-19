const Products = [
  {
    id: 1,
    name: "Fossil Watch Model 1",
    brand: "Fossil",
    price: 15999,
    quantity: 1,
    images: { 
      Black: "https://indaystoreonline.com/cdn/shop/files/FOSSILWatchMen_sME1136_3_-1.jpg?v=1724160944&width=1445", 
      Brown: "https://i.ytimg.com/vi/5iainb215RA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5C7MgLhLbO6gKTWbXSBy1GULERg" 
    },
    colors: ["Black", "Brown"],
    category: "Smartwatch",
    rating: 4.5,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Digital",
    warranty: "2 Years",
    deliveryTime: "2-4 Days",
    description: "Fossil premium quality smartwatch with fitness features.",
    gender: "Men"
  },
  {
    id: 2,
    name: "Casio Watch Model 2",
    brand: "Casio",
    price: 8999,
    quantity: 1,
    images: { 
      Black: "https://assets.ajio.com/medias/sys_master/root/20220309/2t5W/6227b605f997dd03e207faec/-473Wx593H-469161700-black-MODEL.jpg", 
      Red: "https://m.media-amazon.com/images/I/618a0FcJijL.jpg" 
    },
    colors: ["Black", "Red"],
    category: "Analog-Digital",
    rating: 4.3,
    inStock: true,
    strapMaterial: "Resin",
    displayType: "Analog-Digital",
    warranty: "1 Year",
    deliveryTime: "3-5 Days",
    description: "Shock-resistant Casio watch designed for outdoor use.",
    gender: "Unisex"
  },
  {
    id: 3,
    name: "Titan Watch Model 3",
    brand: "Titan",
    price: 2499,
    quantity: 1,
    images: { 
      Silver: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/3/2/j/-original-imagz4wvh3atueye.jpeg?q=90&crop=false", 
      Blue: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=800&sh=800" 
    },
    colors: ["Silver", "Blue"],
    category: "Analog",
    rating: 4.1,
    inStock: true,
    strapMaterial: "Stainless Steel",
    displayType: "Analog",
    warranty: "2 Years",
    deliveryTime: "2-4 Days",
    description: "Elegant analog watch by Titan for formal occasions.",
    gender: "Women"
  },
  {
    id: 4,
    name: "boAt Watch Model 4",
    brand: "boAt",
    price: 3299,
    quantity: 1,
    images: { 
      Black: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_8f53218a-8c49-43d1-8d20-1e638e28b29e.png?v=1698825866", 
      Green: "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/p/5/7/1-28-lunar-connect-android-ios-boat-yes-original-imagmw9pajksrskg.jpeg?q=90&crop=false" 
    },
    colors: ["Black", "Green"],
    category: "Smartwatch",
    rating: 4.2,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "1 Year",
    deliveryTime: "1-3 Days",
    description: "Affordable smartwatch with Alexa and health tracking.",
    gender: "Men"
  },
  {
    id: 5,
    name: "Fire-Boltt Watch Model 5",
    brand: "Fire-Boltt",
    price: 1999,
    quantity: 1,
    images: { 
      Grey: "https://m.media-amazon.com/images/I/61zBJcICfFL._AC_UF1000,1000_QL80_.jpg", 
      Pink: "https://infiswap.com/wp-content/uploads/2024/07/fi15-1.jpg" 
    },
    colors: ["Grey", "Pink"],
    category: "Smartwatch",
    rating: 4.3,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "1 Year",
    deliveryTime: "2-5 Days",
    description: "Feature-packed budget smartwatch with multiple modes.",
    gender: "Unisex"
  },
  {
    id: 6,
    name: "Rolex Watch Model 6",
    brand: "Rolex",
    price: 85000,
    quantity: 1,
    images: { 
      Gold: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56KOjdVYBukKy6L2WwT2GgwYhMm506DQdQA&s" 
    },
    colors: ["Gold"],
    category: "Analog",
    rating: 4.8,
    inStock: true,
    strapMaterial: "Gold",
    displayType: "Analog",
    warranty: "5 Years",
    deliveryTime: "5-7 Days",
    description: "Luxurious Rolex analog watch with premium gold finish.",
    gender: "Men"
  },
  {
    id: 7,
    name: "Samsung Galaxy Watch 7",
    brand: "Samsung",
    price: 19999,
    quantity: 1,
    images: { 
      Black: "https://www.jbhifi.com.au/cdn/shop/files/776410-Product-0-I-638551276806775389.jpg?v=1719531006", 
      Silver: "https://m.media-amazon.com/images/I/71d7quY-KxL.jpg" 
    },
    colors: ["Black", "Silver"],
    category: "Smartwatch",
    rating: 4.6,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "2 Years",
    deliveryTime: "2-4 Days",
    description: "Samsung Galaxy smartwatch with advanced fitness tracking.",
    gender: "Unisex"
  },
  {
    id: 8,
    name: "Seiko Watch Model 8",
    brand: "Seiko",
    price: 6999,
    quantity: 1,
    images: { 
      Black: "https://www.seikowatches.com/sg-en/-/media/Images/Product--Image/Singapore/Seiko/5sports/SRPE53K1/SRPE53K1_1.jpg?mh=1200&mw=1200" 
    },
    colors: ["Black"],
    category: "Analog",
    rating: 4.2,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Analog",
    warranty: "1 Year",
    deliveryTime: "3-5 Days",
    description: "Classic Seiko analog watch with leather strap.",
    gender: "Men"
  },
  {
    id: 9,
    name: "Citizen Watch Model 9",
    brand: "Citizen",
    price: 12499,
    quantity: 1,
    images: { 
      Silver: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnTRDl3blohIMNzaUVi9zlYWRfJg9WwhKTTp1nDV0LhzUz3zQt-njuwVyt_wgagebBnQ&usqp=CAU" 
    },
    colors: ["Silver"],
    category: "Analog",
    rating: 4.5,
    inStock: true,
    strapMaterial: "Stainless Steel",
    displayType: "Analog",
    warranty: "3 Years",
    deliveryTime: "3-6 Days",
    description: "Reliable Citizen analog watch with stainless steel strap.",
    gender: "Men"
  },
  {
    id: 10,
    name: "Skagen Watch Model 10",
    brand: "Skagen",
    price: 7999,
    quantity: 1,
    images: { 
      Blue: "https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5f1736c9aeb26931758ab95d/-1117Wx1400H-460665917-blue-MODEL.jpg" 
    },
    colors: ["Blue"],
    category: "Analog",
    rating: 4.0,
    inStock: true,
    strapMaterial: "Mesh Steel",
    displayType: "Analog",
    warranty: "2 Years",
    deliveryTime: "2-4 Days",
    description: "Minimalist Skagen analog watch with mesh steel strap.",
    gender: "Women"
  },
  {
    id: 11,
    name: "Fossil Gen 5",
    brand: "Fossil",
    price: 12999,
    quantity: 1,
    images: { 
      Black: "https://fossil.scene7.com/is/image/FossilPartners/FTW40531_7?$sfcc_fos_large$", 
      Brown: "https://imagescdn.thecollective.in/img/app/product/6/627799-6119880.jpg?q=75&auto=format&w=387" 
    },
    colors: ["Black", "Brown"],
    category: "Smartwatch",
    rating: 4.4,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Digital",
    warranty: "2 Years",
    deliveryTime: "2-4 Days",
    description: "Fossil Gen 5 smartwatch with Google Wear OS.",
    gender: "Men"
  },
  {
    id: 12,
    name: "Timex Expedition",
    brand: "Timex",
    price: 3499,
    quantity: 1,
    images: { 
      Black: "https://img.tatacliq.com/images/i20//437Wx649H/MP000000024259753_437Wx649H_202410292113541.jpeg" 
    },
    colors: ["Black"],
    category: "Analog-Digital",
    rating: 4.1,
    inStock: true,
    strapMaterial: "Nylon",
    displayType: "Analog-Digital",
    warranty: "1 Year",
    deliveryTime: "2-5 Days",
    description: "Durable Timex watch for outdoor adventures.",
    gender: "Unisex"
  },
  {
    id: 13,
    name: "Garmin Forerunner 45",
    brand: "Garmin",
    price: 10999,
    quantity: 1,
    images: { 
      Black: "https://sslimages.shoppersstop.com/sys-master/images/hee/h14/16067383525406/WGA0100215665_NoColour_alt1.jpg_2000Wx3000H" 
    },
    colors: ["Black"],
    category: "Smartwatch",
    rating: 4.7,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "2 Years",
    deliveryTime: "3-5 Days",
    description: "Garmin Forerunner GPS running watch with heart rate monitoring.",
    gender: "Unisex"
  },
  {
    id: 14,
    name: "Michael Kors Access",
    brand: "Michael Kors",
    price: 17999,
    quantity: 1,
    images: { 
      Gold: "https://michaelkors.scene7.com/is/image/MichaelKors/MKT5136-0710_7?$large$" 
    },
    colors: ["Gold"],
    category: "Smartwatch",
    rating: 4.3,
    inStock: true,
    strapMaterial: "Metal",
    displayType: "Digital",
    warranty: "1 Year",
    deliveryTime: "3-6 Days",
    description: "Fashionable Michael Kors touchscreen smartwatch.",
    gender: "Women"
  },
  {
    id: 15,
    name: "Hugo Boss Analog",
    brand: "Hugo Boss",
    price: 14999,
    quantity: 1,
    images: { 
      Black: "https://justintime.in/cdn/shop/products/1J1eNqsDuKgVQeG3NpAcaSQ_lXNxmRsTy.jpg?v=1690538129&width=1946" 
    },
    colors: ["Black"],
    category: "Analog",
    rating: 4.4,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Analog",
    warranty: "2 Years",
    deliveryTime: "2-4 Days",
    description: "Elegant Hugo Boss analog watch with leather strap.",
    gender: "Men"
  },
  {
    id: 16,
    name: "Apple Watch Series 6",
    brand: "Apple",
    price: 39999,
    quantity: 1,
    images: { 
      Silver: "https://iplanet.one/cdn/shop/files/Apple_Watch_Series_9_LTE_41mm_Silver_Stainless_Steel_Silver_Milanese_Loop_PDP_Image_Position-1__en-IN_d8fe6cb1-25df-4cc5-bd66-c30208e4c522.jpg?v=1698864766&width=823", 
      Black: "https://img.tatacliq.com/images/i6/437Wx649H/MP000000007787506_437Wx649H_202009231809301.jpeg" 
    },
    colors: ["Silver", "Black"],
    category: "Smartwatch",
    rating: 4.8,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "1 Year",
    deliveryTime: "2-3 Days",
    description: "Apple Watch Series 6 with fitness and health monitoring.",
    gender: "Unisex"
  },
  {
    id: 17,
    name: "Diesel Mega Chief",
    brand: "Diesel",
    price: 13999,
    quantity: 1,
    images: { 
      Black: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/u/n/j/-original-imagt7fhsmuzhrjq.jpeg?q=90&crop=false" 
    },
    colors: ["Black"],
    category: "Analog",
    rating: 4.2,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Analog",
    warranty: "2 Years",
    deliveryTime: "3-5 Days",
    description: "Bold Diesel Mega Chief analog watch for men.",
    gender: "Men"
  },
  {
    id: 18,
    name: "Swatch Originals",
    brand: "Swatch",
    price: 5999,
    quantity: 1,
    images: { 
      White: "https://www.gioielliallamoda.it/image/cache/data/Prodotti/swatch/suow100-swatch-800x800.jpg" 
    },
    colors: ["White"],
    category: "Analog",
    rating: 4.0,
    inStock: true,
    strapMaterial: "Plastic",
    displayType: "Analog",
    warranty: "1 Year",
    deliveryTime: "2-4 Days",
    description: "Classic Swatch Originals watch with colorful design.",
    gender: "Women"
  },
  {
    id: 19,
    name: "Casio G-Shock",
    brand: "Casio",
    price: 10999,
    quantity: 1,
    images: { 
      Black: "https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GA/GA2/GA-2100-1A1/assets/GA-2100-1A1_Seq03.jpg.transform/main-visual-sp/image.jpg" 
    },
    colors: ["Black"],
    category: "Analog-Digital",
    rating: 4.7,
    inStock: true,
    strapMaterial: "Resin",
    displayType: "Analog-Digital",
    warranty: "2 Years",
    deliveryTime: "3-5 Days",
    description: "Casio G-Shock tough watch with shock resistance.",
    gender: "Men"
  },
  {
    id: 20,
    name: "Luminox Navy SEAL",
    brand: "Luminox",
    price: 17999,
    quantity: 1,
    images: { 
      Black: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/l/u/luminox-navy-seal-xs-3502-l-multiple-1.jpg" 
    },
    colors: ["Black"],
    category: "Analog",
    rating: 4.6,
    inStock: true,
    strapMaterial: "Rubber",
    displayType: "Analog",
    warranty: "3 Years",
    deliveryTime: "4-6 Days",
    description: "Rugged Luminox Navy SEAL tactical analog watch.",
    gender: "Men"
  },
  {
    id: 21,
    name: "Huawei Watch GT 2",
    brand: "Huawei",
    price: 15999,
    quantity: 1,
    images: { 
      Black: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    colors: ["Black"],
    category: "Smartwatch",
    rating: 4.4,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "1 Year",
    deliveryTime: "2-4 Days",
    description: "Huawei Watch GT 2 with long battery life.",
    gender: "Unisex"
  },
  {
    id: 22,
    name: "Fossil Hybrid HR",
    brand: "Fossil",
    price: 12999,
    quantity: 1,
    images: { 
      Black: "https://m.media-amazon.com/images/I/71jnEJihKYS._AC_UY1000_.jpg", 
      Brown: "https://fossil.scene7.com/is/image/FossilPartners/FTW7008_6?$sfcc_fos_large$" 
    },
    colors: ["Black", "Brown"],
    category: "Hybrid Smartwatch",
    rating: 4.3,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Hybrid",
    warranty: "2 Years",
    deliveryTime: "2-4 Days",
    description: "Hybrid smartwatch combining classic look with smart features.",
    gender: "Men"
  },
  {
    id: 23,
    name: "Tag Heuer Connected",
    brand: "Tag Heuer",
    price: 125000,
    quantity: 1,
    images: { 
      Black: "https://theswisscollector.com/29023/tag-heuer-connected.jpg" 
    },
    colors: ["Black"],
    category: "Smartwatch",
    rating: 4.7,
    inStock: true,
    strapMaterial: "Rubber",
    displayType: "Digital",
    warranty: "3 Years",
    deliveryTime: "7-10 Days",
    description: "Luxury smartwatch with premium build and features.",
    gender: "Unisex"
  },
  {
    id: 24,
    name: "Citizen Eco-Drive",
    brand: "Citizen",
    price: 15499,
    quantity: 1,
    images: { 
      Silver: "https://img.tatacliq.com/images/i20//437Wx649H/MP000000023823874_437Wx649H_202409242223191.jpeg" 
    },
    colors: ["Silver"],
    category: "Analog",
    rating: 4.5,
    inStock: true,
    strapMaterial: "Stainless Steel",
    displayType: "Analog",
    warranty: "3 Years",
    deliveryTime: "3-6 Days",
    description: "Eco-Drive powered analog watch by Citizen with solar technology.",
    gender: "Men"
  },
  {
    id: 25,
    name: "Withings Steel HR",
    brand: "Withings",
    price: 10999,
    quantity: 1,
    images: { 
      Black: "https://m.media-amazon.com/images/I/71CrveHdYCS._AC_UF1000,1000_QL80_.jpg" 
    },
    colors: ["Black"],
    category: "Hybrid Smartwatch",
    rating: 4.4,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Hybrid",
    warranty: "2 Years",
    deliveryTime: "2-5 Days",
    description: "Hybrid smartwatch with health monitoring and classic design.",
    gender: "Unisex"
  },
  {
    id: 26,
    name: "Movado Bold",
    brand: "Movado",
    price: 15999,
    quantity: 1,
    images: { 
      Black: "https://img.tatacliq.com/images/i3/658Wx734H/MP000000004215773_658Wx734H_20190117195455.jpeg" 
    },
    colors: ["Black"],
    category: "Analog",
    rating: 4.1,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Analog",
    warranty: "2 Years",
    deliveryTime: "3-5 Days",
    description: "Sleek Movado Bold analog watch with minimalist design.",
    gender: "Women"
  },
  {
    id: 27,
    name: "Tissot T-Touch",
    brand: "Tissot",
    price: 29999,
    quantity: 1,
    images: { 
      Black: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2016/04/tissot-t-touch-india-mast-m.jpg" 
    },
    colors: ["Black"],
    category: "Smartwatch",
    rating: 4.6,
    inStock: true,
    strapMaterial: "Rubber",
    displayType: "Digital",
    warranty: "2 Years",
    deliveryTime: "4-7 Days",
    description: "Multi-function Tissot smartwatch with touch screen.",
    gender: "Unisex"
  },
  {
    id: 28,
    name: "Fossil Sport",
    brand: "Fossil",
    price: 9999,
    quantity: 1,
    images: { 
      Blue: "https://img.tatacliq.com/images/i7/658Wx734H/MP000000011158623_658Wx734H_202111132350461.jpeg", 
      Black: "https://fossil.scene7.com/is/image/FossilPartners/FTW4019_10?$sfcc_fos_hi-res$" 
    },
    colors: ["Blue", "Black"],
    category: "Smartwatch",
    rating: 4.2,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "1 Year",
    deliveryTime: "2-4 Days",
    description: "Lightweight Fossil smartwatch designed for active lifestyles.",
    gender: "Unisex"
  },
  {
    id: 29,
    name: "Orient Bambino",
    brand: "Orient",
    price: 6999,
    quantity: 1,
    images: { 
      White: "https://m.media-amazon.com/images/I/61SrMakeYTL._AC_UY1000_.jpg" 
    },
    colors: ["White"],
    category: "Analog",
    rating: 4.0,
    inStock: true,
    strapMaterial: "Leather",
    displayType: "Analog",
    warranty: "1 Year",
    deliveryTime: "2-5 Days",
    description: "Classic automatic analog watch with leather strap.",
    gender: "Men"
  },
  {
    id: 30,
    name: "Suunto 9 Baro",
    brand: "Suunto",
    price: 22999,
    quantity: 1,
    images: { 
      Black: "https://i.gadgets360cdn.com/products/large/suunto-9-db-800x800-1627538638.jpg?downsize=*:360" 
    },
    colors: ["Black"],
    category: "Smartwatch",
    rating: 4.5,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Digital",
    warranty: "2 Years",
    deliveryTime: "3-6 Days",
    description: "Suunto multisport GPS watch with barometer and long battery life.",
    gender: "Unisex"
  },
  {
    id: 31,
    name: "Seiko Prospex Automatic Diver's Watch",
    brand: "Seiko",
    price: 35999,
    quantity: 1,
    images: {
      Black: "https://www.seikowatches.com/in-en/-/media/HtmlUploader/India/Seiko/Home/products/prospex/special/blackseries_limited-2nd/assets/image/main_8L_tab.jpg",
      Blue: "https://hemsleys.com/cdn/shop/files/SPB321_4-1.webp?v=1682543035"
    },
    colors: ["Black", "Blue"],
    category: "Diving Watch",
    rating: 4.8,
    inStock: true,
    strapMaterial: "Silicone",
    displayType: "Analog",
    waterResistance: "200m",
    warranty: "3 Years",
    deliveryTime: "4-6 Days",
    description: "Professional diver's watch with LumiBrite markers, unidirectional rotating bezel, and screw-down crown. ISO certified for scuba diving.",
    gender: "Men"
  },

  {
    id: 32,
    name: "Hamilton Khaki Aviation Pilot Day Date",
    brand: "Hamilton",
    price: 42999,
    quantity: 1,
    images: {
      Black: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlR0YEyqJ4e5lC2iG4TZxG7iYvLP4mgfop5L6L4N9fFqWBmu6Ie_9Pu6ZZ1Bsw-zSZSA&usqp=CAU"
    },
    colors: ["Black"],
    category: "Pilot Watch",
    rating: 4.6,
    inStock: true,
    strapMaterial: "Brown Leather",
    displayType: "Analog",
    warranty: "2 Years",
    deliveryTime: "5-7 Days",
    description: "Aviation-inspired watch with bold numerals, day-date complication, and H-30 automatic movement with 80-hour power reserve.",
    gender: "Men"
  },

  {
    id: 33,
    name: "Tissot Le Locle Powermatic 80",
    brand: "Tissot",
    price: 28999,
    quantity: 1,
    images: {
      Silver: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/i/tissot-t-classic-t006-407-11-033-03-large_1.jpg"
    },
    colors: ["Silver"],
    category: "Dress Watch",
    rating: 4.5,
    inStock: true,
    strapMaterial: "Black Leather",
    displayType: "Analog",
    movement: "Automatic",
    caseDiameter: "39mm",
    features: ["Powermatic 80 Movement", "Sapphire Crystal"],
    warranty: "2 Years",
    deliveryTime: "3-5 Days",
    description: "Elegant Swiss-made dress watch with guilloché dial, Roman numerals, and 80-hour power reserve movement.",
    gender: "Men"
  },

  {
    id: 34,
    name: "Timex Expedition Scout 40",
    brand: "Timex",
    price: 7999,
    quantity: 1,
    images: {
      Green: "https://images-cdn.ubuy.co.in/66cd696e1d74f276d72465d8-timex-men-s-expedition-scout-green-black.jpg",
      Black: "https://images-cdn.ubuy.co.in/6795525de8cb7e38723af045-timex-mens-expedition-scout-40-black.jpg"
    },
    colors: ["Green", "Black"],
    category: "Field Watch",
    rating: 4.3,
    inStock: true,
    strapMaterial: "Nylon",
    displayType: "Analog",
    movement: "Quartz",
    caseDiameter: "40mm",
    features: ["Indiglo Backlight", "Water Resistant 50m"],
    warranty: "1 Year",
    deliveryTime: "2-4 Days",
    description: "Rugged field watch with military-inspired design, Indiglo night-light, and durable brass case.",
    gender: "Unisex"
  },

  {
    id: 35,
    name: "Bulova Precisionist Chronograph",
    brand: "Bulova",
    price: 24999,
    quantity: 1,
    images: {
      Black: "https://watchard.com/media/catalog/product/cache/3/image/1320x1584/z/e/5/e/zegarek-meski-bulova-precisionist-chronograph-98b358_2.webp"
    },
    colors: ["Black"],
    category: "Chronograph Watch",
    rating: 4.4,
    inStock: true,
    strapMaterial: "Stainless Steel",
    displayType: "Analog",
    movement: "Quartz",
    caseDiameter: "44mm",
    features: ["1/1000th Second Chronograph", "Sapphire Crystal"],
    warranty: "3 Years",
    deliveryTime: "3-5 Days",
    description: "High-performance chronograph with ultra-precise quartz movement (262kHz) and tachymeter bezel.",
    gender: "Men"
  },

  {
    id: 36,
    name: "Orient Sun and Moon v3",
    brand: "Orient",
    price: 32999,
    quantity: 1,
    images: {
      Blue: "https://cdn.shopify.com/s/files/1/0026/4978/4385/products/RA-AS0103A10B_A_1.png?v=1676584596",
      White: "https://m.media-amazon.com/images/I/618gm15G+zL._AC_UY1000_.jpg"
    },
    colors: ["Blue", "White"],
    category: "Moonphase Watch",
    rating: 4.7,
    inStock: true,
    strapMaterial: "Brown Leather",
    displayType: "Analog",
    movement: "Automatic",
    caseDiameter: "42.5mm",
    features: ["Sun and Moon Phase Indicator", "Power Reserve Display"],
    warranty: "2 Years",
    deliveryTime: "4-6 Days",
    description: "Sophisticated automatic watch featuring sun and moon phase complication, date display, and 50-hour power reserve.",
    gender: "Men"
  }
];

export default Products;