import { useState } from "react";


const Banner = () => {
    const [searchText, setSearchText] = useState('');
    const myStyle = {
        background: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.95)), url('https://i.ibb.co/D9Yv294/background.png')",
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: '50vh'
       
    };

    const handleInputChange = (event) => {
        setSearchText(event.target.value); 
    };

    const handleSearchClick = () => {
        console.log('Search Text:', searchText);
        setSearchText('')

    };
    return (
        <div style={myStyle}>
            <section className="flex justify-center items-center h-[50vh]" >
                <div>
                    <h1 className="text-3xl text-black text-center md:text-4xl lg:text-6xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center my-10">

                        <input onChange={handleInputChange}  type="text" placeholder="Search here...." className="input input-bordered input-error w-full max-w-xs" />
                        <button  onClick={handleSearchClick} className="btn ml-[-10px] bg-red-600 text-white">Search</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;