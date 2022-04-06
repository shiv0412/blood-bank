import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { deleteDonar} from "../Redux/actions/actionData";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  background-color: #566573;
  margin-top: 5%;
`;

const Title = styled.p`
  font-size: 2vw;
  font-weight: bold;
  margin:2% 2%;
  padding-top:2%;
  color: white;
  font-family: "Times New Roman";
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Button = styled.button`
  background-color: orangered;
  color: white;
  padding: 5px 10px;
  font-size: 13px;
  margin: 2.5% 2%;
  border: none;
  &:hover {
    background-color: #eb984e;
  }
`;

const Iconstyle = {
  fontSize: "20px",
  paddingBottom: "2px",
};

const ButtonContainer = styled.div`
  text-align: right;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Datatable = styled.table`
  width: 100%;
  margin-top: 10px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #d5d8dc;
`;

const Th = styled.th`
  border-bottom: 1px solid #d5d8dc;
  border-top: 1px solid #d5d8dc;
  padding: 10px 5px;
  font-size: 14px;
`;

const Td = styled.td`
  padding: 10px 5px;
  font-size: 13px;
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

interface Data_Value{
  id:string,
  name:string,
  phone:number,
  DateOfBirth:Date,
  Bloodgroup:string,
  Gender:string,
  City:string,
  State:string,
  Pincode: number,
  RegDate: string,
  Address: string,
  Bloodbank: string,
  medical:string
}

const AdminPannel = (props: any) => {
  
  const history = useHistory();

  const onEdit = (id:string) => {
    history.push({
      pathname: "/donarregister",
      state: {id:id,},
    });
  };

  const onRegister = () => {
    history.push({
      pathname: "/donarregister",
      state: {id: ""},
    });
  };

  const onDelete = (name:string) =>
  toast.info(name+" Data is Deleted", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return (
    <>
      <Wrapper className="container">
        <div className="row">
          <div className="col-md-6">
            <Title>Manage Donars</Title>
          </div>
          <ButtonContainer className="col-md-6">
            <Button onClick={() => onRegister()}>
              <AiOutlinePlusCircle style={Iconstyle} />
              &nbsp;Add New Donar
            </Button>
          </ButtonContainer>
        </div>
      </Wrapper>
      <div className="container">
        <Datatable className="table-responsive">
          <Tr>
            <Th>Name</Th>
            <Th>Phone</Th>
            <Th>Bloodgroup</Th>
            <Th>BloodBank</Th>
            <Th>Action</Th>
          </Tr>
          {props.values.map((cvalue:Data_Value) => {
            return (
              <Tr key={cvalue.id}>
                <Td>{cvalue.name}</Td>
                <Td>{cvalue.phone}</Td>
                <Td>{cvalue.Bloodgroup}</Td>
                <Td>{cvalue.Bloodbank}</Td>
                <Td>
                  <Actions title="Edit" onClick={() => onEdit(cvalue.id)}>
                    &#9998;&nbsp;
                  </Actions>
                  <ActionDel
                    title="Delete"
                    onClick={() => {props.dispatch(deleteDonar(cvalue.id)); onDelete(cvalue.name)}}
                  >
                    <AiFillDelete />
                  </ActionDel>
                </Td>
              </Tr>
            );
          })}
        </Datatable>
      </div>
    </>
  );
};

function mapStateToProps(state: { dataReducer:Data_Value; }) {
  return {
    values: state.dataReducer,
  };
}

export default connect(mapStateToProps)(AdminPannel);
