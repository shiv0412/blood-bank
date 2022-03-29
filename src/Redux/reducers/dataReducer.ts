
const dataReducer = (state=[],action:any) => {

    switch(action.type){

        case "SAVEDATA":
            console.log(action.values);
            console.log(state);
            return [...state,{...action.values,id:Date.now()}];
            break;
            
        case "REMOVE_DONAR":
           console.log("Delete button clicked from reducer",action.id);
            return state.filter((values:any) => values.id !== action.id)
            break;

        case "UPDATE_DONAR":
            console.log("going to reducer",action.values);
            state.map((cvalue:any)=>{
                return (
                    cvalue.name=action.values.name,
                    cvalue.phone=action.values.phone,
                    cvalue.Bloodgroup=action.values.Bloodgroup,
                    cvalue.Bloodbank=action.values.Bloodbank   
                )
            })
            return state;

        default:
            return state;
    }
}

export default dataReducer;