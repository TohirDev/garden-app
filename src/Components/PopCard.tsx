import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { TTrees } from "../Types";

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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#319864",
            padding: "0 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
            }}
          >
            <CiCircleInfo size={30} />
            <p style={{ marginLeft: "10px" }}>Yashil park malumot</p>
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
            style={{
              position: "absolute",
              bottom: "10px",
              right: "50px",
              backgroundColor: "#319864",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {"<"}
          </button>
          <button
            onClick={handleNextClick}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              backgroundColor: "#319864",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {">"}
          </button>
        </div>
        <div style={{ padding: "0 20px" }}>
          <CardItem title={"ID raqam"} info={id} />
          <CardItem title={"Viloyat"} info={region} />
          <CardItem title={"Tuman"} info={city} />
          <CardItem title={"Daraxt turi"} info={typeTree} />
          <CardItem title={"Masul tashkilot"} info={guiltyPerson} />
          <CardItem title={"Manzil"} info={location} />
          <button onClick={handleMoreClick}>More</button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;

const CardItem = ({ title, info }: { title: string; info: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid gray",
        flexWrap: "wrap",
      }}
    >
      <p style={{ color: "gray", marginRight: "10px" }}>{title}:</p>
      <span style={{ color: "#319864" }}>{info}</span>
    </div>
  );
};
