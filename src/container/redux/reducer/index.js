const globalState ={

  isLogin : false,
  user:{},
  profiles : [],
  supplier :[],
  limitPage :5
}
//Reducer
const reducer= (state=globalState,action) =>{

  if(action.type==='CHANGE_ISLOGIN'){
    return {
      ...state,
      isLogin: action.value
    }
  }
  if(action.type==='CHANGE_USER'){
    return {
      ...state,
      user: action.value
    }
  }
  if(action.type==='SET_PROFILES'){
    return {
      ...state,
      profiles: action.value
    }
  }
  if(action.type==='SET_SUPLLIER'){
    return {
      ...state,
      supplier: action.value
    }
  }

  return state;
}


export  default reducer;
