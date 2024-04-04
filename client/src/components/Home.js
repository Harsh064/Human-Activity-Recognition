import React from 'react';
import { Link } from 'react-router-dom';
import { team } from '../data/team';
import { applications } from '../data/applications';
import MemberCard from './MemberCard';
import ApplicationCard from './ApplicationCard';
import HARactivity from '../assets/HARactivity.png';
import cnn from '../assets/cnn.webp';
import locationIcon from '../assets/location.png';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';

export default function Home() {
  return (
    <div>
      <div className='bg-gradient-to-r from-white from-20% via-violet-300 to-red-300'>
        <nav className='sticky top-0 flex justify-center py-4 bg-white'>
          <ul className='flex *:transition-all text-slate-500'>
            <li className='duration-500 px-4 hover:text-slate-900'><a href='#about'>About</a></li>
            <li className='duration-500 px-4 hover:text-slate-900'><a href='#application'>Application</a></li>
            <li className='duration-500 px-4 hover:text-slate-900'><a href='#model'>Model</a></li>
            <li className='duration-500 px-4 hover:text-slate-900'><a href='#team'>Team</a></li>
            <li className='duration-500 px-4 hover:text-slate-900'><a href='#contact'>Contact</a></li>
          </ul>
        </nav>

        <div className='grid grid-flow-col place-items-center mx-28 py-32'>
          <div>
            <h1 className='font-semibold text-4xl'>Human Activity Recognition</h1>
            <p className='my-5'>
              Human Activity Recognition (HAR) has emerged as a crucial field at the intersection of artificial intelligence,
              machine learning, and sensor technologies. It involves the detection and classification of human actions or activities
              based on data collected from various sensors.
            </p>
            <Link to={'/viaVideo'} className='px-4 py-2 rounded bg-gradient-to-r from-violet-400 to-red-300 hover:from-red-300 hover:to-violet-400 font-semibold active:bg-blue-400'>Get Started</Link>
          </div>
          <img src={HARactivity} alt="" className='w-[40rem]' />
        </div>
      </div>

      <div className='p-28 pb-0'>
        <div className='flex justify-center'><h2 id='about'>ABOUT PROJECT</h2></div>
        <p className='my-5 w-5/12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit hic totam ad molestias corporis incidunt aut! Reprehenderit placeat, veritatis voluptas nostrum eaque quae ratione harum iste! Exercitationem commodi maxime provident, officiis laboriosam explicabo a earum facere, repellat excepturi, inventore facilis quos assumenda unde quibusdam autem ex. Delectus, dicta? Neque, pariatur.</p>
        <hr className='border-none py-8' />

        <div className='flex justify-center'><h2 id='application'>APPLICATION</h2></div>
        <div className='grid grid-rows-2 grid-cols-3 justify-center gap-10 my-5'>
          {
            applications.map((application) => {
              return <ApplicationCard application={application} />
            })
          }
        </div>
        <hr className='border-none py-8' />

        <div className='flex justify-center'><h2 id='model'>MODEL DESCRIPTION</h2></div>
        <div className='px-40 py-8 text-lg text-gray-700'>
          <p className='pb-8 text-center'>
            Human Activity Recognition (HAR) using Convolutional Neural Networks (CNNs) on video frames involves extracting 
            frames from videos, then employing CNNs to analyze spatial and temporal features. Each frame is treated as an image, 
            allowing CNNs to learn hierarchical representations of activities. By processing consecutive frames, temporal 
            dynamics are captured, enabling accurate activity recognition. CNNs excel in recognizing complex patterns, making 
            them effective for identifying diverse human activities such as walking, running, and cycling. This approach revolutionizes 
            video analysis by automating the recognition process, with applications spanning healthcare, surveillance, sports 
            analysis, and human-computer interaction.</p>
          <p className='flex justify-center text-4xl'>Working of Convolutional neural networks</p>
          <div className='flex justify-center my-10'><img src={cnn} alt="" className='w-5/6' /></div>
          <p className='p-4'>            
            Convolutional neural networks are distinguished from other neural networks by their superior performance with image, 
            speech, or audio signal inputs. They have three main types of layers, which are:
            <ul className='p-4 list-disc list-inside'>
              <li>Convolutional layer</li>
              <li>Pooling layer</li>
              <li>Fully-connected (FC) layer</li>
            </ul>
            The convolutional layer is the first layer of a convolutional network. While convolutional layers can be followed by 
            additional convolutional layers or pooling layers, the fully-connected layer is the final layer. With each layer, the 
            CNN increases in its complexity, identifying greater portions of the image. Earlier layers focus on simple features, 
            such as colors and edges. As the image data progresses through the layers of the CNN, it starts to recognize larger 
            elements or shapes of the object until it finally identifies the intended object.
          </p>
          <hr className='border-none py-8' />

          <div className='flex justify-center'><h2 id='team'>OUR TEAM</h2></div>
          <p className='px-28 py-10 text-center text-lg text-gray-600'>Get to know the brilliant minds behind HAR! A team of fresh minds, innovators, and problem-solvers. We're on a mission to reshape how we perceive the world, and we're always up for any challenge that comes our way.</p>
          <div className='grid grid-flow-col place-content-center gap-7 w-full my-5'>
            {
              team.map((member) => {
                return <MemberCard member={member} />;
              })
            }
          </div>
        </div>
      </div>
      <footer id='contact' className='py-10 bg-gray-700'>
        <div className='grid grid-flow-col items-start text-white'>
          <div className='grid grid-flow-row justify-items-center'>
            <img src={locationIcon} alt="" className='w-10 h-10' />
            <span className='pt-3 font-bold text-xl'>ADDRESS</span>
            <p className='pt-2 font-semibold'>Gokhalenagar Office</p>
            <p className='text-center font-thin'>
              2nd floor Sweatless GYM,<br />
              building in front of Sarthak building,<br />
              Ekta Nagar Housing Society,<br />
              Janwadi, Gokhalenagar,<br /> 
              Pune, Maharashtra 411016
            </p>
            <p className='pt-2 font-semibold'>PES MCOE</p>
            <p className='text-center font-thin'>
              GRGW+F5J, 1186/A, Off J.M. Road,<br />
              Shivaji nagar, Modern Engineering<br />
              College Rd, Shivajinagar,<br />
              Pune, Maharashtra 411005
            </p>
          </div>

          <div className='grid grid-flow-row justify-items-center'>
            <img src={phoneIcon} alt="" className='w-10 h-10' />
            <p className='pt-3 font-bold text-xl'>PHONE</p>
            <p className='pt-2 font-semibold'>Shreyash Madake</p>
            <p className='font-thin'>+91 9829230028</p>
            <p className='pt-2 font-semibold'>Ashutosh Kokate</p>
            <p className='font-thin'>+91 9829230028</p>
            <p className='pt-2 font-semibold'>Harshavardhan Patil</p>
            <p className='font-thin'>+91 9829230028</p>
            <p className='pt-2 font-semibold'>Yash Bhandure</p>
            <p className='font-thin'>+91 9423803119</p>
          </div>

          <div className='grid grid-flow-row justify-items-center'>
            <img src={emailIcon} alt="" className='w-10 h-10' />
            <p className='pt-3 font-bold text-xl'>EMAIL</p>
            <p className='pt-2 font-semibold'>Shreyash Madake</p>
            <p className='font-thin'>shreyash_madake@moderncoe.edu.in</p>
            <p className='pt-2 font-semibold'>Ashutosh Kokate</p>
            <p className='font-thin'>ashutosh_kokate@moderncoe.edu.in</p>
            <p className='pt-2 font-semibold'>Harshavardhan Patil</p>
            <p className='font-thin'>harshavardhan_patil@moderncoe.edu.in</p>
            <p className='pt-2 font-semibold'>Yash Bhandure</p>
            <p className='font-thin'>yash_bhandure@moderncoe.edu.in</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
