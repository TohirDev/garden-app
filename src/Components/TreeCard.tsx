interface ITreeCardProps {
  className: string;
  img: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const TreeCard = ({ img, className, onClick }: ITreeCardProps) => {
  return (
    <div onClick={onClick}>
      <img src={img} alt="tree" className={className} />
    </div>
  );
};

export default TreeCard;
