const fs = require('fs');
const https = require('https');
const path = require('path');

// Create directories if they don't exist
const dirs = [
  'public/images/projects/project-02',
  'public/images/projects/project-03',
  'public/images/projects/project-04',
  'public/images/projects/project-05',
  'public/images/blog'
];

// Image URLs and their save paths
const images = [
  // Project covers
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/projects/project-02/cover.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/projects/project-03/cover.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/projects/project-04/cover.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/projects/project-05/cover.jpg'
  },
  // Blog post images
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/github-actions.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/backend-architectures.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/oauth2-security.jpg'
  },
  // Additional blog post images
  {
    url: 'https://images.unsplash.com/photo-1627399270231-7d3264532c5b?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/nestjs-apis.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/api-security.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/api-comparison.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1504639725590-34ee98c9aac5?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/docker-2025.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    path: 'public/images/blog/microservices-2025.jpg'
  }
];

// Function to download a file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    
    // Add a proper user agent to avoid 403 Forbidden
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      // Check if the response is actually an image
      const contentType = response.headers['content-type'];
      if (!contentType || !contentType.startsWith('image/')) {
        reject(new Error(`Invalid content type for ${url}: ${contentType}`));
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filePath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
}

// Main function
async function setupImages() {
  try {
    console.log('🚀 Starting image download process...\n');
    
    // Create directories
    for (const dir of dirs) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`📁 Created directory: ${dir}`);
    }

    // Download images one by one with error handling
    for (const image of images) {
      try {
        await downloadFile(image.url, image.path);
      } catch (error) {
        console.error(`❌ Failed to download ${image.path}:`, error.message);
      }
    }

    console.log('\n✅ Image setup completed!');
    console.log('Note: If any images failed to download, you may need to:');
    console.log('1. Check your internet connection');
    console.log('2. Manually download the images from the URLs in the script');
    console.log('3. Place them in the appropriate directories');
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Run the script
setupImages();
