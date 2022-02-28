def edit_photo(photo, width, height):
    if photo:
        imageTemproary = Image.open(photo)
        outputIoStream = BytesIO()
        imageTemproaryResized = imageTemproary.resize((width, height))
        try:
            imageTemproaryResized.save(
                outputIoStream, format="JPEG", quality=100)
        except:
            imageTemproaryResized.save(
                outputIoStream, format="PNG", quality=100)
            try:
                imageTemproaryResized.save(
                    outputIoStream, format="GIF", quality=100
                )
            except:
                imageTemproaryResized.save(
                    outputIoStream, format="BMP", quality=100
                )
        outputIoStream.seek(0)
        photo = InMemoryUploadedFile(
            outputIoStream,
            "ImageField",
            "%s.jpg" % photo.name.split(".")[0],
            "profile_photo/jpeg",
            sys.getsizeof(outputIoStream),
            None,
        )
    else:
        photo = None
    return photo