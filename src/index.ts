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
    { pano: "panorama1", visible: true }
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
    "https://raw.githubusercontent.com/b0ir/street-view-neering/main/src/images/"+pano+"/tile_" +
    2 +
    "_" +
    tileX +
    "_" +
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
  if (pano === "panorama1") {
    return {
      location: {
        pano: "panorama1",
        shortDescription: 'description1', 
        description: "down_description1",
      },
      links: [{
        heading: 0,
            description: 'description2',
            pano: 'panorama2'
      }],
      // The text for the copyright control.
      copyright: "Imagery (c) YYYY authorName authorLastName",
      // The definition of the tiles for this panorama.
      tiles: {
        tileSize: new google.maps.Size(2903, 1452),
        worldSize: new google.maps.Size(5809, 2903),
        // The heading in degrees at the origin of the panorama
        // tile set.
        centerHeading: 0,
        getTileUrl: getCustomPanoramaTileUrl,
      },
    };
  }
  if (pano === 'panorama2'){
    return {
      location: {
        pano: 'panorama2',
        shortDescription: 'shortDescription2',              
        description: 'description2'
      },
      links: [{
        heading: 0,
        description: 'description3',
        pano: 'panorama3'
      },
      {
        heading: 180,
        description: 'description1',
        pano: 'panorama1'
      }],
      // The text for the copyright control.
      copyright: 'Imagery (c) YYYY authorName authorLastName',
      // The definition of the tiles for this panorama.
      tiles: {
        tileSize: new google.maps.Size(3509 , 1755),
        worldSize: new google.maps.Size(7018, 3509),
        // The heading in degrees at the origin of the panorama
        // tile set.
        centerHeading: 0,
        getTileUrl: getCustomPanoramaTileUrl
      }
    };
  }
  if (pano === 'panorama3'){
    return {
      location: {
        pano: 'panorama3',
        shortDescription: 'description3',              
        description: 'down_description3'
      },
      links: [{
        heading: 0,
        description: 'description4',
        pano: 'panorama4'
      },{
        heading: 180,
        description: 'description2',
        pano: 'panorama2'
      }],
      // The text for the copyright control.
      copyright: 'Imagery (c) YYYY authorName authorLastName',
      // The definition of the tiles for this panorama.
      tiles: {
        tileSize: new google.maps.Size(3413, 1706),
        worldSize: new google.maps.Size(6825, 3413),
        // The heading in degrees at the origin of the panorama
        // tile set.
        centerHeading: 0,
        getTileUrl: getCustomPanoramaTileUrl
      }
    };
  }
  if(pano == "panorama4"){
    return {
      location: {
        pano: 'panorama4',
        shortDescription: 'shortDescription4',              
        description: 'description4'
      },
      links: [{
        heading: 180,
        description: 'description3',
        pano: 'panorama3'
      }],
      // The text for the copyright control.
      copyright: 'Imagery (c) YYYY authorName authorLastName',
      // The definition of the tiles for this panorama.
      tiles: {
        tileSize: new google.maps.Size(3360, 1680),
        worldSize: new google.maps.Size(6720, 3360),
        // The heading in degrees at the origin of the panorama
        // tile set.
        centerHeading: 180,
        getTileUrl: getCustomPanoramaTileUrl
      }
    }
  }
  // @ts-ignore TODO(jpoehnelt) fix typings
  return null;
}
export { initPano };
