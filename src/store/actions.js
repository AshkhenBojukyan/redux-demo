export function onReset(){
    return (dispatch) =>{
        dispatch({type:"RESET_VALUE"}) 
    };
}

export function onDecrement(){
    return (dispatch)=>{
        dispatch({type:"DECREMENT"})
    };
}

export function onIncrement(){
    return (dispatch)=>{
        dispatch({type:"INCREMENT"})
    };
}

export function onSubValue10(){
    return (dispatch)=>{
        dispatch({type:"SUB_VALUE10"})
    };
}

export function onAddValue10(){
    return (dispatch)=>{
        dispatch({type:"ADD_VALUE10"})
    };
}

export function onSubValue5(){
    return (dispatch)=>{
        dispatch({type:"SUB_VALUE5"})
    };
}

export function onAddValue5(){
    return (dispatch)=>{
        dispatch({type:"ADD_VALUE5"})
    };
}

