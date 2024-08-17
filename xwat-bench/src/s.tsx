import sharp from "sharp"
;(async () => {
  // const data = await sharp('./assets2/win2.jpg').ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  // console.log('data', data)

  const width = 4
  const height = 4
  const channels = 4
  const rgba = new Uint8Array(4 * 4 * 4)
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels,
    },
  }).toFile("./output2/raw-gray.png")
})()
