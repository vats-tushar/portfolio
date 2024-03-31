import React from 'react'

import './VidEdits.css'
export default function VidEdits() {
  const edits = [
    'https://streamtape.com/e/YDGDOj1wPkF2LQ/',
    'https://streamtape.com/e/ZKeVLMGaqJUq1Qx/',
    'https://streamtape.com/e/p4RparZJQdCraWK/',
    'https://streamtape.com/e/pbkxPeKMaWsreQ9/',
    'https://streamtape.com/e/gvOv0X868xcqbDe/',
    'https://streamtape.com/e/2W1qDowK3vHZ4WK/',
    'https://streamtape.com/e/LLGZV4D8jMS7va/',
    'https://streamtape.com/e/godoZDjBxWSqMge/'
]
  return (
    <div id='editpage'>
      <div className="tshead" style={{color: 'yellow',paddingTop: '40px', marginBottom: '70px', textShadow: '0 0 6px white, 0 0 15px wheat'}}>Edits</div>
      <div className='vidarea'>
        {edits.map((item,index)=>{
          return(
            <iframe src={item} width='800' height='309' key={index} className='editvid' allowFullScreen allow="autoplay" title={index}></iframe>
          )
        })}
      </div>
    </div>
  )
}
