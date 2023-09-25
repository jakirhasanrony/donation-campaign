
const Navbar = () => {
    return (
        <div>
            <div className="flex gap-2 md:justify-between items-center mx-auto py-7 w-[90vw]">
                <div>
                    <img className="md:max-w-[200px]" src="https://i.ibb.co/PDsyctT/Logo.png" alt="" />
                </div>
                <div>
                    <ul className="flex gap-5">
                        <a href="/">Home</a>
                        <a href="/donation">Donation</a>
                        <a href="/statistics">Statistics</a>
                    </ul>
                </div>
            </div>
           
        </div>
    );
};

export default Navbar;