
function Contact(){
    return(
        <div className="flex flex-col justify-center items-center mt-5">
            <h1 className="text-4xl font-medium text-zinc-900">Contact Us</h1>
            <div className="container bg-slate-100 text-red-500 flex flex-col text-justify items-baseline p-10 mt-10 space-y-5 ">
                <h1 className="text-2xl font-semibold ">Email : MyCompany2022@yahoo.com</h1>
                <h1 className="text-2xl font-semibold ">Mobile : +91 - 55555 66666</h1>
                <h1 className="text-2xl font-semibold ">Address : 311-B,Safal Pegasus, Prahlad Nagar, Ahmedabad</h1>
            </div>
        </div>
    );
}

export default Contact;