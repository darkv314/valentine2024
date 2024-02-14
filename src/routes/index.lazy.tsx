import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import yippe from '../assets/audio/yippe.m4a'

const MyValentine = () => {

  const sadPhrases = [
    'But, but, but... 🥺',
    "I'll get you a cat 🥺",
    'Really? 😢',
    'I will go cry now 😭',
    'What about the economy? 😭',
    'What about the children? 😭',
    "What's gonna happpen to our kitchen? 💔",
    'IMMA KMS 😭',
  ]
  const [isNoPressed, setIsNoPressed] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(sadPhrases[Math.floor(Math.random() * sadPhrases.length)]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audio = new Audio(yippe);


  const noClick = () => {
    setIsNoPressed(true);
    setCurrentPhrase(sadPhrases[currentIndex]);
    setCurrentIndex((currentIndex) => currentIndex + 1);
    if (currentIndex === sadPhrases.length - 1) {
      setCurrentIndex(0);
    }
  }

  const yesClick = () => {
    audio.play();
  }

  return (
    <div className='w-[70%] flex flex-col justify-center items-center gap-8'>
      <h1 className='text-6xl'>Do you want to be my Valentine? <br /> 🥺💜💜💜</h1>
      <div className='flex gap-8'>
        <Link to={'menu'}>
          <button onClick={yesClick} className='bg-[#9ac09e] text-[#F7FFF6] py-2 px-8 rounded-lg'>
            Yes
          </button>
        </Link>
        <button onClick={noClick} className='bg-[#E85F5C] text-[#F7FFF6] py-2 px-8 rounded-lg'>
          {isNoPressed ? currentPhrase : 'No'}
        </button>
      </div>
    </div>
  )
}

export const Route = createLazyFileRoute('/')({
  component: MyValentine
})
