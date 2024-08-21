import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { trees } from "../../Constants/tree-datas";
import { TTrees } from "../../Types";
import PopupCard from "./Components/PopupCard";
import TreeCard from "./Components/TreeCard";
import "./index.css";

function Garden() {
  const [selectedTree, setSelectedTree] = useState<TTrees | null>(null);
  const navigate = useNavigate();

  const handleTreeClick = (tree: TTrees) => {
    setSelectedTree(tree);
  };

  const handleClosePopup = () => {
    setSelectedTree(null);
  };

  const handleMoreClick = () => {
    if (selectedTree) {
      navigate(`/garden/${selectedTree.id}`);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100vh",
      }}
    >
      <div style={{ width: "30%" }}>
        <h1>
          O‘zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish
          va iqlim o‘zgarishi vazirligi
        </h1>
        <NavLink to={"/map"}>
          <Button size="md">Uzbekistan Map</Button>
        </NavLink>
      </div>
      <div className="garden">
        {trees.map((tree) => (
          <TreeCard
            key={tree.id}
            className={tree.className}
            img={tree.thumbnail}
            onClick={() => handleTreeClick(tree)}
          />
        ))}
      </div>
      {selectedTree && (
        <PopupCard
          key={selectedTree.id}
          handleClosePopup={handleClosePopup}
          handleMoreClick={handleMoreClick}
          {...selectedTree}
        />
      )}
    </div>
  );
}

export default Garden;
