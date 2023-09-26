
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
        <div className="flex justify-center p-6 items-center w-[90vw]">
            <div className="card bg-base-100 rounded-lg shadow-xl">
                <div className="relative">
                    <figure>
                        <img className="rounded-lg h-[50vh] w-[1150px]" src={card_cover_img} alt="Shoes" />

                    </figure>
                    <div className="absolute bottom-3 left-[17%] bg-black bg-opacity-rgba(11, 11, 11, 0.50)  h-[10vh] w-[58vw] rounded-lg">
                        <button onClick={handleDonateBtn}
                        style={SingleCardDetailsStyle} className="mt-4 ml-6  text-white btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm">Donate {card_money}</button>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:ml-[15%] my-10" >
                   <div>
                   <h2 className="card-title pl-3">{card_title}</h2>
                    <p className="pl-3 my-4 w-[83%]">{card_details}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCardDetails;