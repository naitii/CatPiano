import os

for filename in os.listdir():
    # newFileName=filename[0:-9]
    print(filename)
    if(filename[0]=='a'):
        continue
    newFileName=filename[0:-11]+".wav"
    os.rename(filename,newFileName)
    print(newFileName)