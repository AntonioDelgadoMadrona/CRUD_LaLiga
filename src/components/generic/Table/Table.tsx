// DEPENDENCIES
import React from "react";
import { IUser } from "../../../interfaces/IUser";

// COMPONENTS
import { Button } from "../Button/Button";
import { Pagination } from "../Pagination/Pagination";

// STYLED COMPONENTS
import {
  StyledTable,
  StyledTableContainer,
  StyledTHead,
  StyledTHRow,
  StyledTRow,
  StyledTBody,
  StyledTd,
} from "./styled";

interface IProps {
  headers: Array<string>;
  items: Array<IUser>;
  handleButtons: any;
  page: any;
  handlePage: any;
}

const Table = React.memo<IProps>((props) => {
  const { headers, items, handleButtons, page, handlePage } = props;

  return (
    <StyledTable>
      <StyledTableContainer>
        <table>
          {/* ----- HEADERS ------ */}
          <StyledTHead>
            <StyledTHRow>
              {headers.map((header: any, index: number) => (
                <th key={index}>
                  <span>{header}</span>
                </th>
              ))}
            </StyledTHRow>
          </StyledTHead>

          <StyledTBody>
            {/* ----- ITEMS ------ */}
            {items &&
              items.length > 0 &&
              items.map((item: any, index: any) => {
                return (
                  <StyledTRow key={index + 1000}>
                    {/* ----- ITEM PROPERTY ----- */}
                    {Object.keys(item).map((key, index) => {
                      if (key === "id" || key === "actionButtons") return null;
                      return (
                        <StyledTd key={index + 20000}>
                          <span>{item[key]}</span>
                        </StyledTd>
                      );
                    })}

                    {/* ---- ACTION BUTTONS ----- */}
                    {item.actionButtons && item.actionButtons.length > 0 && (
                      <StyledTd key={index + 20000}>
                        {item.actionButtons.map((button: any, buttonIndex: number) => {
                          return (
                            <Button
                              key={button.title + buttonIndex}
                              color={button.color}
                              size={button.size}
                              outline={button.outline}
                              disabled={button.disabled}
                              onClick={() =>
                                handleButtons({
                                  handler: button.handler,
                                  id: item.id,
                                })
                              }
                            >
                              {button.title}
                            </Button>
                          );
                        })}
                      </StyledTd>
                    )}
                  </StyledTRow>
                );
              })}
          </StyledTBody>
        </table>
      </StyledTableContainer>

      {/* ---- PAGINATION ---- */}
      {page && (
        <Pagination
          itemsPerPage={page.itemsPerPage}
          totalItems={page.totalItems}
          totalPages={page.totalPages}
          currentPage={page.currentPage}
          handlePage={handlePage}
        />
      )}
    </StyledTable>
  );
});

export { Table };
