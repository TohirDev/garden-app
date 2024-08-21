interface ITreeCardProps {
  className: string;
  img: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const TreeCard = ({ img, className, onClick }: ITreeCardProps) => {
  return (
    <img src={img} alt="tree" onClick={onClick} className={className} />
  );
};

export default TreeCard;
