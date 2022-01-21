#Script to delete tiles of 360° panoramas.

import subprocess

print('deleting tiles...')
for i in range(1,10):
    path = './src/images/panorama'+str(i)+'/'
    subprocess.Popen(['rm', path+'tile_0_0_0.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_1_0_0.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_1_0_1.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_1_1_0.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_1_1_1.jpg']).wait()
print('done')