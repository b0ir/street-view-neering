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
    subprocess.Popen(['rm', path+'tile_2_0_0.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_1_0.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_2_0.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_3_0.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_0_1.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_0_2.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_0_3.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_1_1.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_1_2.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_1_3.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_2_1.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_2_2.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_2_3.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_3_1.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_3_2.jpg']).wait()
    subprocess.Popen(['rm', path+'tile_2_3_3.jpg']).wait()
print('done')