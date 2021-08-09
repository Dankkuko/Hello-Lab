import { withRouter } from 'react-router-dom';
import LabBar from '../LabBar';
import LabHeader from '../LabHeader';

const LabCal = () =>{
    return (
        <div>
            <LabHeader/>
            <LabBar />
        </div>
    );
}
export default withRouter(LabCal);
