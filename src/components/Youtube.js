import React,{component} from "react";

import axios from "axios";

const API='AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y'
const result=6;
const searchTerm="angular";
import '../styles/main.scss';
var imgsrc=[];
//document.addEventListener('touchstart', handler, {capture: true});


//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=react&type=video&key=AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y

export default class Youtube extends React.Component{

    constructor(props){
        super()
        this.state={
            resultYt: [],
            imgsrc:[],
            title:[],
            search:"Arsenal",
            

        }
    }

   
    getVideos(){
        

        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${this.state.search}&type=video&key=AIzaSyDFRirKWMefYDduWmPoc-OWStD1jpNvM-Y`)
        .then(res => 
        {
            //console.log(res.data)
            //const title=res.data.items.map(obj=>obj.snippet.title)
            //imgsrc=res.data.items.map(obj=>obj.snippet.thumbnails.default.url)
            const resultyt=res.data.items.map(obj=>"https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({resultYt:resultyt});//,imgsrc:imgsrc,title:title});
            //console.log(title);
            //this.setState({});
            console.log(res.data.items);
            console.log(resultyt);
           //setTimeout(this.shouldComponentUpdate(),10000)
        })

    
    }
    shouldComponentUpdate(){
        return true;
    }

    newSearch(e){
        //e.preventdefault();
        this.setState({
            search:e.target.value
        });
        setTimeout(this.getVideos.bind(this),3000)
        //this.getVideos();
    }
    delete(i){
        //console.log(i);
        //console.log("Hii");
        const remaining = this.state.resultYt.splice(i,1)
        const remain =this.state.resultYt
        this.setState({

            resultYt:remain
            
        })
            
        }
    
    

    render(){
        //console.log(this.state.resultYt);
        //console.log(this.state.resultYt)
        
        return(
            
            
            <div>
                             
                   
                   <input type="text" className="col-md-3" value={this.state.search} onChange={this.newSearch.bind(this)}></input>
                   <button onClick={this.getVideos.bind(this)}>Get Videos</button>

                   {/* <Result result={this.state.resultYt}/> */}
                   
                   {

                        this.state.resultYt.map((link,i)=>{
                         //const show;

                        var frame= <div className="youtube col-md-12" key={i}> <iframe height="315" className="col-md-6" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                         <button onClick={this.delete.bind(this,i)}>Delete</button></div>
                        return frame
                            
                            })
                       
                           
                    }
                    
                    <div className="col-md-12" >
                   
                    

                    
                    
                    </div>
                    
                    <br/>
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