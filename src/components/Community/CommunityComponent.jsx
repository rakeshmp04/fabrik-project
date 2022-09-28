import React, { Component} from 'react';
import './CommunityComponentStyle.css';

class Community extends Component{
    render(){
        this.state={
         modelGallery:[
          {src:'P1.glb', title:'P1'},
          {src:'P3.glb', title:'P3'},
          {src:'P4.glb', title:'P4'},
          {src:'P6.glb', title:'P6'},
          {src:'P7.glb', title:'P7'},
          {src:'P8.glb', title:'P8'},
          {src:'P9.glb', title:'P9'},
          {src:'P12.glb', title:'P12'},
          {src:'P13.glb', title:'P13'},
          {src:'P17.glb', title:'P17'},
          {src:'P18.glb', title:'P18'},
        ] 
        }

      function handleClick(name) {
          console.log(name);
          return name;
      }

     return(
          <div className={`community-container`}>
                <h1>Community</h1>
                <h2>Ideas of the open world</h2><br></br>
                <input type="search" className='search' placeholder='Search'></input>
                <div className={`model-list-container`}>
                  <div className={`model-list`}>
                   {
                    this.state.modelGallery.map((name) => 
                      <button onClick={() => handleClick(name.src)}>{name.title}</button>
                      )
                    }
                  </div>
                </div>
            </div>  
        )
    }
}

export default Community;
