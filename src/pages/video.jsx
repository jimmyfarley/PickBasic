import React, { useEffect, useState } from 'react'
import './video.css'

export default () => {
  const [subtitle, setSubtitle] = useState('Please enter the subtitle here')
  const [isRecording, setRecording] = useState(false)

  // Component Did Mount
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var video = document.getElementById('video');

    video.addEventListener('play', function () {
      var $this = this; //cache
      (function loop() {
        ctx.drawImage($this, 0, 0);
        ctx.strokeStyle = 'white';

        ctx.font = '24px Verdana';
        // Create gradient
        var gradient = ctx.createLinearGradient(0, 0, 400, 0);
        gradient.addColorStop('0', ' magenta');
        gradient.addColorStop('0.5', 'blue');
        gradient.addColorStop('1.0', 'red');
        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillText('By Jimmy Farley', 10, 32);
        ctx.strokeText('By Jimmy Farley', 10, 32);


        const input = document.getElementById('subtitle')
        ctx.font = '16px Georgia'
        ctx.fillStyle = 'white'
        ctx.strokeStyle = '1px black'
        ctx.fillText(input.value, 10, 200)
        ctx.strokeText(input.value, 10, 200)

        setTimeout(loop, 1000 / 30); // drawing at 30fps
      })();
    }, 0);
  }, [])

  const toggleRecord = () => {
    setRecording(!isRecording)
  }

  return <div className='container'>
    <div className='jumbotron'>
      <h1 className='display-4'>Video Demo</h1>
      <p className='lead'>This is a simple demo to add annotations to a video and record it.</p>
      <hr className='my-4' />
      <p>Please edit a subtile and record the subtitled video</p>
      <input className='form-control' id='subtitle' value={subtitle} onChange={(e) => { setSubtitle(e.target.value) }} />
      <p className='lead py-4'>
        <button className={`btn ${isRecording ? 'btn-primary' : 'btn-danger'} btn-lg `} onClick={toggleRecord}>
          {isRecording ? 'STOP' : 'RECORD'}
        </button>
      </p>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h3>Original Video</h3>
        <video id='video' src='/videos/1.mp4' controls />
      </div>
      <div className="col-md-6">
        <h3>Analysis  Player</h3>
        <canvas id='canvas' width='426' height='240' style={{ background: 'black' }} />
      </div>
    </div>
  </div>
}
