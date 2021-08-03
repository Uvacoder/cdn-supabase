export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const DEFAULT_AVATARS_BUCKET = "avatars";

export type Profile = {
  id: string;
  avatar_url: string;
  username: string;
  website: string;
  updated_at: string;
};

export const emojis: { [index: string]: string } = {
  "😊": "smile",
  "🙃": "upside_down",
  "🤪": "quirky",
  "🤓": "nerd",
  "🤯": "mind_blown",
  "😴": "sleep",
  "💩": "poop",
  "👻": "ghost",
  "👽": "alien",
  "🤖": "robot",
  "👾": "game",
  "👐": "open",
  "🖖": "vulkan",
  "✌️": "peace",
  "🤟": "love",
  "🤘": "rock",
  "🤙": "call",
  "👋": "wave",
  "🐭": "rat",
  "🦕": "dino",
  "🦖": "t_rex",
  "🐉": "dragon",
};
