import { useState, useEffect, useRef } from 'react'
import { FaStar } from "react-icons/fa"
import { GoDotFill } from "react-icons/go";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"


const comments = [
  {
    text: 'I\'ve always struggled with creating visually stunning presentations that captivate my audience. Thanks to this AI-powered platform, I can now turn my ideas into polished slideshows effortlessly. It\'s a game-changer for my marketing presentations!',
    author: 'Zuckerberg Temitope',
    post: 'Project Manager | Facebook',
    src: './images/fivestar.png',
  },
  {
    text: 'As an educator, I\'m constantly looking for ways to engage my students and make learning more interactive. This website has revolutionized the way I create presentations for my lessons.',
    author: 'Elon Rahmon',
    post: 'Lead Designer | Tesla',
    src: './images/fourstar.png',

  },
  {
    text: 'In the fast-paced world of startups, every pitch presentation counts. This AI presentation builder has been instrumental in helping me craft compelling pitches that resonate with investors.',
    author: 'Benson Gates',
    post: 'CTO | Apple',
    src: './images/fourstar.png',

  },

]
export default function Comment() {

  const [currentCommentIndex, setCurrentCommentIndex] = useState(0)
  const timeoutRef = useRef(null);



  const handleNext = () => {
    if (currentCommentIndex < comments.length - 1) {
      setCurrentCommentIndex(currentCommentIndex + 1);
    }
 };

 const handlePrevious = () => {
    if (currentCommentIndex > 0) {
      setCurrentCommentIndex(currentCommentIndex - 1);
    }
 };

 const currentComment = comments[currentCommentIndex]

const goToSlide = (index) => {
   currentComment(index)
}

const resetTimeout = () => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
};

useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(() => {
    setCurrentCommentIndex((prevIndex) =>
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
  }, 3500);

  return () => {
    resetTimeout();
  };
}, [currentCommentIndex])

  return (
    <div className='pt-[2em]'>
      <div className='bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-800 md:h-[410px] h-[500px] flex-wrap'>
        <section style={{backgroundImage: 'url(/src/images/Lines.svg.png)', backgroundRepeat: 'repeat', backgroundSize: 'contain', backgroundPosition: 'center', height: '558px'}}>
         <div className='max-w-[1240px] mx-auto md:pl-20 p-4 py-20 w-full' >
       
        <div className='max-w-[900px] relative mx-auto text-center text-xl text-white font-primaryThin gap-[32px] text-[16px] tracking-wider'> 
          <img src={currentComment.src} alt="star" className='mx-auto pb-[25px]' />
               <p className='font-primaryRegular text-[17px] leading-8'>{currentComment.text}</p>
        <p className='pt-9 pb-1 font-primaryMedium text-[15px] tracking-widest'>{currentComment.author}</p>
        <p className='pb-7 text-[#fd4] font-primaryRegular text-[15px]'>{currentComment.post}</p>
         
        </div>

         <div className='flex justify-center'>
          {comments.map((comment, index) => (
             <div key={index} onClick={() => goToSlide(index)} className='text-sm text-[#fd4] cursor-pointer place-content-center'>
              <GoDotFill />
             </div>
          ))}
         </div>

       <div className='max-w-[1090px] w-full flex justify-between items-center mt-[-150px]'>
       <FaArrowCircleLeft  size={35} className='text-[#fd4]  max-w-[1240px] cursor-pointer' onClick={handlePrevious}/> 

      <FaArrowCircleRight size={35} className='text-[#fd4] cursor-pointer max-w-[1240px]' onClick={handleNext}/>
       </div>

         </div>
        
         </section>
      </div>

      {/* <div className='text-[#fd4] relative bottom-[290px] right-[-260px] max-w-[1240px]'> */}
      {/* </div> */}
    </div>
  )
}
