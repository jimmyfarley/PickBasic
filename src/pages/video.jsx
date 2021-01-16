import React, { useEffect, useState } from 'react'
import './video.css'

export default () => {
  const [subtitle, setSubtitle] = useState('')
  // Component Did Mount
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var video = document.getElementById('video');

    video.addEventListener('play', function () {
      var $this = this; //cache
      (function loop() {
        if (!$this.paused && !$this.ended) {
          ctx.drawImage($this, 0, 0);
          setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
      })();
    }, 0);
  }, [])

  return <div className='container'>
    <div className="jumbotron">
      <h1 className="display-4">Video Demo</h1>
      <p className="lead">This is a simple demo to add annotations to a video and record it.</p>
      <hr className="my-4" />
      <p>Please add a subtile and press RECORD</p>
      <input className='form-control' value={subtitle} onChange={(e) => { setSubtitle(e.target.value) }} />
      <p className="lead py-4">
        <button className="btn btn-primary btn-lg">RECORD</button>
      </p>
    </div>
    <canvas id='canvas' width="426" height="240" />
    <video id='video' src='/videos/1.mp4' controls />
  </div>
}
