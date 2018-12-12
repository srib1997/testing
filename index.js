var cv = require('opencv4nodejs')
var FPS = 10
var wCameraWidth = cv.CAP_PROP_FRAME_WIDTH
var wCameraHeight = cv.CAP_PROP_FRAME_HEIGHT
var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var wCap0 = new cv.VideoCapture(0)
var wCap1 = new cv.VideoCapture(1)
var wCap2 = new cv.VideoCapture(2)
var wCap3 = new cv.VideoCapture(3)
var wCap4 = new cv.VideoCapture(4)
var wCap5 = new cv.VideoCapture(5)
var wCap6 = new cv.VideoCapture(6)
var wCap7 = new cv.VideoCapture(7)

app.use(express.static('./public'))

wCap0.set(wCameraWidth, 300)
wCap0.set(wCameraHeight, 300)

wCap1.set(wCameraWidth, 300)
wCap1.set(wCameraHeight, 300)

wCap2.set(wCameraWidth, 300)
wCap2.set(wCameraHeight, 300)

wCap3.set(wCameraWidth, 300)
wCap3.set(wCameraHeight, 300)

wCap4.set(wCameraWidth, 300)
wCap4.set(wCameraHeight, 300)

wCap5.set(wCameraWidth, 300)
wCap5.set(wCameraHeight, 300)

wCap6.set(wCameraWidth, 300)
wCap6.set(wCameraHeight, 300)

wCap7.set(wCameraWidth, 300)
wCap7.set(wCameraHeight, 300)

setInterval(() => {
  const frame = wCap0.read()
  const image = cv.imencode('.jpg', frame).toString('base64')
  io.emit('image', image)

  const frame1 = wCap1.read()
  const image1 = cv.imencode('.jpg', frame1).toString('base64')
  io.emit('image1', image1)

  const frame2 = wCap2.read()
  const image2 = cv.imencode('.jpg', frame2).toString('base64')
  io.emit('image2', image2)

  const frame3 = wCap3.read()
  const image3 = cv.imencode('.jpg', frame3).toString('base64')
  io.emit('image3', image3)

  const frame4 = wCap4.read()
  const image4 = cv.imencode('.jpg', frame4).toString('base64')
  io.emit('image4', image4)

  const frame5 = wCap5.read()
  const image5 = cv.imencode('.jpg', frame5).toString('base64')
  io.emit('image5', image5)

  const frame6 = wCap6.read()
  const image6 = cv.imencode('.jpg', frame6).toString('base64')
  io.emit('image6', image6)

  const frame7 = wCap7.read()
  const image7 = cv.imencode('.jpg', frame7).toString('base64')
  io.emit('image7', image7)

}, 1000 / FPS)


http.listen(3000, function () {
    console.log('listening on *:' + 3000)
  })