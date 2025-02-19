import image1 from './imgg1.jpg'
import image2 from './imgg2.jpg'
import image3 from './imgg3.jpg'
import image4 from './imgg4.jpg'
import image5 from './imgg5.jpg'
import image6 from './imgg6.jpg'

const ngos = [
    {
      id: 0,
      name: "Mata ChananDevi NGO",
      location: "Kothri, Madhyapradesh",
      description: "A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives.",
      requirement : [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image1,
      category: "Disaster",
    },
    {
      id: 1,
      name: "Tsunami in Malika",
      location: "Malika, Tarasudi District",
      description:
        "Emergency! A tsunami has just hkjsdljksdlkdslk khfddjkhf kjshkhfs khsfkjh kshfks kshfks khf kjjhsf it Malika. Help our affected brothers and sisters.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image2,
      category: "Disaster",
    },
    {
      id: 2,
      name: "Help African Children",
      location: "",
      description: "African children need your help to get proper food and water.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
       
      ] ,
      image: image3,
      category: "Children",
    },
    {
      id: 3,
      name: "Sianka Forest Fire",
      location: "Sianka Forest",
      description: "The Sianka forest has caught fire and affected the surrounding community.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image4,
      category: "Disaster",
    },
    {
      id: 4,
      name: "Soporo Earthquake",
      location: "Soporo sub-district",
      description: "A magnitude 7.3 earthquake has shaken Soporo sub-district. Help them recover with food and medicine.",
      requirement: [
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image5,
      category: "Disaster",
    },
    {
      id: 5,
      name: "Lidu Land Drought",
      location: "Tanah Lidu",
      description: "The people of Tanah Lidu are currently suffering from drought. Help them get clean water!",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
      ] ,
      image: image6,
      category: "Disaster",
    },
    {
      id: 6,
      name: "Help African Children",
      location: "",
      description: "African children need your help to get proper food and water.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
       
      ] ,
      image: image3,
      category: "Children",
    },
    {
      id: 7,
      name: "Sianka Forest Fire",
      location: "Sianka Forest",
      description: "The Sianka forest has caught fire and affected the surrounding community.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image4,
      category: "Disaster",
    },
    {
      id: 8,
      name: "Soporo Earthquake",
      location: "Soporo sub-district",
      description: "A magnitude 7.3 earthquake has shaken Soporo sub-district. Help them recover with food and medicine.",
      requirement: [
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image5,
      category: "Disaster",
    },
    {
      id: 9,
      name: "Lidu Land Drought",
      location: "Tanah Lidu",
      description: "The people of Tanah Lidu are currently suffering from drought. Help them get clean water!",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
      ] ,
      image: image6,
      category: "Disaster",
    },
    {
      id: 10,
      name: "Sianka Forest Fire",
      location: "Sianka Forest",
      description: "The Sianka forest has caught fire and affected the surrounding community.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image4,
      category: "Disaster",
    },
    {
      id: 11,
      name: "Soporo Earthquake",
      location: "Soporo sub-district",
      description: "A magnitude 7.3 earthquake has shaken Soporo sub-district. Help them recover with food and medicine.",
      requirement: [
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image5,
      category: "Disaster",
    },
    {
      id: 12,
      name: "Lidu Land Drought",
      location: "Tanah Lidu",
      description: "The people of Tanah Lidu are currently suffering from drought. Help them get clean water!",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
      ] ,
      image: image6,
      category: "Disaster",
    },
    {
      id: 13,
      name: "Mata ChananDevi NGO",
      location: "Kothri, Madhyapradesh",
      description: "A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives. A non-governmental organization (NGO) is a non-profit organization that operates independently from the government and has humanitarian or development objectives.",
      requirement : [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image1,
      category: "Disaster",
    },
    {
      id: 14,
      name: "Tsunami in Malika",
      location: "Malika, Tarasudi District",
      description:
        "Emergency! A tsunami has just hkjsdljksdlkdslk khfddjkhf kjshkhfs khsfkjh kshfks kshfks khf kjjhsf it Malika. Help our affected brothers and sisters.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image2,
      category: "Disaster",
    },
    {
      id: 15,
      name: "Help African Children",
      location: "",
      description: "African children need your help to get proper food and water.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
       
      ] ,
      image: image3,
      category: "Children",
    },
    {
      id: 16,
      name: "Sianka Forest Fire",
      location: "Sianka Forest",
      description: "The Sianka forest has caught fire and affected the surrounding community.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image4,
      category: "Disaster",
    },
    {
      id: 17,
      name: "Soporo Earthquake",
      location: "Soporo sub-district",
      description: "A magnitude 7.3 earthquake has shaken Soporo sub-district. Help them recover with food and medicine.",
      requirement: [
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image5,
      category: "Disaster",
    },
    {
      id: 18,
      name: "Lidu Land Drought",
      location: "Tanah Lidu",
      description: "The people of Tanah Lidu are currently suffering from drought. Help them get clean water!",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
      ] ,
      image: image6,
      category: "Disaster",
    },
    {
      id: 19,
      name: "Help African Children",
      location: "",
      description: "African children need your help to get proper food and water.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
       
      ] ,
      image: image3,
      category: "Children",
    },
    {
      id: 20,
      name: "Sianka Forest Fire",
      location: "Sianka Forest",
      description: "The Sianka forest has caught fire and affected the surrounding community.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image4,
      category: "Disaster",
    },
    {
      id: 21,
      name: "Soporo Earthquake",
      location: "Soporo sub-district",
      description: "A magnitude 7.3 earthquake has shaken Soporo sub-district. Help them recover with food and medicine.",
      requirement: [
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image5,
      category: "Disaster",
    },
    {
      id: 22,
      name: "Lidu Land Drought",
      location: "Tanah Lidu",
      description: "The people of Tanah Lidu are currently suffering from drought. Help them get clean water!",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
      ] ,
      image: image6,
      category: "Disaster",
    },
    {
      id: 23,
      name: "Sianka Forest Fire",
      location: "Sianka Forest",
      description: "The Sianka forest has caught fire and affected the surrounding community.",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
       
      ] ,
      image: image4,
      category: "Disaster",
    },
    {
      id: 24,
      name: "Soporo Earthquake",
      location: "Soporo sub-district",
      description: "A magnitude 7.3 earthquake has shaken Soporo sub-district. Help them recover with food and medicine.",
      requirement: [
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
      ] ,
      image: image5,
      category: "Disaster",
    },
    {
      id: 25,
      name: "Lidu Land Drought",
      location: "Tanah Lidu",
      description: "The people of Tanah Lidu are currently suffering from drought. Help them get clean water!",
      requirement: [
        { name: "T-Shirt", description: "Half Sleeve, Sizes: M, L, XL, 2XL", additionalInfo: "For all age groups" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
        { name: "Chairs", description: "Plastic Chair - 20 required", additionalInfo: "For community centers" },
        { name: "Blankets", description: "Thick blankets for winters", additionalInfo: "15 units needed" },
        { name: "Toys", description: "For kids of ages 1-10 years", additionalInfo: "Educational and fun toys" },
        { name: "Kids T-Shirt", description: "T-Shirts & Bottom, Age: 6-12", additionalInfo: "Urgently Needed" },
      ] ,
      image: image6,
      category: "Disaster",
    },
    
  ];

  export default ngos;