import { useEffect, useState } from "react";
import DonatedItemCard from "./DonatedItemCard";

const Donation = () => {


    const [ishShowAll, setIsShowAll] = useState(false);
    const [donatedItem, setDonatedItem] = useState([]);
    const [notFound, setNotFound] = useState(false);
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated'));
        if (donatedItems) {
            setDonatedItem(donatedItems)
        }
        else {

            setNotFound('No Data Found')
        }

    }, [])

    return (
        <div>
            {
                notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> :
                    <div >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center px-28">
                            {
                                ishShowAll? donatedItem.map(card => <DonatedItemCard key={card.card_id} card={card}></DonatedItemCard>)

                                : donatedItem.slice(0,4).map(card => <DonatedItemCard key={card.card_id} card={card}></DonatedItemCard>)
                            }
                        </div>
                      <div className="flex justify-center items-center my-5">
                      <button onClick={()=>setIsShowAll(!ishShowAll)} className="btn btn-accent ">{
                        ishShowAll? "See Less" : "See All"
                      }</button>
                      </div>

                    </div>
            }
        </div>
    );
};

export default Donation;