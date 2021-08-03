import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../lib/supabaseClient";
import { DEFAULT_AVATARS_BUCKET, emojis } from "../../lib/constants";

const emojiRegex = require("emoji-regex/RGI_Emoji.js");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise(async (resolve) => {
    const uuid = req.query.uuid as string;

    const regex = emojiRegex();
    let match;
    let result = [];
    while ((match = regex.exec(uuid))) {
      const emoji = match[0];
      result.push(emoji);
    }

    let path: string[] = [];

    result.forEach((k) => path.push(emojis[k]));

    try {
      const { data, error } = await supabase.storage
        .from(DEFAULT_AVATARS_BUCKET)
        .download(`${path.join(",")}.${uuid.split(".")[1]}`);
      if (error) {
        res.status(500);
        res.send({
          data: `Error downloading image: ${error}`,
        });
      } else {
        res.status(200);
        res.setHeader("Content-Type", `${data?.type}; charset=utf-8`);
        res.send(data?.stream());
      }
    } catch (error) {
      res.status(500);
      res.send({ data: `Error downloading image: ${error.message}` });
    }
    return resolve("Created Image!");
  });
}
