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
  
  // Skip if import already exists
  if (content.includes('destination-mobile-fix.css')) {
    console.log(`Already updated: ${file}`);
    return;
  }

  // Try to find the last Swiper CSS import (covers variations like autoplay, pagination, navigation)
  const swiperImportRegex = /^import\s+["']swiper\/css(?:[^"']*)["'];\s*$/gim;
  let lastMatchIndex = -1;
  let match;
  while ((match = swiperImportRegex.exec(content)) !== null) {
    lastMatchIndex = match.index + match[0].length;
  }

  if (lastMatchIndex !== -1) {
    // Insert cssImport after the last swiper import
    content = content.slice(0, lastMatchIndex) + '\n' + cssImport + content.slice(lastMatchIndex);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated (inserted after last swiper import): ${file}`);
    return;
  }

  // Fallback: insert after the first import statement
  const firstImportRegex = /^import\s.+;\s*$/m;
  const firstImportMatch = content.match(firstImportRegex);
  if (firstImportMatch) {
    const insertPos = content.indexOf(firstImportMatch[0]) + firstImportMatch[0].length;
    content = content.slice(0, insertPos) + '\n' + cssImport + content.slice(insertPos);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated (fallback after first import): ${file}`);
    return;
  }

  // If no import found, prepend the css import at the top
  content = cssImport + '\n' + content;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated (prepended import): ${file}`);
});

console.log('All destination pages updated!');