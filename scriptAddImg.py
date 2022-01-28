import os

with open("src/index.ts", "r+") as file:
    # Move the pointer (similar to a cursor in a text editor) to the end of the file
    file.seek(0, os.SEEK_END)
    # This code means the following code skips the very last character in the file -
    # i.e. in the case the last line is null we delete the last line
    # and the penultimate one
    pos = file.tell() - 1

    # Read each character in the file one at a time from the penultimate
    # character going backwards, searching for a newline character
    # If we find a new line, exit the search
    while pos > 0 and file.read(1) != ']':
        pos -= 1
        file.seek(pos, os.SEEK_SET)

    # So long as we're not at the start of the file, delete all the characters ahead
    # of this position
    if pos > 0:
        file.seek(pos, os.SEEK_SET)
        file.truncate()

a_file = open("src/index.ts", "r")

list_of_lines = [
"      ,{\n"
,"        heading: 0,\n"
,"        description: 'description5',\n"
,"        pano: 'panorama5'\n"
, "}\n"
,"],\n"
,"      copyright: 'Imagery (c) YYYY authorName authorLastName',\n"
,"      tiles: {"
,"        tileSize: new google.maps.Size(1280, 640),\n"
,"        worldSize: new google.maps.Size(2560, 1280),\n"
,"        centerHeading: 0,\n"
,"        getTileUrl: getCustomPanoramaTileUrl\n"
,"      }\n"
,"    }\n"
,"  }\n"
,'  if(pano == "panorama5"){\n'
,"    return {\n"
,"      location: {\n"
,"        pano: 'panorama5',\n"
,"        shortDescription: 'shortDescription5', \n"
,"        description: 'description5'\n"
,"      },\n"
,"      links: [{\n"
,"        heading: 180,\n"
,"        description: 'description4',\n"
,"        pano: 'panorama4'\n"
,"      }],\n"
,"      copyright: 'Imagery (c) YYYY authorName authorLastName',\n"
,"      tiles: {\n"
,"        tileSize: new google.maps.Size(1280, 640),\n"
,"        worldSize: new google.maps.Size(2560, 1280),\n"
,"        centerHeading: 0,\n"
,"        getTileUrl: getCustomPanoramaTileUrl\n"
,"      }\n"
,"    }\n"
,"  }\n"
,"  // @ts-ignore\n"
,"  return null;\n"
,"}\n"
,"export { initPano };\n"]

a_file = open("src/index.ts", "a")
a_file.writelines(list_of_lines)
a_file.close()