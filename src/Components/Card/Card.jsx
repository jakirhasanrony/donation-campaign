import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleCardDetails from "./SingleCardDetails";

const Card = () => {
    const { card_id } = useParams()
    const [card, setCard] = useState({})
    const cards = useLoaderData()
    useEffect(() => {
        const selectedCard = cards?.find(card => card.card_id === card_id)
        setCard(selectedCard)
    }, [card_id, cards])

    return (
        <div>
            <SingleCardDetails card={card}></SingleCardDetails>
        </div>
    );
};

export default Card;