import { useState, useRef, useEffect } from "react"
import jump_cover from "../assets/img/jump_cover.png"
import soundwave from "../assets/img/soudwave.png"
import jump_disk from "../assets/img/jump_disk.png"
import jump_song from "../assets/song/Jump.mp3"
import "./latest.css"

function Latest(){
    const [isSpinning, setIsSpinning] = useState(false)
    const audioRef = useRef(new Audio(jump_song))

    const handleDiskClick = () => {
        setIsSpinning(!isSpinning)
    }

    useEffect(() => {
        if (isSpinning) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isSpinning])

    return (
            <div className="py-20 w-screen">
                <h1 className="text-center font-[primetime] m-20 text-6xl text-white"> Latest Release </h1>
                <div className="w-[80%] m-auto flex justify-between gap-20">

                        <div className="relative w-[382] cursor-pointer" onClick={handleDiskClick} >
                            <img src={jump_cover} className="relative z-20" />
                            <img 
                                src={jump_disk} 
                                className={`absolute top-[0] bottom-[0] left-[50%] w-[500px] z-10 cursor-pointer ${isSpinning ? 'spin' : ''}`}
                            />
                        </div>
                        

                    <div className="flex flex-col justify-between h-[382px]">
                        <div>
                            <p className="font-[primetime] text-[#F79AAF] text-center text-6xl mb-4">Jump</p>
                            <div className="w-full border-2 border-[#F79AAF]"></div>
                            <p className="font-[primetime] text-[#F79AAF] text-center text-6xl">Blackpink</p>
                        </div>
                        <svg 
                            width="100%" 
                            height="80" 
                            viewBox="0 0 448 80" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-8"
                        >
                            {[
                                {x: 0, height: 20, delay: 0},
                                {x: 16, height: 35, delay: 0.1},
                                {x: 32, height: 15, delay: 0.05},
                                {x: 48, height: 25, delay: 0.15},
                                {x: 64, height: 45, delay: 0.08},
                                {x: 80, height: 60, delay: 0.12},
                                {x: 96, height: 75, delay: 0.06},
                                {x: 112, height: 55, delay: 0.14},
                                {x: 128, height: 35, delay: 0.09},
                                {x: 144, height: 20, delay: 0.11},
                                {x: 160, height: 40, delay: 0.07},
                                {x: 176, height: 65, delay: 0.13},
                                {x: 192, height: 80, delay: 0.04},
                                {x: 208, height: 70, delay: 0.16},
                                {x: 224, height: 50, delay: 0.1},
                                {x: 240, height: 30, delay: 0.08},
                                {x: 256, height: 45, delay: 0.12},
                                {x: 272, height: 65, delay: 0.05},
                                {x: 288, height: 55, delay: 0.15},
                                {x: 304, height: 35, delay: 0.09},
                                {x: 320, height: 25, delay: 0.11},
                                {x: 336, height: 50, delay: 0.07},
                                {x: 352, height: 70, delay: 0.13},
                                {x: 368, height: 60, delay: 0.06},
                                {x: 384, height: 40, delay: 0.14},
                                {x: 400, height: 30, delay: 0.1},
                                {x: 416, height: 45, delay: 0.08},
                                {x: 432, height: 25, delay: 0.12}
                            ].map((bar, i) => (
                                <rect
                                    key={i}
                                    x={bar.x}
                                    y={(80 - bar.height) / 2}
                                    width="8"
                                    height={bar.height}
                                    rx="4"
                                    fill="#F79AAF"
                                    className={isSpinning ? 'soundwave-bar' : ''}
                                    style={{
                                        animationDelay: `${bar.delay}s`
                                    }}
                                />
                            ))}
                        </svg>
                    </div>
                </div>
                
            </div>
    )
}

export default Latest