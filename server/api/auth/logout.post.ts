import { createHash } from "node:crypto";
import database from "../../utils/database";

export default defineEventHandler((event) => {
  const sessionToken = getCookie(event, "365_session");

  if (sessionToken) {
    const tokenHash = createHash("sha256").update(sessionToken).digest("hex");
    database
      .prepare("DELETE FROM sessions WHERE token_hash = ?")
      .run(tokenHash);
  }

  deleteCookie(event, "365_session", { path: "/" });
  return { success: true };
});
