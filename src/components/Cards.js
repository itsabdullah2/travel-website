import "./Cards.css";
import CardItem from "./CardItem";
import Img2 from "../assets/imgs/img-2.jpg";
import Img1 from "../assets/imgs/img-1.jpg";
import Img3 from "../assets/imgs/img-3.jpg";
import Img7 from "../assets/imgs/img-7.jpg";
import Img4 from "../assets/imgs/img-4.jpg";

function Cards() {
  return (
    <div className="mx-5 mb-16">
      <h1 className="text-4xl md:text-6xl text-center mt-12 mb-20">
        Check out these EPIC destination
      </h1>
      <div className="cards-wrapper mt-5 flex flex-col items-center">
        <ul className="cards-items flex items-center flex-col md:flex-row gap-7">
          <CardItem
            to="/pricing"
            src={Img1}
            label="Adventure"
            text="Explore the hidden waterfall deep inside the Amazon jungle"
          />
          <CardItem
            to="/services"
            src={Img7}
            label="Luxury"
            text="Travel through the Islands of Bali in a Private Cruise"
          />
        </ul>
      </div>
      <div className="cards-wrapper mt-5 flex items-center">
        <ul className="cards-items flex flex-col md:flex-row gap-7">
          <CardItem
            to="/sign-up"
            src={Img3}
            label="Mystery"
            text="Set Sail in the Atlantic Ocean Visiting"
          />
          <CardItem
            to="/about"
            src={Img2}
            label="Adventure"
            text="Experience Football on Top of the Himalayan Mountains"
          />
          <CardItem
            to="/products"
            src={Img4}
            label="Adrenaline"
            text="Ride through the Sahara Desert on a guided camel tour"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
