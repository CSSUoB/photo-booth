import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const Gallery = ({ location, imagePath, strip }) => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    let baseURL = new URL(location.href);
    baseURL.pathname = imagePath + strip + '/';

    fetch(baseURL.href)
      .then(response => response.text())
      .then(text => {
        // parse html with regex (yes, yes, very bad)
        const regexp = /<a .*?href="(.*?)".*?>(.*?)<\/a>/g;
        let links = [];
        let match;
        while ((match = regexp.exec(text)) !== null) {
          // ignore bad links
          if (match[1].includes('..')) continue

          // add url to photo list
          let url = new URL(match[1], baseURL)
          links.push({
            "link": url.href,
            "name": match[2]
          });
        }

        setPhotos(links);
      })
  }, [location.href, imagePath, strip])
  
  if (photos.length === 0) {
    return (
      <p className="text-gray-900 italic">
        No photos found for that code... are you sure you got the right one?
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {photos.map((photo) => (
        <a href={photo.link} key={photo.name}>
          <img src={photo.link} alt={photo.name} className="object-cover w-full border border-gray-200 hover:border-gray-800 transition duration-100 transform hover:scale-105" />
        </a>
      ))}
    </div>
  )
}

Gallery.propTypes = {
  source: PropTypes.string,
}

export default Gallery
