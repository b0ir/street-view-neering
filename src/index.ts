/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";
 

// @ts-nocheck TODO(jpoehnelt) remove when fixed

function initPano() {
  // Set up Street View and initially set it visible. Register the
  // custom panorama provider function. Set the StreetView to display
  // the custom panorama 'reception' which we check for below.
  const panorama = new google.maps.StreetViewPanorama(
    document.getElementById("map") as HTMLElement,
    { pano: "reception", visible: true }
  );

  panorama.registerPanoProvider(getCustomPanorama);
}

// Return a pano image given the panoID.
function getCustomPanoramaTileUrl(
  pano: string,
  zoom: number,
  tileX: number,
  tileY: number
): string {
  return (
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/" +
    "panoReception1024-" +
    zoom +
    "-" +
    tileX +
    "-" +
    tileY +
    ".jpg"
  );
}

// Return a pano image given the panoID.
function getCustomPanoramaTileUrl2(pano, zoom, tileX, tileY) {
  return "https://raw.githubusercontent.com/b0ir/street-view-neering/main/src/images/panorama1/tile_"+ 1 + "_" + tileX+ "_"+ tileY +".jpg";
  //return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/360-degree_Panorama_of_the_Southern_Sky_edit.jpg/2560px-360-degree_Panorama_of_the_Southern_Sky_edit.jpg';
}
 // Return a pano image given the panoID.
 function getCustomPanoramaTileUrl3(pano, zoom, tileX, tileY) {
  // Note: robust custom panorama methods would require tiled pano data.
  // Here we're just using a single tile, set to the tile size and equal
  // to the pano "world" size.
  return 'https://thumbs.dreamstime.com/b/360-degree-beach-panorama-1217568.jpg';
}	
// Return a pano image given the panoID.
function getCustomPanoramaTileUrl4(pano, zoom, tileX, tileY) {
  // Note: robust custom panorama methods would require tiled pano data.
  // Here we're just using a single tile, set to the tile size and equal
  // to the pano "world" size.
  return 'https://cloudflare1.360gigapixels.com/pano/artyfax/01215586_IMG_5131_Panorama_landscape360.jpg/equirect_crop_3_1/6.jpg';
}	 

// Construct the appropriate StreetViewPanoramaData given
// the passed pano IDs.
function getCustomPanorama(pano: string): google.maps.StreetViewPanoramaData {
  if (pano === "reception") {
    return {
      location: {
        pano: "reception",
        shortDescription: 'description', 
        description: "down_description",
      },
      links: [{
        heading: 0,
            description: 'Canon Booth',
            pano: 'canonBooth'
      }],
      // The text for the copyright control.
      copyright: "Imagery (c) 2010 Google",
      // The definition of the tiles for this panorama.
      tiles: {
        tileSize: new google.maps.Size(1024, 512),
        worldSize: new google.maps.Size(2048, 1024),
        // The heading in degrees at the origin of the panorama
        // tile set.
        centerHeading: 105,
        getTileUrl: getCustomPanoramaTileUrl,
      },
    };
  }
  if (pano === 'canonBooth'){
    return {
      location: {
        pano: 'canonBooth',
        shortDescription: 'description',              
        description: 'down_description'
      },
      links: [{
      heading: 180,
      description: 'Reception',
      pano: 'reception'
      },
      {   
      heading: 90,
      description: 'Caliber Office',
      pano: 'caliberOffice'
      
},
{
  heading: 0,
        description: 'description',
        pano: 'greenPlanet'
        }],
        // The text for the copyright control.
        copyright: 'Imagery (c) 2016 Joy Caasi',
        // The definition of the tiles for this panorama.
        tiles: {
          tileSize: new google.maps.Size(2903, 1451),
          worldSize: new google.maps.Size(5806, 2903),
          // The heading in degrees at the origin of the panorama
          // tile set.
          centerHeading: 180,
          getTileUrl: getCustomPanoramaTileUrl2
        }
      };
    }
if (pano === 'caliberOffice'){
      return {
        location: {
          pano: 'caliberOffice',
    shortDescription: 'description',              
    description: 'down_description'
        },
        links: [{
        heading: 270,
        description: 'Canon Booth',
        pano: 'canonBooth'
  }],
        // The text for the copyright control.
        copyright: 'Imagery (c) 2016 Jeff Barfield',
        // The definition of the tiles for this panorama.
        tiles: {
          tileSize: new google.maps.Size(1024, 346),
          worldSize: new google.maps.Size(1024, 346),
          // The heading in degrees at the origin of the panorama
          // tile set.
          centerHeading: 245,
          getTileUrl: getCustomPanoramaTileUrl4
        }
      };
    }
  else{
      return {
        location: {
          pano: 'greenPlaner',
    shortDescription: 'Green Planet',              
    description: 'In The Heart of Dubais Rainforest'
        },
        links: [{
        heading: 180,
        description: 'Canon Booth',
        pano: 'canonBooth'
        }],
        // The text for the copyright control.
        copyright: 'Imagery (c) 2016 Joy Caasi',
        // The definition of the tiles for this panorama.
        tiles: {
          tileSize: new google.maps.Size(1600, 729),
          worldSize: new google.maps.Size(1600, 729),
          // The heading in degrees at the origin of the panorama
          // tile set.
          centerHeading: 0,
          getTileUrl: getCustomPanoramaTileUrl3
        }
      }
    }
  // @ts-ignore TODO(jpoehnelt) fix typings
  return null;
}
export { initPano };
