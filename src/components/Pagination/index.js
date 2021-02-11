/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Button } from '../Button';

function Pagination({ onPaginate, pageNumber: activePageNumber, totalPages }) {
  function handlePaginate(goToPageNumber) {
    return function () {
      onPaginate(goToPageNumber);
    };
  };

  return (
    <div
      css={{
        textAlign: 'center',
      }}
    >
      <Button
        disabled={activePageNumber === 1}
        type="button"
        onClick={handlePaginate(1)}
        variant="text"
      >
        {'<<'}
      </Button>
      <Button
        disabled={activePageNumber === 1}
        type="button"
        onClick={handlePaginate(activePageNumber - 1)}
        variant="text"
      >
        {'<'}
      </Button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1;
        const isCurrentPage = pageNumber === activePageNumber;

        return (
          <Button
            type="button"
            onClick={handlePaginate(pageNumber)}
            key={pageNumber}
            variant="text"
            css={isCurrentPage ? {
              color: '#000000',
            } : null}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button
        disabled={activePageNumber === totalPages}
        type="button"
        onClick={handlePaginate(activePageNumber + 1)}
        variant="text"
      >
        {'>'}
      </Button>
      <Button
        disabled={activePageNumber === totalPages}
        type="button"
        onClick={handlePaginate(totalPages)}
        variant="text"
      >
        {'>>'}
      </Button>
    </div>
  );
}

export { Pagination };
