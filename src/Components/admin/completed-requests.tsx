/* Library Imports */
import React, { useState } from "react";
import { connect } from "react-redux";

/* Styled Component Imports */
import styled from "styled-components";

/* Custom Imports */
import Pagination from "../pagination";
import { IReduxStore } from "../../Redux/reducers/initialState";
import RequestsDataDisplay from "../requests-data-display";
import { IUserRequest } from "../../models/models";

/* Styled Components */

const Wrapper = styled.div`
  background-color: #2c3e50;
  padding-bottom: 10px;
`;

const Title = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin: 2% 2%;
  padding-top: 2%;
  color: white;
  font-family: "Times New Roman";
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  padding: 20px 5px;
  width: 50%;
`;

const DropdownWrapper = styled.div`
  padding: 20px 5px;
  width: 25%;
`;
const Label = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  color: #566573;
  font-weight: bold;
  padding-bottom: 10px;
`;

/* Main Component */

const CompletedRequests = (props: any) => {
  const adminBloodbank = props.admin[0].bloodbank_name;

  const [filteredData, setFilteredData] = useState(
    props.values.filter((requests: IUserRequest) => {
      return (
        requests.bloodbank === adminBloodbank &&
        requests.requestProcessing.requestStatus === "Completed"
      );
    })
  );
  const [searchBoxValue] = useState<string>();

  const HandleDataSearching = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const matchingData = props.values.filter((requestDetails: IUserRequest) => {
      return (
        requestDetails.bloodbank === adminBloodbank &&
        requestDetails.requestProcessing.requestStatus === "Completed" &&
        (requestDetails.patient_name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
          requestDetails.phone.toString().includes(e.target.value) ||
          requestDetails.requestDate === e.target.value)
      );
    });
    setFilteredData(matchingData);
  };

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Completed Requests</Title>
          </div>
        </div>
      </Wrapper>
      <Container>
        <SearchWrapper>
          <Label>Search for requests</Label>
          <br />
          <input
            type="text"
            value={searchBoxValue}
            onChange={(e) => HandleDataSearching(e)}
            placeholder="Enter requester name or phone"
            className="admin_search_input_box"
          ></input>
        </SearchWrapper>
        <DropdownWrapper>
          <Label>Browse by requested date</Label>
          <br />
          <input
            type="date"
            value={searchBoxValue}
            onChange={(e) => HandleDataSearching(e)}
            className="date_type_search"
          />
        </DropdownWrapper>
      </Container>
      <div className="container">
        {props.values.length > 0 ? (
          <>
            <Pagination
              data={filteredData}
              RenderComponent={RequestsDataDisplay}
              pageLimit={5}
              dataLimit={5}
            />
          </>
        ) : (
          <h6>No data to display</h6>
        )}
      </div>
    </>
  );
};
function mapStateToProps(state: IReduxStore) {
  return {
    values: state.bloodRequests,
    authentication: state.adminAccount,
  };
}

export default connect(mapStateToProps)(CompletedRequests);
