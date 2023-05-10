
import dashboard from "../images/dashboard.png";
// import dashboard from "../assets/dash.jpg"
import memoryimg from "../images/memory.png";

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";

import place1 from "../images/goa.webp";
import place2 from "../images/maclodganj.jpg";
import place3 from "../images/srinagar.jpg";
import place4 from "../images/andaman.jpg";
import place5 from "../images/leh-ladakh.jpeg";
import place6 from "../images/binsar.jpg";
import place7 from "../images/coorg.jpg";
import place8 from "../images/kerla.jpg";
import place9 from "../images/kanatal.jpg";
import place10 from "../images/shimla.jpg";
import place11 from "../images/manali.jpeg";
import place12 from "../images/meghalay.webp";

import standardicon from "../images/standardicon.png";
import preminumicon from "../images/preminum.png";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';

import banner from '../images/banner.webp';

export const brands = [
    { iconSrc: brand1 },
    { iconSrc: brand2 },
    { iconSrc: brand3 },
    { iconSrc: brand4 },
    { iconSrc: brand5 },
];

export const navlinks = [
    { link: "Home", id: "home" },
    { link: "About", id: "about" },
    { link: "Explore", id: "explore" },
    { link: "Pricing", id: "pricing" },
    { link: "Contact", id: "contact" },
];

export const hero = {
    "title": "Its a Gig World Out",
    "subtitle": "Then, Go Explore",
    "text": "We provide you always your dream places. We always make our customer happy by proving many choices.",
    "btn1": "Get Started",
    "btn2": "Get Demo",
    "img": dashboard,
};

export const memory = {
    "title": "Sweet Memories",
    "subtitle": "Come To Life Again",
    "text": "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
    "img": memoryimg,
    "experience": [
        { "number": "10", "title": "Year Experience" },
        { "number": "400", "title": "Year Collaboration" },
        { "number": "30k+", "title": "Happy Customer" },
    ],
};

export const placesAPI = [
    { "placeImg": place1, "location": "Goa", "distance": "3.0 hour dirve" },
    { "placeImg": place2, "location": "Mcleodganj", "distance": "2.5 hour dirve" },
    { "placeImg": place3, "location": "Srinagar", "distance": "4.7 hour drive" },
    { "placeImg": place4, "location": "Andaman", "distance": "4 hour drive" },
    { "placeImg": place5, "location": "Leh-Ladakh", "distance": "4.9 hour drive" },
    { "placeImg": place6, "location": "Binsar", "distance": "4.5 hour drive" },
    { "placeImg": place7, "location": "Coorg", "distance": "5.5 hour drive" },
    { "placeImg": place8, "location": "Kerala", "distance": "5.1 hour drive" },
    { "placeImg": place9, "location": "Kanatal", "distance": "5.1 hour drive" },
    { "placeImg": place10, "location": "Shimla", "distance": "5.1 hour drive" },
    { "placeImg": place11, "location": "Manali", "distance": "9.0 hour drive" },
    { "placeImg": place12, "location": "Meghalay", "distance": "11.0 hour drive" },
];

export const pricingapi = {
    "title": "Choose The Plan That Suits You",
    "text": "Many attractive offers by becomming a premium member",
    "btn1": "Monthly",
    "btn2": "Yearly",
    "plans": [
        {
            "planicon": standardicon,
            "title": "Standard Membership",
            "text": "Suitable for all users",
            "plantype": "Free / Year",
            "plancontent": [
                { "iconbox": checkbox, "text": "Find Popular Destination" },
                { "iconbox": checkbox, "text": "Priority Booking Schedule" },
                { "iconbox": checkbox, "text": "Daily Destination News" },
                { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
                { "iconbox": uncheckbox, "text": "Limited Travel Stats" },
                { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
                { "iconbox": uncheckbox, "text": "No Ads & Tax" },
            ],
            "buttonText": "Get Free",
        },
        {
            "planicon": preminumicon,
            "title": "Preminum Membership",
            "text": "Suitable for enthusiast travelers",
            "plantype": "$60 / Year",
            "plancontent": [
                { "iconbox": checkbox, "text": "Find Popular Destination" },
                { "iconbox": checkbox, "text": "Priority Booking Schedule" },
                { "iconbox": checkbox, "text": "Daily Destination News" },
                { "iconbox": checkbox, "text": "Invite Friends Feature" },
                { "iconbox": checkbox, "text": "Advanced Travel Stats" },
                { "iconbox": checkbox, "text": "Invite Friends Feature" },
                { "iconbox": checkbox, "text": "No Ads & Tax" },
            ],
            "buttonText": "Get Started",
        },
    ],
};

export const bannerAPI = {
    "title": "The Greet Outdoors",
    "text": "Whislist Curated By Travigo.",
    "imgSrc": banner,
    "btnText": "Explore More"
}

export const footerAPI = {
    "titles": [{ "title": "About" }, { "title": "Company" }, { "title": "Support" }],
    "links": [
        [
            { "link": "About US" },
            { "link": "Features" },
            { "link": "News" },
            { "link": "Menu" },
        ],
        [
            { "link": "Why Travigo?" },
            { "link": "Partner with Us" },
            { "link": "FAQ" },
            { "link": "Blog" },
        ],
        [
            { "link": "Account" },
            { "link": "Support Center" },
            { "link": "Feedback" },
            { "link": "Contact Us" },
            { "link": "Accesbility" },
        ],
    ],
    "sociallinks": [
        { "icon": facebook }, { "icon": instagram }, { "icon": twitter }, { "icon": youtube },
    ]
};