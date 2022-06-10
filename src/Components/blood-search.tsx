/* library imports */
import React, { useState } from "react";
import { connect } from "react-redux";
import { BiPaperPlane } from "react-icons/bi";

/* styled components imports */
import styled from "styled-components";

/* custom Imports */
import { IReduxStore } from "../Redux/reducers/initialState";
import StateCityDropdown from "./custom-components/state-city-dropdown";
import selectOptionsData from "../data.json";
import { IAccountDetails } from "../models/models";
import Modal from "./modal-form";

/* custom components */

const SearchContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 20px 20px;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: orangered;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 800px) {
    margin: 10px 0;
  }
`;

const Table = styled.table`
  width: 85%;
  margin: 2% auto;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
    margin: 0 5px;
  }
`;

const TR = styled.tr`
  &:nth-child(1) {
    background-color: #eaecee;
  }
`;

const TH = styled.th`
  padding: 15px 5px;
  width: 16.66%;
  &:nth-child(6) {
    text-align: center;
  }
`;

const TD = styled.td`
  padding: 10px 5px;
  border-bottom: 0.5px solid lightgray;
  font-size: 12px;
  width: 16.66%;
  &:nth-child(4) {
    font-weight: bold;
    color: orangered;
  }
  &:nth-child(6) {
    text-align: center;
  }
`;

const Span = styled.span`
  font-size: 18px;
`;

const SendRequestButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 3px 5px;
  border: none;
  &:hover {
    background-color: #196f3d;
  }
`;

const CustomParagraph = styled.p`
  text-align: center;
  color: #566573;
  font-size: 1.6vh;
  padding-top: 2%;
`;


/* Main Component */

const BloodSearch = (props: any) => {
  const [show,setShow] = useState(false);
  const [blood_bank,setBloodbankName] = useState<string>();
  const [isSelected, setIsSelected] = useState([]);
  const [showData, setShowData] = useState(false);

  const [state, setState] = useState({
    selectedState: "",
    isStateSelected: false,
    selectedCity: "",
    isCitySelected: false,
  });

  const stateList = selectOptionsData.states;
  const states = stateList.map((current) => {
    return current.state;
  });

  const cities = state.isStateSelected
    ? stateList
        .filter((d) => d.state === state.selectedState)
        .map((c) => {
          return c.cities;
        })[0]
    : [];
  const onCountryChange = (state: string) => {
    let setIsStateSelected = state !== "" ? true : false;

    setState({
      selectedState: state,
      isStateSelected: setIsStateSelected,
      selectedCity: "",
      isCitySelected: false,
    });
  };

  const onCityChange = (city: string) => {
    let setIsCitySelected = city !== "" ? true : false;

    setState({
      ...state,
      selectedCity: city,
      isCitySelected: setIsCitySelected,
    });
  };

  const handleSearch = (State: string, City: string) => {
    const selectedBloodbanks = props.values.filter(
      (bloodbankDetails: IAccountDetails) => {
        return (
          bloodbankDetails.state === State && bloodbankDetails.city === City
        );
      }
    );
    setShowData(true);
    setIsSelected(selectedBloodbanks);
  };

  return (
    <>
      <div className="main_container_search">
        <div>
          <h2 className="header_donarregister_form">Search for Blood</h2>
        </div>
        <SearchContainer>
          <StateCityDropdown
            source={states}
            selectedValue={state.selectedState}
            onDataChange={onCountryChange}
            placeHolder="State"
          />
          <StateCityDropdown
            source={cities}
            selectedValue={state.selectedCity}
            onDataChange={onCityChange}
            placeHolder="City"
            isStateSelected={state.isStateSelected}
          />
          <Button
            onClick={() =>
              handleSearch(state.selectedState, state.selectedCity)
            }
          >
            Search
          </Button>
        </SearchContainer>
        <Modal onClose={()=>setShow(false)} show={show} bloodbank_name={blood_bank}/>  
        {showData ? (
          isSelected.length > 0 ? (
            <div>
              <Table>
                <TR>
                  <TH>Bloodbank</TH>
                  <TH>Contact Person</TH>
                  <TH>Contact No.</TH>
                  <TH>Available Groups</TH>
                  <TH>Address</TH>
                  <TH>Request</TH>
                </TR>
                {isSelected.map((el: any) => {
                  return (
                    <>
                      <TR>
                        <TD>{el.bloodbank_name}</TD>
                        <TD>{el.contact_person}</TD>
                        <TD>{el.phone}</TD>
                        <TD>
                          {Object.keys(
                            Object.fromEntries(
                              Object.entries(el.stocks).filter(
                                ([key, value]) => value != 0
                              )
                            )
                          )
                            .toString()
                            .replaceAll("pos", "+")
                            .replaceAll("neg", "-")}
                        </TD>
                        <TD>
                          {el.address +
                            " , " +
                            el.city +
                            " , " +
                            el.state +
                            " , " +
                            el.pincode}
                        </TD>
                        <TD>
                          <SendRequestButton onClick={()=>{ setBloodbankName(el.bloodbank_name);setShow(true)}}>
                            <Span>
                              <BiPaperPlane />
                            </Span>
                            Send Request
                          </SendRequestButton>
                        </TD>
                      </TR>
                    </>
                  );
                })}
              </Table>
              {/* <SendRequestButtonContainer>Hello world</SendRequestButtonContainer> */}
            </div>
          ) : (
            <CustomParagraph>
              Sorry...we don't have any bloodbank in selected area
            </CustomParagraph>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.adminAccount,
  };
}

export default connect(mapStateToProps)(BloodSearch);
