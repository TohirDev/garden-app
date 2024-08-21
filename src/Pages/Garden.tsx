import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupCard from "../Components/PopCard";
import TreeCard from "../Components/TreeCard";
import { trees } from "../Constants/tree-datas";
import { TTrees } from "../Types";

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
        paddingTop: "70px",
      }}
    >
      <h1 style={{ width: "30%" }}>
        O‘zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish
        va iqlim o‘zgarishi vazirligi
      </h1>
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
          id={selectedTree.id}
          region={selectedTree.region}
          city={selectedTree.city}
          guiltyPerson={selectedTree.guiltyPerson}
          location={selectedTree.location}
          typeTree={selectedTree.typeTree}
          description={selectedTree.description}
          handleClosePopup={handleClosePopup}
          handleMoreClick={handleMoreClick}
          images={selectedTree.images}
          title={selectedTree.title}
        />
      )}
    </div>
  );
}

export default Garden;
