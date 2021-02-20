// DEPENDENCES
import React from "react";
import ReactPaginate from "react-paginate";

// COMPONENTS
import { useWindowSize } from "../hooks/useWindowSize";

// STYLES
import "./Pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  totalPages: number;
  currentPage: number;
  handlePage: any;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = React.memo<IProps>((props) => {
  const {
    totalPages,
    currentPage,
    handlePage,
    totalItems,
    itemsPerPage,
  } = props;

  const { width } = useWindowSize();

  return (
    <div className="pagination">
      <div className="pagination__info">
        <div>
          <span>Elementos por pagina: </span>
          <strong>{itemsPerPage}</strong>
        </div>
        <div>
          <span>Total elementos: </span>
          <strong>{totalItems}</strong>
        </div>
      </div>

      {totalItems > 0 && (
        <div className="pagination__pager">
          <ReactPaginate
            previousLabel={<FontAwesomeIcon icon={faAngleLeft} />} // Label for the previous button.
            previousClassName={"pagination__prev"} // The classname on tag li of the previous button.
            nextLabel={<FontAwesomeIcon icon={faAngleRight} />} // Label for the next button.
            nextClassName={"pagination__next"} // The classname on tag li of the next button.
            breakLabel={"..."} // Label for ellipsis.
            breakClassName="pagination__break" // The classname on tag li of the ellipsis element.
            forcePage={currentPage - 1} // Current page (Controlled for father)
            pageCount={totalPages} // The total number of pages.
            onPageChange={(data: any) => handlePage(data.selected + 1)} // The method to call when a page is clicked. Exposes the current page object as an argument.
            marginPagesDisplayed={width < 968 ? 1 : 1} // The number of pages to display for margins.
            pageRangeDisplayed={width < 968 ? 3 : 3} // The range of pages displayed.
            containerClassName="pagination__container" // The classname of the pagination container.
            pageClassName="pagination__page" // The classname on tag li of each page element.
            activeClassName="active" // The classname for the active page.
          />
        </div>
      )}
    </div>
  );
});

export { Pagination };
