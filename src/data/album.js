// Edit this file to change any text, image, or song source on the site.
// Nothing below is referenced anywhere else by hardcoded path or copy.

export const albumMeta = {
  title: "prati's album",
  subtitle: "five songs, six photographs, a few things that felt like you.",
};

// Playback: fill in ONE of these per track once you have the rights to do so.
//   audio: "/audio/lover.mp3"                → plays with the built-in player
//   embed: { type: "link", url: "https://open.spotify.com/track/..." }
//                                              → tasteful "listen on Spotify" button
//   embed: { type: "iframe", url: "https://open.spotify.com/embed/track/..." }
//                                              → inline official Spotify embed
// Leave both empty and the player shows a quiet "not configured yet" state
// instead of a button that pretends to work.

export const tracks = [
  {
    id: "lover",
    route: "/lover",
    theme: "lover",
    index: "01",
    trait: "warmth",
    title: "Lover",
    artist: "Taylor Swift",
    kicker: "01 / warmth",
    heading: "lover",
    copy: [
      "Some people don't have to try to be warm.",
      "Things around them just settle a little, on their own.",
    ],
    image: {
      src: "/images/prati/photo-01.jpg",
      alt: "A candid photograph of Prati",
      variant: "rounded",
    },
    audio: null,
    embed: null,
  },
  {
    id: "enchanted",
    route: "/enchanted",
    theme: "enchanted",
    index: "02",
    trait: "wonder",
    title: "Enchanted",
    artist: "Taylor Swift",
    kicker: "02 / wonder",
    heading: "enchanted",
    copy: [
      "Some evenings aren't special on their own.",
      "They just happen to have the right person in them.",
    ],
    image: {
      src: "/images/prati/photo-02.jpg",
      alt: "A candid photograph of Prati",
      variant: "polaroid",
    },
    audio: null,
    embed: null,
  },
  {
    id: "darkhaast",
    route: "/darkhaast",
    theme: "darkhaast",
    index: "03",
    trait: "depth",
    title: "Darkhaast",
    artist: "Arijit Singh",
    kicker: "03 / depth",
    heading: "darkhaast",
    copy: [
      "Everyone gets the version of you that's easy to see.",
      "I think I've been more curious about the rest of it.",
    ],
    image: {
      src: "/images/prati/photo-03.jpg",
      alt: "A candid photograph of Prati",
      variant: "cinematic",
    },
    audio: null,
    embed: null,
  },
  {
    id: "daylight",
    route: "/daylight",
    theme: "daylight",
    index: "04",
    trait: "comfort",
    title: "Daylight",
    artist: "Taylor Swift",
    kicker: "04 / comfort",
    heading: "daylight",
    copy: [
      "Some people don't light up a room.",
      "They just make it a calmer place to be in.",
    ],
    image: {
      src: "/images/prati/photo-04.jpg",
      alt: "A candid photograph of Prati",
      variant: "floating",
    },
    audio: null,
    embed: null,
  },
  {
    id: "heaven-is-you",
    route: "/heaven-is-you",
    theme: "heaven",
    index: "05",
    trait: null,
    title: "Heaven Is You",
    artist: "Joshua Bassett",
    kicker: "05 / heaven is you",
    heading: null,
    copy: ["this one wasn't on your list.", "I put it there myself."],
    image: {
      src: "/images/prati/photo-05.jpg",
      alt: "A candid photograph of Prati",
      variant: "portrait",
    },
    audio: null,
    embed: null,
  },
];

export const sideB = {
  route: "/side-b",
  theme: "sideB",
  heading: "side b",
  copy: [
    "Most albums have a favourite track.",
    "I don't think this one does — every song here ended up reminding me of you in a slightly different way.",
  ],
  dedication: "for prati.",
  closing: ["end of album.", "for now."],
  image: {
    src: "/images/prati/photo-06.jpg",
    alt: "A candid photograph of Prati",
    variant: "small-float",
  },
};

export const navOrder = [
  { label: "01 lover", route: "/lover" },
  { label: "02 enchanted", route: "/enchanted" },
  { label: "03 darkhaast", route: "/darkhaast" },
  { label: "04 daylight", route: "/daylight" },
  { label: "05 heaven is you", route: "/heaven-is-you" },
  { label: "side b", route: "/side-b" },
];

export const getTrackByRoute = (route) => tracks.find((t) => t.route === route);
