import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { IUserRequest } from "../models/models";

import { IReduxStore } from "../Redux/reducers/initialState";

const SearchBoxWrapper = styled.div`
  text-align: center;
  background-color: orangered;
  padding: 15px 0px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.h6`
  color: #fff;
  padding-bottom: 5px;
  font-weight: bold;
`;

const Button = styled.button`
  border: none;
  background-color: lightgreen;
  padding: 6px 12px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;
/* styled components */

const Wrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  font-family: Arial, Helvetica, sans-serif;
  color: #808b96;
  font-size: 12.5px;
  position: relative;
  margin:10px 10px;
`;

const Status = styled.span`
  background-color: green;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
`;
const Bloodgroup = styled.span`
  background-color: red;
  color: #fff;
  padding: 5px 5px;
  font-weight: bold;
  border-radius: 50%;
`;

const Heading = styled.h5`
  color: #566573;
  padding: 0 0 5px 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

const RequiredDate = styled.span`
  color: red;
`;
const Span = styled.span`
  color: #566573;
  font-weight: bold;
  padding-left: 15px;
  &:nth-child(1) {
    padding-left: 0;
  }
  &:nth-child(4){
    color:red
  }
  &:nth-child(5){
    color:red
  }
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 5px 0 5px 0;
`;

const TrackBloodRequest = (props: any) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchData, setSearchData] = useState([]);
  const [isFound, setIsFound] = useState(false);

  const handleSearch = (searchInput: string) => {
    const filteredData = props.value.filter((data: IUserRequest) => {
      return (
        data.patient_name.replace(/\s+/g, "").toLowerCase() ===
          searchInput.replace(/\s+/g, "").toLowerCase() ||
        data.phone.toString().replace(/\s+/g, "").toLowerCase() ===
          searchInput.replace(/\s+/g, "").toLowerCase()
      );
    });
    setIsFound(true);
    setSearchData(filteredData);
  };
  return (
    <>
      <div>
        <SearchBoxWrapper>
          <Header>Track Your Request</Header>
          <input
            value={searchValue}
            type="text"
            placeholder="Enter registered name or phone"
            className="search_request_input"
            onChange={(e) => setSearchValue(e.target.value)}
          ></input>
          <Button onClick={() => handleSearch(searchValue)}>Search</Button>
        </SearchBoxWrapper>
        {isFound
          ? searchData.length > 0
            ? searchData.map((requestDetails: IUserRequest) => {
                return (
                  <>
                    <Wrapper>
                      <Paragraph>
                        <Status>
                          {requestDetails.requestProcessing.requestStatus}
                        </Status>
                        &nbsp;&nbsp; |&nbsp;&nbsp;{" "}
                        <Bloodgroup>{requestDetails.bloodgroup}</Bloodgroup>
                        &nbsp;&nbsp; |&nbsp;&nbsp; {requestDetails.requestDate}
                        &nbsp;&nbsp; |&nbsp;&nbsp; {requestDetails.phone}
                      </Paragraph>
                      <Paragraph>
                        <Heading>{requestDetails.patient_name}</Heading>
                        <span>{requestDetails.reason}</span>
                      </Paragraph>
                      <Paragraph>
                        <Span>Required Date: </Span>
                        <RequiredDate>{requestDetails.requiredDate}</RequiredDate>
                        <Span>Units: </Span>
                        {requestDetails.units} &nbsp;|
                        <Span>Updated on: </Span>
                        {requestDetails.requestProcessing.updatingDate} &nbsp;|
                        <Span>Current State: </Span>
                        {requestDetails.requestProcessing.comment}
                      </Paragraph>
                    </Wrapper>
                  </>
                );
              })
            : "No Data Found"
          : ""}
      </div>
    </>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    value: state.bloodRequests,
  };
}

export default connect(mapStateToProps)(TrackBloodRequest);
