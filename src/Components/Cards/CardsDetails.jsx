
const CardsDetails = ({card}) => {
  const {card_cover_img , card_unique_word ,card_title} = card || {}
    return (
        <div >
            <div className="card h-80 max-w-lg bg-base-100 shadow-xl">
                <figure><img src={card_cover_img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title bg-slate-600 text-white p-2 rounded-lg w-[150px] lg:w-[55%]">{card_unique_word}</h2>
                    <p>{card_title}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default CardsDetails;