
const DonatedItemCard = ({ card }) => {
    const { card_cover_img, card_unique_word, card_title, bg_color, text_color, card_id, card_money } = card || {}
    const cardStyle1 = {
        backgroundColor: bg_color,
        color: text_color,
    }
    const cardUniqueWordBgStyle1 = {
        backgroundColor: bg_color
    }
   
    const textStyle2 = {
        backgroundColor: text_color
    }

    return (
        <div >
            <div style={cardStyle1} className="card card-side bg-base-100 shadow-xl">
                <figure><img className="h-full w-[350px]" src={card_cover_img} alt="Movie" /></figure>
                <div className="card-body">
                <h2 className="card-title p-2 rounded-lg w-[150px] lg:w-[55%]" style={cardUniqueWordBgStyle1}>{card_unique_word}</h2>
              
                <p >{card_title}</p>
                <p className="font-bold ">Donate <span>{card_money}</span></p>
                    <div className="card-actions justify-start">
                        <button style={textStyle2} className="btn text-white">View details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DonatedItemCard;