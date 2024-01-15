interface ListGroupProps {
  items: { text: string; value: number }[];
  onItemRemove: (item: { text: string; value: number }) => void;
}

const SelectedKeywordsList: React.FC<ListGroupProps> = ({
  items,
  onItemRemove,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className="list-group-item"
          key={item.text}
          style={{ margin: "5px", cursor: "pointer" }}
          onClick={() => onItemRemove(item)}
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default SelectedKeywordsList;
