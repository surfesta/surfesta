import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Card.scss";
import CardContent from "../../molecule/main/CardContent";
import CardButtons from "../../molecule/main/CardButtons";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Card({ event }) {
  const dispatch = useDispatch();
  const [isLoad, setIsLoad] = useState(false);
  const eventId = event._id;
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    card && card.addEventListener(LOAD_TYPE, loadCard);

    return () => {
      card && card.removeEventListener(LOAD_TYPE, loadCard);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold: 0.35 });
    }
    cardRef.current && observer.observe(cardRef.current);
  }, []);

  const goToEventDetail = () => {
    dispatch(push(`/event/${eventId}`));
  };

  const loadCard = () => setIsLoad(true);

  return (
    <div className="card-wrap" ref={cardRef}>
      {!isLoad && (
        <div className="loading-wrap">
          <span></span>
        </div>
      )}

      {isLoad && (
        <>
          <div onClick={goToEventDetail}>
            <CardContent event={event} />
          </div>
          <CardButtons event={event} />
        </>
      )}
    </div>
  );
}

let observer = null;
const LOAD_TYPE = "loadCard";

function onIntersection(entries, io) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_TYPE));
    }
  });
}
