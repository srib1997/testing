/* global $, io */

$(function () {
    var socket = io()

    socket.on('image', (image) => {
      const imageElm = document.getElementById('image')
      imageElm.src = `data:image/jpeg;base64,${image}`
    })

    socket.on('image1', (image1) => {
      const imageElm1 = document.getElementById('image1')
      imageElm1.src = `data:image/jpeg;base64,${image1}`
    })

    socket.on('image2', (image2) => {
      const imageElm2 = document.getElementById('image2')
      imageElm2.src = `data:image/jpeg;base64,${image2}`
    })

    socket.on('image3', (image3) => {
      const imageElm3 = document.getElementById('image3')
      imageElm3.src = `data:image/jpeg;base64,${image3}`
    })

    // socket.on('image4', (image4) => {
    //   const imageElm4 = document.getElementById('image4')
    //   imageElm4.src = `data:image/jpeg;base64,${image4}`
    // })

    // socket.on('image5', (image5) => {
    //   const imageElm5 = document.getElementById('image5')
    //   imageElm5.src = `data:image/jpeg;base64,${image5}`
    // })

    // socket.on('image6', (image6) => {
    //   const imageElm6 = document.getElementById('image6')
    //   imageElm6.src = `data:image/jpeg;base64,${image6}`
    // })

    // socket.on('image7', (image7) => {
    //   const imageElm7 = document.getElementById('image7')
    //   imageElm7.src = `data:image/jpeg;base64,${image7}`
    // })
  })
