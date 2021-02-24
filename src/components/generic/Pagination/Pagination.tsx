// DEPENDENCES
import React from "react";

// STYLED
import {
  PaginationContainer as Container,
  PaginationInfo,
  PaginationPager,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface IProps {
  totalPages: number;
  currentPage: number;
  handlePage: any;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = React.memo<IProps>(
  ({ totalPages, currentPage, handlePage, totalItems, itemsPerPage }) => {
    let pages: any[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages = [...pages, i];
    }

    // DISABLE THE PREV BUTTON IF currentPage = 1
    let prevDisabled = false;
    if (currentPage === 1) prevDisabled = true;

    // DISABLE THE NEXT BUTTON IF currentPage IS EQUAL TO totalPages
    let nextDisabled = false;
    if (currentPage === totalPages) nextDisabled = true;

    return (
      <Container data-testid="pagination-container">
        <PaginationInfo>
          <div>
            <span>Elementos por pagina: </span>
            <strong>{itemsPerPage}</strong>
          </div>
          <div>
            <span>Total elementos: </span>
            <strong>{totalItems}</strong>
          </div>
        </PaginationInfo>

        {totalItems > 0 && (
          <PaginationPager>
            <ul>
              <li
                className={prevDisabled ? "disabled" : ""}
                onClick={() =>
                  !prevDisabled ? handlePage(currentPage - 1) : {}
                }
                data-testid="prev-button"
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </li>
              {pages.map((page) => {
                return (
                  <li
                    key={page}
                    className={currentPage === page ? "active" : ""}
                    onClick={() => handlePage(page)}
                  >
                    <span>{page}</span>
                  </li>
                );
              })}
              <li
                className={nextDisabled ? "disabled" : ""}
                onClick={() =>
                  !nextDisabled ? handlePage(currentPage + 1) : {}
                }
                data-testid="next-button"
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </li>
            </ul>
          </PaginationPager>
        )}
      </Container>
    );
  }
);

export { Pagination };
