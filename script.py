#Script to create tiles of 360° panoramas.
import subprocess
from PIL import Image

print('creating tiles...')
for i in range(1,5):
    path = './src/images/panorama'+str(i)+'/'#Path to the image directory
    img = './src/images/panorama'+str(i)+'/panorama'+str(i)+'.jpg'
    im = Image.open(img)
    width, height = im.size
    subprocess.Popen(['cp', img, path+'tile_0_0_0.jpg']).wait()
    #Tile zoom 0 ready
    #Tile zoom 1:
    strw = str(width/2)
    strh = str(height/2)
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+0+0', path+'tile_1_0_0.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+ '+0+'+strh, path+'tile_1_0_1.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw+'+0', path+'tile_1_1_0.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw+'+'+strh, path+'tile_1_1_1.jpg']).wait()
    #Tile zoom 1 ready
    #Tile zoom 2:
    strw = str(width/4)
    strh = str(height/4)
    strw2 = str(width/2)
    strh2 = str(height/2)
    strw3 = str(3*width/4)
    strh3 = str(3*height/4)
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+0+0', path+'tile_2_0_0.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+ '+0+'+strh, path+'tile_2_0_1.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw+'+0', path+'tile_2_1_0.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw+'+'+strh, path+'tile_2_1_1.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw2+'+0', path+'tile_2_2_0.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw3+'+0', path+'tile_2_3_0.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+0+'+strh2, path+'tile_2_0_2.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+0+'+strh3, path+'tile_2_0_3.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw2+'+'+strh, path+'tile_2_2_1.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw2+'+'+strh2, path+'tile_2_2_2.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw+'+'+strh2, path+'tile_2_1_2.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw+'+'+strh2, path+'tile_2_1_2.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw3+'+'+strh, path+'tile_2_3_1.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw3+'+'+strh2, path+'tile_2_3_2.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw+'+'+strh3, path+'tile_2_1_3.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw2+'+'+strh3, path+'tile_2_2_3.jpg']).wait()
    subprocess.Popen(['gm', 'convert', img, '-crop',strw+'x'+strh+'+'+strw3+'+'+strh3, path+'tile_2_3_3.jpg']).wait()
    #Tile zoom 2 ready
print('done')
