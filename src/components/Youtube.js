import React, { component } from "react";

import axios from "axios";

const API = 'AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y'
const result = 6;
const searchTerm = "angular";
import '../styles/main.scss';
var imgsrc = [];
import { connect } from 'react-redux';
import { delay } from "redux-saga";
var truthy = [];

//document.addEventListener('touchstart', handler, {capture: true});


//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=react&type=video&key=AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y

class Youtube extends React.Component {

    //  constructor(props){
    //     super()
    //    this.state={

    //        
    // //     //     resultYt: [],
    // //     //     imgsrc:[],
    // //     //     title:[],
    // //     //     search:"Arsenal",


    // //      }
    //  }


    // getVideos(){


    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${this.state.search}&type=video&key=AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y`)
    //     .then(res => 
    //     {
    //         //console.log(res.data)
    //         //const title=res.data.items.map(obj=>obj.snippet.title)
    //         //imgsrc=res.data.items.map(obj=>obj.snippet.thumbnails.default.url)
    //         const resultyt=res.data.items.map(obj=>"https://www.youtube.com/embed/"+obj.id.videoId);
    //         this.setState({resultYt:resultyt});//,imgsrc:imgsrc,title:title});
    //         //console.log(title);
    //         //this.setState({});
    //         console.log(res.data.items);
    //         console.log(resultyt);
    //        //setTimeout(this.shouldComponentUpdate(),10000)
    //     })


    //}

    // componentWillReceiveProps(nextProps){
    //     if(this.props.search!==nextProps.search)
    //     {
    //         this.props.getVideos();
    //     }

    // }


    // shouldComponentUpdate(){
    //     return true;
    // }

    // newSearch(e){
    //     //e.preventdefault();
    //     this.setState({
    //         search:e.target.value
    //     });
    //     setTimeout(this.getVideos.bind(this),3000)
    //     //this.getVideos();
    // }
    // delete(i){
    //     //console.log(i);
    //     //console.log("Hii");
    //     const remaining = this.state.resultYt.splice(i,1)
    //     const remain =this.state.resultYt
    //     this.setState({

    //         resultYt:remain

    //     })

    //     }
    componentDidMount() {

        this.props.initialLiked();

    }

    shouldComponentUpdate() {

        //     console.log('inn');
        //     this.props.resultYt.map((id,i)=>{


        console.log('ready for update');
        // });
        // yield call(delay,2000);
        return true;

    }



    render() {
        //console.log(this.props.resultYt);
        //console.log(this.state.resultYt)

        return (


            <div>


                <input type="text" className="col-md-3" onChange={this.props.newSearch.bind(this)}></input>
                {/* <button onClick={this.getVideos.bind(this)}>Get Videos</button> */}

                <button onClick={this.props.getVideos.bind(this, this.props.search)}>Get Videos</button>
                <button onClick={this.props.getLikedVideos.bind(this)}>Liked Videos</button>

                {/* <Result result={this.state.resultYt}/> */}

                {

                    this.props.resultYt.map((id, i) => {



                        //const show;
                        ///console.log("Hiii");
                        var frame = <div className="youtube col-md-12" key={i}> <iframe height="315" className="col-md-6" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            <button onClick={this.props.delete.bind(this, i)}>Delete</button>
                            <button disabled={this.props.liked.indexOf(id) !== -1} onClick={this.props.addDB.bind(this, id)}>Like</button>
                        </div>
                        return frame

                    })


                }

                <div className="col-md-12" >





                </div>

                <br />
                {/* {
                        this.state.imgsrc.map((obj,i)=>{
                        var image= <div key={i}> <img src={obj}/></div>
                        return image
                       })
                    }
                     

                     
                        

                    {
                        this.state.title.map((obj,i)=>{
                        var name= <div key={i}> <a href="http://www.youtube.com" target="_blank" >{obj}</a></div>
                        return name
                       })
                    }
                    <div> 
                     <div className="inline">
                         {this.image} 
                         
                     </div>
                     <div>
                         {this.name} 
                         
                     </div>
                </div> */}


            </div>

        );
    }
}


const mapStoreToProps = (store) => {
    return {

        resultYt: store.resultYt,
        search: store.search,
        liked: store.liked

    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        newSearch: (e) => dispatch({ type: 'NEW_SEARCH', value: e.target.value }),
        getVideos: (srch) => dispatch({ type: 'GET_VIDEOS', value: srch }),
        delete: (i) => dispatch({ type: 'DELETE_VIDEO', value: i }),
        getLikedVideos: () => dispatch({ type: 'GET_LIKED_VIDEOS' }),
        addDB: (id) => dispatch({ type: 'ADD2DB', value: id }),
        initialLiked: () => dispatch({ type: 'GET_LIKED_DB' })
    }
}


export default connect(mapStoreToProps, mapDispatchToProps)(Youtube);