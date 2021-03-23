const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

// Your code below

const wereWatched = tvShows.filter((tvShow) => {
  return tvShow.watched === true;
});

console.log(wereWatched);

const greaterOrEqual9 = tvShows.filter((tvShow) => {
  return tvShow.rating >= 9;
});

console.log(greaterOrEqual9);

const publishedBefore2015 = tvShows.filter((tvShow) => {
  return tvShow.publishingYear < 2015;
});

console.log(publishedBefore2015);
