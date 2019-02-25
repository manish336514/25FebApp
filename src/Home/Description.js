import React, { Component } from 'react';
import '../App.css';
import FloatingActionButtonZoom from './FloatingActionButtonZoom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import PopUp from './Popup';

const styles = {
    button: {
      margin: 20 ,
      padding :10,
    },
    rightIcon: {
      marginLeft: 10,
    },
    iconSmall: {
      fontSize: 30,
    },
  }
  export default class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false ,

        };
        
    }
    showModal = () => {
        this.setState({ show:!this.state.show  });
      };
    
      hideModal = () => {
        this.setState({ show: !this.state.show });
      };
    
 


    render() {
     

        const logo1=this.props.newdata.logolocation;
        const logo = require('../Images/'+logo1);


      return (


        <div >
   <div  class="box effect1"   tabindex="0">


<div class ="description">
            <div class="container">
  <div class="fifth">
  <img src={logo}  width={210} height={180}/>

  </div>
  <div class="second">
  <div class="second1">
  {this.props.newdata.company}

  <FloatingActionButtonZoom  job={this.props.newdata.eligibility} last={this.props.newdata.lastdate}/>

  </div>
  
  </div>
  <div class="six">

  <button color="primary" className={styles.button}>
        Apply
        
      </button>
      <br/>
      <br/>
      <br/>
      <br/>

      <button variant="contained" color="secondary" className={styles.button} onClick={this.props.showModal}  >
        More Details
        <DescriptionIcon  />

      </button>
  
</div>

 
</div>
 </div>
          </div>





       </div>
         
      
      );
    }
  }
  

  