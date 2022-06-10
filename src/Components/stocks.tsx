import React, { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import styled from "styled-components";
import { autoClose } from "../constants";
import { IAccountDetails } from "../models/models";
import { updateStock } from "../Redux/actions/actionData";
import { IReduxStore } from "../Redux/reducers/initialState";

const Wrapper = styled.div`
  background-color:#2c3e50;
`;

const Title = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin: 2% 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  color: white;
  font-family: "Times New Roman";
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Datatable = styled.table`
  width: 100%;
  margin: 10px 7px 0 7px;
`;

const Tr = styled.tr`
  background-color: #f7f9f9;
`;

const Th = styled.th`
  border-bottom: 1px solid #d5d8dc;
  border-top: 1px solid #d5d8dc;
  padding: 10px 5px;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 5px 5px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
`;

const Button = styled.button`
  color: #fff;
  background-color: orangered;
  border: none;
  padding: 5px 10px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    background-color: orange;
  }
`;

const Stock = (props: any) => {
  const notify = () =>
    toast.success("Stock Details Updated", {
      position: "top-center",
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [bloodbankstock, setBloodbankStock] = useState(
    props.values.filter((el: IAccountDetails) => {
      return el.bloodbank_name === props.admin[0].bloodbank_name;
    })
  );
  const [stockvalue, setStockvalue] = useState({
    Apos: bloodbankstock[0].stocks.Apos,
    Aneg: bloodbankstock[0].stocks.Aneg,
    Bpos: bloodbankstock[0].stocks.Bpos,
    Bneg: bloodbankstock[0].stocks.Bneg,
    ABpos: bloodbankstock[0].stocks.ABpos,
    ABneg: bloodbankstock[0].stocks.ABneg,
    Opos: bloodbankstock[0].stocks.Opos,
    Oneg: bloodbankstock[0].stocks.Oneg,
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    setStockvalue({ ...stockvalue, [name]: value });
  };

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Manage Stocks</Title>
          </div>
        </div>
      </Wrapper>
      <Datatable>
        <Tr>
          <Th>BloodGroup</Th>
          <Th>Quantity(Ltr.)</Th>
          <Th>Actions</Th>
        </Tr>
        <Tr>
          <Td>A+</Td>
          <Td>
            <input
              type="number"
              className="input_box"
              name="Apos"
              value={stockvalue.Apos}
              title="click to edit"
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>A-</Td>
          <Td>
            <input
              type="number"
              name="Aneg"
              className="input_box"
              value={stockvalue.Aneg}
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>B+</Td>
          <Td>
            <input
              type="number"
              name="Bpos"
              className="input_box"
              value={stockvalue.Bpos}
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>B-</Td>
          <Td>
            <input
              type="number"
              name="Bneg"
              className="input_box"
              value={stockvalue.Bneg}
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>AB+</Td>
          <Td>
            <input
              type="number"
              name="ABpos"
              className="input_box"
              value={stockvalue.ABpos}
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>AB-</Td>
          <Td>
            <input
              type="number"
              name="ABneg"
              className="input_box"
              value={stockvalue.ABneg}
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>O+</Td>
          <Td>
            <input
              type="number"
              name="Opos"
              className="input_box"
              value={stockvalue.Opos}
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
        <Tr>
          <Td>O-</Td>
          <Td>
            <input
              type="number"
              name="Oneg"
              className="input_box"
              value={stockvalue.Oneg}
              onChange={handleChange}
            ></input>
          </Td>
          <Td>
            <Button
              onClick={() => {
                props.dispatch(updateStock(stockvalue,bloodbankstock[0].bloodbank_name));
                notify();
              }}
            >
              Update
            </Button>
          </Td>
        </Tr>
      </Datatable>
    </>
  );
};

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.adminAccount,
  };
}

export default connect(mapStateToProps)(Stock);
