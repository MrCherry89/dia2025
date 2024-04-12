"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const list = [
    {
      id: 0,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
    {
      id: 1,
      title: "DUBAI SOUTH",
      text: "The area is located next to Al Maktoum International Airport. Diverse residential buildings are adjacent to the office buildings of logistics companies.",
    },
    {
      id: 2,

      title: "DUBAI INDUSTRIAL CITY",
      text: "The area where the manufacturing enterprises of the city are concentrated. Most of the buildings in the district are occupied by office space.",
    },
    {
      id: 3,
      title: "JEBEL ALI FREE ZONE",
      text: "The most important business and logistics hub in the region: offices of almost 9,000 companies and Al Maktoum International Airport are located here.",
    },
    {
      id: 4,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
    {
      id: 5,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
    {
      id: 6,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
    {
      id: 7,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
    {
      id: 8,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
    {
      id: 9,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
    {
      id: 10,
      title: "AL MAKTOUM",
      text: "The area with DWC International Airport, it is a major hub for cargo and commercial transportation.",
    },
  ];

  const mapTitle = document.getElementById("map-title");
  const mapDescr = document.getElementById("map-text");
  const map = document.getElementById("map-picture");

  function showNumbers() {
    const path = map.querySelectorAll("path");
    path.forEach((item) => {
      if (item.classList.contains("target")) {
        console.dir(item);
        item.textContent = `${item.dataset.id}`;
      }
    });
  }
  showNumbers();
  function hoverHandle(e) {
    const path = map.querySelectorAll("path");

    const target = e.target;
    if (target && target.classList.contains("target")) {
      path.forEach((item) => {
        item.classList.remove("active");
      });
      target.classList.add("active");

      let { id, title, text } = list[target.dataset.id];

      mapTitle.textContent = title;
      mapDescr.textContent = text;
    }
  }
  map.addEventListener("mouseover", hoverHandle);
  // map.addEventListener('click', hoverHandle);
});
