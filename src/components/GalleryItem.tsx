import { IconoirProvider, HeartSolid } from "iconoir-react"
// import { useState } from "react";

type MenuItemProps = {
    image: string;
    title?: string;
}

let colorHearts = ['#732DB4', '#E56B6F', '#E5989B']


function GalleryItem({ image, title }: MenuItemProps) {

    // const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        // setModalOpen(true);
    }


    return (
        <>
            {/* {modalOpen && <div className="fixed h-[100dvh] w-[100%] bg-[#0000008c] top-0 z-10 max-h-[100vh]"></div>} */}


            <div onClick={onClick} className="flex flex-col gap-2 bg-[#f9f5ff] p-4 justify-center items-center relative rounded-md hover:scale-105 transition-all cursor-pointer">
                <img className="w-[200px] h-[200px] object-cover object-center" src={image} alt={`Menu ${title}`} />
                {
                    title && <h2 className="font-bold text-lg text-center">{title}</h2>
                }
                {
                    colorHearts.map((color, index) => {
                        return (
                            <IconoirProvider key={index}>
                                <HeartSolid style={{
                                    zIndex: colorHearts.length - index,
                                    top: `${(colorHearts.length - index) * 0.25}rem`,
                                    right: `${(colorHearts.length - index) * 0.25}rem`
                                }} className={`absolute rotate-[30deg]`} color={color} fontSize={16 + index * 4} />
                            </IconoirProvider>
                        )
                    }
                    )
                }
                {
                    colorHearts.map((color, index) => {
                        return (
                            <IconoirProvider key={index}>
                                <HeartSolid style={{
                                    zIndex: colorHearts.length - index,
                                    top: `${(colorHearts.length - index) * 0.25}rem`,
                                    left: `${(colorHearts.length - index) * 0.25}rem`
                                }} className={`absolute rotate-[-30deg]`} color={color} fontSize={16 + index * 4} />
                            </IconoirProvider>
                        )
                    }
                    )
                }
                {
                    colorHearts.map((color, index) => {
                        return (
                            <IconoirProvider key={index}>
                                <HeartSolid style={{
                                    zIndex: colorHearts.length - index,
                                    bottom: `${(colorHearts.length - index + (title ? 8 : 0)) * 0.25}rem`,
                                    right: `${(colorHearts.length - index) * 0.25}rem`
                                }} className={`absolute rotate-[140deg]`} color={color} fontSize={16 + index * 4} />
                            </IconoirProvider>
                        )
                    }
                    )
                }
                {
                    colorHearts.map((color, index) => {
                        return (
                            <IconoirProvider key={index}>
                                <HeartSolid style={{
                                    zIndex: colorHearts.length - index,
                                    bottom: `${(colorHearts.length - index + (title ? 8 : 0)) * 0.25}rem`,
                                    left: `${(colorHearts.length - index) * 0.25}rem`
                                }} className={`absolute rotate-[-140deg]`} color={color} fontSize={16 + index * 4} />
                            </IconoirProvider>
                        )
                    }
                    )
                }
            </div>
        </>
    )
}

export default GalleryItem
