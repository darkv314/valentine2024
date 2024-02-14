import { createFileRoute } from '@tanstack/react-router'
import us1 from '../assets/images/us/us (1).jpeg'
import us2 from '../assets/images/us/us (2).jpeg'
import us3 from '../assets/images/us/us (3).jpeg'
import us4 from '../assets/images/us/us (4).jpeg'
import us5 from '../assets/images/us/us (5).jpeg'
import us6 from '../assets/images/us/us (6).jpeg'
import us7 from '../assets/images/us/us (7).jpeg'
import us8 from '../assets/images/us/us (8).jpeg'
import us9 from '../assets/images/us/us (9).jpeg'
import us10 from '../assets/images/us/us (10).jpeg'
import us11 from '../assets/images/us/us (11).jpeg'
import us12 from '../assets/images/us/us (12).jpeg'
import us13 from '../assets/images/us/us (13).jpeg'
import us14 from '../assets/images/us/us (14).jpeg'
import us15 from '../assets/images/us/us (15).jpeg'
import us16 from '../assets/images/us/us (16).jpeg'
import us17 from '../assets/images/us/us (17).jpeg'
import us18 from '../assets/images/us/us (18).jpeg'
import us19 from '../assets/images/us/us (19).jpeg'
import us20 from '../assets/images/us/us (20).jpeg'
import us21 from '../assets/images/us/us (21).jpeg'
import us22 from '../assets/images/us/us (22).jpeg'
import us23 from '../assets/images/us/us (23).jpeg'
import us24 from '../assets/images/us/us (24).jpeg'
import us25 from '../assets/images/us/us (25).jpeg'
import us26 from '../assets/images/us/us (26).jpeg'
import us27 from '../assets/images/us/us (27).jpeg'
import us28 from '../assets/images/us/us (28).jpeg'
import us29 from '../assets/images/us/us (29).jpeg'
import us30 from '../assets/images/us/us (30).jpeg'
import GalleryItem from '../components/GalleryItem'
import { useEffect, useState } from 'react'
import { IconoirProvider, Xmark } from 'iconoir-react'

const Us = () => {
  const images = [
    us1, us2, us3, us4, us5, us6, us7, us8, us9, us10, us11, us12, us13, us14, us15, us16, us17, us18, us19, us20, us21, us22, us23, us24, us25, us26, us27, us28, us29, us30
  ]
  const [modalOpen, setModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState('')

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modalOpen]);

  const modalClick = () => {
    setModalOpen(false)
  }

  return (
    <>
      {modalOpen && <div onClick={() => modalClick()} className="flex fixed bottom-0 left-0 right-0 h-[100dvh] w-[100%] bg-[#0000008c] top-0 z-10 max-h-[100vh] items-center justify-center">
        <img onClick={(e) => e.stopPropagation()} src={activeImage} alt="Active image" className='object-contain h-[80%] rounded-lg' />
        <button>
          <IconoirProvider>
            <Xmark onClick={() => modalClick()} className='absolute top-4 right-4 text-white' fontSize={32} />
          </IconoirProvider>
        </button>

      </div>}
      <div style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)', overflow: `${modalOpen ? 'hidden' : 'none'}` }} className='grid p-4 w-full gap-8 items-center justify-items-center'>
        {
          images.map((image, index) => {
            return (
              <GalleryItem
                onClick={() => { setModalOpen(true); setActiveImage(image) }}
                key={index}
                image={image}
              />
            )
          })
        }
      </div>
    </>
  )
}

export const Route = createFileRoute('/us')({
  component: Us
})