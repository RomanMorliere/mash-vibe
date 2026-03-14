import launchParty from "@/assets/mash/launch_party.JPG";
import arcadeParty from "@/assets/mash/arcade_party.PNG";
import bossLadies from "@/assets/mash/MASH BOSS LADIES20.JPG";
import defne from "@/assets/mash/defne_profilepic.jpeg";
import emssoleil from "@/assets/mash/emssoleil_profilepic.JPG";
import isthisanna from "@/assets/mash/thisisanna_profilepic.jpeg";
import jayaLatina from "@/assets/mash/Jaya-Latina_profilepic.JPG";
import mm9 from "@/assets/mash/MM9_profilepic.jpg";
import merrie from "@/assets/mash/MERRIE_profilepic.jpg";
import taju from "@/assets/mash/tomtaju_profilepic.JPG";

export const NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "EVENTS", href: "#events" },
  { label: "ARTISTS", href: "#artists" },
  { label: "CONTACT", href: "#contact" },
];

export const HERO = {
  tag: "PARIS × ROTTERDAM",
  code: "MASH SIGNAL 001",
  title: "MASH COLLECTIVE",
  subtitle: "Music, fashion, art, and hybrid event curation across cities.",
  image: launchParty,
  imageAlt: "MASH Launch Party flyer",
};

export const UPCOMING = [
  { date: "19.03", title: "MASH BOSS LADIES", tag: "DJ NIGHT" },
  { date: "11.01", title: "MASH LAUNCH PARTY", tag: "POP-UP" },
  { date: "22.01", title: "MASH AT 160K", tag: "CLUB" },
];

export const CONTACT = {
  email: "info@mashcollective.eu",
  instagram: "@mash.intl",
  instagramUrl: "https://www.instagram.com/mash.intl/",
};

export const PROGRAM_FILTERS = ["ALL", "EVENTS", "ARTISTS", "CONCEPTS"];

export const PROGRAMS = [
  {
    title: "MASH LAUNCH PARTY",
    category: "EVENT",
    time: "12:00",
    image: launchParty,
    isLive: false,
  },
  {
    title: "MASH AT 160K",
    category: "EVENT",
    time: "22:00",
    image: arcadeParty,
    isLive: false,
  },
  {
    title: "MASH BOSS LADIES",
    category: "EVENT",
    time: "22:00",
    image: bossLadies,
    isLive: true,
  },
  {
    title: "DEFNE",
    category: "ARTIST",
    time: "DJ",
    image: defne,
    isLive: false,
  },
  {
    title: "EMSSOLEIL",
    category: "ARTIST",
    time: "DJ",
    image: emssoleil,
    isLive: false,
  },
  {
    title: "ISTHISANNA",
    category: "ARTIST",
    time: "FR",
    image: isthisanna,
    isLive: false,
  },
  {
    title: "JAYA LATINA",
    category: "ARTIST",
    time: "DJ",
    image: jayaLatina,
    isLive: false,
  },
  {
    title: "MM9 B3B MERRIE",
    category: "LINEUP",
    time: "160K",
    image: mm9,
    isLive: false,
  },
  {
    title: "TAJU",
    category: "ARTIST",
    time: "DJ",
    image: taju,
    isLive: false,
  },
  {
    title: "AKYNA / STARWORLD / WOLVETANG",
    category: "FASHION",
    time: "POP-UP",
    image: launchParty,
    isLive: false,
  },
  {
    title: "CITY STORYTELLING",
    category: "ART",
    time: "MASH",
    image: bossLadies,
    isLive: false,
  },
  {
    title: "VERNISSAGE FORMAT",
    category: "CONCEPT",
    time: "HYBRID",
    image: arcadeParty,
    isLive: false,
  },
  {
    title: "MERRIE",
    category: "ARTIST",
    time: "DJ",
    image: merrie,
    isLive: false,
  },
];

export const TICKER_ITEMS = [
  "MASH COLLECTIVE — PARIS × ROTTERDAM",
  "NEXT DATE: MARCH 19, 2026 — MASH BOSS LADIES",
  "LAUNCH PARTY — SOUND × FASHION × ART",
  "160K ROTTERDAM — LOCAL + GUEST CURATION",
  "CONTACT — INFO@MASHCOLLECTIVE.EU",
  "INSTAGRAM — @MASH.INTL",
];
