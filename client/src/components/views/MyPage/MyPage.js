import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, withRouter } from 'react-router-dom';
import './MyPage.css';
import '../views.css';
import { actionCreators } from "_actions/lab_action";
import {connect} from 'react-redux';


function MyPage({data, replaceLab}) {



    const onDashboardHandler = (section) => {
        
        // 실제 동작 시 lab 페이지로 정보 넘겨줘야 함
        // lab 페이지는 정보 받아서 해당 lab 페이지 출력해야 함
        axios
        .get(`/app/lab/${section.id}`)
        .then((response) => {
            console.log(response)
            const {name, pname, professorId} = response.data[0]
            const newLab = {
                name: name, 
                pname:pname, 
                id:professorId,
                category: "main",
                tab: "info"
            };
            replaceLab(newLab);
            const {lab: {
                id
              }} = data;
              
            window.location.href=`/lab/${id}`;
        });
    }


  return (
    <div className="wrap">
        <div id="container">
            <div id="profile">
                <img src=""/>
                <span>Name</span>
                <span>Student Number</span>
                <span>Email</span>
            </div>
            <div id="my_lab">
                <h2><span>내 연구실</span></h2>
                <ul id="lab_list">
                    {lab.map((section) => (
                        <li key={section.id}>
                            <div type="button" onClick={() => onDashboardHandler(section)} className="dashboard_card">
                                <img className="lab_img" src={section.imgPath}/>
                                <p className="lab_name">{section.name} 연구실</p>
                                <p className="prof">{section.pname} 교수</p>
                            </div>
                        </li>  
                    ))}
                </ul>
            </div>
        </div>
    </div>
    
  );
}

const mapStateToProps = (state)=>{
    return{data: state}
}

const mapDispatchToProps = (dispatch) =>{
    return {
      replaceLab: (lab) => dispatch(actionCreators.replaceLab(lab))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (MyPage);
  
  