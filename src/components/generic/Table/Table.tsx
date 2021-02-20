// DEPENDENCIES
import React from 'react';

// STYLED COMPONENTS
import { StyledTable, StyledTableContainer, StyledTHead, StyledTHRow, StyledTRow, StyledTBody, StyledTd } from './Table.styles';

export const Table = React.memo((props: any) => {

    const { headers, items } = props;

    return (
        <StyledTable>
            <StyledTableContainer>
                <table>

                    {/* ----- HEADERS ------ */}
                    <StyledTHead>
                        <StyledTHRow>
                            {headers.map((header: any, index: number) =>
                                <th key={index}>
                                    <span>
                                        {header}
                                    </span>
                                </th>
                            )}
                        </StyledTHRow>
                    </StyledTHead>

                    <StyledTBody>
                        {/* ----- ITEMS ------ */}
                        {items && items.length > 0 && items.map((item: any, index: any) => {
                            return (
                                <StyledTRow key={index + 1000}>

                                    {/* ----- ITEM PROPERTY ----- */}
                                    {Object.keys(item).map((key, index) => {
                                        if (key === 'id' || key === 'actionButtons') return null;
                                        return (
                                            <StyledTd key={index + 20000}>
                                                <span>{item[key]}</span>
                                            </StyledTd>
                                        )
                                    })}

                                    {/* ---- ACTION BUTTONS ----- */}
                                    {/* {item.actionButtons && item.actionButtons.length > 0 &&
                                            <td key={index + 20000} className="admin__dynamicTable__actionButtons">
                                                {item.actionButtons.map((button, buttonIndex) => {
                                                    return (
                                                        <Button
                                                            key={button.title + buttonIndex}
                                                            color={button.color}
                                                            size={button.size}
                                                            outline={button.outline}
                                                            disabled={button.disabled}
                                                            onClick={() => handleButtons({ handler: button.handler, id: item.id })}
                                                        >{button.title}</Button>
                                                    )
                                                })}

                                            </td>
                                        } */}

                                </StyledTRow>
                            )
                        })}

                        {/* ----- NO ITEMS MESSAGE ----- */}
                        {items && items.length === 0 &&
                            <StyledTRow>
                                <StyledTd colSpan={headers.length}>
                                    <span>No results found</span>
                                </StyledTd>
                            </StyledTRow>
                        }

                    </StyledTBody>
                </table>
            </StyledTableContainer>

            {/* {page &&
                    <Pagination
                        itemsPerPage={page.itemsPerPage}
                        totalItems={page.totalItems}
                        totalPages={page.totalPages}
                        currentPage={page.currentPage}
                        handlePage={handlePage}
                    />
                } */}
        </StyledTable>
    )
});