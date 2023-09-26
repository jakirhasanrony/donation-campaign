import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="flex gap-2 md:justify-between items-center mx-auto py-7 w-[90vw]">
                <div>
                    <img className="md:max-w-[200px]" src="https://i.ibb.co/PDsyctT/Logo.png" alt="" />
                </div>
                <div>
                    <ul className="flex gap-5 font-bold">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                           Donation
                        </NavLink>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                           Statistics
                        </NavLink>

                </ul>
            </div>
        </div>

        </div >
    );
};

export default Navbar;