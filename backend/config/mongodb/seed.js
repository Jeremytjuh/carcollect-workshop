/* eslint-disable */
db = db.getSiblingDB("workshop");

db.users.insertMany([
  {
    _id: ObjectId("68b446eced5d7815c25d64a4"),
    first_name: "Jesse",
    last_name: "Doe",
    updatedAt: new Date("2026-09-14T12:55:57.846Z"),
    username: "JesseLovesCars#123",
    tagline: "You've got cars?",
    email: "jesse.doe@email.com",
    phone_number: "0612345678",
    status: "online",
    birth_date: new Date("1984-02-14T01:00:00.000Z"),
    city: "Breda",
    country: "The Netherlands",
    createdAt: "25-08-2021",
    bio: "I'm looking for any sort of car, 4 wheels, roof, engine, it doesn't matter! I want all of them",
    favorite_types: [
      "car",
      "truck",
      "train",
      "tram"
    ],
    image: "https://cdn.vectorstock.com/i/500p/49/05/car-salesman-character-vector-9464905.jpg"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246bc"),
    first_name: "CarCollect",
    last_name: "Colleagues",
    updatedAt: new Date("2026-09-14T12:55:57.846Z"),
    username: "CarCollectors",
    tagline: "Gotta catch 'em all",
    email: "carcollect.colleagues@email.com",
    phone_number: "0612345678",
    status: "offline",
    birth_date: new Date("1984-09-27T01:00:00.000Z"),
    city: "Roosendaal",
    country: "The Netherlands",
    createdAt: "01-03-2020",
    bio: "Driven by connection",
    favorite_types: [
      "car",
    ],
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQGpTbNtptqbnA/company-logo_200_200/B4EZrpf.fVKkAI-/0/1764854065581/carcollect_logo?e=2147483647&v=beta&t=19j87cF7mwtSyc-f-b9dGZtsg7SUurR0z5k4IMfU_ys"
  },
  {
    _id: ObjectId("5f3536dc67f2820017e246be"),
    first_name: "Avril",
    last_name: "Lavigne",
    updatedAt: new Date("2026-09-14T12:55:57.846Z"),
    username: "Sk8erGirl",
    tagline: "They see me rolling",
    email: "avril.lavigne@email.com",
    phone_number: "0612345678",
    status: "offline",
    birth_date: new Date("2000-01-01T01:00:00.000Z"),
    city: "Roosendaal",
    country: "The Netherlands",
    createdAt: "31-3-2023",
    bio: "He was a skater boy, she said, \"See you later, boy\"",
    favorite_types: [
      "skateboard",
    ],
    image: "https://i.ytimg.com/vi/KllImrFm3tI/maxresdefault.jpg"
  },
]);

db.vehicles.insertMany([
  {
    _id: ObjectId("6aa9278a8f244ce84aa00aa1"),
    name: "Best car on the market",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
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
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
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
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
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
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem amet nostrum distinctio eius vel sed deleniti necessitatibus quis, eaque quae doloribus odit dolorum soluta rem architecto, cupiditate modi aperiam quasi?",
    brand: "Urban",
    type: "skateboard",
    image: "https://images.thimbletoys.com/images/items/2420488Ea.jpg",
    created_by: ObjectId("5f3536dc67f2820017e246be")
  },
]);
