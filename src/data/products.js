const products = [
  // Electronics
  { id: 1,  name: "Wireless Headphones",   price: 4999,  emoji: "🎧", category: "Electronics" },
  { id: 2,  name: "Bluetooth Speaker",     price: 2499,  emoji: "🔊", category: "Electronics" },
  { id: 3,  name: "Smart Watch",           price: 8999,  emoji: "⌚", category: "Electronics" },
  { id: 4,  name: "Laptop Stand",          price: 1499,  emoji: "💻", category: "Electronics" },
  { id: 5,  name: "USB-C Hub",             price: 1999,  emoji: "🔌", category: "Electronics" },
  { id: 6,  name: "Mechanical Keyboard",   price: 5999,  emoji: "⌨️", category: "Electronics" },
  { id: 7,  name: "Wireless Mouse",        price: 1299,  emoji: "🖱️", category: "Electronics" },
  { id: 8,  name: "Webcam HD",             price: 3499,  emoji: "📷", category: "Electronics" },
  { id: 9,  name: "Power Bank 20000mAh",   price: 2199,  emoji: "🔋", category: "Electronics" },
  { id: 10, name: "LED Desk Light",        price: 999,   emoji: "💡", category: "Electronics" },

  // Fashion
  { id: 11, name: "Running Shoes",         price: 3999,  emoji: "👟", category: "Fashion" },
  { id: 12, name: "Casual Backpack",       price: 2499,  emoji: "🎒", category: "Fashion" },
  { id: 13, name: "Sunglasses",            price: 1499,  emoji: "🕶️", category: "Fashion" },
  { id: 14, name: "Leather Wallet",        price: 899,   emoji: "👜", category: "Fashion" },
  { id: 15, name: "Baseball Cap",          price: 599,   emoji: "🧢", category: "Fashion" },
  { id: 16, name: "Wrist Watch",           price: 6999,  emoji: "🕰️", category: "Fashion" },
  { id: 17, name: "Denim Jacket",          price: 4499,  emoji: "🧥", category: "Fashion" },
  { id: 18, name: "Sports Socks 5-pair",   price: 499,   emoji: "🧦", category: "Fashion" },
  { id: 19, name: "Sneaker Cleaner Kit",   price: 399,   emoji: "✨", category: "Fashion" },
  { id: 20, name: "Travel Belt",           price: 799,   emoji: "👔", category: "Fashion" },

  // Kitchen
  { id: 21, name: "Coffee Mug",            price: 499,   emoji: "☕", category: "Kitchen" },
  { id: 22, name: "French Press",          price: 1299,  emoji: "🫖", category: "Kitchen" },
  { id: 23, name: "Non-stick Pan",         price: 1799,  emoji: "🍳", category: "Kitchen" },
  { id: 24, name: "Chef Knife",            price: 2499,  emoji: "🔪", category: "Kitchen" },
  { id: 25, name: "Cutting Board",         price: 699,   emoji: "🪵", category: "Kitchen" },
  { id: 26, name: "Electric Kettle",       price: 1499,  emoji: "🫗", category: "Kitchen" },
  { id: 27, name: "Spice Rack Set",        price: 999,   emoji: "🌶️", category: "Kitchen" },
  { id: 28, name: "Lunch Box Set",         price: 599,   emoji: "🍱", category: "Kitchen" },
  { id: 29, name: "Measuring Cups",        price: 349,   emoji: "🥛", category: "Kitchen" },
  { id: 30, name: "Hand Blender",          price: 2199,  emoji: "🥤", category: "Kitchen" },

  // Sports
  { id: 31, name: "Water Bottle 1L",       price: 699,   emoji: "🍶", category: "Sports" },
  { id: 32, name: "Yoga Mat",              price: 1299,  emoji: "🧘", category: "Sports" },
  { id: 33, name: "Jump Rope",             price: 399,   emoji: "🪢", category: "Sports" },
  { id: 34, name: "Resistance Bands Set",  price: 799,   emoji: "💪", category: "Sports" },
  { id: 35, name: "Badminton Set",         price: 1499,  emoji: "🏸", category: "Sports" },
  { id: 36, name: "Football",              price: 999,   emoji: "⚽", category: "Sports" },
  { id: 37, name: "Gym Gloves",            price: 599,   emoji: "🥊", category: "Sports" },
  { id: 38, name: "Protein Shaker",        price: 449,   emoji: "🧃", category: "Sports" },
  { id: 39, name: "Foam Roller",           price: 899,   emoji: "🔵", category: "Sports" },
  { id: 40, name: "Sports Towel",          price: 349,   emoji: "🏊", category: "Sports" },

  // Home
  { id: 41, name: "Scented Candle",        price: 599,   emoji: "🕯️", category: "Home" },
  { id: 42, name: "Photo Frame Set",       price: 799,   emoji: "🖼️", category: "Home" },
  { id: 43, name: "Wall Clock",            price: 1299,  emoji: "🕐", category: "Home" },
  { id: 44, name: "Throw Blanket",         price: 1999,  emoji: "🛋️", category: "Home" },
  { id: 45, name: "Desk Organizer",        price: 899,   emoji: "🗂️", category: "Home" },
  { id: 46, name: "Indoor Plant Pot",      price: 499,   emoji: "🪴", category: "Home" },
  { id: 47, name: "LED Fairy Lights",      price: 399,   emoji: "✨", category: "Home" },
  { id: 48, name: "Doormat",               price: 699,   emoji: "🚪", category: "Home" },
  { id: 49, name: "Laundry Basket",        price: 999,   emoji: "🧺", category: "Home" },
  { id: 50, name: "Air Freshener Set",     price: 449,   emoji: "🌸", category: "Home" },
];

export default products;
