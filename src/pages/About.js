import About1 from '../images/about1.jpg';

function About() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-medium text-indigo-800 mt-5">About Us</h1>
            <div className="container inline-flex justify-center items-center mt-5 bg-zinc-100 p-5">
                <div className="text-xl font-medium">
                    <p className='text-justify mr-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
                <div className="hover:animate-pulse">
                    <img src={About1} alt="About - 1" width={500} />
                </div>
            </div>
            <div className="container inline-flex justify-center items-center bg-zinc-100 p-5">
                <div className="text-xl font-medium order-2">
                    <p className='text-justify ml-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                      nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
                <div className="hover:animate-pulse">
                    <img src={About1} alt="About - 1" width={500} />
                </div>
            </div>
        </div>
    );

}

export default About;