import Button from 'components/common/Buttons/Button';
import Input from 'components/common/Inputs/Input';
import { ChangeEvent, useEffect, useState } from 'react';

import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

import './Pagination.scss';

type Props = {
  totalPages?: number;
  currentPage: number;
  changePage: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, changePage }: Props) => {
  const [inputValue, setValue] = useState(currentPage);

  useEffect(() => {
    setValue(currentPage);
  }, [currentPage]);

  if (!totalPages) return null;

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

  return (
    <div className="pagination">
      <div>
        <Button onClick={goBack}>
          <Arrow className="pagination__arrow" />
        </Button>
      </div>

      <div className="pagination__pages">
        <Input type="number" value={inputValue} onChange={handleInputChange} onBlur={handleBlur} />
        <span>/</span>
        <span>{totalPages}</span>
      </div>

      <div>
        <Button onClick={goNext}>
          <Arrow className="pagination__arrow pagination__arrow--right" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
