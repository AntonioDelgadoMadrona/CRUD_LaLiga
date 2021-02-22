// DEPENDENCES
import React from "react";

// STYLED
import { PaginationContainer as Container, PaginationInfo, PaginationPager } from "./styled";
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
  const { totalPages, currentPage, handlePage, totalItems, itemsPerPage } = props;

  let pages: any[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages = [...pages, i];
  }

  return (
    <Container>
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
              className={`${currentPage === pages[0] ? "disabled" : ""}`}
              onClick={() => handlePage(currentPage - 1)}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </li>
            {pages.map((page) => {
              return (
                <li
                  key={page}
                  className={`${currentPage === page ? "active" : ""}`}
                  onClick={() => handlePage(page)}
                >
                  <span>{page}</span>
                </li>
              );
            })}
            <li
              className={`${currentPage === totalPages ? "disabled" : ""}`}
              onClick={() => handlePage(currentPage + 1)}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </li>
          </ul>
        </PaginationPager>
      )}
    </Container>
  );
});

export { Pagination };
