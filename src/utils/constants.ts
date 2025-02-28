import path from "path";
import { fileURLToPath } from "url";

// Get the current file's directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const FILE_PATH = path.join(__dirname, "../data.json");
