//Libraries
import React,{Component} from 'react';


class Home extends Component {

 componentDidMount(){
   // setTimeout(()=>{
   //   this.setState(
   //     {showComponent:false}
   //   );
   // },7000);

 }

   render(){
     return (

               <div>
                   <p >component global</p>
               </div>
     )
   }
}

export default Home;
