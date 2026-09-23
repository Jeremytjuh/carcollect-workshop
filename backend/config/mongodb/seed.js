/* eslint-disable */
db = db.getSiblingDB("workshop");

db.users.insertMany([
  {
    _id: ObjectId("68b446eced5d7815c25d64a4"),
    first_name: "Jesse",
    last_name: "Doe",
    username: "JesseLovesCars#123",
    city: "Breda",
    country: "The Netherlands",
    bio: "I'm looking for any sort of car, 4 wheels, roof, engine, it doesn't matter! I want all of them",
    image: "https://cdn.vectorstock.com/i/500p/49/05/car-salesman-character-vector-9464905.jpg"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246bc"),
    first_name: "CarCollect",
    last_name: "Colleagues",
    username: "CarCollectors",
    city: "Roosendaal",
    country: "The Netherlands",
    bio: "Driven by connection",
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQGpTbNtptqbnA/company-logo_200_200/B4EZrpf.fVKkAI-/0/1764854065581/carcollect_logo?e=2147483647&v=beta&t=19j87cF7mwtSyc-f-b9dGZtsg7SUurR0z5k4IMfU_ys"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246be"),
    first_name: "Tony",
    last_name: "Hawk",
    username: "Skaterboy",
    city: "Carlsbad",
    country: "The United States",
    bio: "He was a skater boy, she said, \"See you later, boy\"",
    image: "https://i.insider.com/5ebc461a204ad3156f66f619?width=700"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246bf"),
    first_name: "Bruce",
    last_name: "Wayne",
    username: "Batman",
    city: "Gotham City",
    country: "The United States",
    bio: "Actor, businessman, and professional wrestler",
    image: "https://www.carnavalskleding.nl/media/catalog/product/cache/058c0efaab55c849325697b48f66daa1/cvk/b/a/batman-kostuum-man-0.jpg"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246aa"),
    first_name: "Dwayne",
    last_name: "Johnson",
    username: "TheRock",
    city: "Hayward",
    country: "The United States",
    bio: "Actor, businessman, and professional wrestler",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwKnO0hQ2UtCFD-68muvlSrxoQoe3SM2IVNPz37bEqg&s"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246ab"),
    first_name: "John",
    last_name: "Farmson",
    username: "MrFarmer",
    city: "Goes",
    country: "The Netherlands",
    bio: "It ain't much but it's honest work",
    image: "https://www.wsaz.com/resizer/TtxT5eHIfsdlCYPQRJG_wdDg9yQ=/arc-photo-gray/arc3-prod/public/FLBGRRRDQNHYBNTNHU4WOWRIFY.png"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246ae"),
    first_name: "Mario",
    last_name: "Mario",
    username: "ItsAMe",
    city: "Mushroom Kingdom",
    country: "Italy",
    bio: "Part time plumber, full time racer",
    image: "https://i.pinimg.com/564x/6a/b6/fb/6ab6fbb126d95726be891c0cb83b4270.jpg"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246af"),
    first_name: "Max",
    last_name: "Verstappen",
    username: "MV3",
    city: "Monaco-City",
    country: "Monaco",
    bio: "TUTUDUDU MAX VERSTAPPEN",
    image: "https://www.formula1points.com/images/driver/max-verstappen.webp"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246b0"),
    first_name: "Valentino",
    last_name: "Rossi",
    username: "TheDoctor",
    city: "Tavullia",
    country: "Italy",
    bio: "Nine-time Grand Prix world champion",
    image: "https://static.independent.co.uk/2021/08/05/15/GettyImages-1325272913.jpg"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246b1"),
    first_name: "Barbara",
    last_name: "Roberts",
    username: "BarbieGirl",
    city: "Malibu",
    country: "The United States",
    bio: "I'm a barbie girl",
    image: "https://i.redd.it/barbies-face-through-the-years-v0-bb57vufq70id1.jpg?width=870&format=pjpg&auto=webp&s=8b90e1af8eed23ea9bb73387f33ff6a2d2a30f4c"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246b2"),
    first_name: "Glorp",
    last_name: "",
    username: "XtraTerrestrial",
    city: "Crater",
    country: "Mars",
    bio: "⟁⋰⌁⟟∴ 𐓂⌬⟒⋮ ꙮ⋔⌁⟁ ⟟⋰𐔓⌁⋮ 𖤐∷⟒ꙮ—⟟⌬⋰⟁ 𐓂⋮⌁.",
    image: "https://img.itch.zone/aW1hZ2UvMzU1NDgwNi8yMTE2NzYzNi5qcGc=/347x500/x6BZRB.jpg"
  },
]);

db.vehicles.insertMany([
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa1"),
    name: "Best car on the market",
    brand: "Opel",
    model: "Corsa",
    version: "v1.2-16V Comfort",
    type: "car",
    license_plate: "AB-C1-23",
    image: "https://assets.autoweek.nl/m/p5hybofbirfz.jpg",
    created_by: ObjectId("5f3536dc67f2820017e246bc")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa2"),
    name: "It's a bus",
    brand: "Volkswagen",
    model: "Crafter",
    version: "35 2.0 TDI L2H1 BM",
    type: "truck",
    license_plate: "BC-D1-23",
    image: "https://www.ames.nl/media/qjxnvrvz/volkswagen-crafter-hero-edition-ap-vw-naafkap-2.webp",
    created_by: ObjectId("68b446eced5d7815c25d64a4")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa3"),
    name: "Rustbucket",
    brand: "BMW",
    model: "3-series",
    version: "323i Executive",
    type: "truck",
    license_plate: "RST-BKT",
    image: "https://pictures.vwe.nl/ATL/bmw/ATX_M49_F3.jpg",
    created_by: ObjectId("5f3536dc67f2820017e246bc")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa4"),
    name: "The Grind machine",
    brand: "Urban",
    type: "skateboard",
    image: "https://images.thimbletoys.com/images/items/2420488Ea.jpg",
    created_by: ObjectId("5f3536dc67f2820017e246be")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa5"),
    name: "Batmobile",
    brand: "Wayne Automotive",
    model: "Batmobile",
    version: "Mk3",
    type: "car",
    license_plate: "BAT-MAN",
    image: "https://images.autoweek.nl/261229301/width/1200/261229301",
    created_by: ObjectId("5f3536dc67f2820017e246bf")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa6"),
    name: "The Rockmobile",
    brand: "Fiat",
    model: "500",
    version: "0.9 TwinAir",
    type: "car",
    license_plate: "ROCK",
    image: "https://images.autoweek.nl/260947371/width/800/260947371",
    created_by: ObjectId("5f3536dc67f2820017e246aa")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa7"),
    name: "The Crop Reaper",
    brand: "John Deere",
    model: "8R",
    version: "8295R",
    type: "tractor",
    license_plate: "REAP",
    image: "https://www.deloonwerker.nl/content/uploads/sites/4/2023/11/John-Deere-7530-Premium-1000.jpg",
    created_by: ObjectId("5f3536dc67f2820017e246ab")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00ab8"),
    name: "Mario Kart",
    brand: "Nintendo",
    model: "Standard Kart",
    version: "Mk1",
    type: "kart",
    license_plate: "MARIO",
    image: "https://cdna.artstation.com/p/assets/images/images/078/690/092/large/elman-toc-render-1.jpg?1722830636",
    created_by: ObjectId("5f3536dc67f2820017e246ae")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00ab9"),
    name: "The Formula",
    brand: "Red Bull",
    model: "Racing",
    version: "RB22",
    type: "kart",
    license_plate: "RB22",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/FIA_F1_Austria_2026_Nr._3_Verstappen_%283%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    created_by: ObjectId("5f3536dc67f2820017e246af")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aba"),
    name: "MotoGP Monster",
    brand: "Yamaha",
    model: "YZR-M1",
    version: "2004 MotoGP #46",
    type: "motorcycle",
    license_plate: "VR-046",
    image: "https://global.yamaha-motor.com/showroom/cp/collection/racing_yzr-m1_0wx1/img/2021_YZR-M1_0WX1.jpg",
    created_by: ObjectId("5f3536dc67f2820017e246b0")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00abb"),
    name: "Barbiewagon",
    brand: "Volkswagen",
    model: "Beetle",
    version: "2024 playset",
    type: "car",
    license_plate: "BAR-BIE",
    image: "https://preview.redd.it/thrifted-my-dream-barbie-car-for-4-50-before-discount-v0-c1n6ufmc8cuc1.jpg?width=640&crop=smart&auto=webp&s=b5bfa981f6950c73374079d04512391b5d354a3b",
    created_by: ObjectId("5f3536dc67f2820017e246b1")
  },
  {
    _id: ObjectId("6aa9278a8f244ce84aa00abc"),
    name: "The Saucer",
    brand: "Aerospace",
    model: "UFO",
    version: "MkIX",
    type: "ufo",
    license_plate: "U-F-O",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_pbMpy3dQ-Kp6wyewz5tFMyhL_XUn0geBg9tPfwa4u2ytzMO2aJkGTw&s=10",
    created_by: ObjectId("5f3536dc67f2820017e246b2")
  }
]);
