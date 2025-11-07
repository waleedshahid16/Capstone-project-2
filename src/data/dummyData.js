import AirdotsImg from "../assets/products/airdots.webp";
import AirpodsImg from "../assets/products/airpods.jpg";
import IphoneCableImg from "../assets/products/iphonecable.jpeg";
import IphoneChargerImg from "../assets/products/iphonecharger.jpeg";
import IphoneCoverImg from "../assets/products/iphonecover.webp";
import IphoneConnectorImg from "../assets/products/iphoneconnector.jpeg";
import MobileHolderImg from "../assets/products/mobileholder.jpeg";
import SamsungHandfreeImg from "../assets/products/samsunghandfree.jpg";
import SamsungChargerImg from "../assets/products/samsungcharger.webp";
import XiaomiChargerImg from "../assets/products/xiaomicharger.webp";
import GoogleChargerImg from "../assets/products/googlecharger.webp";
import RoninAirdotsImg from "../assets/products/roninairdots.webp";

export const products = [
  {
    id: 1,
    name: "Airdots",
    price: 4000,
    image: AirdotsImg,
    category: "audio",
    description:
      "Experience true wireless freedom with these high-quality Airdots. Designed with noise cancellation for clear sound and deep bass. Enjoy up to 4 hours of playtime on a single charge with a compact charging case. Perfect for workouts, travel, and daily use.",
    specifications: [
      "Bluetooth Version: 5.0",
      "Battery Life: Up to 4 hours (12 hours with case)",
      "Noise Cancellation: Yes (Passive)",
      "Charging Port: Type-C",
    ],
  },
  {
    id: 2,
    name: "Airpods",
    price: 15000,
    image: AirpodsImg,
    category: "audio",
    description:
      "Apple AirPods deliver crystal-clear sound and seamless connectivity with all your devices. Equipped with a long-lasting battery and smart sensors for effortless use. Lightweight and comfortable, perfect for calls, music, and podcasts all day long.",
    specifications: [
      "Bluetooth Version: 5.3",
      "Battery Life: Up to 6 hours (30 hours with case)",
      "Active Noise Cancellation: Yes",
      "Wireless Charging: Supported",
    ],
  },
  {
    id: 3,
    name: "Iphone Cable",
    price: 1000,
    image: IphoneCableImg,
    category: "accessories",
    description:
      "A durable lightning cable built to last and charge your iPhone efficiently. Supports fast charging and data transfer without interruptions. Its tangle-free design ensures convenience at home, office, or on the go.",
    specifications: [
      "Cable Type: Lightning to USB",
      "Length: 1 Meter",
      "Charging Speed: Up to 2.4A",
      "Material: Braided Nylon for durability",
    ],
  },
  {
    id: 4,
    name: "Iphone Charger",
    price: 2000,
    image: IphoneChargerImg,
    category: "charging",
    description:
      "Official iPhone charger designed for fast and safe charging. Features intelligent power delivery to protect your device from overcharging and overheating. Compact and easy to carry, ideal for both home and travel use.",
    specifications: [
      "Output Power: 20W Fast Charging",
      "Input: 100-240V, 50/60Hz",
      "Connector Type: USB-C",
      "Safety Protection: Over-voltage & Temperature Control",
    ],
  },
  {
    id: 5,
    name: "Iphone Cover",
    price: 700,
    image: IphoneCoverImg,
    category: "accessories",
    description:
      "A stylish and durable iPhone cover that combines protection with elegance. Designed to resist scratches, shocks, and minor drops. Offers a slim fit while maintaining a strong grip for everyday use.",
    specifications: [
      "Material: Silicone + Polycarbonate",
      "Protection: Shockproof & Scratch-resistant",
      "Design: Slim Fit, Anti-slip Grip",
      "Compatibility: iPhone 11/12/13 Models",
    ],
  },
  {
    id: 6,
    name: "Iphone Connector",
    price: 500,
    image: IphoneConnectorImg,
    category: "accessories",
    description:
      "A compact and reliable iPhone connector that ensures seamless audio transmission. Perfect for connecting wired earphones or speakers to your iPhone. Built to provide clear sound quality with long-lasting durability.",
    specifications: [
      "Type: Lightning to 3.5mm Audio Adapter",
      "Build: High-quality aluminum shell",
      "Compatibility: iPhone 7 and above",
      "Audio Quality: Lossless sound output",
    ],
  },
  {
    id: 7,
    name: "Mobile Holder",
    price: 300,
    image: MobileHolderImg,
    category: "accessories",
    description:
      "An adjustable mobile holder perfect for desks, cars, or nightstands. Designed with a 360° rotating head for comfortable viewing angles. Keeps your phone steady during charging, watching, or hands-free calls.",
    specifications: [
      "Mount Type: Adjustable Desk/Car Mount",
      "Rotation: 360° Flexible Angle",
      "Material: ABS Plastic + Silicone Pads",
      "Clamp Range: Fits 4-7 inch Phones",
    ],
  },
  {
    id: 8,
    name: "Samsung Handfree",
    price: 2000,
    image: SamsungHandfreeImg,
    category: "audio",
    description:
      "Enjoy crystal-clear sound and comfortable fit with Samsung Handfree. Ideal for music, gaming, and calls with its in-line microphone. Its lightweight design ensures hours of listening without fatigue.",
    specifications: [
      "Driver Size: 12mm Dynamic Drivers",
      "Microphone: In-line Mic with Volume Control",
      "Cable Length: 1.2 Meter",
      "Connector: 3.5mm Jack",
    ],
  },
  {
    id: 9,
    name: "Samsung Charger",
    price: 3000,
    image: SamsungChargerImg,
    category: "charging",
    description:
      "Charge your Samsung devices faster and safer with the official Samsung Super Fast Charger. Compact, efficient, and built to protect against overheating and voltage surges. Perfect companion for all Galaxy models.",
    specifications: [
      "Output: 25W Super Fast Charging",
      "Connector Type: USB-C to USB-C",
      "Input Voltage: 100-240V",
      "Safety Features: Overheat & Surge Protection",
    ],
  },
  {
    id: 10,
    name: "Xiaomi Charger",
    price: 2800,
    image: XiaomiChargerImg,
    category: "charging",
    description:
      "The Xiaomi 33W fast charger ensures your devices power up in minutes. Features a smart chip that adjusts current automatically for optimal performance. Compact and safe for both home and travel use.",
    specifications: [
      "Output: 33W Fast Charging",
      "Cable Type: Type-C",
      "Input: 100-240V, 50/60Hz",
      "Smart Chip: Auto current adjustment",
    ],
  },
  {
    id: 11,
    name: "Google Charger",
    price: 3500,
    image: GoogleChargerImg,
    category: "charging",
    description:
      "Original Google 30W charger built for fast and reliable charging. Designed to work perfectly with Pixel phones and all USB-C devices. Delivers consistent performance with built-in overcurrent protection.",
    specifications: [
      "Output Power: 30W PD Charging",
      "Connector: USB-C",
      "Compatibility: Pixel & Other Type-C Devices",
      "Features: Overcurrent Protection, Smart Power Delivery",
    ],
  },
  {
    id: 12,
    name: "Ronin Airdots",
    price: 8999,
    image: RoninAirdotsImg,
    category: "audio",
    description:
      "Ronin Airdots offer premium sound with strong bass and clear treble. Built with Bluetooth 5.2 for stable connectivity and IPX5 water resistance. Ideal for sports, travel, and everyday listening with quick charge support.",
    specifications: [
      "Bluetooth Version: 5.2",
      "Playtime: 5 Hours (20 Hours with Case)",
      "Water Resistance: IPX5",
      "Charging Port: Type-C, Quick Charge Supported",
    ],
  },
];
