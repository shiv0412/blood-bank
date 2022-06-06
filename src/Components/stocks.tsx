import React, { useState } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #566573;
  margin-top: 1%;
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
  border-bottom: 1px solid lightgrey;
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
`;

const Span = styled.span`
  font-size: 20px;
  color: green;
  padding: 0 25px 0 0;
  &:nth-child(even) {
    font-size: 23px;
    color: red;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Stock: React.FC = () => {
  const [stockvalue, setStockvalue] = useState({
    Apos: "",
    Aneg: "",
    Bpos: "",
    Bneg: "",
    ABpos: "",
    ABneg: "",
    Opos: "",
    Oneg: "",
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
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
            <Span>
              <BsFillPlusCircleFill
                onClick={() => window.alert("add data")}
                title="Add"
              />
            </Span>
            <Span>
              <AiFillMinusCircle
                onClick={() => window.alert("remove data")}
                title="Remove"
              />
            </Span>
          </Td>
        </Tr>
      </Datatable>
    </>
  );
};

export default Stock;
