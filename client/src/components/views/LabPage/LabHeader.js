import '../views.css';
import './LabHeader.css';

const labInfo = {
    name: "운영체제",
    prof: "최종무"   
}

const LabHeader = () =>{

    return (
        <div id="lab-header">
            <span>
                <span id="lab-name">{labInfo.name} 연구실</span>
                <span id="lab-prof">{labInfo.prof} 교수</span>
            </span>
        </div>
    );
}

export default LabHeader;