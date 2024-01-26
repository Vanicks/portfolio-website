import TimelineCard from './TimelineSection/TimelineCard';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";

export default function Timeline() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-2xl mr-2" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <ol className="relative border-s-2 border-gray-200 dark:border-gray-700">                  
              <TimelineCard 
                timespan='2022-2024' 
                title='Senior Highschool Student' 
                company='Naga City School of Arts and Trades' 
                icon='/ncsat_logo.png'
                description={`Though I didn't follow the traditional computer science route, my technical background fueled by a TVL program in automotive technology didn't stop me from diving into the world of code.`} 
                current={true}
              />
              <TimelineCard 
                timespan='2018-2022' 
                title='Junior Highschool Student' 
                company='University of Nueva Caceres' 
                icon='/unc_logo.png'
                description='I completed my junior highschool education, where i studied core knowledge, preparing me for senior highschool.' 
                current={false}
              />
          </ol>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-2xl mr-2" />
            <h2 className="text-2xl font-semibold">Recent Projects</h2>
          </div>
          <ol className="relative border-s-2 border-gray-200 dark:border-gray-700">                  
            <TimelineCard 
              timespan='2021-2024' 
              title='Discord Bot Developer'
              company='Thighs Discord Server' 
              icon='/thighs_logo.jpg'
              description='A discord server dedicated for genshin impact addicts' 
              current={true}
            />
          </ol>
        </div>
      </div>
    </>
  )
}
