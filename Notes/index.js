import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

// Function to get photos sorted by date;
function getPhotosSorted() {
  const uploadsDir = path.join(__dirname, "public/uploads");
  
  // Create uploads directory if it doesn't exist
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    return [];
  }

  // Get all image files
  const files = fs.readdirSync(uploadsDir).filter(file => {
    return file.endsWith('.jpg') || file.endsWith('.png') || 
           file.endsWith('.jpeg') || file.endsWith('.JPG') || 
           file.endsWith('.PNG') || file.endsWith('.JPEG');
  });

  // Sort by file creation time (oldest first)
  const sortedFiles = files.map(file => {
    const filePath = path.join(uploadsDir, file);
    const stats = fs.statSync(filePath);
    return {
      name: file,
      time: stats.birthtime.getTime() // Creation time in milliseconds
    };
  })
  .sort((a, b) => a.time - b.time) // Sort oldest to newest
  .map(file => file.name); // Return just the filenames

  return sortedFiles;
}

// Routes

// Home page - Gallery view
app.get("/", (req, res) => {
  const photos = getPhotosSorted();
  res.render("index.ejs", { photos });
});

// Slideshow viewer
app.get("/view/:index", (req, res) => {
  const photos = getPhotosSorted();
  const currentIndex = parseInt(req.params.index);
  
  if (currentIndex < 0 || currentIndex >= photos.length) {
    return res.redirect("/");
  }

  res.render("viewer.ejs", { 
    photos, 
    currentIndex,
    currentPhoto: photos[currentIndex]
  });
});

app.listen(port, () => {
  console.log(`Notes Gallery running on http://localhost:${port}`);
});