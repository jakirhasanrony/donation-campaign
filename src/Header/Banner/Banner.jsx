

const Banner = () => {
    return (
        <div >
             <section className="flex justify-center items-center h-[50vh]" >
                <div>
                    <h1 className="text-3xl text-center md:text-4xl lg:text-6xl font-bold">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center my-10">

                        <input type="text" placeholder="Search here...." className="input input-bordered input-error w-full max-w-xs" />
                        <button className="btn ml-[-10px] bg-red-600 text-white">Search</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;