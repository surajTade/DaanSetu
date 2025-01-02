function Hero() {
    return (
        <div className="flex flex-col justify-center items-center text-white bg-black min-h-screen">
            <div className="flex flex-col justify-center items-center mb-6">
                <div className="flex flex-row justify-center text-5xl font-semibold items-center mb-2">
                    <p className="text-cyan-700 text-5xl font-semibold">Happiness</p>
                    <p className="text-5xl font-semibold ml-2">comes from</p>
                </div>
                <p className="text-cyan-700 text-5xl font-semibold">your action.</p>
            </div>
            <p className="mb-10">Be a part of the breakthrough and make someone's dream come true</p>
            <button className="bg-cyan-700 text-white p-2 rounded-3xl w-40 mt-4 hover:bg-cyan-600 hover:shadow-lg transform hover:scale-105 transition duration-300">Donate Now</button>
        </div>
    );
}

export default Hero;
