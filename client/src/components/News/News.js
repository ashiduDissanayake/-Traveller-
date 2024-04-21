import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import { useValue } from "../../context/ContextProvider";
import { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
import a1 from "./news1.jpg";
import a2 from "./news2.jpg";
import a3 from "./news3.jpg";
import a4 from "./news4.jpg";
import a5 from "./news5.jpg";
import a6 from "./news6.jpg";
import a7 from "./news7.jpg";
import a8 from "./news8.jpg";
import a9 from "./news9.jpg";
import a10 from "./news10.jpg";
import a11 from "./news11.jpg";
import a12 from "./news12.jpg";
import a13 from "./news13.jpg";
import a14 from "./news14.jpg";
import a15 from "./news15.jpg";


const Clustermap = ({ setMobileOpen }) => {
  const [news, setNews] = useState([]);
  const [location, setLocation] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=bd480279a0ce4d67840b725a164bf127`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const newsPosts = [
    {
      id: 2,
      title: "Ella's Iconic Nine Arches Bridge to Undergo Restoration",
      description:
        "The picturesque Nine Arches Bridge in Ella, a beloved attraction among tourists, is set to undergo extensive restoration to preserve its historical charm. Dating back to the colonial era, the bridge has become a symbol of Ella's allure, attracting visitors from around the globe. The restoration project aims to enhance both its structural integrity and aesthetic appeal, ensuring that future generations can continue to admire its beauty.",
      location: "Ella",
      date: "April 20, 2024",
      image: a1,
      url: "#",
    },
    {
      id: 2,
      title: "New Eco-Friendly Accommodation Options in Ella",
      description:
        "Eco-conscious travelers rejoice as Ella introduces a range of sustainable accommodation options amidst its breathtaking landscapes. From eco-lodges nestled in lush tea plantations to cozy homestays operated by local families, visitors can now immerse themselves in the natural beauty of Ella while minimizing their environmental footprint. These initiatives align with Ella's commitment to responsible tourism, offering travelers a chance to connect with nature without compromising on comfort.",
      location: "Ella",
      date: "March 13, 2024",
      image: a2,
      url: "#",
    },
    {
      id: 2,
      title: "Culinary Delights Await in Ella's Food Festival",
      description:
        " Food enthusiasts flock to Ella as it hosts its annual food festival, celebrating the region's diverse culinary traditions. From spicy Sri Lankan curries to fusion dishes inspired by international cuisines, the festival showcases the rich flavors of Ella's gastronomic scene. Visitors can indulge in tantalizing street food, participate in cooking workshops, and savor farm-to-table dining experiences amidst the verdant landscapes of this charming hill town. Whether you're a seasoned foodie or simply curious about Ella's culinary heritage, the food festival promises a feast for the senses.",
      location: "Ella",
      date: "February 12, 2024",
      image: a3,
      url: "#",
    },
    {
        id: 2,
        title: "Sigiriya Rock Fortress Named UNESCO World Heritage Site of Outstanding Universal Value",
        description:
          "Sigiriya, often hailed as the eighth wonder of the world, receives global recognition as it is designated a UNESCO World Heritage Site of Outstanding Universal Value. Perched atop a massive rock plateau, the ancient fortress boasts unparalleled architectural and engineering marvels, dating back to the 5th century AD. This prestigious accolade not only solidifies Sigiriya's status as a cultural treasure but also underscores its significance in world history. Tourists are encouraged to explore this remarkable site, marvel at its frescoes and gardens, and immerse themselves in the rich tapestry of Sri Lanka's heritage.",
        location: "Sigiriya",
        date: "April 08, 2024",
        image: a4,
        url: "#",
      },
      {
        id: 2,
        title: "New Interpretive Center Enhances Visitor Experience at Sigiriya",
        description:
          "Enhancing the visitor experience, Sigiriya unveils its state-of-the-art interpretive center, offering immersive insights into the history and significance of the ancient rock fortress. Equipped with interactive exhibits, multimedia installations, and informative displays, the center serves as a gateway to understanding Sigiriya's cultural and architectural legacy. Visitors can delve into the stories of ancient kings, unravel the mysteries of Sigiriya's frescoes, and appreciate the ingenuity behind its ingenious water gardens. Whether you're a history enthusiast or a casual traveler, the interpretive center promises to enrich your journey to this UNESCO World Heritage Site.",
        location: "Sigiriya",
        date: "December 21, 2023",
        image: a5,
        url: "#",
      },
      {
        id: 2,
        title: "Hikkaduwa Beach Awarded Blue Flag Status for Environmental Excellence",
        description:
          "Hikkaduwa Beach receives international acclaim as it is awarded Blue Flag status, a prestigious certification recognizing its commitment to environmental sustainability and water quality standards. Renowned for its pristine shores and vibrant marine life, Hikkaduwa has long been a favorite destination among beachgoers and snorkeling enthusiasts. The Blue Flag designation reaffirms Hikkaduwa's dedication to preserving its natural beauty and ecosystem, ensuring that future generations can continue to enjoy its splendor.",
        location: "Hikkaduwa",
        date: "April 19, 2024",
        image: a6,
        url: "#",
      },
      {
      id: 2,
      title: "Surfing Extravaganza: Hikkaduwa Hosts International Surfing Competition",
      description:
        "Surf's up in Hikkaduwa as it plays host to an exhilarating international surfing competition, drawing professional surfers and spectators from around the world. With its consistent waves and laid-back atmosphere, Hikkaduwa offers the perfect backdrop for adrenaline-fueled contests and beachside festivities. Surfers of all skill levels can test their mettle on the waves while soaking in the vibrant surf culture that permeates this coastal paradise. Whether you're a seasoned pro or a curious spectator, the Hikkaduwa surfing competition promises an unforgettable experience.",
      location: "Hikkaduwa",
      date: "March 28, 2024",
      image: a7,
      url: "#",
    },
    {
      id: 2,
      title: "Culinary Fusion: Hikkaduwa's Food Street Unveils Global Flavors",
      description:
        "Hikkaduwa's culinary scene takes center stage as its bustling Food Street unveils a tantalizing array of global flavors, reflecting the town's diverse cultural influences. From traditional Sri Lankan delicacies to international fusion dishes, foodies can embark on a gastronomic journey like no other. Sample mouthwatering seafood freshly caught from the Indian Ocean, savor aromatic spices in authentic curries, or indulge in innovative street food creations that blend local ingredients with global culinary trends. With its vibrant ambiance and eclectic dining options, Hikkaduwa's Food Street is a culinary haven for travelers seeking to tantalize their taste buds.",
      location: "Hikkaduwa",
      date: "February 21, 2024",
      image: a8,
      url: "#",
    },
    {
        id: 2,
        title: "Yala National Park Introduces Sustainable Safari Initiatives",
        description:
          "Yala National Park, renowned for its diverse wildlife and stunning landscapes, unveils a series of sustainable safari initiatives aimed at preserving its natural ecosystem while offering visitors unforgettable wildlife experiences. From eco-friendly safari vehicles to guided tours led by knowledgeable naturalists, these initiatives prioritize wildlife conservation and responsible tourism practices. Travelers can embark on safari adventures knowing that their visit contributes to the protection of Yala's precious flora and fauna, ensuring that future generations can continue to marvel at its beauty.",
        location: "Yala National Park",
        date: "April 21, 2024",
        image: a9,
        url: "#",
      },
      {
        id: 2,
        title: "Rare Leopard Sighting Thrills Visitors at Yala National Park",
        description:
          "Excitement abounds at Yala National Park as visitors are treated to a rare sighting of the elusive Sri Lankan leopard, one of the park's most iconic inhabitants. With its dense jungle and expansive grasslands, Yala provides an ideal habitat for these majestic big cats, offering wildlife enthusiasts a chance to witness them in their natural environment. The recent sighting underscores Yala's reputation as one of the best places in the world for leopard sightings, drawing nature lovers and photographers from far and wide. As conservation efforts continue to protect Yala's biodiversity, each leopard sighting serves as a reminder of the park's importance in safeguarding Sri Lanka's natural heritage.",
        location: "Yala National Park",
        date: "April 03, 2024",
        image: a10,
        url: "#",
      },
      {
        id: 2,
        title: "Polonnaruwa Implements Heritage Conservation Projects to Preserve Ancient Ruins",
        description:
          "Polonnaruwa, a UNESCO World Heritage Site renowned for its ancient ruins and archaeological treasures, announces new conservation projects aimed at preserving its cultural heritage for future generations. From restoration efforts on iconic structures like the Gal Vihara to the implementation of advanced monitoring systems to prevent deterioration, these initiatives signify Polonnaruwa's commitment to safeguarding its rich history. As visitors explore the ancient city's sprawling complexes and intricately carved monuments, they can take comfort in knowing that their experiences are supported by ongoing efforts to protect Polonnaruwa's architectural wonders.",
        location: "Polonnaruwa",
        date: "April 20, 2024",
        image: a11,
        url: "#",
      },
      {
        id: 2,
        title: "Polonnaruwa Heritage Trail Unveils Interactive Visitor Experience",
        description:
          "Embarking on a journey through time, Polonnaruwa introduces an innovative Heritage Trail that offers visitors an interactive and immersive experience of its ancient wonders. Through augmented reality guides, multimedia exhibits, and informative signage, travelers can delve into the vibrant history of the ancient city, from its royal palaces to its sacred temples. The Heritage Trail encourages visitors to explore Polonnaruwa at their own pace, uncovering hidden treasures and unraveling the mysteries of this UNESCO World Heritage Site. Whether wandering through ancient ruins or marveling at exquisite sculptures, the Heritage Trail promises an enriching journey through Polonnaruwa's storied past.",
        location: "Polonnaruwa",
        date: "April 16, 2024",
        image: a12,
        url: "#",
      },
      {
        id: 2,
        title: "Nuwara Eliya's Tea Estates Open Doors to Tea Tourism",
        description:
          "Delving into the heart of Sri Lanka's tea country, Nuwara Eliya's famed tea estates invite tourists to experience the art of tea production firsthand. Visitors can now embark on guided tours of sprawling tea plantations, learning about the intricacies of tea cultivation and processing from knowledgeable plantation guides. From plucking tea leaves in the verdant fields to sampling freshly brewed cups of Ceylon tea, the tea tourism experience in Nuwara Eliya offers a captivating blend of natural beauty and cultural immersion.",
        location: "NuwaraEliya",
        date: "April 20, 2024",
        image: a13,
        url: "#",
      },
      {
        id: 2,
        title: "Nuwara Eliya Hosts Annual Flower Festival in Blooming Splendor",
        description:
          "Bursting with vibrant colors and fragrant blooms, Nuwara Eliya's Annual Flower Festival captivates visitors with its enchanting floral displays and horticultural marvels. Set against the backdrop of misty hills and emerald tea estates, the festival showcases a dazzling array of flowers, including rare orchids, exotic roses, and indigenous blooms unique to the region. From ornate flower arrangements to breathtaking garden landscapes, the Flower Festival transforms Nuwara Eliya into a floral paradise, drawing nature enthusiasts and garden lovers from near and far.",
        location: "NuwaraEliya",
        date: "April 13, 2024",
        image: a14,
        url: "#",
      },
      {
        id: 2,
        title: "Adventure Awaits: Dunhinda Falls Launches Thrilling Canopy Walk Experience",
        description:
          "Elevating the visitor experience to new heights, Dunhinda Falls introduces an exhilarating canopy walk experience that allows adventurers to traverse the rainforest canopy and witness breathtaking views of the cascading waterfall from above. Suspended among the treetops on sturdy walkways and platforms, thrill-seekers can immerse themselves in the pristine beauty of the surrounding wilderness while marveling at the sheer power and grandeur of Dunhinda Falls. Guided by experienced naturalists, the canopy walk offers a unique perspective on the ecological diversity of the area, making it a must-visit destination for nature lovers and adventure enthusiasts alike.",
        location: "Dunhinda Falls",
        date: "April 13, 2024",
        image: a15,
        url: "#",
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = newsPosts.filter(
      (post) => post.location.toLowerCase() === location.toLowerCase()
    );
    setFilteredPosts(filtered);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const drawerWidth = 200;

  const {
    state: { mobileOpen },
  } = useValue();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "green",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div className="center">
              <h6>
                <a
                  href="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Traveller
                </a>{" "}
                &gt; <em>News</em>
              </h6>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="content-container">
        {isLargeScreen && <div className="drawer-spacer"></div>}
        <main className="content">
          <Toolbar />
          <div className="news-container">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={handleLocationChange}
              />
              <button type="submit">Search</button>
            </form>
            <div className="news-list">
              {filteredPosts.length > 0
                ? filteredPosts.map((post) => (
                    <div key={post.id} className="news-item">
                      <img src={post.image} alt={post.title} width="250px"/>
                      <div className="news-content">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>
                          <strong>Location:</strong> {post.location}
                        </p>
                        <p>
                          <strong>Date:</strong> {post.date}
                        </p>
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  ))
                : news.map((article) => (
                    <div key={article.id} className="news-item">
                      <img src={article.urlToImage} alt={article.title} />
                      <div className="news-content">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <p>
                          <strong>Source:</strong> {article.source.name}
                        </p>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Clustermap;
