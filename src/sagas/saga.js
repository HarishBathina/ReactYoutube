import 'regenerator-runtime/runtime';
import {delay} from 'redux-saga';
import axios from "axios";
import {takeEvery,put,takeLatest} from 'redux-saga/effects';
var value;




// import {getNew} from '../store/reducer';


function* getVidAsync(val){

   if(val.value!=undefined){

      
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${val.value}&type=video&key=AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y`)
        .then(res => 
         {
              value =res.data.items.map(obj=>obj.id.videoId);
             
            
         });
         
    yield delay(1000);
    //console.log("wrongplace")

    yield put({type:'GET_VIDEOS_ASYNC',payload:value});
  }
}

function* delVidAsync(i){
    console.log(i.value);
    yield put({type:'DEL_VID_ASYNC',payload:i.value});
}


function* getLikedVideosAsync(){
    axios.get('http://localhost:3000/api/user/')
    .then(res =>
    {
        value=res.data.map(obj=>obj.videoId);
    });
    yield delay(1000);
    //console.log("wrongplace")

    yield put({type:'GET_VIDEOS_ASYNC',payload:value});

    
}

function* postAsync(id){

    console.log(id.value);
    axios.post('http://localhost:3000/api/user/',{
        videoId: id.value,
        Liked: 'true'

    });
    yield delay(1000);

    yield put({type:'LIKED_VIDEOS',payload:id.value});
}

function* getLikedDbAsync(){
    axios.get('http://localhost:3000/api/user/')
    .then(res =>
    {
        value=res.data.map(obj=>obj.videoId);
    });
    yield delay(1000);
    

    yield put({type:'LIKED_VIDEOS',payload:value});

}



export function* watchGetVideos(){

    yield takeEvery('GET_VIDEOS',getVidAsync);

    

    yield takeLatest('NEW_SEARCH',getVidAsync);

    yield takeLatest('DELETE_VIDEO',delVidAsync);

    yield takeEvery('GET_LIKED_VIDEOS',getLikedVideosAsync);

    yield takeEvery('ADD2DB',postAsync);

    yield takeEvery('GET_LIKED_DB',getLikedDbAsync)

}

