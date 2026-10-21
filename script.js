// ==================== PRODUCTS DATA ====================
const products = [
    // Electronics
    {
        id: 1,
        name: "Wireless Headphones",
        price: 79.99,
        oldPrice: 129.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.5,
        reviews: 234,
        description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
        badge: "sale",
        stock: 45,
        brand: "AudioTech",
        features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.0", "Foldable design"]
    },
    {
        id: 2,
        name: "Smart Watch Pro",
        price: 199.99,
        oldPrice: 299.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.7,
        reviews: 456,
        description: "Advanced fitness tracking with heart rate monitor and GPS",
        badge: "sale",
        stock: 32,
        brand: "SmartTech",
        features: ["Heart Rate Monitor", "GPS Tracking", "Water Resistant", "7-day battery"]
    },
    {
        id: 3,
        name: "4K Action Camera",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.6,
        reviews: 189,
        description: "Professional 4K action camera with image stabilization",
        badge: "new",
        stock: 28,
        brand: "ProCam",
        features: ["4K Video", "Image Stabilization", "Waterproof", "WiFi connectivity"]
    },
    
    // Fashion
    {
        id: 4,
        name: "Designer Sunglasses",
        price: 89.99,
        oldPrice: 149.99,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.4,
        reviews: 312,
        description: "Stylish UV protection sunglasses with polarized lenses",
        badge: "sale",
        stock: 67,
        brand: "StyleVision",
        features: ["UV Protection", "Polarized lenses", "Lightweight frame", "Includes case"]
    },
    {
        id: 5,
        name: "Leather Backpack",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.8,
        reviews: 523,
        description: "Premium leather backpack with laptop compartment",
        badge: "hot",
        stock: 41,
        brand: "UrbanStyle",
        features: ["Genuine leather", "Laptop compartment", "Multiple pockets", "Water resistant"]
    },
    {
        id: 6,
        name: "Running Shoes",
        price: 129.99,
        oldPrice: 179.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.6,
        reviews: 678,
        description: "Comfortable running shoes with advanced cushioning",
        badge: "sale",
        stock: 89,
        brand: "SprintPro",
        features: ["Memory foam", "Breathable mesh", "Anti-slip sole", "Lightweight"]
    },
    
    // Home & Garden
    {
        id: 7,
        name: "Coffee Maker Deluxe",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.5,
        reviews: 234,
        description: "Programmable coffee maker with thermal carafe",
        badge: "new",
        stock: 34,
        brand: "BrewMaster",
        features: ["Programmable timer", "12-cup capacity", "Auto shut-off", "Thermal carafe"]
    },
    {
        id: 8,
        name: "Air Purifier Pro",
        price: 199.99,
        oldPrice: 279.99,
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.7,
        reviews: 445,
        description: "HEPA air purifier for large rooms up to 500 sq ft",
        badge: "sale",
        stock: 23,
        brand: "PureAir",
        features: ["HEPA filter", "Smart sensor", "Quiet operation", "Timer function"]
    },
    
    // Sports
    {
        id: 9,
        name: "Yoga Mat Premium",
        price: 39.99,
        oldPrice: 59.99,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.6,
        reviews: 567,
        description: "Non-slip yoga mat with carrying strap",
        badge: "sale",
        stock: 156,
        brand: "YogaFit",
        features: ["Non-slip surface", "Extra thick", "Eco-friendly", "Carrying strap"]
    },
    {
        id: 10,
        name: "Dumbbell Set",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.8,
        reviews: 389,
        description: "Adjustable dumbbell set 5-25 lbs",
        badge: "hot",
        stock: 47,
        brand: "PowerFit",
        features: ["Adjustable weight", "Space-saving", "Durable coating", "Ergonomic grip"]
    },
    
    // Books
    {
        id: 11,
        name: "The Great Novel",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop",
        category: "books",
        rating: 4.9,
        reviews: 1234,
        description: "Bestselling fiction novel of the year",
        badge: "bestseller",
        stock: 234,
        brand: "BookWorld",
        features: ["Hardcover", "450 pages", "Award winning", "Bestseller"]
    },
    
    // Gaming
    {
        id: 12,
        name: "Gaming Mouse RGB",
        price: 59.99,
        oldPrice: 89.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
        category: "gaming",
        rating: 4.7,
        reviews: 789,
        description: "Professional gaming mouse with RGB lighting",
        badge: "sale",
        stock: 92,
        brand: "GamePro",
        features: ["16000 DPI", "RGB lighting", "Programmable buttons", "Ergonomic design"]
    },
    
    // More Electronics
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 49.99,
        oldPrice: 79.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.5,
        reviews: 445,
        description: "Portable waterproof bluetooth speaker with 360° sound",
        badge: "sale",
        stock: 78,
        brand: "SoundWave",
        features: ["Waterproof IPX7", "20-hour battery", "360° sound", "Built-in mic"]
    },
    {
        id: 14,
        name: "Wireless Earbuds Pro",
        price: 129.99,
        oldPrice: 199.99,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.8,
        reviews: 892,
        description: "Premium wireless earbuds with active noise cancellation",
        badge: "sale",
        stock: 56,
        brand: "AudioElite",
        features: ["ANC", "30-hour battery", "Touch controls", "Wireless charging"]
    },
    {
        id: 15,
        name: "USB-C Hub Adapter",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.4,
        reviews: 234,
        description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader",
        badge: "new",
        stock: 145,
        brand: "TechConnect",
        features: ["7 ports", "4K HDMI", "USB 3.0", "Fast charging"]
    },
    {
        id: 16,
        name: "Power Bank 20000mAh",
        price: 34.99,
        oldPrice: 54.99,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.6,
        reviews: 567,
        description: "High-capacity portable charger with dual USB ports",
        badge: "sale",
        stock: 198,
        brand: "PowerCharge",
        features: ["20000mAh", "Dual USB", "Fast charge", "LED indicator"]
    },
    
    // More Fashion
    {
        id: 17,
        name: "Casual T-Shirt",
        price: 19.99,
        oldPrice: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.3,
        reviews: 678,
        description: "100% cotton comfortable casual t-shirt",
        badge: "sale",
        stock: 234,
        brand: "ComfortWear",
        features: ["100% cotton", "Breathable", "Machine washable", "Multiple colors"]
    },
    {
        id: 18,
        name: "Denim Jeans",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.7,
        reviews: 523,
        description: "Classic slim-fit denim jeans",
        badge: "hot",
        stock: 167,
        brand: "DenimStyle",
        features: ["Slim fit", "Durable denim", "Multiple sizes", "Stretch fabric"]
    },
    {
        id: 19,
        name: "Winter Jacket",
        price: 89.99,
        oldPrice: 139.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.8,
        reviews: 445,
        description: "Warm winter jacket with hood",
        badge: "sale",
        stock: 89,
        brand: "WinterGuard",
        features: ["Water resistant", "Insulated", "Removable hood", "Multiple pockets"]
    },
    {
        id: 20,
        name: "Sport Watch",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.5,
        reviews: 389,
        description: "Digital sport watch with multiple features",
        badge: "new",
        stock: 123,
        brand: "TimeActive",
        features: ["Water resistant", "Stopwatch", "Alarm", "Backlight"]
    },
    
    // More Home & Garden
    {
        id: 21,
        name: "Robot Vacuum Cleaner",
        price: 299.99,
        oldPrice: 449.99,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.7,
        reviews: 678,
        description: "Smart robot vacuum with app control",
        badge: "sale",
        stock: 45,
        brand: "CleanBot",
        features: ["App control", "Auto-charging", "HEPA filter", "Scheduling"]
    },
    {
        id: 22,
        name: "Electric Kettle",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.6,
        reviews: 456,
        description: "Stainless steel electric kettle 1.7L",
        badge: "hot",
        stock: 234,
        brand: "QuickBoil",
        features: ["1.7L capacity", "Auto shut-off", "Boil-dry protection", "LED indicator"]
    },
    {
        id: 23,
        name: "Desk Lamp LED",
        price: 29.99,
        oldPrice: 49.99,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.4,
        reviews: 345,
        description: "Adjustable LED desk lamp with USB charging port",
        badge: "sale",
        stock: 178,
        brand: "BrightDesk",
        features: ["Adjustable brightness", "USB port", "Touch control", "Eye-caring"]
    },
    {
        id: 24,
        name: "Blender 600W",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.7,
        reviews: 567,
        description: "High-power blender for smoothies and shakes",
        badge: "new",
        stock: 89,
        brand: "BlendPro",
        features: ["600W motor", "6 blades", "BPA-free", "Easy clean"]
    },
    
    // More Sports
    {
        id: 25,
        name: "Resistance Bands Set",
        price: 24.99,
        oldPrice: 39.99,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.6,
        reviews: 789,
        description: "Set of 5 resistance bands with different strengths",
        badge: "sale",
        stock: 267,
        brand: "FitBand",
        features: ["5 resistance levels", "Portable", "Durable latex", "Carrying bag"]
    },
    {
        id: 26,
        name: "Jump Rope Speed",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.5,
        reviews: 445,
        description: "Adjustable speed jump rope for cardio",
        badge: "hot",
        stock: 345,
        brand: "SpeedJump",
        features: ["Adjustable length", "Ball bearings", "Comfortable handles", "Lightweight"]
    },
    {
        id: 27,
        name: "Foam Roller",
        price: 34.99,
        oldPrice: 54.99,
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.7,
        reviews: 523,
        description: "High-density foam roller for muscle recovery",
        badge: "sale",
        stock: 156,
        brand: "RecoveryPro",
        features: ["High-density foam", "Textured surface", "Lightweight", "Durable"]
    },
    
    // More Books
    {
        id: 28,
        name: "Cookbook Delicious",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop",
        category: "books",
        rating: 4.8,
        reviews: 678,
        description: "Collection of 500+ delicious recipes",
        badge: "bestseller",
        stock: 189,
        brand: "CookMaster",
        features: ["500+ recipes", "Full color photos", "Hardcover", "Step-by-step"]
    },
    {
        id: 29,
        name: "Business Guide",
        price: 34.99,
        oldPrice: 49.99,
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop",
        category: "books",
        rating: 4.6,
        reviews: 445,
        description: "Complete guide to starting your own business",
        badge: "sale",
        stock: 145,
        brand: "BusinessBooks",
        features: ["380 pages", "Case studies", "Practical tips", "Expert advice"]
    },
    
    // More Gaming
    {
        id: 30,
        name: "Gaming Keyboard RGB",
        price: 79.99,
        oldPrice: 119.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
        category: "gaming",
        rating: 4.8,
        reviews: 892,
        description: "Mechanical gaming keyboard with RGB backlighting",
        badge: "sale",
        stock: 67,
        brand: "KeyMaster",
        features: ["Mechanical switches", "RGB lighting", "Anti-ghosting", "Wrist rest"]
    },
    {
        id: 31,
        name: "Gaming Headset 7.1",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop",
        category: "gaming",
        rating: 4.7,
        reviews: 567,
        description: "7.1 surround sound gaming headset",
        badge: "hot",
        stock: 89,
        brand: "SoundGame",
        features: ["7.1 surround", "Noise-canceling mic", "RGB lights", "Soft earpads"]
    },
    {
        id: 32,
        name: "Gaming Controller",
        price: 49.99,
        oldPrice: 69.99,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&h=500&fit=crop",
        category: "gaming",
        rating: 4.6,
        reviews: 678,
        description: "Wireless gaming controller for PC and console",
        badge: "sale",
        stock: 123,
        brand: "ControlPro",
        features: ["Wireless", "Rechargeable", "Dual vibration", "Ergonomic"]
    },
    
    // ==================== MORE ELECTRONICS ====================
    {
        id: 61,
        name: "Gaming Laptop RTX",
        price: 1299.99,
        oldPrice: 1599.99,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.9,
        reviews: 312,
        description: "High-performance gaming laptop with RTX 4060 graphics",
        badge: "sale",
        stock: 15,
        brand: "GameTech",
        features: ["RTX 4060", "16GB RAM", "512GB SSD", "144Hz display"]
    },
    {
        id: 62,
        name: "Mechanical Keyboard RGB",
        price: 119.99,
        oldPrice: 169.99,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.7,
        reviews: 445,
        description: "RGB mechanical keyboard with blue switches",
        badge: "sale",
        stock: 67,
        brand: "KeyMaster",
        features: ["Mechanical switches", "RGB backlight", "Anti-ghosting", "Wrist rest"]
    },
    {
        id: 63,
        name: "Webcam 1080p HD",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.5,
        reviews: 289,
        description: "Full HD webcam with auto-focus and built-in mic",
        badge: "new",
        stock: 134,
        brand: "VisionCam",
        features: ["1080p HD", "Auto-focus", "Built-in mic", "Tripod mount"]
    },
    {
        id: 64,
        name: "External SSD 1TB",
        price: 149.99,
        oldPrice: 199.99,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.8,
        reviews: 567,
        description: "Ultra-fast portable SSD with USB-C 3.2",
        badge: "sale",
        stock: 89,
        brand: "SpeedDrive",
        features: ["1TB storage", "USB-C 3.2", "Read 1050MB/s", "Compact design"]
    },
    {
        id: 65,
        name: "LED Monitor 27 inch",
        price: 299.99,
        oldPrice: 399.99,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.6,
        reviews: 423,
        description: "27-inch QHD monitor with IPS panel",
        badge: "sale",
        stock: 34,
        brand: "ViewMaster",
        features: ["QHD 2560x1440", "IPS panel", "75Hz refresh", "HDMI + DP"]
    },
    {
        id: 66,
        name: "Android Tablet 10 inch",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.4,
        reviews: 356,
        description: "Android tablet with stylus pen included",
        badge: "new",
        stock: 78,
        brand: "TabletPro",
        features: ["10.1 inch display", "64GB storage", "Stylus pen", "8MP camera"]
    },
    {
        id: 67,
        name: "Drone 4K Camera",
        price: 399.99,
        oldPrice: 549.99,
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.7,
        reviews: 234,
        description: "4K camera drone with GPS and auto-return",
        badge: "sale",
        stock: 23,
        brand: "SkyView",
        features: ["4K camera", "GPS tracking", "30min flight", "Auto-return home"]
    },
    {
        id: 68,
        name: "Smart Home Hub",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1558089687-d5dd2bea4fb4?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.5,
        reviews: 478,
        description: "Voice-controlled smart home automation hub",
        badge: "hot",
        stock: 156,
        brand: "HomeConnect",
        features: ["Voice control", "App control", "Works with Alexa", "Easy setup"]
    },
    {
        id: 69,
        name: "Portable Projector",
        price: 199.99,
        oldPrice: 279.99,
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.6,
        reviews: 234,
        description: "Mini LED projector with WiFi and Bluetooth",
        badge: "sale",
        stock: 45,
        brand: "MiniView",
        features: ["1080p support", "WiFi + Bluetooth", "Portable", "3-hour battery"]
    },
    {
        id: 70,
        name: "Smart Doorbell Camera",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=500&fit=crop",
        category: "electronics",
        rating: 4.7,
        reviews: 389,
        description: "Video doorbell with motion detection and night vision",
        badge: "new",
        stock: 67,
        brand: "SecureHome",
        features: ["1080p video", "Motion detection", "Night vision", "Two-way audio"]
    },
    
    // ==================== MORE FASHION ====================
    {
        id: 71,
        name: "Leather Wallet RFID",
        price: 39.99,
        oldPrice: 59.99,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.6,
        reviews: 567,
        description: "Genuine leather bifold wallet with RFID blocking",
        badge: "sale",
        stock: 234,
        brand: "LeatherCraft",
        features: ["Genuine leather", "RFID blocking", "Multiple card slots", "Cash compartment"]
    },
    {
        id: 72,
        name: "Women's Handbag",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.8,
        reviews: 445,
        description: "Elegant leather handbag with adjustable strap",
        badge: "hot",
        stock: 89,
        brand: "LuxeBag",
        features: ["Premium leather", "Adjustable strap", "Multiple compartments", "Dust bag included"]
    },
    {
        id: 73,
        name: "Men's Dress Shirt",
        price: 49.99,
        oldPrice: 79.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.5,
        reviews: 312,
        description: "Slim-fit cotton dress shirt for formal occasions",
        badge: "sale",
        stock: 167,
        brand: "ClassicStyle",
        features: ["100% cotton", "Slim fit", "Wrinkle-free", "Multiple colors"]
    },
    {
        id: 74,
        name: "White Sneakers Classic",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.7,
        reviews: 689,
        description: "Classic white sneakers for everyday wear",
        badge: "hot",
        stock: 234,
        brand: "StreetWalk",
        features: ["Leather upper", "Cushioned sole", "Breathable", "Versatile style"]
    },
    {
        id: 75,
        name: "Baseball Cap Adjustable",
        price: 24.99,
        oldPrice: 34.99,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.3,
        reviews: 456,
        description: "Adjustable baseball cap with embroidered logo",
        badge: "sale",
        stock: 345,
        brand: "CapStyle",
        features: ["Adjustable strap", "Cotton material", "Curved brim", "Embroidered logo"]
    },
    {
        id: 76,
        name: "Formal Leather Belt",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583f0?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.6,
        reviews: 234,
        description: "Reversible leather belt for formal wear",
        badge: "new",
        stock: 189,
        brand: "BeltMaster",
        features: ["Genuine leather", "Reversible", "Metal buckle", "Multiple sizes"]
    },
    {
        id: 77,
        name: "Women's Evening Dress",
        price: 69.99,
        oldPrice: 99.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.8,
        reviews: 567,
        description: "Elegant evening dress with floral pattern",
        badge: "sale",
        stock: 78,
        brand: "FashionElite",
        features: ["Floral pattern", "Midi length", "Comfortable fit", "Machine washable"]
    },
    {
        id: 78,
        name: "Sport Socks 6-Pack",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.4,
        reviews: 789,
        description: "6-pack cushioned athletic socks",
        badge: "hot",
        stock: 456,
        brand: "ComfortFeet",
        features: ["6-pack", "Cushioned", "Moisture-wicking", "Arch support"]
    },
    {
        id: 79,
        name: "Leather Jacket Men",
        price: 149.99,
        oldPrice: 219.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.9,
        reviews: 378,
        description: "Genuine leather motorcycle jacket",
        badge: "sale",
        stock: 45,
        brand: "RiderStyle",
        features: ["Genuine leather", "Quilted lining", "Multiple pockets", "YKK zippers"]
    },
    {
        id: 80,
        name: "Women's Yoga Pants",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop",
        category: "fashion",
        rating: 4.6,
        reviews: 823,
        description: "High-waisted yoga pants with pockets",
        badge: "hot",
        stock: 289,
        brand: "ActiveWear",
        features: ["High-waisted", "Side pockets", "Moisture-wicking", "4-way stretch"]
    },
    
    // ==================== MORE HOME & LIVING ====================
    {
        id: 81,
        name: "Queen Bedsheet Set",
        price: 49.99,
        oldPrice: 79.99,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.7,
        reviews: 456,
        description: "Soft microfiber bedsheet set with pillow cases",
        badge: "sale",
        stock: 123,
        brand: "DreamBed",
        features: ["Queen size", "Microfiber", "Wrinkle-free", "4-piece set"]
    },
    {
        id: 82,
        name: "Modern Table Lamp",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.5,
        reviews: 234,
        description: "Modern LED table lamp with touch control",
        badge: "new",
        stock: 167,
        brand: "LightUp",
        features: ["LED bulb", "Touch control", "Dimmable", "USB charging port"]
    },
    {
        id: 83,
        name: "Wooden Wall Clock",
        price: 29.99,
        oldPrice: 44.99,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.6,
        reviews: 345,
        description: "Rustic wooden wall clock with silent movement",
        badge: "sale",
        stock: 234,
        brand: "TimeStyle",
        features: ["Wooden frame", "Silent movement", "12-inch diameter", "Battery included"]
    },
    {
        id: 84,
        name: "Decorative Throw Pillows",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.4,
        reviews: 567,
        description: "Decorative throw pillows set of 4",
        badge: "hot",
        stock: 189,
        brand: "CozyHome",
        features: ["Set of 4", "Soft fabric", "Removable covers", "Multiple patterns"]
    },
    {
        id: 85,
        name: "Professional Knife Set",
        price: 79.99,
        oldPrice: 119.99,
        image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.8,
        reviews: 423,
        description: "Professional 8-piece stainless steel knife set",
        badge: "sale",
        stock: 89,
        brand: "ChefPro",
        features: ["8 pieces", "Stainless steel", "Wooden block", "Ultra-sharp blades"]
    },
    {
        id: 86,
        name: "Microwave Oven 1000W",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.6,
        reviews: 312,
        description: "1000W countertop microwave with digital controls",
        badge: "new",
        stock: 45,
        brand: "QuickHeat",
        features: ["1000W power", "Digital controls", "10 power levels", "Timer function"]
    },
    {
        id: 87,
        name: "Bagless Vacuum Cleaner",
        price: 199.99,
        oldPrice: 279.99,
        image: "https://images.unsplash.com/photo-1558317374-067fb8f4079e?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.7,
        reviews: 567,
        description: "Bagless vacuum cleaner with HEPA filter",
        badge: "sale",
        stock: 67,
        brand: "CleanMaster",
        features: ["Bagless design", "HEPA filter", "Cyclonic suction", "5-meter cord"]
    },
    {
        id: 88,
        name: "Blackout Curtains 2-Panel",
        price: 44.99,
        image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.5,
        reviews: 445,
        description: "Thermal blackout curtains 2-panel set",
        badge: "hot",
        stock: 156,
        brand: "WindowStyle",
        features: ["Blackout fabric", "Thermal insulated", "2 panels", "Multiple colors available"]
    },
    {
        id: 89,
        name: "High-Power Blender",
        price: 89.99,
        oldPrice: 129.99,
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.8,
        reviews: 678,
        description: "1500W blender for smoothies and soups",
        badge: "sale",
        stock: 78,
        brand: "BlendPro",
        features: ["1500W motor", "6 stainless blades", "2L capacity", "Pulse function"]
    },
    {
        id: 90,
        name: "Dining Table Set",
        price: 399.99,
        oldPrice: 549.99,
        image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&h=500&fit=crop",
        category: "home",
        rating: 4.9,
        reviews: 234,
        description: "Modern dining table with 4 chairs",
        badge: "sale",
        stock: 23,
        brand: "HomeFurniture",
        features: ["Seats 4 people", "Solid wood", "Modern design", "Easy assembly"]
    },
    
    // ==================== MORE SPORTS & FITNESS ====================
    {
        id: 91,
        name: "Electric Treadmill",
        price: 599.99,
        oldPrice: 799.99,
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.7,
        reviews: 234,
        description: "Electric treadmill with LCD display and 12 programs",
        badge: "sale",
        stock: 23,
        brand: "FitRun",
        features: ["LCD display", "12 programs", "Foldable design", "Max speed 12km/h"]
    },
    {
        id: 92,
        name: "Resistance Bands Set",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.6,
        reviews: 567,
        description: "5-level resistance bands with handles and door anchor",
        badge: "hot",
        stock: 234,
        brand: "FlexBand",
        features: ["5 resistance levels", "Handles included", "Door anchor", "Carrying bag"]
    },
    {
        id: 93,
        name: "Professional Boxing Gloves",
        price: 39.99,
        oldPrice: 59.99,
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.5,
        reviews: 345,
        description: "Professional boxing gloves with wrist support",
        badge: "sale",
        stock: 145,
        brand: "FightPro",
        features: ["Synthetic leather", "Wrist support", "Breathable design", "Multiple sizes"]
    },
    {
        id: 94,
        name: "Stationary Exercise Bike",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1590256029459-a03b0e367b92?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.7,
        reviews: 423,
        description: "Stationary bike with adjustable resistance",
        badge: "new",
        stock: 34,
        brand: "CycleFit",
        features: ["Adjustable resistance", "LCD monitor", "Comfortable seat", "Water bottle holder"]
    },
    {
        id: 95,
        name: "Speed Jump Rope",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.4,
        reviews: 678,
        description: "Adjustable speed jump rope with ball bearings",
        badge: "hot",
        stock: 345,
        brand: "JumpFit",
        features: ["Adjustable length", "Ball bearings", "Foam handles", "Lightweight aluminum"]
    },
    {
        id: 96,
        name: "Exercise Ball 65cm",
        price: 19.99,
        oldPrice: 29.99,
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.5,
        reviews: 456,
        description: "Anti-burst exercise ball with pump included",
        badge: "sale",
        stock: 189,
        brand: "CoreFit",
        features: ["Anti-burst", "65cm diameter", "Pump included", "2000lbs capacity"]
    },
    {
        id: 97,
        name: "Protein Shaker Bottle",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1622484211846-1589e4bdd9f6?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.3,
        reviews: 789,
        description: "BPA-free protein shaker with mixing ball",
        badge: "new",
        stock: 456,
        brand: "ShakePro",
        features: ["BPA-free", "700ml capacity", "Mixing ball", "Leak-proof lid"]
    },
    {
        id: 98,
        name: "Adjustable Ankle Weights",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.6,
        reviews: 234,
        description: "Adjustable ankle weights for resistance training",
        badge: "hot",
        stock: 167,
        brand: "WeightFit",
        features: ["Adjustable weight", "Comfortable padding", "Secure straps", "Pair included"]
    },
    {
        id: 99,
        name: "Foam Roller Muscle",
        price: 24.99,
        oldPrice: 34.99,
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.7,
        reviews: 523,
        description: "High-density foam roller for muscle recovery",
        badge: "sale",
        stock: 178,
        brand: "RecoverPro",
        features: ["High-density foam", "24-inch length", "Textured surface", "Carry strap"]
    },
    {
        id: 100,
        name: "Pull-Up Bar Doorway",
        price: 34.99,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop",
        category: "sports",
        rating: 4.5,
        reviews: 445,
        description: "Adjustable doorway pull-up bar with multiple grips",
        badge: "new",
        stock: 123,
        brand: "StrengthMax",
        features: ["No screws needed", "Multiple grip positions", "500lbs capacity", "Foam padding"]
    },
    
    // ==================== BEAUTY & HEALTH ====================
    {
        id: 101,
        name: "Professional Hair Dryer",
        price: 59.99,
        oldPrice: 89.99,
        image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.7,
        reviews: 567,
        description: "Ionic hair dryer with 3 heat settings",
        badge: "sale",
        stock: 89,
        brand: "HairPro",
        features: ["Ionic technology", "3 heat settings", "Cold shot button", "2 speed settings"]
    },
    {
        id: 102,
        name: "Electric Toothbrush Sonic",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.8,
        reviews: 789,
        description: "Rechargeable sonic toothbrush with 5 modes",
        badge: "hot",
        stock: 134,
        brand: "SmileClean",
        features: ["Sonic technology", "5 cleaning modes", "2-minute timer", "USB charging"]
    },
    {
        id: 103,
        name: "Facial Cleanser Brush",
        price: 34.99,
        oldPrice: 54.99,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.6,
        reviews: 445,
        description: "Waterproof electric facial cleansing brush",
        badge: "sale",
        stock: 156,
        brand: "GlowSkin",
        features: ["Waterproof IPX7", "3 speed settings", "Rechargeable", "3 brush heads"]
    },
    {
        id: 104,
        name: "Massage Gun Deep Tissue",
        price: 119.99,
        oldPrice: 179.99,
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.9,
        reviews: 623,
        description: "Percussion massage gun with 6 heads",
        badge: "sale",
        stock: 78,
        brand: "RelaxPro",
        features: ["6 massage heads", "20 speed levels", "Quiet motor", "Carrying case"]
    },
    {
        id: 105,
        name: "Essential Oil Diffuser",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.5,
        reviews: 534,
        description: "Ultrasonic aromatherapy diffuser with LED lights",
        badge: "new",
        stock: 234,
        brand: "AromaBliss",
        features: ["300ml capacity", "7-color LED", "Auto shut-off", "Whisper quiet"]
    },
    {
        id: 106,
        name: "Ceramic Hair Straightener",
        price: 44.99,
        oldPrice: 69.99,
        image: "https://images.unsplash.com/photo-1582094114991-babb978c151f?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.7,
        reviews: 456,
        description: "Professional ceramic hair straightener",
        badge: "sale",
        stock: 123,
        brand: "SilkHair",
        features: ["Ceramic plates", "Heat protection", "Fast heating", "Adjustable temperature"]
    },
    {
        id: 107,
        name: "UV LED Nail Lamp",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.4,
        reviews: 345,
        description: "Professional UV LED nail lamp for gel polish",
        badge: "hot",
        stock: 189,
        brand: "NailPerfect",
        features: ["UV + LED dual light", "4 timer settings", "Auto sensor", "Portable design"]
    },
    {
        id: 108,
        name: "Jade Face Roller",
        price: 19.99,
        oldPrice: 29.99,
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.6,
        reviews: 678,
        description: "Natural jade facial roller for lymphatic drainage",
        badge: "sale",
        stock: 267,
        brand: "JadeBeauty",
        features: ["100% natural jade", "Dual-ended roller", "Reduces puffiness", "Gift box"]
    },
    {
        id: 109,
        name: "Digital Body Scale",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1589991944365-5339eb515beb?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.5,
        reviews: 456,
        description: "Smart body composition scale with app sync",
        badge: "new",
        stock: 145,
        brand: "HealthTrack",
        features: ["Body composition", "App sync", "Auto calibration", "400lbs capacity"]
    },
    {
        id: 110,
        name: "LED Makeup Mirror",
        price: 39.99,
        oldPrice: 59.99,
        image: "https://images.unsplash.com/photo-1618438117889-e36b20c616c5?w=500&h=500&fit=crop",
        category: "beauty",
        rating: 4.8,
        reviews: 534,
        description: "LED lighted makeup mirror with 3x magnification",
        badge: "sale",
        stock: 112,
        brand: "BeautyGlow",
        features: ["LED ring light", "3x magnification", "Touch control", "USB rechargeable"]
    }
];

// ==================== CART MANAGEMENT ====================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    showNotification(`${product.name} added to cart!`, 'success');
    renderCartItems();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    renderCartItems();
    showNotification('Item removed from cart', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        renderCartItems();
    }
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll('#cartBadge');
    badges.forEach(badge => {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    });
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <i class="fas fa-shopping-cart" style="font-size: 60px; color: var(--text-light); margin-bottom: 15px;"></i>
                <p style="color: var(--text-light);">Your cart is empty</p>
            </div>
        `;
        updateCartBadge();
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">$${item.price}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    updateCartBadge();
    updateCartTotal();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalElement = document.getElementById('cartTotal');
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('active');
    renderCartItems();
}

// ==================== WISHLIST MANAGEMENT ====================
function toggleWishlist() {
    const sidebar = document.getElementById('wishlistSidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
        renderWishlistItems();
    }
}

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (existingItem) {
        // Remove from wishlist
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification(`${product.name} removed from wishlist`, 'info');
    } else {
        // Add to wishlist
        wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        showNotification(`${product.name} added to wishlist!`, 'success');
    }
    
    saveWishlistToStorage();
    renderWishlistItems();
    updateWishlistIcons();
}

function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

function updateWishlistIcons() {
    const icons = document.querySelectorAll('.wishlist-btn');
    icons.forEach(icon => {
        const productId = parseInt(icon.getAttribute('data-product-id'));
        if (isInWishlist(productId)) {
            icon.classList.add('active');
            icon.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            icon.classList.remove('active');
            icon.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

function updateWishlistBadge() {
    const badges = document.querySelectorAll('#wishlistBadge');
    badges.forEach(badge => {
        badge.textContent = wishlist.length;
        badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    });
}

function renderWishlistItems() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <i class="far fa-heart" style="font-size: 60px; color: var(--text-light); margin-bottom: 15px;"></i>
                <p style="color: var(--text-light);">Your wishlist is empty</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = wishlist.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="cart-item-price">$${item.price}</p>
                <button onclick="addToCart(${item.id}); addToWishlist(${item.id});" class="btn-sm btn-primary" style="margin-top: 10px;">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
            <button class="remove-item" onclick="addToWishlist(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    updateWishlistBadge();
}

// ==================== FLASH SALE COUNTDOWN ====================
function startFlashSaleCountdown() {
    const countdownElement = document.getElementById('flashSaleCountdown');
    if (!countdownElement) return;
    
    // Set flash sale end time (24 hours from now for demo)
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        if (distance < 0) {
            countdownElement.innerHTML = 'SALE ENDED';
            return;
        }
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-value">${hours.toString().padStart(2, '0')}</span>
                <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-value">${minutes.toString().padStart(2, '0')}</span>
                <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-separator">:</div>
            <div class="countdown-item">
                <span class="countdown-value">${seconds.toString().padStart(2, '0')}</span>
                <span class="countdown-label">Seconds</span>
            </div>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== PRODUCT DETAILS MODAL ====================
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    const modalContent = document.getElementById('productModalContent');
    modalContent.innerHTML = `
        <button class="modal-close" onclick="closeProductModal()">
            <i class="fas fa-times"></i>
        </button>
        
        <div class="product-modal-grid">
            <div class="product-modal-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            
            <div class="product-modal-info">
                <div class="product-modal-badge ${product.badge}">${product.badge ? product.badge.toUpperCase() : ''}</div>
                <h2>${product.name}</h2>
                <div class="product-rating" style="margin: 15px 0;">
                    ${'<i class="fas fa-star" style="color: #ffc107;"></i>'.repeat(Math.floor(product.rating))}
                    <span style="color: var(--text-light); margin-left: 10px;">${product.rating} (${product.reviews} reviews)</span>
                </div>
                
                <div class="product-price" style="margin: 20px 0;">
                    <span style="font-size: 32px; font-weight: 700; color: var(--primary-color);">$${product.price}</span>
                    ${product.oldPrice ? `<span style="font-size: 20px; color: var(--text-light); text-decoration: line-through; margin-left: 15px;">$${product.oldPrice}</span>` : ''}
                </div>
                
                <p style="color: var(--text-light); line-height: 1.6; margin-bottom: 20px;">${product.description}</p>
                
                <div style="background: var(--bg-light); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h4 style="margin-bottom: 15px; font-size: 16px;">Key Features:</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${product.features ? product.features.map(f => `<li style="padding: 8px 0; border-bottom: 1px solid var(--border-color);"><i class="fas fa-check" style="color: var(--success-color); margin-right: 10px;"></i>${f}</li>`).join('') : ''}
                    </ul>
                </div>
                
                <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                    <button onclick="addToCart(${product.id}); closeProductModal();" class="btn btn-primary" style="flex: 1;">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button onclick="addToWishlist(${product.id})" class="btn btn-outline" style="width: 50px;">
                        <i class="${isInWishlist(product.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                
                <div style="padding: 15px; background: var(--bg-light); border-radius: 10px; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-box" style="color: var(--primary-color); font-size: 20px;"></i>
                    <div>
                        <strong>Stock Status:</strong> 
                        <span style="color: ${product.stock > 20 ? 'var(--success-color)' : 'var(--warning-color)'};">${product.stock} items available</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="product-reviews-section" style="margin-top: 40px;">
            <h3 style="margin-bottom: 25px; font-size: 24px;">Customer Reviews</h3>
            <div id="reviewsContainer"></div>
            <button onclick="showAddReviewForm(${product.id})" class="btn btn-outline" style="margin-top: 20px;">
                <i class="fas fa-plus"></i> Write a Review
            </button>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    loadProductReviews(productId);
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ==================== REVIEWS MANAGEMENT ====================
let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

function loadProductReviews(productId) {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;
    
    const productReviews = reviews[productId] || [];
    
    if (productReviews.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; background: var(--bg-light); border-radius: 10px;">
                <i class="far fa-comment" style="font-size: 48px; color: var(--text-light); margin-bottom: 15px;"></i>
                <p style="color: var(--text-light);">No reviews yet. Be the first to review!</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div>
                    <h4>${review.name}</h4>
                    <div class="review-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                        ${'<i class="far fa-star"></i>'.repeat(5 - review.rating)}
                    </div>
                </div>
                <span class="review-date">${review.date}</span>
            </div>
            <p class="review-text">${review.comment}</p>
        </div>
    `).join('');
}

function showAddReviewForm(productId) {
    const container = document.getElementById('reviewsContainer');
    container.innerHTML = `
        <div class="review-form">
            <h4 style="margin-bottom: 20px;">Write Your Review</h4>
            <form onsubmit="submitReview(event, ${productId})">
                <div class="form-group">
                    <label>Your Name</label>
                    <input type="text" id="reviewName" required placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label>Rating</label>
                    <div class="star-rating" id="starRating">
                        ${[5,4,3,2,1].map(star => `
                            <input type="radio" id="star${star}" name="rating" value="${star}" ${star === 5 ? 'checked' : ''}>
                            <label for="star${star}"><i class="fas fa-star"></i></label>
                        `).join('')}
                    </div>
                </div>
                <div class="form-group">
                    <label>Your Review</label>
                    <textarea id="reviewComment" required rows="4" placeholder="Share your experience..."></textarea>
                </div>
                <div style="display: flex; gap: 10px;">
                    <button type="submit" class="btn btn-primary">Submit Review</button>
                    <button type="button" onclick="loadProductReviews(${productId})" class="btn btn-outline">Cancel</button>
                </div>
            </form>
        </div>
    ` + container.innerHTML;
}

function submitReview(event, productId) {
    event.preventDefault();
    
    const name = document.getElementById('reviewName').value;
    const rating = parseInt(document.querySelector('input[name="rating"]:checked').value);
    const comment = document.getElementById('reviewComment').value;
    
    if (!reviews[productId]) {
        reviews[productId] = [];
    }
    
    reviews[productId].unshift({
        name,
        rating,
        comment,
        date: new Date().toLocaleDateString()
    });
    
    localStorage.setItem('reviews', JSON.stringify(reviews));
    showNotification('Review submitted successfully!', 'success');
    loadProductReviews(productId);
}

// ==================== USER MENU ====================
function toggleUserMenu() {
    const menu = document.getElementById('userMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// ==================== NOTIFICATIONS ====================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    else if (type === 'info') icon = 'info-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== SEARCH FUNCTIONALITY ====================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title');
            if (title && title.textContent.toLowerCase().includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}


// ==================== MY PROFILE MODAL ====================
function showMyProfile() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const existingModal = document.getElementById('profileModal');
    if (existingModal) existingModal.remove();

    const name = user.name || 'Guest User';
    const email = user.email || 'Not logged in';
    const memberSince = user.memberSince || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    const initial = name.charAt(0).toUpperCase();
    const totalOrders = (JSON.parse(localStorage.getItem('orders') || '[]')).length;
    const wishlistCount = (JSON.parse(localStorage.getItem('wishlist') || '[]')).length;
    const cartCount = (JSON.parse(localStorage.getItem('cart') || '[]')).reduce((s, i) => s + i.quantity, 0);

    const modal = document.createElement('div');
    modal.id = 'profileModal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:99999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);';
    modal.innerHTML = `
        <div style="background:#fff;border-radius:24px;width:90%;max-width:480px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,0.25);animation:slideUp 0.3s ease;">
            <style>@keyframes slideUp{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}</style>
            <!-- Header -->
            <div style="background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));padding:40px 30px;text-align:center;position:relative;">
                <button onclick="document.getElementById('profileModal').remove()" style="position:absolute;top:15px;right:15px;background:rgba(255,255,255,0.2);border:none;color:#fff;width:35px;height:35px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">
                    <i class="fas fa-times"></i>
                </button>
                <div style="width:90px;height:90px;background:rgba(255,255,255,0.25);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 15px;font-size:36px;font-weight:700;color:#fff;border:3px solid rgba(255,255,255,0.5);">
                    ${initial}
                </div>
                <h2 style="color:#fff;font-size:22px;font-weight:700;margin-bottom:5px;">${name}</h2>
                <p style="color:rgba(255,255,255,0.85);font-size:14px;">${email}</p>
                <span style="display:inline-block;margin-top:10px;background:rgba(255,255,255,0.2);color:#fff;font-size:12px;padding:4px 14px;border-radius:20px;">Member since ${memberSince}</span>
            </div>
            <!-- Stats -->
            <div style="display:grid;grid-template-columns:repeat(3,1fr);background:#f8fafc;">
                <div style="padding:20px;text-align:center;border-right:1px solid #e2e8f0;">
                    <p style="font-size:24px;font-weight:700;color:var(--primary-color);margin:0;">${totalOrders}</p>
                    <p style="font-size:12px;color:#64748b;margin:4px 0 0;">Orders</p>
                </div>
                <div style="padding:20px;text-align:center;border-right:1px solid #e2e8f0;">
                    <p style="font-size:24px;font-weight:700;color:var(--primary-color);margin:0;">${wishlistCount}</p>
                    <p style="font-size:12px;color:#64748b;margin:4px 0 0;">Wishlist</p>
                </div>
                <div style="padding:20px;text-align:center;">
                    <p style="font-size:24px;font-weight:700;color:var(--primary-color);margin:0;">${cartCount}</p>
                    <p style="font-size:12px;color:#64748b;margin:4px 0 0;">In Cart</p>
                </div>
            </div>
            <!-- Info -->
            <div style="padding:25px 30px;">
                <div style="display:flex;flex-direction:column;gap:14px;">
                    <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:#f8fafc;border-radius:12px;">
                        <div style="width:40px;height:40px;background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;flex-shrink:0;">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <p style="font-size:11px;color:#94a3b8;margin:0 0 2px;">Full Name</p>
                            <p style="font-size:15px;font-weight:600;color:#1e293b;margin:0;">${name}</p>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:#f8fafc;border-radius:12px;">
                        <div style="width:40px;height:40px;background:linear-gradient(135deg,#10b981,#059669);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;flex-shrink:0;">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <p style="font-size:11px;color:#94a3b8;margin:0 0 2px;">Email Address</p>
                            <p style="font-size:15px;font-weight:600;color:#1e293b;margin:0;">${email}</p>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:14px;padding:14px 18px;background:#f8fafc;border-radius:12px;">
                        <div style="width:40px;height:40px;background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:10px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px;flex-shrink:0;">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <div>
                            <p style="font-size:11px;color:#94a3b8;margin:0 0 2px;">Member Since</p>
                            <p style="font-size:15px;font-weight:600;color:#1e293b;margin:0;">${memberSince}</p>
                        </div>
                    </div>
                </div>
                ${!user.loggedIn ? '<p style="text-align:center;margin-top:20px;font-size:13px;color:#94a3b8;">Please <a href="#" onclick="document.getElementById(\'profileModal\').remove(); toggleUserMenu(); openAuthModal();" style="color:var(--primary-color);font-weight:600;">Login / Sign Up</a> to view your full profile.</p>' : ''}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
    });
}

// ==================== MY ORDERS MODAL ====================
function showMyOrders() {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const existingModal = document.getElementById('ordersModal');
    if (existingModal) existingModal.remove();

    const ordersHTML = orders.length === 0 ? `
        <div style="text-align:center;padding:50px 20px;">
            <div style="width:80px;height:80px;background:#f1f5f9;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
                <i class="fas fa-shopping-bag" style="font-size:32px;color:#94a3b8;"></i>
            </div>
            <h3 style="font-size:18px;font-weight:600;color:#1e293b;margin-bottom:8px;">No Orders Yet</h3>
            <p style="color:#94a3b8;font-size:14px;margin-bottom:24px;">You haven't placed any orders yet.</p>
            <a href="pages/shop.html" onclick="document.getElementById('ordersModal').remove();" style="display:inline-block;background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));color:#fff;padding:12px 28px;border-radius:10px;font-weight:600;font-size:14px;text-decoration:none;">Start Shopping</a>
        </div>
    ` : orders.slice().reverse().map(order => `
        <div style="border:1px solid #e2e8f0;border-radius:14px;margin-bottom:16px;overflow:hidden;">
            <div style="background:#f8fafc;padding:14px 18px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
                <div>
                    <span style="font-size:13px;color:#94a3b8;">Order ID</span>
                    <p style="font-size:15px;font-weight:700;color:#1e293b;margin:2px 0 0;">#${order.orderId}</p>
                </div>
                <div style="text-align:right;">
                    <span style="font-size:13px;color:#94a3b8;">${order.date}</span>
                    <p style="margin:2px 0 0;"><span style="background:${order.status === 'Delivered' ? '#dcfce7' : '#fef9c3'};color:${order.status === 'Delivered' ? '#16a34a' : '#ca8a04'};font-size:12px;padding:3px 10px;border-radius:20px;font-weight:600;">${order.status}</span></p>
                </div>
            </div>
            <div style="padding:14px 18px;">
                ${order.items.slice(0, 2).map(item => `
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px;">
                        <img src="${item.image}" alt="${item.name}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;flex-shrink:0;">
                        <div style="flex:1;min-width:0;">
                            <p style="font-size:14px;font-weight:500;color:#1e293b;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.name}</p>
                            <p style="font-size:13px;color:#64748b;margin:2px 0 0;">Qty: ${item.quantity} × $${item.price}</p>
                        </div>
                        <p style="font-size:14px;font-weight:600;color:var(--primary-color);flex-shrink:0;">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                `).join('')}
                ${order.items.length > 2 ? `<p style="font-size:13px;color:#94a3b8;text-align:center;margin:4px 0 0;">+${order.items.length - 2} more item(s)</p>` : ''}
                <div style="border-top:1px solid #e2e8f0;margin-top:12px;padding-top:12px;display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:13px;color:#64748b;">${order.items.reduce((s, i) => s + i.quantity, 0)} item(s)</span>
                    <span style="font-size:16px;font-weight:700;color:var(--primary-color);">Total: $${order.total}</span>
                </div>
            </div>
        </div>
    `).join('');

    const modal = document.createElement('div');
    modal.id = 'ordersModal';
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.55);z-index:99999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);';
    modal.innerHTML = `
        <div style="background:#fff;border-radius:24px;width:90%;max-width:520px;max-height:85vh;display:flex;flex-direction:column;box-shadow:0 30px 80px rgba(0,0,0,0.25);animation:slideUp 0.3s ease;">
            <style>@keyframes slideUp{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}</style>
            <div style="background:linear-gradient(135deg,var(--primary-color),var(--secondary-color));padding:25px 30px;border-radius:24px 24px 0 0;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;">
                <div style="display:flex;align-items:center;gap:14px;">
                    <div style="width:44px;height:44px;background:rgba(255,255,255,0.2);border-radius:12px;display:flex;align-items:center;justify-content:center;">
                        <i class="fas fa-shopping-bag" style="color:#fff;font-size:20px;"></i>
                    </div>
                    <div>
                        <h2 style="color:#fff;font-size:20px;font-weight:700;margin:0;">My Orders</h2>
                        <p style="color:rgba(255,255,255,0.8);font-size:13px;margin:0;">${orders.length} order(s) total</p>
                    </div>
                </div>
                <button onclick="document.getElementById('ordersModal').remove()" style="background:rgba(255,255,255,0.2);border:none;color:#fff;width:38px;height:38px;border-radius:50%;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="padding:24px;overflow-y:auto;flex:1;">
                ${ordersHTML}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
    });
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateWishlistBadge();
    renderCartItems();
    renderWishlistItems();
    startFlashSaleCountdown();
    initSearch();
    
    // Close modals on outside click
    window.onclick = function(event) {
        const productModal = document.getElementById('productModal');
        if (event.target === productModal) {
            closeProductModal();
        }
    }
});