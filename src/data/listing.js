import { asset } from '../utils/asset';
export const listingData = {
  id: "mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  stats: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
  pricePerNight: 5699,
  totalPrice: "₹28,499",
  totalNights: 5,
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  guests: "2 guests",
  freeCancellationDate: "17 October",
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  host: {
    name: "Mirashya Homes",
    yearsHosting: 2,
    rating: 4.68,
    reviews: 1463,
    
    avatar: asset("assets/image/host.png"),
    responseRate: "100%",
    responseTime: "within an hour",
    school: "NICMAR GOA",
    bornDecade: "Born in the 80s",
    coHosts: [
      { name: "Sharath", avatarLetter: "S", bg: "rgb(247, 237, 226)", color: "rgb(193, 133, 42)" },
      { name: "Aman Dev Pahwa", avatarLetter: "A", bg: "rgb(231, 240, 253)", color: "rgb(58, 110, 204)" },
      { name: "Maria Karen", avatarLetter: "M", bg: "rgb(253, 231, 239)", color: "rgb(212, 53, 110)" },
      { name: "Simran", avatarLetter: "S", bg: "rgb(239, 234, 247)", color: "rgb(139, 111, 196)" }
    ]
  },
  photos: [
    {
      id: 1,
      title: "Living room patio seating",
      url: asset("assets/image/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg"),
      fallback: "https://a0.muscache.com/im/pictures/miso/Hosting-1007204996901844004/original/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg"
    },
    {
      id: 2,
      title: "Living lounge with table",
      url: asset("assets/image/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg"),
      fallback: "https://a0.muscache.com/im/pictures/miso/Hosting-1007204996901844004/original/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg"
    },
    {
      id: 3,
      title: "Private Jacuzzi tub area",
      url: asset("assets/image/9be71047-fc52-438a-9270-75cb470f6752.jpeg"),
      fallback: "https://a0.muscache.com/im/pictures/miso/Hosting-1007204996901844004/original/9be71047-fc52-438a-9270-75cb470f6752.jpeg"
    },
    {
      id: 4,
      title: "Bedroom double bed",
      url: asset("assets/image/67c61c6f-6260-4809-9510-0360e58a345d.jpeg"),
      fallback: "https://a0.muscache.com/im/pictures/miso/Hosting-1007204996901844004/original/67c61c6f-6260-4809-9510-0360e58a345d.jpeg"
    },
    {
      id: 5,
      title: "Building exterior in Candolim",
      url: asset("assets/image/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg"),
      fallback: "https://a0.muscache.com/im/pictures/miso/Hosting-1007204996901844004/original/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg"
    }
  ],
  sleepingArrangements: [
    {
      title: "Bedroom",
      desc: "1 double bed",
      img: asset("assets/image/67c61c6f-6260-4809-9510-0360e58a345d.jpeg"),
      fallback: "https://a0.muscache.com/im/pictures/miso/Hosting-1007204996901844004/original/67c61c6f-6260-4809-9510-0360e58a345d.jpeg"
    },
    {
      title: "Living room",
      desc: "1 sofa",
      img: asset("assets/image/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg"),
      fallback: "https://a0.muscache.com/im/pictures/miso/Hosting-1007204996901844004/original/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg"
    }
  ]
};

export const tourSectionsData = [
  {
    id: "tour-room-0",
    title: "Living room 1",
    amenities: "Sofa · Air conditioning · Ceiling fan · TV",
    photos: [
      { id: 0, url: asset("assets/image/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg"), fb: "https://images.unsplash.com/photo-1554995207-c18c20360250?w=1200&auto=format&fit=crop&q=80", alt: "Living room 1 image 1", fullWidth: true },
      { id: 1, url: asset("assets/image/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg"), fb: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=80", alt: "Living room 1 image 2", fullWidth: false },
      { id: 2, url: asset("assets/image/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg"), fb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80", alt: "Living room 1 image 3", fullWidth: false }
    ]
  },
  {
    id: "tour-room-1",
    title: "Living room 2",
    amenities: "Ceiling fan · Hot tub",
    photos: [
      { id: 3, url: asset("assets/image/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg"), fb: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop&q=80", alt: "Living room 2 image 4", fullWidth: true },
      { id: 4, url: asset("assets/image/9be71047-fc52-438a-9270-75cb470f6752.jpeg"), fb: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop&q=80", alt: "Living room 2 image 5", fullWidth: false },
      { id: 5, url: asset("assets/image/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg"), fb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80", alt: "Living room 2 image 6", fullWidth: false },
      { id: 6, url: asset("assets/image/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg"), fb: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop&q=80", alt: "Living room 2 image 7", fullWidth: true },
      { id: 7, url: asset("assets/image/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg"), fb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80", alt: "Living room 2 image 8", fullWidth: false },
      { id: 8, url: asset("assets/image/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg"), fb: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80", alt: "Living room 2 image 9", fullWidth: false },
      { id: 9, url: asset("assets/image/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg"), fb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=80", alt: "Living room 2 image 10", fullWidth: true }
    ]
  },
  {
    id: "tour-room-2",
    title: "Full kitchen",
    amenities: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    photos: [
      { id: 10, url: asset("assets/image/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg"), fb: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80", alt: "Full kitchen image 11", fullWidth: false },
      { id: 11, url: asset("assets/image/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg"), fb: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop&q=80", alt: "Full kitchen image 12", fullWidth: false }
    ]
  },
  {
    id: "tour-room-3",
    title: "Bedroom",
    amenities: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    photos: [
      { id: 12, url: asset("assets/image/67c61c6f-6260-4809-9510-0360e58a345d.jpeg"), fb: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&auto=format&fit=crop&q=80", alt: "Bedroom image 13", fullWidth: true },
      { id: 13, url: asset("assets/image/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg"), fb: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80", alt: "Bedroom image 14", fullWidth: false },
      { id: 14, url: asset("assets/image/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg"), fb: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80", alt: "Bedroom image 15", fullWidth: false },
      {
        id: 15,
        url: asset("assets/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg"),
        fb: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1200&auto=format&fit=crop&q=80",
        alt: "Bedroom image 16",
        fullWidth: true
      }, { id: 16, url: asset("assets/image/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg"), fb: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop&q=80", alt: "Bedroom image 17", fullWidth: false },
      { id: 17, url: asset("assets/image/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg"), fb: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&auto=format&fit=crop&q=80", alt: "Bedroom image 18", fullWidth: false }
    ]
  },
  {
    id: "tour-room-4",
    title: "Full bathroom",
    amenities: "Hairdryer · Hot water · Shampoo · Shower gel",
    photos: [
      { id: 18, url: asset("assets/image/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg"), fb: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&auto=format&fit=crop&q=80", alt: "Full bathroom image 19", fullWidth: true }
    ]
  },
  {
    id: "tour-room-5",
    title: "Gym",
    amenities: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    photos: [
      { id: 19, url: asset("assets/image/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg"), fb: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop&q=80", alt: "Gym image 20", fullWidth: true },
      { id: 20, url: asset("assets/image/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg"), fb: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop&q=80", alt: "Gym image 21", fullWidth: false },
      { id: 21, url: asset("assets/image/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg"), fb: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop&q=80", alt: "Gym image 22", fullWidth: false },
      { id: 22, url: asset("assets/image/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg"), fb: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80", alt: "Gym image 23", fullWidth: false },
      { id: 23, url: asset("assets/image/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg"), fb: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&auto=format&fit=crop&q=80", alt: "Gym image 24", fullWidth: false }
    ]
  },
  {
    id: "tour-room-6",
    title: "Exterior",
    amenities: "",
    photos: [
      { id: 24, url: asset("assets/image/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg"), fb: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80", alt: "Exterior image 25", fullWidth: true },
      { id: 25, url: asset("assets/image/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg"), fb: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=80", alt: "Exterior image 26", fullWidth: false },
      { id: 26, url: asset("assets/image/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg"), fb: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=80", alt: "Exterior image 27", fullWidth: false },
      { id: 27, url: asset("assets/image/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg"), fb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80", alt: "Exterior image 28", fullWidth: true },
      { id: 28, url: asset("assets/image/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg"), fb: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop&q=80", alt: "Exterior image 29", fullWidth: false },
      { id: 29, url: asset("assets/image/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg"), fb: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop&q=80", alt: "Exterior image 30", fullWidth: false }
    ]
  },
  {
    id: "tour-room-7",
    title: "Pool",
    amenities: "Pool",
    photos: [
      { id: 30, url: asset("assets/image/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg"), fb: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&auto=format&fit=crop&q=80", alt: "Pool image 31", fullWidth: true },
      { id: 31, url: asset("assets/image/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg"), fb: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800&auto=format&fit=crop&q=80", alt: "Pool image 32", fullWidth: false },
      { id: 32, url: asset("assets/image/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg"), fb: "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=800&auto=format&fit=crop&q=80", alt: "Pool image 33", fullWidth: false }
    ]
  },
  {
    id: "tour-room-8",
    title: "Additional photos",
    amenities: "",
    photos: [
      { id: 33, url: asset("assets/image/70325367-cbae-4993-b560-18cd3f6edd53.jpeg"), fb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&auto=format&fit=crop&q=80", alt: "Additional photos image 34", fullWidth: true },
      { id: 34, url: asset("assets/image/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg"), fb: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80", alt: "Additional photos image 35", fullWidth: false },
      { id: 35, url: asset("assets/image/30ad93b2-293f-494d-b645-626303c6cb93.jpeg"), fb: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80", alt: "Additional photos image 36", fullWidth: false },
      { id: 36, url: asset("assets/image/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg"), fb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80", alt: "Additional photos image 37", fullWidth: true },
      { id: 37, url: asset("assets/image/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg"), fb: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop&q=80", alt: "Additional photos image 38", fullWidth: false },
      { id: 38, url: asset("assets/image/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg"), fb: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80", alt: "Additional photos image 39", fullWidth: false },
      { id: 39, url: asset("assets/image/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg"), fb: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&auto=format&fit=crop&q=80", alt: "Additional photos image 40", fullWidth: true },
      { id: 40, url: asset("assets/image/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg"), fb: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&auto=format&fit=crop&q=80", alt: "Additional photos image 41", fullWidth: false },
      { id: 41, url: asset("assets/image/862d936c-0f34-4e50-af87-b519e2781d19.jpeg"), fb: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=80", alt: "Additional photos image 42", fullWidth: false },
      {
        id: 42,
        url: asset("assets/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg"),
        fb: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
        alt: "Additional photos image 43",
        fullWidth: true
      }]
  }
];