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

export default CardItem;
