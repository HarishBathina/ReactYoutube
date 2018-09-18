import 'regenerator-runtime/runtime';
import {delay} from 'redux-saga';
import axios from "axios";
import {takeEvery,put,takeLatest} from 'redux-saga/effects';
var value;
// import{getSearch} from


function* getVidAsync(val){

   if(val.value!=undefined){

      
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${val.value}&type=video&key=AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y`)
        .then(res => 
         {
              value =res.data.items.map(obj=>"https://www.youtube.com/embed/"+obj.id.videoId);
             
            
         });
         
    yield delay(1000);
    //console.log("wrongplace")

    yield put({type:'GET_VIDEOS_ASYNC',payload:value});
  }
}



export function* watchGetVideos(){

    yield takeEvery('GET_VIDEOS',getVidAsync);

    

    yield takeLatest('NEW_SEARCH',getVidAsync);

}

