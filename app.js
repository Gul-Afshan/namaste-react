import React from "react";
import ReactDOM  from "react-dom/client";
// const heading = React.createElement("h1", {id: "heading"}, "hello world from react sonu////// "); 
// console.log("heading",heading); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(heading);



/*
<div id="parent">
   <div id="child-1">
      <h1>
      I am Gulafshan
      </h1>
   </div>
</div>
 */



// const parent = React.createElement("div",{id:"child-1"},
// React.createElement("h1",{}, "I am Gulafshan")
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(parent);

/*
<div id="parent">
   <div id="child-1">
      <h1>
      I am Gulafshan
      </h1>
      <h2>
      I am Saksham
      </h2>
   </div>
</div>
 */


// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child-1"},
// [React.createElement("h1",{}, "I am Gulafshan") , React.createElement("h2",{}, "I am Saksham")]
// ));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(parent);


/*
<div id="parent">
   <div id="child-1">
      <h1>
      I am Gulafshan
      </h1>
      <h2>
      I am Saksham
      </h2>
   </div>

   <div id="child-2">
      <h1>
      I am Gulafshan
      </h1>
      <h2>
      I am Saksham
      </h2>
   </div>
</div>
 */

// const parent = React.createElement("div",{id:"parent"},
// [
//     React.createElement("div",{id:"child-1"},
//      [React.createElement("h1",{}, "I am Gulafshan") , React.createElement("h2",{}, "I am Saksham")]
//    ),
//    React.createElement("div",{id:"child-2"},
//      [React.createElement("h1",{}, "I am Gulafshan") , React.createElement("h2",{}, "I am Saksham")]
//    )
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root",root);
// root.render(parent);

/* jsx is nothing but a html code */
// const jsxHeading = <h1 className="heading" id="heading" >This is jsx</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);



/* function component */

const Header = ()=>{
   return(
      <div className="headercontainer">
         <div className="logo">
            <img className="header-logo" src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"/>
         </div>
         <div className="nav-container">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>

      </div>
      
   );

}

const restutant =
[
   {
     "info": {
       "id": "38925",
       "name": "Domino's Pizza",
       "cloudinaryImageId": "mdl4tnyc8wbvysqxzhnq",
       "locality": "Netaji Subhash Marg",
       "areaName": "Daryaganj",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Pizzas",
         "Italian",
         "Pastas",
         "Desserts"
       ],
       "avgRating": 4.3,
       "parentId": "2456",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 25,
         "serviceability": "SERVICEABLE",
         "slaString": "25 mins",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 01:55:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹150 OFF",
         "subHeader": "ABOVE ₹299",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "128116",
       "name": "La Pino'z Pizza",
       "cloudinaryImageId": "hgvtyqrxzvpwmbs361er",
       "locality": "Kamla Nagar",
       "areaName": "Kamla Nagar",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Pizzas",
         "Pastas",
         "Italian",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4.1,
       "parentId": "4961",
       "avgRatingString": "4.1",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "30 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 03:45:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-kamla-nagar-delhi-128116",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "47853",
       "name": "The Burger Club",
       "cloudinaryImageId": "x7bcibhxfnrupph6bcft",
       "locality": "Karol Bagh",
       "areaName": "Karol Bagh",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "American",
         "Beverages",
         "Desserts"
       ],
       "avgRating": 4.1,
       "parentId": "2285",
       "avgRatingString": "4.1",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 7.8,
         "serviceability": "SERVICEABLE",
         "slaString": "28 mins",
         "lastMileTravelString": "7.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 04:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/the-burger-club-karol-bagh-delhi-47853",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "68582",
       "name": "Baskin Robbins - Ice Cream Desserts",
       "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
       "locality": "Shankar Road",
       "areaName": "Rajinder Nagar",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Ice Cream"
       ],
       "avgRating": 4.5,
       "veg": true,
       "parentId": "5588",
       "avgRatingString": "4.5",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 26,
         "lastMileTravel": 7.2,
         "serviceability": "SERVICEABLE",
         "slaString": "26 mins",
         "lastMileTravelString": "7.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 05:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-shankar-road-rajinder-nagar-delhi-68582",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "32127",
       "name": "Burger King",
       "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
       "locality": "Karol Bagh",
       "areaName": "Karol Bagh",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Burgers",
         "American"
       ],
       "avgRating": 4.3,
       "parentId": "166",
       "avgRatingString": "4.3",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 5.8,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "5.8 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 03:45:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/burger-king-karol-bagh-delhi-32127",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "185160",
       "name": "KFC",
       "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
       "locality": "Desh Bandhu Gupta Road",
       "areaName": "Paharganj",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "Burgers",
         "Biryani",
         "American",
         "Snacks",
         "Fast Food"
       ],
       "avgRating": 4,
       "parentId": "547",
       "avgRatingString": "4.0",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 22,
         "lastMileTravel": 3.7,
         "serviceability": "SERVICEABLE",
         "slaString": "22 mins",
         "lastMileTravelString": "3.7 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 05:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/kfc-desh-bandhu-gupta-road-paharganj-delhi-185160",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "435678",
       "name": "Pizza Hut",
       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
       "locality": "Western Extension Area",
       "areaName": "Karol Bagh",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Pizzas"
       ],
       "avgRating": 4,
       "parentId": "721",
       "avgRatingString": "4.0",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 32,
         "lastMileTravel": 5.9,
         "serviceability": "SERVICEABLE",
         "slaString": "32 mins",
         "lastMileTravelString": "5.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 04:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹179"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/pizza-hut-western-extension-area-karol-bagh-delhi-435678",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "253734",
       "name": "McDonald's",
       "cloudinaryImageId": "535fc9f9c135f7982317bbb6a64a1ffc",
       "locality": "E Block",
       "areaName": "South Extension 2",
       "costForTwo": "₹400 for two",
       "cuisines": [
         "American"
       ],
       "avgRating": 4.4,
       "parentId": "630",
       "avgRatingString": "4.4",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 12.3,
         "serviceability": "SERVICEABLE",
         "slaString": "34 mins",
         "lastMileTravelString": "12.3 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 03:45:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "30% OFF",
         "subHeader": "UPTO ₹75"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/mcdonalds-e-block-south-extension-2-delhi-253734",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "76225",
       "name": "Subway",
       "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
       "locality": "Malka Ganj Road",
       "areaName": "Kamla Nagar",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Salads",
         "Snacks",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4,
       "parentId": "2",
       "avgRatingString": "4.0",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 23,
         "lastMileTravel": 5,
         "serviceability": "SERVICEABLE",
         "slaString": "23 mins",
         "lastMileTravelString": "5.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 03:45:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/subway-malka-ganj-road-kamla-nagar-delhi-76225",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "348147",
       "name": "Tibb's Frankie - Serving Rolls Since 1969",
       "cloudinaryImageId": "z2t92bttwsgx3aiatuui",
       "locality": "2nd Phase",
       "areaName": "Model Town 2",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Rolls & Wraps",
         "Fast Food"
       ],
       "avgRating": 4.1,
       "parentId": "472083",
       "avgRatingString": "4.1",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 9.1,
         "serviceability": "SERVICEABLE",
         "slaString": "31 mins",
         "lastMileTravelString": "9.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 06:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/tibbs-frankie-serving-rolls-since-1969-2nd-phase-model-town-2-delhi-348147",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "589248",
       "name": "Nomad Pizza - Deep Dish Summer Series",
       "cloudinaryImageId": "82294f129e75eac74f6e6a642cd58c06",
       "locality": "GT Karnal Road",
       "areaName": "Model Town 3",
       "costForTwo": "₹850 for two",
       "cuisines": [
         "Pizzas",
         "Fast Food",
         "Desserts",
         "Beverages"
       ],
       "avgRating": 4,
       "parentId": "501413",
       "avgRatingString": "4.0",
       "totalRatingsString": "100+",
       "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 8.2,
         "serviceability": "SERVICEABLE",
         "slaString": "34 mins",
         "lastMileTravelString": "8.2 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 04:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/nomad-pizza-deep-dish-summer-series-gt-karnal-road-model-town-3-delhi-589248",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "22702",
       "name": "Berco's -If You Love Chinese",
       "cloudinaryImageId": "3344b8e498281fdcd461dc1b5f3b44d5",
       "locality": "East Patel Nagar",
       "areaName": "East Patel Nagar",
       "costForTwo": "₹600 for two",
       "cuisines": [
         "Chinese",
         "Thai",
         "Asian"
       ],
       "avgRating": 4.2,
       "parentId": "471817",
       "avgRatingString": "4.2",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 8.1,
         "serviceability": "SERVICEABLE",
         "slaString": "34 mins",
         "lastMileTravelString": "8.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 04:00:00",
         "opened": true
       },
       "badges": {
         "imageBadges": [
           {
             "imageId": "newg.png",
             "description": "Gourmet"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "Gourmet",
                   "imageId": "newg.png"
                 }
               }
             ]
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "30% OFF",
         "subHeader": "UPTO ₹75"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/bercos-if-you-love-chinese-east-patel-nagar-delhi-22702",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "396100",
       "name": "NOTO - Ice Creams & Desserts",
       "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
       "locality": "Tagore Park",
       "areaName": "Model Town 1",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Ice Cream"
       ],
       "avgRating": 4.5,
       "veg": true,
       "parentId": "468478",
       "avgRatingString": "4.5",
       "totalRatingsString": "500+",
       "sla": {
         "deliveryTime": 26,
         "lastMileTravel": 8.4,
         "serviceability": "SERVICEABLE",
         "slaString": "26 mins",
         "lastMileTravelString": "8.4 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 02:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "brand",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "brand"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-tagore-park-model-town-1-delhi-396100",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "206300",
       "name": "Burgrill - The Win Win Burger",
       "cloudinaryImageId": "f596863116da4b4688b48e813e25000d",
       "areaName": "Hudson Lane",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Burgers",
         "Healthy Food",
         "American",
         "Salads",
         "Beverages",
         "Desserts",
         "Snacks"
       ],
       "avgRating": 4.2,
       "parentId": "302366",
       "avgRatingString": "4.2",
       "totalRatingsString": "5K+",
       "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 7.6,
         "serviceability": "SERVICEABLE",
         "slaString": "30 mins",
         "lastMileTravelString": "7.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 05:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-hudson-lane-delhi-206300",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "387312",
       "name": "Wat-A-Burger! - India Ka Burger",
       "cloudinaryImageId": "bngnkrkz1rxbifxpesfd",
       "locality": "Krishna Nagar",
       "areaName": "Krishna Nagar",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Burgers",
         "Fast Food",
         "Continental",
         "American",
         "Beverages",
         "Desserts"
       ],
       "avgRating": 3.8,
       "parentId": "471020",
       "avgRatingString": "3.8",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 24,
         "lastMileTravel": 6.3,
         "serviceability": "SERVICEABLE",
         "slaString": "24 mins",
         "lastMileTravelString": "6.3 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 04:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/wat-a-burger-india-ka-burger-krishna-nagar-delhi-387312",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "336330",
       "name": "House of Chow",
       "cloudinaryImageId": "6e97ac8f5c89213610309ef1940afa05",
       "locality": "East Patel Nagar",
       "areaName": "Karol Bagh",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Pan-Asian",
         "Chinese",
         "Thai",
         "Oriental"
       ],
       "avgRating": 4.1,
       "parentId": "9064",
       "avgRatingString": "4.1",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 33,
         "lastMileTravel": 8.1,
         "serviceability": "SERVICEABLE",
         "slaString": "33 mins",
         "lastMileTravelString": "8.1 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 04:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/house-of-chow-east-patel-nagar-karol-bagh-delhi-336330",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "370153",
       "name": "Falhari - A Fruitful Habit",
       "cloudinaryImageId": "jom4nthurqv5zdbunsfw",
       "locality": "Mahendru Enclave",
       "areaName": "Model Town 2",
       "costForTwo": "₹250 for two",
       "cuisines": [
         "Healthy Food",
         "Salads",
         "Juices"
       ],
       "avgRating": 4.1,
       "veg": true,
       "parentId": "13818",
       "avgRatingString": "4.1",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 33,
         "lastMileTravel": 8.4,
         "serviceability": "SERVICEABLE",
         "slaString": "33 mins",
         "lastMileTravelString": "8.4 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 03:00:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "brand",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "brand"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/falhari-a-fruitful-habit-mahendru-enclave-model-town-2-delhi-370153",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "328663",
       "name": "Barista Coffee",
       "cloudinaryImageId": "b64bf721e12e7b3df82c832898999c51",
       "locality": "IP Extension",
       "areaName": "Patparganj",
       "costForTwo": "₹350 for two",
       "cuisines": [
         "Beverages",
         "Snacks"
       ],
       "avgRating": 3.9,
       "parentId": "2359",
       "avgRatingString": "3.9",
       "totalRatingsString": "500+",
       "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 9.9,
         "serviceability": "SERVICEABLE",
         "slaString": "30 mins",
         "lastMileTravelString": "9.9 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 04:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/barista-coffee-ip-extension-patparganj-delhi-328663",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "85711",
       "name": "Nirula's",
       "cloudinaryImageId": "a66fa8f5befa65947d9e20f29a863ce0",
       "locality": "Connaught Place",
       "areaName": "Connaught Place",
       "costForTwo": "₹500 for two",
       "cuisines": [
         "Ice Cream",
         "Pizzas",
         "Fast Food"
       ],
       "avgRating": 4.3,
       "parentId": "1738",
       "avgRatingString": "4.3",
       "totalRatingsString": "1K+",
       "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 4.6,
         "serviceability": "SERVICEABLE",
         "slaString": "19 mins",
         "lastMileTravelString": "4.6 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 02:45:00",
         "opened": true
       },
       "badges": {
         "textExtendedBadges": [
           {
             "iconId": "guiltfree/GF_Logo_android_3x",
             "shortDescription": "options available",
             "fontColor": "#7E808C"
           }
         ]
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             "badgeObject": [
               {
                 "attributes": {
                   "description": "",
                   "fontColor": "#7E808C",
                   "iconId": "guiltfree/GF_Logo_android_3x",
                   "shortDescription": "options available"
                 }
               }
             ]
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "20% OFF",
         "subHeader": "UPTO ₹50"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/nirulas-connaught-place-delhi-85711",
       "type": "WEBLINK"
     }
   },
   {
     "info": {
       "id": "44217",
       "name": "Giani",
       "cloudinaryImageId": "b9f3278aa437785772e368cfe584b342",
       "areaName": "Model town 2",
       "costForTwo": "₹200 for two",
       "cuisines": [
         "Ice Cream"
       ],
       "avgRating": 4.4,
       "veg": true,
       "parentId": "415",
       "avgRatingString": "4.4",
       "totalRatingsString": "10K+",
       "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 9,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "9.0 km",
         "iconType": "ICON_TYPE_EMPTY"
       },
       "availability": {
         "nextCloseTime": "2024-03-18 03:00:00",
         "opened": true
       },
       "badges": {
         
       },
       "isOpen": true,
       "type": "F",
       "badgesV2": {
         "entityBadges": {
           "imageBased": {
             
           },
           "textBased": {
             
           },
           "textExtendedBadges": {
             
           }
         }
       },
       "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "UPTO ₹40"
       },
       "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
           "lottie": {
             
           },
           "video": {
             
           }
         }
       },
       "reviewsSummary": {
         
       },
       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
       "restaurantOfferPresentationInfo": {
         
       }
     },
     "analytics": {
       
     },
     "cta": {
       "link": "https://www.swiggy.com/restaurants/giani-model-town-2-delhi-44217",
       "type": "WEBLINK"
     }
   }
 ]



const Card =(props)=>{
   const{resdata} = props
   const {name,costForTwo,avgRatingString,cuisines} = resdata?.info
   return(
      <div className="card-container">
         <img className="telogy-logo" 
         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+ resdata.info.cloudinaryImageId}/>
         <h3>{name}</h3>
         <h3>{costForTwo}</h3>
         <h3>{avgRatingString}</h3>
         <h3>{resdata.info.sla.deliveryTime}</h3>
         <h4>{cuisines.join(" , ")}</h4>
      </div>
   )

}

const Body = ()=>{
   return(
      <div className="body-container">
         <div className="search">
            Search
         </div>
         <div className="res-card">
         {/* <Card resdata={restutant[0]}/>
         <Card resdata={restutant[1]}/>
         <Card resdata={restutant[2]}/>
         <Card resdata={restutant[3]}/>
         <Card resdata={restutant[4]}/>
         <Card resdata={restutant[5]}/>
         <Card resdata={restutant[6]}/>
         <Card resdata={restutant[7]}/>
         <Card resdata={restutant[8]}/>
         <Card resdata={restutant[9]}/>
         <Card resdata={restutant[10]}/> */}
         {
            restutant.map((reslist)=> <Card key={reslist.info.id} resdata = {reslist}/>)
         }

         </div>
      </div>
   );
}
const AppComponent =()=>{
   return(
      <div className="app">
         <Header/>
         <Body/>

      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppComponent />);