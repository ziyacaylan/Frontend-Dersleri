import React, { useEffect, useState } from "react";
import PokemonImage from "../../assets/pokemon.png";

import { useDispatch, useSelector } from "react-redux";
import {
  openCard,
  closeCard,
  correctMatch,
  failMatch,
} from "../../redux/CardsSlice";

const Card = ({ pokemon }) => {
  const [open, setOpen] = useState(false);
  const { activeCards, cards, total } = useSelector((state) => state.cards);

  const dispatch = useDispatch();

  const toggleHandle = () => {
    total.closed > 0 && setOpen(true);
    //console.log(open);
  };

  useEffect(() => {
    open && dispatch(openCard(pokemon.id));
  }, [dispatch, open, pokemon.id]);

  useEffect(() => {
    if (activeCards.length === 2) {
      if (activeCards[0].name === activeCards[1].name) {
        pokemon.id === activeCards[0].id && dispatch(correctMatch());
        setOpen(false);
      } else {
        setTimeout(() => {
          activeCards.map((item) => dispatch(closeCard(item.id)));
          pokemon.id === activeCards[0].id && dispatch(failMatch());

          //console.log(cards);
        }, 700);
        setOpen(false);
      }
    }
  }, [activeCards, activeCards.length, cards, dispatch, pokemon.id]);

  return (
    <div
      className="w-[120px] h-[150px] flex items-center justify-center  rounded"
      onClick={toggleHandle}
    >
      <div className="group w-full h-full">
        <div
          className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
            pokemon.status &&
            "[transform:rotateY(180deg)] [backface-visibility:hidden]"
          }`}
        >
          <div className="absolute inset-0 rounded flex items-center justify-center bg-slate-200">
            <img
              src={PokemonImage}
              alt="pokemon"
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
          <div className="w-[120px] h-[150px] absolute inset-0 text-purple-700 [transform:rotateY(180deg)] [backface-visibility:hidden] rounded bg-slate-200 flex items-center justify-center">
            <div className=" w-full h-[150px] flex flex-col items-center justify-center">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-[100px] h-[100px] object-fill"
              />
              <span className="uppercase text-xs py-2 tracking-widest text-purple-700">
                {pokemon.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
