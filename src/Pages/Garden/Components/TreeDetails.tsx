import { NavLink, useParams } from "react-router-dom";
import Button from "../../../Components/Button";
import { trees } from "../../../Constants/tree-datas";

const TreeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tree = trees.find((tree) => tree.id === id);

  if (!tree) {
    return <p>Bunday Daraxt mavjud emas</p>;
  }

  return (
    <div
      style={{
        width: "400px",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "15px",
        border: "1px solid gray",
        borderRadius: "10px",
        margin: "50px auto",
      }}
    >
      <h1>{tree.title}</h1>
      <p>{tree.description}</p>
      <img src={tree.images[0]} alt={tree.title} />
      <NavLink to={"/garden"}>
        <Button style={{ marginTop: "30px" }} size="md">
          GO BACK
        </Button>
      </NavLink>
    </div>
  );
};

export default TreeDetails;
