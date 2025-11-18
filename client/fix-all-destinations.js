import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destinationsDir = path.join(__dirname, 'src/pages/destinations');
const cssImport = 'import "../styles/destination-mobile-fix.css";';

// Get all destination files
const files = fs.readdirSync(destinationsDir).filter(file => file.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(destinationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if import already exists
  if (!content.includes('destination-mobile-fix.css')) {
    // Add import after swiper imports
    content = content.replace(
      /import "swiper\/css\/navigation";/,
      `import "swiper/css/navigation";\n${cssImport}`
    );
    
    // Write back to file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${file}`);
  } else {
    console.log(`Already updated: ${file}`);
  }
});

console.log('All destination pages updated!');