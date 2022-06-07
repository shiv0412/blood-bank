import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import styled from "styled-components";

import { autoClose, Data_Value } from "../ConstData";
import { deleteDonar, updateStatus } from "../Redux/actions/actionData";
import { IReduxStore } from "../Redux/reducers/initialState";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid lightgrey;
`;

const Content = styled.div`
  width: 16.6%;
  padding: 5px 0px;
  font-size: 12px;
  &:nth-child(4) {
    width: 25%;
    padding-right: 4%;
  }
  &:nth-child(5) {
    text-align: center;
  }
  &:nth-child(6) {
    text-align: center;
  }
`;
const Actions = styled.button`
  background-color: white;
  border: none;
`;
const ActionDel = styled(Actions)`
  margin-left: 10px;
  color: red;
  font-size: 18px;
`;

const Select = styled.select`
padding:5px 10px;
border:1px solid red;
font-weight:500;
color:red;
-webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
&:focus{
  border:1px solid red;
  outline:none;
}
`;

const Option = styled.option`
  color:black;
  font-size:14px;
  &:nth-child(1){
    color:lightgrey
  }
`;

function PaginationDataDisplay(props: any) {
  const history = useHistory();

  const onEdit = (id: string) => {
    history.push({
      pathname: "/donarregister",
      state: { id: id },
    });
  };

  const onDelete = (name: string) =>
    toast.info(name + " Data is Deleted", {
      position: "top-center",
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  function handlePeriodChange(Status: string, id: string) {
    props.dispatch(updateStatus({ id, Status }));
  }
  return (
    <div className="post">
      <Wrapper>
        <Content>{props.data.name}</Content>
        <Content>{props.data.phone}</Content>
        <Content>{props.data.Bloodgroup}</Content>
        <Content>
          {props.data.Address +
            "," +
            props.data.City +
            "," +
            props.data.State +
            "," +
            props.data.Pincode}
        </Content>
        <Content>
          <Select
            id="status"
            onChange={(val) =>
              handlePeriodChange(val.target.value, props.data.id)
            }
          >
          <Option value={props.data.Status}>{props.data.Status}</Option>
            <Option value="Donating">Donating</Option>
            <Option value="Discharged">Discharged</Option>
          </Select>
        </Content>
        <Content>
          {" "}
          <Actions title="Edit" onClick={() => onEdit(props.data.id)}>
            &#9998;&nbsp;
          </Actions>
          <ActionDel
            title="Delete"
            onClick={() => {
              props.dispatch(deleteDonar(props.data.id));
              onDelete(props.data.name);
            }}
          >
            <AiFillDelete />
          </ActionDel>
        </Content>
      </Wrapper>
    </div>
  );
}

function mapStateToProps(state: IReduxStore) {
  return {
    values: state.registeredDonars,
  };
}

export default connect(mapStateToProps)(PaginationDataDisplay);
