import { withRouter } from 'react-router-dom';
import LabBar from '../LabBar';
import LabHeader from '../LabHeader';

const LabSession = () =>{
    return (
        <div>
            <LabHeader/>
            <LabBar />
        </div>
    );
}
export default withRouter(LabSession);
