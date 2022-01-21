import subprocess
from PIL import Image
#panorama2.jpg
path = './src/images/panorama2/'
imagen = './src/images/panorama2/panorama2.jpg'
im = Image.open(imagen)
width, height = im.size
strw = str(width//2)
strh = str(height//2)
subprocess.Popen(['cp', imagen, path+'tile_0_0_0.jpg']).wait()#tile zoom0 ready
subprocess.Popen(['gm', 'convert', imagen, '-crop',strw+'x'+strh+'+0+0', path+'tile_1_0_0.jpg']).wait()
subprocess.Popen(['gm', 'convert', imagen, '-crop',strw+'x'+strh+ '+0+'+strh, path+'tile_1_0_1.jpg']).wait()
subprocess.Popen(['gm', 'convert', imagen, '-crop',strw+'x'+strh+'+'+strh+'+0', path+'tile_1_1_0.jpg']).wait()
subprocess.Popen(['gm', 'convert', imagen, '-crop',strw+'x'+strh+'+'+strh+'+'+strh, path+'tile_1_1_1.jpg']).wait()#tile zoom 1 ready

#panorama3.jpg
