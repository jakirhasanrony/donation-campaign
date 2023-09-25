import CardsDetails from "./CardsDetails";

const Cards = ({cards}) => {
 
    return (
        <div className="flex justify-center items-center p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6  gap-5">
            {
               cards?.map( card => <CardsDetails key={card.card_id} card={card}
               ></CardsDetails> ) 
            }
        </div>
        </div>
    );
};

export default Cards;