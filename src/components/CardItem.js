import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <li className="cards-item bg-white rounded-lg">
      <Link to={props.to} className="cards-link w-full">
        <figure
          className="cards-figure overflow-hidden relative rounded-lg"
          data-category={props.label}
        >
          <img
            src={props.src}
            className="max-w-full w-full duration-300 transition-all ease-out hover:scale-110"
            alt="Box-Pic"
            loading="lazy"
          />
        </figure>
        <div className="heading">
          <h5 className="text-black pt-5 pb-7 px-7 font-medium">
            {props.text}
          </h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
