import { createFileRoute } from '@tanstack/react-router'
import { HeartSolid, IconoirProvider } from 'iconoir-react'

const Valentine = () => {
    let colorHearts = ['#732DB4', '#E56B6F', '#E5989B']
    return (
        <div className='flex flex-col gap-16 items-center'>
            <div className='bg-slate-100 rounded-lg p-5'>
                <h1>Awi :3 {'<3'}</h1>
            </div>
            <div className="relative flex flex-col gap-8 items-center justify-center bg-slate-100 rounded-lg p-5">
                <h1 className="text-4xl">I love you so much {'<3'}</h1>
                <p>
                    I just wanted to say that I love you so much and I'm so grateful to have you in my life. You are the best thing that has ever happened to me and I'm so happy to be with you. Since I met you I have been the happiest woman in the universe, and I hope I can make you feel like that for the rest of our lives. I seriously can't express with words how you make me feel, but I hope you can feel it in my actions and in my eyes. I love you so much, my love. {'<3'}
                </p>
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
                                    bottom: `${(colorHearts.length - index) * 0.25}rem`,
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
                                    bottom: `${(colorHearts.length - index) * 0.25}rem`,
                                    left: `${(colorHearts.length - index) * 0.25}rem`
                                }} className={`absolute rotate-[-140deg]`} color={color} fontSize={16 + index * 4} />
                            </IconoirProvider>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export const Route = createFileRoute('/valentine')({
    component: Valentine
})