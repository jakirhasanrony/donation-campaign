
const SingleCardDetails = ({ card }) => {


    const { card_id, card_cover_img, card_money, card_details, card_title,  text_color } = card || {}


    const handleDonateBtn = ()=>{
        const donatedList = [];
        const donatedItems = JSON.parse(localStorage.getItem('donated'))

        if(!donatedItems){
            donatedList.push(card);
            localStorage.setItem('donated', JSON.stringify(donatedList));
        }
        else{

            const isDonated = donatedItems.find(card => card.card_id=== card_id)


            if(!isDonated){
                donatedList.push(...donatedItems, card);
                localStorage.setItem('donated', JSON.stringify(donatedList));
                alert('donated');
            }
            else{
                alert('already added')
            }

        
            

        }
    }



    const SingleCardDetailsStyle = {
        backgroundColor: text_color
    }
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card w-96 bg-base-100 rounded-lg shadow-xl">
                <div className="relative">
                    <figure>
                        <img className="rounded-lg" src={card_cover_img} alt="Shoes" />

                    </figure>
                    <div>
                        <button onClick={handleDonateBtn}
                        style={SingleCardDetailsStyle} className=" absolute bottom-3 left-6 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Donate {card_money}</button>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{card_title}</h2>
                    <p>{card_details}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleCardDetails;