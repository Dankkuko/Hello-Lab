import { useEffect } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';
import '../views.css';
import LabBar from './LabBar';
import LabHeader from './LabHeader';

function LabPage() {
  return (
    <div>
      <LabHeader/>
      <LabBar/>
    </div>
  );
}

export default withRouter(LabPage);
