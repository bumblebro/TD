#!/bin/bash

# Create icons directory if it doesn't exist
mkdir -p public

# Generate ICO file (contains multiple sizes)
convert -background none -density 384 -resize 16x16 public/favicon.svg public/favicon-16.png
convert -background none -density 384 -resize 32x32 public/favicon.svg public/favicon-32.png
convert -background none -density 384 -resize 48x48 public/favicon.svg public/favicon-48.png
convert public/favicon-16.png public/favicon-32.png public/favicon-48.png public/favicon.ico

# Generate PNG files
convert -background none -density 384 -resize 16x16 public/favicon.svg public/icon-16x16.png
convert -background none -density 384 -resize 32x32 public/favicon.svg public/icon-32x32.png
convert -background none -density 384 -resize 192x192 public/favicon.svg public/icon-192x192.png
convert -background none -density 384 -resize 512x512 public/favicon.svg public/icon-512x512.png
convert -background none -density 384 -resize 180x180 public/favicon.svg public/apple-touch-icon.png

# Clean up temporary files
rm public/favicon-16.png public/favicon-32.png public/favicon-48.png

echo "Icons generated successfully!" 