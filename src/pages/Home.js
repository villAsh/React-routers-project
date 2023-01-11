import home from '../images/Home.jpg';
function Home() {

    return (
        <div className="flex items-center">
            <div className="img flex-[0.5]">
                <img src={home} alt="home" className='w-[50vw] h-[80vh]' />
            </div>
            <div className='flex-[0.5] inline-flex flex-col space-y-5'>
                <h1 className='text-5xl font-bold text-fuchsia-500'>My Company</h1>
                <p className='font-medium text-xl text-indigo-800'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

            </div>
        </div>
    );
}

export default Home;