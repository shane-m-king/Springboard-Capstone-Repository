import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const clientId = process.env.IGDB_CLIENT_ID!;
const clientSecret = process.env.IGDB_CLIENT_SECRET!;

async function getTwitchToken() {
  try {
    const response = await axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`
    );
    console.log("Access Token:", response.data.access_token);
    console.log("Expires in (seconds):", response.data.expires_in);
  } catch (err: any) {
    console.error("Failed to get token:", err.response?.data || err.message);
  }
}

getTwitchToken();