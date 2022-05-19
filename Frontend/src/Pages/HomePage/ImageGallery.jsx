import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageGallery() {
  return (
      <ImageList
          className="mx-auto"
      sx={{ width: 1300, height: 600 }}
      variant="quilted"
      cols={4}
      rowHeight={195}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2022/01/moonhoneytravel_Dolomites_Italy.jpg",
    title: "Dolomites",
    // rows: 2,
    // cols: 2,
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2020/12/moonhoneytravel_hiking-blog_hut-to-hut-hikes.jpg",
    title: "Carvoeiro",
    // cols: 2,
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2019/04/moonhoneytravel_hiking-blog_Julian-Alps-Hikes.jpg",
    title: "Snow H",
    // rows: 1,
    // cols: 1,
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2022/01/moonhoneytravel_Tenerife-Hiking-1-1.jpg",
    title: "Oscar",
  },

  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2022/01/moonhoneytravel_Slovenian-Alps.jpg",
    title: "Amuko",
    // rows: 2,
    // cols: 1,
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2022/01/moonhoneytravel_Italian-Alps.jpg",
    title: "Brad",
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2020/08/moonhoneytravel_High-Tatras_Slovakia-Hiking.jpg",
    title: "Lucky Charm",
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2022/01/moonhoneytravel_Austrian-Alps.jpg",
    title: "Tamadite",
    // rows: 2,
    // cols: 1,
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2021/07/moonhoneytravel_Portugal-Hiking.jpg",
    title: "Fig",
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2019/04/moonhoneytravel_trekking-blog_montenegro-hikes.jpg",
    title: "Spotty",
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2020/12/moonhoneytravel_hiking-blog_coastal-hikes.jpg",
    title: "Rajah",
  },
  {
    img: "https://www.moonhoneytravel.com/wp-content/uploads/2020/12/moonhoneytravel_hiking-blog_via-ferrata-hikes.jpg",
    title: "Little Zebra",
    // rows: 1,
    // cols: 2,
  },
];
