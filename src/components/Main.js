import React, {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Main.css'
import prof from '../images/prof-transformed.png';
import vid from '../images/video.mp4'
import pro1 from '../images/inote.png'
import pro2 from '../images/proj2.png'
import pro3 from '../images/tuimg2.png'
import resume from '../Tushar-Sharma.pdf'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import images from '../images/skills';
import davinci from '../images/davinci.png';
import medal from '../images/award.png';
import vid1 from '../images/pointing.gif'
import vid2 from '../images/dance.gif'
import gmail from '../images/gmail.png';
import linkedin from '../images/linkedin.png';
import whatsapp from '../images/whatsapp.png';
import insta from '../images/insta.png'
import DesnDev from './DesnDev';
gsap.registerPlugin(ScrollTrigger);
export default function Main() {
  const size = window.screen.width;
  const projects =[
    {
      title: 'iNotebook',
      tagline: 'Store your notes on cloud.',
      explain: 'Simple and beautiful web app to store your important notes on cloud and keep them secure.',
      projurl: 'https://vats-tushar.github.io/inotebook/',
      imgurl: pro1
    },
    {
      title: 'Memory Games',
      tagline: 'Sharpen your memory.',
      explain: 'Two card flip games that sharpens your short-term visual memory while having fun.',
      projurl:'https://vats-tushar.github.io/memory-games/',
      imgurl: pro2
    },
    {
      title: 'TextUtils',
      tagline: 'Transform your text.',
      explain: 'Text Utility to tranform your text, convert to different cases, remove extra spaces and word count.',
      projurl: 'https://vats-tushar.github.io/my-app/',
      imgurl: pro3
    }
  ];

  const [state, setState] = useState(false);
  
  let navigate = useNavigate();
  const viewmore = ()=>{
    navigate('/moreprojects');
    window.scrollTo(0, 0);
  }
  

  const arr = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'GSAP', 'ReactJS', 'Java', 'NodeJS', 'ExpressJS', 'SQL', 'MongoDB', 'FireStore'];

  const a=useRef();
  const b=useRef();
  const c= useRef();
  
  useEffect(()=>{
    const ax = a.current;
    const bx = b.current;
    const cx = c.current;
    gsap.fromTo(ax, {backgroundColor: 'black'},{
      backgroundColor: 'white', duration: 1, scrollTrigger: {
        trigger: bx,
        start: size>500? '60% 5%':'55% 5%',
        end: size>500? '70% 5%':'65% 5%',
        
        scrub: 1
      }
    })
    gsap.fromTo(bx, {backgroundColor: 'black'},{
      backgroundColor: 'white', duration: 1, scrollTrigger: {
        trigger: bx,
        start: '70% 5%',
        end: '80% 5%',
        
        scrub: 1
      }
    })
    gsap.fromTo(ax, {backgroundColor: 'white'},{
      backgroundColor: 'black', duration: 1, scrollTrigger: {
        trigger: ax,
        start: size>500? '60% 5%':'55% 5%',
        end: size>500? '70% 5%':'65% 5%',
        
        scrub: 1
      }
    })
    gsap.fromTo(bx, {backgroundColor: 'white'},{
      backgroundColor: 'black', duration: 1, scrollTrigger: {
        trigger: ax,
        start: size>500? '60% 5%':'55% 5%',
        end: size>500? '70% 5%':'65% 5%',
        
        scrub: 1
      }
    }) 
    gsap.fromTo(cx, {backgroundColor: 'black'},{
      backgroundColor: 'white', duration: 1, scrollTrigger: {
        trigger: bx,
        start: '70% 5%',
        end: '80% 5%',
        
        scrub: 1
      }
    })
    if(size>500){
      gsap.fromTo('#medal',{
        opacity:0,
        x:900,
        y:-150,
        duration:1},{
          opacity:1,
          x:900,
          y:-110,
        scrollTrigger:{
          trigger: 'bx',
          start: '70% 0%',
          end: '72% 0%',
          scrub:1
        }
      })
    }
    else{
      gsap.fromTo('#medal',{
        opacity:0,
        x:180,
        y:-130,
        duration:1},{
          opacity:1,
          x:180,
          y:-110,
        scrollTrigger:{
          trigger: 'bx',
          start: '72% 0%',
          end: '74% 0%',
          
          scrub:1
        }
      })
    }

  },[size]);
  return (
    <div>
      <div className='intro' id='introduction'>
        <div className='detail'>
          <div className='blank'></div>
          <div className='written'>
          <div className='hello'><div className='hel'>👋</div> HELLO THERE! WELCOME</div>
          <div className='mname'>My Name is <b>TUSHAR SHARMA,</b></div>
          <div className='dnd'>I'm a Web <DesnDev/></div>
          <hr width='70px'/>
          <div className='craft'>I craft high-performing, beautiful websites that are interactive, playful and people-friendly.</div>
          <a href={resume} target='_blank' rel="noreferrer"><div className='resume'>
            Resume
          </div></a>
          </div>
        </div>
        <div className='videobg'><video width='700px' height='700px' autoPlay muted loop><source src={vid}></source></video></div>
      </div>

      <div style={{height: '1px'}}><div className="diamond"><img className='profimg' src={prof} alt='prof'/></div></div>

      <div ref={a} id='projects'>
        {projects.map((val,index)=>{
          return <div className='project' key={index+100}>
          <div className='proj-detail'>
            <div className='proj'>PROJECT</div>
            <div className='ptitle'>{val.title}</div>
            <div className='tagline'>{val.tagline}</div>
            <div className='pexplain'>{val.explain}</div>
            <a className='explore' href={val.projurl}>EXPLORE 
            <svg
              width="50"
              height="11"
              viewBox="0 0 50 11"
              className="project_container__left--explore---arrow"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.6364 9.98889L44 5.98889M44 5.98889L39.6364 1.98889M44 5.98889H1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg></a>
          </div>
          <div className='proj-img'><a href={val.projurl} target='_blank' rel="noreferrer"><img src={val.imgurl} alt='proj1' className='projimginside'/></a></div>
        </div>
        })}
        <div style={{display: 'flex', justifyContent: 'space-around', height: '200px', alignItems: 'center'}}><div className='explore more' onClick={viewmore}>View More Projects </div></div>

      </div>
      <div className='aboutme' ref={b} id='about'>
        <div className='tshead'>Tech Stack</div>
        <div className="techs">
          {images.map((im, index)=>
          <div className='logo' key={index+200}>
            <div className="logoimg" key={index}><img src={im} alt='logos' width='100px' height='100px'/></div>
            <div style={{color: 'wheat', textAlign: 'center'}} className='skillname'>{arr[index]}</div>
          </div>
          )}
        </div>
        <div className='tshead'>Additional Skills</div>
        <div className="add">
          <div className="logoimg"><img src={davinci} alt='logos' width='100px' height='100px'/></div>
          <div className='edit'><span style={{fontSize: 'clamp(20px,4vw,40px)', fontWeight: '500'}} id='#mtrig'>Video Editing</span> in <u>Davinci Resolve</u>. I create advance AMVs, which are able to narrate a story using cinematography. </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', height: '100px', alignItems: 'center'}}><a className='explore vids' href='https://www.instagram.com/squall_editzo/ target='_blank' rel='noreferrer'>See My Work</a></div>
        <div className='tshead' style={{marginTop: '40px'}}>Achievement</div>
        <div className="ach">
          
          <div className="medal"><img src={medal} alt='medal' width='200px' id='medal'/></div>
          <div className='achline'>Won a <span style={{fontSize: 'clamp(25px,4vw,40px)', fontWeight: '500', textTransform: 'uppercase'}}>gold medal</span> in interschool cricket competition while leading the team. </div>
        </div>
      </div>
      <div ref={c} id='contact'>
        <div className='hello' style={{textAlign: 'center', fontSize: 'clamp(20px,4vw,28px)'}}>Need a Developer and Designer?</div>
        <div style={{display: 'flex', width: {size}, justifyContent:'center', alignItems: 'center'}}><a className='explore con' href='mailto:tushpandat2002@gmail.com' onClick={()=>setState(true)}>Let's Work Together</a>
            <img src={state ? vid2: vid1} alt="hello" height={size>500?'250px':'150px'} style={{transform: size>500?'translate(0,50px)': 'translate(-30px,50px)'}}/>
        </div>
        <div className='conlist'>
          <div className='hit'>Hit me at: </div>
          <div className='logoimg contele'><a href='mailto:tushpandat2002@gmail.com' rel='noreferrer'><img src={gmail} alt='logos' className='contimg'/></a></div>
          <div className="logoimg contele"><a href='https://www.linkedin.com/in/tushar-sharma-3796a0215/' target='_blank' rel='noreferrer'><img src={linkedin} alt='logos' className='contimg'/></a></div>
          <div className="logoimg contele"><a href='https://wa.me/7835959404?text=Hello%20Tushar,%20I`m%20interested%20in%20working%20together.' target='_blank' rel='noreferrer'><img src={whatsapp} alt='logos' className='contimg'/></a></div>
          <div className='logoimg contele'><a href='https://www.instagram.com/vats__tushar' target='_blank' rel='noreferrer'><img src={insta} alt='logos' className='contimg'/></a></div> 
        </div>
      </div>
      <div className="footer">
        <div className='left'>
          <div className="lname">TUSHAR SHARMA</div>
          <div className="made"> Made with ❤ in <b>INDIA</b></div>
        </div>
        <div className="right">All rights reserved © 2024</div>
      </div>
    </div>
  )
}
