import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
export default function DesnDev() {

    const [text] = useTypewriter({
        words: ['Designer.', 'Developer.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
      });

  return (
    <div className='des'>{text}<span style={{color: 'red', fontWeight: '500'}}><Cursor/></span></div>
  )
}
