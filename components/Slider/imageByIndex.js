// import image1 from '/slide-1.webp'
// import image2 from '/slide-2.webp'
// import image3 from '/slide-3.webp'
// import image4 from '/slide-4.webp'

export const images = ['/slide-1.webp', '/slide-2.webp', '/slide-3.webp', '/slide-4.webp', '/slide-5.webp']

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
