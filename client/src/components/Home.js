import React from 'react';
import { Link } from 'react-router-dom';
import { team } from '../data/team';
import { applications } from '../data/applications';
import MemberCard from './MemberCard';
import ApplicationCard from './ApplicationCard';
import HARactivity from '../assets/HARactivity.png';
import cnn from '../assets/cnn.webp';
import phoneIcon from '../assets/phone.png';
import emailIcon from '../assets/email.png';
import objectives from '../assets/objectives.png';
import purpose1 from '../assets/purpose1.png';
import purpose2 from '../assets/purpose2.png';
import harProblem from '../assets/HARproblem.png';

export default function Home() {
  return (
    <div>
      <nav className='sticky top-0 flex justify-center py-4 z-10 bg-white'>
        <ul className='flex *:transition-all text-slate-500'>
          <li className='duration-500 px-4 hover:text-slate-900'><a href='#about'>About</a></li>
          <li className='duration-500 px-4 hover:text-slate-900'><a href='#application'>Application</a></li>
          <li className='duration-500 px-4 hover:text-slate-900'><a href='#model'>Model</a></li>
          <li className='duration-500 px-4 hover:text-slate-900'><a href='#team'>Team</a></li>
          <li className='duration-500 px-4 hover:text-slate-900'><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <div className='bg-gradient-to-r from-white from-20% via-violet-300 to-red-300'>

        <div className='grid grid-flow-col place-items-center mx-28 py-32'>
          <div>
            <h1 className='font-semibold text-4xl'>Human Activity Recognition</h1>
            <p className='my-5 w-5/6'>
              Human Activity Recognition (HAR) has emerged as a crucial field at the intersection of artificial intelligence and
              machine learning. It involves the detection and classification of human actions or activities
              based on data collected.
            </p>
            <Link to={'/viaVideo'} className='px-4 py-2 rounded bg-gradient-to-r from-violet-400 to-red-300 hover:from-red-300 hover:to-violet-400 font-semibold active:bg-blue-400'>Get Started</Link>
          </div>
          <img src={HARactivity} alt="" className='w-[35rem]' />
        </div>
      </div>

      <hr id='about' className='border-none pb-8' />

      <div className='p-28 pt-16 pb-16'>
        <div className='flex justify-center mb-10'><h2>ABOUT PROJECT</h2></div>
        <h4 className='text-3xl font-semibold'>PROBLEM STATEMENT</h4>
        <div className='flex justify-between items-center my-5 text-lg'>
          <p className='w-3/5'>
            Create a real-time human activity recognition system using OpenCV and Deep Learning that should be able to idntify 
            and classify various human activities based on video footage and achieve high accuracy. The goal is to create a website 
            that can take video or url of video as input and distinguish activity and show the name of activity that was performed 
            in given video
          </p>
          <img src={harProblem} alt="" className='w-[30%]' />
        </div>
        <h4 className='text-3xl font-semibold'>PURPOSE</h4>
        <div className='my-5'>
          <div className='text-lg'>
            <div className='flex items-center my-2'>
              <img src={purpose1} alt="" className='w-28 rounded-full' />
              <p className='w-2/3 m-4'>To develop a CNN-based human action recognition (HAR) system that can achieve state-of-the-art results on a public HAR dataset. </p>
            </div>
            <div className='flex items-center my-2'>              
              <img src={purpose2} alt="" className='w-28 rounded-full' />
              <p className='w-2/3 m-4'>Implement the HAR model as a soft\Nare application that can be used to analyze video footage from a variety of sources. </p>
            </div>
          </div>
        </div>
        <h4 className='text-3xl font-semibold' style={{fontFamily: 'monospace'}}>OBJECTIVE</h4>
        <div className='grid grid-flow-col place-items-center'>
          <div className='text-lg'>
            <p className='flex items-center my-2'>
              <div><span className='px-3 py-2 bg-black text-white rounded-lg'>01</span></div>              
              <p className='m-4'>Develop a HAR system that can accurately recognize a variety of human activities.</p>
            </p>
            <p className='flex items-center my-2'>              
              <div><span className='px-3 py-2 bg-black text-white rounded-lg'>02</span></div>
              <span className='m-4'>Evaluate the performance of the HAR system on a variety of datasets. </span>
            </p>
            <p className='flex items-center my-2'>
              <div><span className='px-3 py-2 bg-black text-white rounded-lg'>03</span></div>
              <span className='m-4'>Identify the challenges and limitations of the HAR system</span>
            </p>
          </div>
          <img src={objectives} alt="" className='w-[20rem] rounded-full' />
        </div>
        <hr id='application' className='border-none py-8' />

        <div className='flex justify-center'><h2>APPLICATION</h2></div>
        <div className='grid grid-rows-2 grid-cols-3 justify-center gap-10 my-5'>
          {
            applications.map((application) => {
              return <ApplicationCard application={application} />
            })
          }
        </div>
        <hr id='model' className='border-none py-8' />

        <div className='flex justify-center'><h2>MODEL DESCRIPTION</h2></div>
        <div className='px-40 py-8 text-md text-gray-700'>
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
        </div>
        <hr id='team' className='border-none py-8' />

        <div className='flex justify-center'><h2>OUR TEAM</h2></div>
        <p className='px-28 py-10 text-center text-lg text-gray-600'>Get to know the brilliant minds behind HAR! A team of fresh minds, innovators, and problem-solvers. We're on a mission to reshape how we perceive the world, and we're always up for any challenge that comes our way.</p>
        <div className='grid grid-flow-col place-content-center gap-7 w-full my-5'>
          {
            team.map((member) => {
              return <MemberCard member={member} />;
            })
          }
        </div>
      </div>

      <footer id='contact' className='py-10 bg-gray-700'>
        <div className='flex justify-evenly text-white'>
          <div className='grid grid-flow-row justify-items-center'>
            <img src={phoneIcon} alt="" className='p-2 w-10 h-10 rounded-full bg-gray-500' />
            <p className='pt-3 font-bold text-xl'>PHONE</p>
            <p className='pt-2 font-semibold'>Shreyash Madake</p>
            <p className='font-thin text-sm'>+91 8180955091</p>
            <p className='pt-2 font-semibold'>Ashutosh Kokate</p>
            <p className='font-thin text-sm'>+91 9309879912</p>
            <p className='pt-2 font-semibold'>Harshavardhan Patil</p>
            <p className='font-thin text-sm'>+91 9518326084</p>
            <p className='pt-2 font-semibold'>Yash Bhandure</p>
            <p className='font-thin text-sm'>+91 9323803119</p>
          </div>

          <div className='grid grid-flow-row justify-items-center'>
            <img src={emailIcon} alt="" className='p-2 w-10 h-10 rounded-full bg-gray-500' />
            <p className='pt-3 font-bold text-xl'>EMAIL</p>
            <p className='pt-2 font-semibold'>Shreyash Madake</p>
            <p className='font-thin text-sm'>shreyash_madake@moderncoe.edu.in</p>
            <p className='pt-2 font-semibold'>Ashutosh Kokate</p>
            <p className='font-thin text-sm'>ashutosh_kokate@moderncoe.edu.in</p>
            <p className='pt-2 font-semibold'>Harshavardhan Patil</p>
            <p className='font-thin text-sm'>harshavardhan_patil@moderncoe.edu.in</p>
            <p className='pt-2 font-semibold'>Yash Bhandure</p>
            <p className='font-thin text-sm'>yash_bhandure@moderncoe.edu.in</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
