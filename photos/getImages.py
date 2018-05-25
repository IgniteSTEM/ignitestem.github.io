import glob
import io
from datetime import datetime # For timestamps

outputFileName = "photoData.js"

imageList = glob.glob('./*.jpg')

print("%d images found" % len(imageList))
try:
    with io.FileIO(outputFileName, 'w') as outputFile: # Writing file and creating file if it doesn't exist
        # print "// Last updated: " + datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        outputFile.write("// Number of Images: " + str(len(imageList)) + "\n") # Meta data
        outputFile.write("// Last updated: " + datetime.now().strftime('%Y-%m-%d %H:%M:%S') + "\n") # Timestamp
        outputFile.write("const imageData = [\n") # Open array
        for image in imageList:
            outputFile.write("  \"" + image + "\",\n") # Print
            # print "  \"" + image + "\","
        outputFile.write("];\n") # Open array
        # print "];"
        outputFile.close()
except IOError as (errno, strerror):
    print "I/O error({0}): {1}".format(errno, strerror)
