import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccount = JSON.parse(
  readFileSync(
    path.join(
      __dirname,
      "../../firebase/electrona-be-firebase-adminsdk-fbsvc-da260df2c9.json"
    ),
    "utf8"
  )
);

initializeApp({
  credential: cert(serviceAccount),
});

export const auth = getAuth();
