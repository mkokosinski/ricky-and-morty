import { ChangeEvent, useEffect, useState } from 'react';

type Props = {
  totalPages?:number, currentPage:number, changePage: (page: number)=>void
};

const Pagination = ({ totalPages = 0, currentPage, changePage }: Props) => {
  const [inputValue, setValue] = useState(currentPage);

  const goBack = () => {
    if (currentPage <= 1) return;
    changePage(currentPage - 1);
  };

  const goNext = () => {
    if (currentPage >= totalPages) return;
    changePage(currentPage + 1);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const parsedValue = parseInt(value, 10);

    if (parsedValue < 1 || parsedValue > totalPages) {
      return;
    }

    setValue(parsedValue);
  };

  const handleBlur = () => {
    if (inputValue) {
      changePage(inputValue);
    } else {
      setValue(currentPage);
    }
  };

  useEffect(() => {
    setValue(currentPage);
  }, [currentPage]);

  return (
    <div>
      <div>
        <div>
          <button type="button" onClick={goBack}>
            {'<'}
          </button>
        </div>
        <input type="number" value={inputValue} onChange={handleInputChange} onBlur={handleBlur} />
        z
        {totalPages}
        <div>
          <button type="button" onClick={goNext}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
