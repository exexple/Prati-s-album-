// Edit this file to change any text, image, or song source on the site.
// Nothing below is referenced anywhere else by hardcoded path or copy.

export const albumMeta = {
  title: "prati's album",
  subtitle: "a few things that were tailored specifically for you 🌺.",
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
      "lover, one of your most fav songs.",
      "I remember how you were singing this song in kosu's car.",
    ],
    image: {
      src: "/images/prati/photo-01.jpg",
      alt: "A candid photograph of Prati",
      variant: "rounded",
    },
    audio: "/audio/lover.mp3",
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
      "enchanted, I'm keeping this here with a specific meaning.",
      "As i keep on saying 'smile suits you' and somehow this feels like the perfect way to say it.",
    ],
    image: {
      src: "/images/prati/photo-02.jpg",
      alt: "A candid photograph of Prati",
      variant: "polaroid",
    },
    audio: "/audio/enchanted.mp3",
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
      "Darkhaast, don't know much about this one tho but.",
      "I think I've been more curious about the rest of it.",
    ],
    image: {
      src: "/images/prati/photo-03.jpg",
      alt: "A candid photograph of Prati",
      variant: "cinematic",
    },
    audio: "/audio/darkhaast.mp3",
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
      "Daylight, another one of your fav's.",
      "This song resembles the energy and charm you bring in.",
    ],
    image: {
      src: "/images/prati/photo-04.jpg",
      alt: "A candid photograph of Prati",
      variant: "floating",
    },
    audio: "/audio/daylight.mp3",
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
    copy: ["this one wasn't on your list.", "I put it there myself cause i felt this as the perfect one for this."],
    image: {
      src: "/images/prati/photo-05.jpg",
      alt: "A candid photograph of Prati",
      variant: "portrait",
    },
    audio: "/audio/heaven-is-you.mp3",
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
