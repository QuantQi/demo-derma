export const testimonials = [
  {
    text: "I opted for Glow treatment at MB Derma – I couldn't be happier with the results!",
    author: "Alice Rowlatt",
    rating: 5
  },
  {
    text: "My hair was so weak I couldn't cope anymore. I went to Monika for hair treatment and I love it!",
    author: "Alison McIntyre",
    rating: 5
  },
  {
    text: "I had some visible scars I wanted to minimise. Monika advised a perfect treatment and they are less visible now!",
    author: "Becca Curtis",
    rating: 5
  },
  {
    text: "My lipolysis treatment got rid of my cellulite that I struggled with for so long! Thank you Monika!",
    author: "Emily Paul",
    rating: 5
  },
  {
    text: "I came to Monika with some skin problems and she was lovely and very informative. Would 100% recommend!",
    author: "Heather Teahan",
    rating: 5
  },
  {
    text: "Amazing service and results! The team is professional and caring. I feel so much more confident after my treatment.",
    author: "Sarah M.",
    rating: 5
  }
];

export const services = [
  // Face treatments
  {
    title: "CO2 Fractional Laser",
    description: "Rejuvenation treatment for smooth, radiant skin using advanced fractional laser technology.",
    image: "/images/services/co2-laser.jpg",
    href: "/services/co2-fractional-laser",
    category: "face"
  },
  {
    title: "Carbon Laser Facial",
    description: "Deep cleansing and skin rejuvenation treatment using carbon laser technology.",
    image: "/images/services/carbon-laser.jpg",
    href: "/services/carbon-laser-facial", 
    category: "face"
  },
  {
    title: "Dermal Fillers",
    description: "Restore volume and smooth wrinkles with our premium dermal filler treatments.",
    image: "/images/services/dermal-fillers.jpg",
    href: "/services/dermal-fillers",
    category: "face"
  },
  {
    title: "Platelet Rich Plasma",
    description: "Natural skin rejuvenation using your body's own healing properties.",
    image: "/images/services/prp.jpg",
    href: "/services/platelet-rich-plasma",
    category: "face"
  },
  {
    title: "Radiofrequency Microneedling",
    description: "Advanced skin tightening and texture improvement treatment.",
    image: "/images/services/rf-microneedling.jpg",
    href: "/services/radiofrequency-microneedling",
    category: "face"
  },
  // Body treatments
  {
    title: "Emsculpt",
    description: "Revolutionary body sculpting treatment for muscle building and fat reduction.",
    image: "/images/services/emsculpt.jpg",
    href: "/services/emsculpt",
    category: "body"
  },
  {
    title: "HIFU",
    description: "High-Intensity Focused Ultrasound for non-invasive body contouring.",
    image: "/images/services/hifu.jpg",
    href: "/services/hifu",
    category: "body"
  },
  {
    title: "Diode Laser Hair Removal",
    description: "Permanent hair reduction with our advanced diode laser technology.",
    image: "/images/services/laser-hair-removal.jpg",
    href: "/services/diode-laser-hair-removal",
    category: "body"
  },
  {
    title: "Mesotherapy",
    description: "Targeted injection therapy for various skin and body concerns.",
    image: "/images/services/mesotherapy.jpg",
    href: "/services/mesotherapy",
    category: "body"
  },
  // Hair treatments
  {
    title: "Hair Restoration",
    description: "Advanced treatments for hair loss and thinning using latest technology.",
    image: "/images/services/hair-restoration.jpg",
    href: "/services/hair-restoration",
    category: "hair"
  }
];

export const blogPosts = [
  {
    title: "Sagging Face: How to tighten sagging skin on face",
    excerpt: "As we age, one of the most common concerns many individuals face is sagging skin on the face. MB Derma's article explains treatments such as RF skin tightening and ultrasound.",
    image: "/images/blog/sagging-face.jpg",
    href: "/blog/sagging-face-how-to-tighten-sagging-skin-on-face",
    publishDate: "2024-01-15",
    category: "Skin Care"
  },
  {
    title: "The Complete Guide to Dermal Fillers", 
    excerpt: "Everything you need to know about dermal fillers, from types to aftercare.",
    image: "/images/blog/dermal-fillers-guide.jpg",
    href: "/blog/complete-guide-dermal-fillers",
    publishDate: "2024-01-10",
    category: "Treatments"
  },
  {
    title: "Winter Skin Care Tips",
    excerpt: "Keep your skin healthy and glowing during the colder months with these expert tips.",
    image: "/images/blog/winter-skincare.jpg",
    href: "/blog/winter-skin-care-tips",
    publishDate: "2024-01-05",
    category: "Skin Care"
  }
];

export const priceList = {
  "Dermal Fillers": [
    { treatment: "Lip Fillers (0.5ml)", price: "£180" },
    { treatment: "Lip Fillers (1ml)", price: "£280" },
    { treatment: "Cheek Fillers (1ml)", price: "£300" },
    { treatment: "Nasolabial Folds (1ml)", price: "£280" },
    { treatment: "Marionette Lines (1ml)", price: "£280" }
  ],
  "Fractional Laser CO2": [
    { treatment: "Full Face", price: "£400" },
    { treatment: "Face + Neck", price: "£500" },
    { treatment: "Eye Area", price: "£200" }
  ],
  "Laser Treatments": [
    { treatment: "Carbon Laser Facial", price: "£150" },
    { treatment: "Diode Laser Hair Removal (Small Area)", price: "£80" },
    { treatment: "Diode Laser Hair Removal (Large Area)", price: "£150" }
  ],
  "Mesotherapy": [
    { treatment: "Face Mesotherapy", price: "£200" },
    { treatment: "Body Mesotherapy", price: "£250" },
    { treatment: "Hair Mesotherapy", price: "£180" }
  ],
  "Eye Treatments": [
    { treatment: "Under Eye Filler (1ml)", price: "£300" },
    { treatment: "Crow's Feet Botox", price: "£150" },
    { treatment: "Eye Lift Treatment", price: "£250" }
  ],
  "Zaffiro Thermolifting": [
    { treatment: "Face Treatment", price: "£300" },
    { treatment: "Body Treatment", price: "£400" }
  ],
  "HIFU": [
    { treatment: "Face HIFU", price: "£500" },
    { treatment: "Body HIFU", price: "£600" }
  ],
  "Radiofrequency Microneedling": [
    { treatment: "Face Treatment", price: "£350" },
    { treatment: "Face + Neck", price: "£450" }
  ],
  "Other Treatments": [
    { treatment: "Emsculpt (per session)", price: "£400" },
    { treatment: "PRP Treatment", price: "£300" },
    { treatment: "Consultation", price: "£50" }
  ]
};

export const serviceCategories = [
  {
    title: "Face",
    image: "/images/about/face.jpg",
    description: "Let's take care of your beautiful face – it's what people see first when they meet you!",
    href: "/services?category=face"
  },
  {
    title: "Body", 
    image: "/images/about/body.jpg",
    description: "Look after your precious body with us – care for it and it will serve you for years to come.",
    href: "/services?category=body"
  },
  {
    title: "Hair",
    image: "/images/about/hair.jpg", 
    description: "Your hair is your crown! Let's make it beautiful and healthy. Make it shine.",
    href: "/services?category=hair"
  }
];