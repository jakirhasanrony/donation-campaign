import { Link } from "react-router-dom";

const CardsDetails = ({ card }) => {
    const { card_cover_img, card_unique_word, card_title, bg_color, text_color, card_id } = card || {}

    const cardStyle = {
        backgroundColor: bg_color,
        color: text_color,
    }
    const cardUniqueWordBgStyle = {
        backgroundColor: bg_color,
    }

   
    return (
        <div >
            <Link to={`/card/${card_id}`} className="card-link">
                <div className="card h-80 max-w-lg shadow-xl" style={cardStyle}>
                    <figure ><img  src={card_cover_img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title p-2 rounded-lg w-[150px] lg:w-[55%]" style={cardUniqueWordBgStyle}>{card_unique_word}</h2>
                        <p>{card_title}</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardsDetails;