import axios from "axios";

const initialState={
    resultYt:[],
    search:"Arsenal"
    
};

var resultyt;

console.log(initialState);

const reducer=(state=initialState,action)=>{
    if(action.type==='GET_VIDEOS'){
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${state.search}&type=video&key=AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y`)
        .then(res => 
         {
             resultyt =res.data.items.map(obj=>"https://www.youtube.com/embed/"+obj.id.videoId);
            
         })

          return{
                  ...state,
                  resultYt:resultyt.slice()
           }
   
    }

    if(action.type==='NEW_SEARCH'){

        return{
            ...state,
            search:action.value
        }
    }

     
//console.log(resultyt);

     return state;

}

export default reducer;