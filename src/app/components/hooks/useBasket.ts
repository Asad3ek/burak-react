import { useState } from "react";
import { cardItem } from "../../../lib/types/search";

const useBasket = () => {
    const cardJson: string | null = localStorage.getItem("cardData");
    const currentCard = cardJson ? JSON.parse(cardJson) : []
    const [cardItems, setCardItems] = useState<cardItem[]>(currentCard);

    // Handlers: 
    const onAdd = (input: cardItem) => {
        const exist: any = cardItems.find((item: cardItem) => item._id === input._id);
        if (exist) {
            const cardUpdate = cardItems.map((item: cardItem) =>
                item._id === input._id
                    ? { ...exist, quantity: exist.quantity + 1 }
                    : item
            );
            setCardItems(cardUpdate);
            localStorage.setItem("cardData", JSON.stringify(cardUpdate));
        }
        else {
            const cardUpdate = [...cardItems, { ...input }];
            setCardItems(cardUpdate);
            localStorage.setItem("cardData", JSON.stringify(cardUpdate));
        }
    }

    const onRemove = (input: cardItem) => {
        const exist: any = cardItems.find(
            (item: cardItem) => item._id === input._id);
        if (exist.quantity === 1) {
            const cardUpdate = cardItems.filter(
                (item: cardItem) => item._id !== input._id
            );
            setCardItems(cardUpdate);
            localStorage.setItem("cardData", JSON.stringify(cardUpdate));
        } else {
            const cardUpdate = cardItems.map((item: cardItem) =>
                item._id === input._id
                    ? { ...exist, quantity: exist.quantity - 1 }
                    : item
            );
            setCardItems(cardUpdate);
            localStorage.setItem("cardData", JSON.stringify(cardUpdate));

        }
    }

    const onDelete = (input: cardItem) => {
        const cardUpdate = cardItems.filter((item: cardItem) =>
            item._id !== input._id
        );
        setCardItems(cardUpdate);
        localStorage.setItem("cardData", JSON.stringify(cardUpdate));
    }

    const onDeleteAll = () => {
        setCardItems([]);
        localStorage.removeItem("cardData");
    }

    return {
        cardItems,
        onAdd,
        onRemove,
        onDelete,
        onDeleteAll,
    }
}

export default useBasket;