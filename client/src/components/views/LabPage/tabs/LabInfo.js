import { withRouter } from 'react-router-dom';
import LabBar from '../LabBar';
import LabHeader from '../LabHeader';

const LabInfo = () =>{
    return (
        <div>
            <LabHeader />
            <LabBar />
        </div>
    );
}
export default withRouter(LabInfo);
