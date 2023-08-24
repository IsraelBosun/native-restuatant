import burgerLogo from "../assets/imagess/burger-logo.png"
import burger from "../assets/imagess/burger.png"
import domino from "../assets/imagess/domino.png"
import pizza from "../assets/imagess/pizza.png"

import chickenRice from "../assets/imagess/chicken-rice.png"
import chickenSauce from "../assets/imagess/chicken-sauce.png"
import chickenKatsu from "../assets/imagess/chicken-katsu.png"


import zaman from "../assets/imagess/zaman.png"
import tava from "../assets/imagess/tava.png"
import tavaL from "../assets/imagess/tava-large.png"

// import tava from "../assets/imagess/"






const data = [
    {
        id: 1,
        logo: burgerLogo,
        title: "Flash Offer",
        subtitle: "We are here with the best deserts in town",
        food: burger
    },
    {
        id: 2,
        logo: domino,
        title: "New Arrivals",
        subtitle: "We are here with the best deserts in town",
        food: pizza
    }
]

export const arrivable = [
    {
        id: 1,
        image: chickenRice,
        food: "Chicken Biryani",
        location: "Ambrosia Hotel & \n Restaurant"
    },
    {
        id: 2,
        image: chickenSauce,
        food: "Sauce Tonkatsu",
        location: "Handi Restuatant, \n Chittagong"
    },
    {
        id: 3,
        image: chickenKatsu,
        food: "Chicken Katsu",
        location: "Ambrosia Hotel & \n Restaurant"
    }
]

export const explore = [
    {
        id: 1,
        image: zaman,
        name: "Ambosia Hotel & Restaurant",
        address: "Kazi Dery, Taiger        \nPass Chittagong",
        large: tavaL
    },
    {
        id: 2,
        image: tava,
        name: "Tava Restuarant",
        address: "Zair Hassan Rd,         \nChittagong",
        large: tavaL
    },
    {
        id: 3,
        image: zaman,
        name: "Haatkhola",
        address: "6 Sursoon Road,        \nChittagong",
        large: tavaL
    }
]

