import React from "react";
import { Breadcrumb } from "semantic-ui-react";

import { Link } from "react-router-dom";

function SearchBreadcrumbs(props) {
  return (
    <Breadcrumb>
      <Breadcrumb.Section
        as={Link}
        to="/search/"
        active={props.activateSearch}
        onClick={props.clickSearchBreadcrumb}
      >
        Wyszukaj
      </Breadcrumb.Section>
      {props.searchlistReqest ? (
        <React.Fragment>
          <Breadcrumb.Divider icon="right angle" />
          <Breadcrumb.Section
            as={Link}
            to="/search/searchlist"
            active={props.activateList}
            onClick={props.clickListBreadcrumb}
          >
            Wyniki wyszukiwania dla:
          </Breadcrumb.Section>
          {props.detailReqest ? (
            <React.Fragment>
              <Breadcrumb.Divider />
              <Breadcrumb.Section
                as={Link}
                to="/search/searchlist/details"
                active={props.activateDetails}
                onClick={props.clickDetailsBreadcrumb}
              >
                Szczegóły
              </Breadcrumb.Section>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      ) : null}
    </Breadcrumb>
  );
}

export default SearchBreadcrumbs;
