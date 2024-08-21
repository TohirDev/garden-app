import { NavLink, useParams } from "react-router-dom";
import { trees } from "../Constants/tree-datas";

const TreeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tree = trees.find((tree) => tree.id === id);

  if (!tree) {
    return <p>Tree not found!</p>;
  }

  return (
    <div>
      <h1>{tree.title}</h1>
      <p>{tree.description}</p>
      <img src={tree.thumbnail} alt={tree.title} />
      <NavLink to={"/garden"}>
        <button>GO BACK</button>
      </NavLink>
    </div>
  );
};

export default TreeDetails;
