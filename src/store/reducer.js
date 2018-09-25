
 export const getNew = state => state.resultYt;

var value;


const initialState={
    resultYt:[],
    search:"",
    liked:[]
    
};

var resultyt;

//console.log(initialState);

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

    if(action.type==='DEL_VID_ASYNC'){
        const secondary = state;
        resultyt= secondary.resultYt.splice(action.payload,1)
        const remaining=secondary.resultYt
        return{
            ...state,
           
            resultYt:remaining.slice()
        }
        
    }

    if(action.type==='LIKED_VIDEOS'){

        //console.log(state.liked);

        return{
            ...state,
            liked:state.liked.concat(action.payload)
        }

    }

     
     // console.log(state.resultYt);

     return state;

}

export default reducer;