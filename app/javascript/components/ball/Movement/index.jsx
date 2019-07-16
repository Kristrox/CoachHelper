import React, { Component } from "react";
import styled from 'styled-components';
import Droppable from '../Droppable';
import Draggable from '../Draggable';
import img from '../img/playgroundfield_background.png';
//import { Col, Row } from 'react-grid-system';

const Wrapper1 = styled.div`
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    justify-content:center;

`;
const Wrapper2 = styled.div`

    background-image: url(${img});
    background-size: 100% 600px;
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;


`;

const Item = styled.div`
    padding: 8px;
    color: #555;
    background-color: white;
    border-radius: 3px;
`;

const droppableStyle1 = {
    

    width: '50px',
    height: '50px',

};
const droppableStyle2 = {
    
    backgroundColor: 'green',
    width: '700px',
    height: '600px',
    margin: '32px'
};

export default class Movement extends Component{
    render(){
        return (
            <Wrapper2>
   
                <Wrapper1>
                   
                        <Droppable id="dr1" style={droppableStyle1}>
                            <Draggable id="item1" ><h1>⚽</h1></Draggable>
                            <Draggable id="item2" ><h1>👕</h1></Draggable>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                        <Droppable id="dr2" style={droppableStyle1}>

                        </Droppable>
                 
                    </Wrapper1>
                    <Wrapper1>
                   
                    <Droppable id="dr1" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
                    <Droppable id="dr2" style={droppableStyle1}>

                    </Droppable>
             
                </Wrapper1>
                <Wrapper1>
                   
                   <Droppable id="dr1" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
            
               </Wrapper1>
               <Wrapper1>
                   
                   <Droppable id="dr1" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
            
               </Wrapper1>
               <Wrapper1>
                   
                   <Droppable id="dr1" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
            
               </Wrapper1>
               <Wrapper1>
                   
                   <Droppable id="dr1" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
            
               </Wrapper1>
               <Wrapper1>
                   
                   <Droppable id="dr1" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
                   <Droppable id="dr2" style={droppableStyle1}>

                   </Droppable>
            
               </Wrapper1>
               <Wrapper1>
                  
                  <Droppable id="dr1" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
           
              </Wrapper1>
              <Wrapper1>
                  
                  <Droppable id="dr1" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
           
              </Wrapper1>
              <Wrapper1>
                  
                  <Droppable id="dr1" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
           
              </Wrapper1>
              <Wrapper1>
                  
                  <Droppable id="dr1" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
                  <Droppable id="dr2" style={droppableStyle1}>

                  </Droppable>
           
              </Wrapper1>
            </Wrapper2>
        );
    }
}

