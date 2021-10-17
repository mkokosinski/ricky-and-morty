import './ListPlaceholder.scss';

const ListPlaceholder = () => {
  const items = Array.from({ length: 20 });

  return (
    <>
      {items.map((_) => (
        <div className="placeholderItem" />
      ))}
    </>
  );
};

export default ListPlaceholder;
