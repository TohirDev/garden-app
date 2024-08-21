import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Button from "../../../../Components/Button";
import { TTrees } from "../../../../Types";
import CardItem from "./CardItem";
import "./index.css";

interface IPopCarsProps extends Omit<TTrees, "className" | "thumbnail"> {
  handleClosePopup: VoidFunction;
  handleMoreClick: VoidFunction;
}

const PopupCard = ({
  title,
  images,
  city,
  guiltyPerson,
  id,
  location,
  region,
  typeTree,
  handleClosePopup,
  handleMoreClick,
}: IPopCarsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="overlay">
      <div className="popup-card">
        <div className="content">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <CiCircleInfo size={30} />
            <p style={{ marginLeft: "10px" }}>Yashil park malumoti</p>
          </div>
          <IoMdClose
            onClick={handleClosePopup}
            size={30}
            color="yellow"
            cursor={"pointer"}
          />
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={images[currentImageIndex]}
            alt={title}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <button
            onClick={handlePrevClick}
            className="slider__button slider__button-left"
          >
            <MdKeyboardArrowLeft size={20} />
          </button>
          <button
            onClick={handleNextClick}
            className="slider__button slider__button-right"
          >
            <MdKeyboardArrowRight size={20} />
          </button>
        </div>
        <div style={{ padding: "0 20px" }}>
          <CardItem title={"ID raqam"} info={id} />
          <CardItem title={"Viloyat"} info={region} />
          <CardItem title={"Tuman"} info={city} />
          <CardItem title={"Daraxt turi"} info={typeTree} />
          <CardItem title={"Masul tashkilot"} info={guiltyPerson} />
          <CardItem title={"Manzil"} info={location} />
          <Button
            size="sm"
            onClick={handleMoreClick}
            style={{ marginTop: "20px" }}
          >
            More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
