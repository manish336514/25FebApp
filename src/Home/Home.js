import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import ControlledCarousel from './ControlledCarousel';
import JobOpening from './JobOpening';
import Description from './Description';
import PopUp from './Popup';


import data from '../Data';

class Home extends Component {
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


      return (
          <div>
 <Header/>
       <ControlledCarousel />
       <div class="container">
  <div class="first">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <div class="second">Lorem ipsum dolor sit amr eligendi fuga sit. Hic quisquam rerum dolor quam natus.Fugiat nam recusandae doloribus culpa obcaecati facere eligendi consectetur cum eveniet quod et, eum, libero esse voluptates. Ut commodi consequuntur eligendi doloremque deserunt modi animi explicabo aperiam, non, quas qui!</div>
  <div class="third">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet obcaecati, rem. Ullam quia quae, ad, unde saepe velit incidunt, aliquid eum facere obcaecati molestiae? Repellendus tempore magnam facere, sint similique!</div>
  <div class="fourth">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet obcaecati, rem. Ullam quia quae, ad, unde saepe velit incidunt, aliquid eum facere obcaecati molestiae? Repellendus tempore magnam facere, sint similique!</div>

</div>
{
  data.products.top.map((item, index) => {
    return (
      this.state.show ? <PopUp text={item} hideModal={this.hideModal}/>:

    <Description key={index} newdata={item}  hidemodal={this.hideModal} showModal={this.showModal} />
    
    
    )
})



}




       <JobOpening/>
          </div>
      
      );
    }
  }
  
  export default Home;
  