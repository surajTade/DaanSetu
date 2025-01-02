import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';

function Hero2() {
    return (
        <div className="hero2">
            <div className=" flex flex-col bg-white ml-[20vh] mt-[12vh] mb-[20vh] p-11" >

                {/* Heading */}

                <p className="text-gray-900 text-base font-medium mb-11">MISSION BRIDGE</p>

                {/* Tagline */}

                <div className=" text-black flex flex-col text-5xl font-semibold ">
                    <div className=" flex flex-row justify-start">Help the&nbsp;<p className="text-cyan-700">Needy</p>,<p className="text-cyan-700">&nbsp;Givers</p>&nbsp;and</div>
                    <p>Helping hands of the</p>
                    <p className=" flex flex-row justify-start"><p className="text-cyan-700">society</p>.</p>
                </div>

                {/* Content */}

                <div className='flex flex-row justify-start items-center mt-3'>
                    <div className="flex flex-row justify-start mt-10">
                        <ul className="flex flex-col text-gray-900 text-base font-medium mr-11">
                            <li className="flex flex-row"><p className="text-cyan-700">22,690&nbsp;</p>Donations have been</li>
                            <li className="mb-3">verified and still active.</li>
                            <li className="flex flex-row"><p className="text-cyan-700">6,450&nbsp;</p>Donations have been</li>
                            <li>distributed to desaster-</li>
                            <li className="mb-3">affected areas.</li>
                            <li className="flex flex-row"><p className="text-cyan-700">1.4 Billion&nbsp;</p>total funds raised</li>
                            <li>so far.</li>
                        </ul>

                        <ul className="flex flex-col text-gray-900 text-base font-medium ml-11 mr-11">
                            <li className="flex flex-row"><p className="text-cyan-700">10,517&nbsp;</p>Donations have been</li>
                            <li className="mb-3">distributed to the needy.</li>
                            <li className="flex flex-row"><p className="text-cyan-700">5,058&nbsp;</p>donations were</li>
                            <li>distributed to social foundations</li>
                            <li className="mb-3">and orphanges.</li>
                            <li className="flex flex-row"><p className="text-cyan-700">4,803&nbsp;</p>donations have been</li>
                            <li>distributed to people in</li>
                            <li>emergency situations</li>
                        </ul>
                    </div>

                    {/* Image */}

                    <img src={img1} alt="donation" className="w-[52vh] h-[52vh] ml-[10vh] mt-1" />
                </div>
            </div>
            {/* contact email */}

            <div className="relative mx-[10%] mb-[10vh] ">
                <img src={img2} alt="contact" className="w-full" />
                <div className="flex flex-col justify-start absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white ">
                    <p className='font-medium text-lg mb-1'>EMAIL</p>
                    <p className='font-semibold text-3xl'>contact.daansetu@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Hero2