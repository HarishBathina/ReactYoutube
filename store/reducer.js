
 export const getSearch = state => state.search

const initialState={
    resultYt:[],
    search:"Arsenal"
    
};

//var resultyt;

console.log(initialState);

const reducer=(state=initialState,action)=>{
    if(action.type==='GET_VIDEOS_ASYNC'){
        
        

         return {
            ...state,
            resultYt:action.payload.slice()
            
     }

          
   
    }

    if(action.type==='NEW_SEARCH_ASYNC'){
        
        return{
            ...state,
            search:action.payload
        }
        //console.log(state.search,typeof(state.search))
    }

     
//console.log(resultyt);

     return state;

}

export default reducer;