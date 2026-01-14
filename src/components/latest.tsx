import jump_cover from "../assets/img/jump_cover.png"
import soundwave from "../assets/img/soudwave.png"
import jump_disk from "../assets/img/jump_disk.png"

function Latest(){
    return (
            <div className="bg-gradient-to-b from-[#6A3F4A] to-[#170C10] py-20 w-screen">
                <h1 className="text-center font-[primetime] m-20 text-6xl text-white"> Latest Release </h1>
                <div className="w-[80%] m-auto flex justify-between gap-20">

                        <div className="relative w-[382]">
                            <img src={jump_cover} className="relative z-20" />
                            <img src={jump_disk} className="absolute top-[0] bottom-[0] left-[50%] w-[500px] z-10 "/>
                        </div>
                        

                    <div className="flex flex-col justify-between h-[382px]">
                        <div>
                            <p className="font-[primetime] text-[#F79AAF] text-center text-6xl mb-4">Jump</p>
                            <div className="w-full border-2 border-[#F79AAF]"></div>
                            <p className="font-[primetime] text-[#F79AAF] text-center text-6xl">Blackpink</p>
                        </div>
                        <img src={soundwave} alt="" />
                    </div>
                </div>
                
            </div>
    )
}

export default Latest