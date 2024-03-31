import React from 'react'
import projects from '../images/projects';
import './MoreProjects.css'
export default function MoreProjects() {
  return (
    <div id='ndpage'>
      <div className="tshead" style={{color: 'black', paddingTop: '40px', marginBottom: '70px'}}><u>More Projects</u></div>
      <div className="moreprojs">
        <div className='twoprojects'>
          <div className='extraproject'>
            <div className='oneprojcont'>
            <div className="imhead">NewsBurst</div>
            <div className="imcontainer">
              <img src={projects.nb1} alt='project'  className='leftbend rot' id='one'/>
              <img src={projects.nb2} alt='project'  className='rightbend rot' id='two'/>
            </div>
            <div className="imdetail">RESTfull API powered web application that shows you latest news in different categories.</div>
            </div>
          </div>
          <div className='extraproject'>
          <div className='oneprojcont'>
            <div className="imhead">SnakeGrow</div>
            <div className='imcontainer snake'>
              <img src={projects.sg1} alt='project'  className='leftbend rot' id='three'/>
              <img src={projects.sg2} alt='project'  className='rightbend rot' id='four'/>
            </div>
            <div className="imdetail">Classic snake game that eat apples and grow, until you hit the wall or itself. It is a windows application made with python. </div>
          </div>
          </div>
        </div>
        <div className="twoprojects">
          <div className='extraproject wanderhub'>
          <div className='oneprojcont'>
            <div className="imhead">WanderHub</div>
            <div className="imcontainer">
              <img src={projects.wh1} alt='project'  className='leftbend rot' id='five'/>
              <img src={projects.wh2} alt='project'  className='rightbend rot' id='six'/>
            </div>
            <div className="imdetail">A beatiful website that tells about tourism in different parts of India.</div>
            </div>
          </div>
          <div className='extraproject'>
          <div className='oneprojcont'>
            <div className="imhead">Signup/Login</div>
            <div className="imcontainer">
              <img src={projects.reg} alt='project'  className='leftbend rot' id='seven'/>
            </div>
            <div className="imdetail">A reusable signup and login template for student data.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
