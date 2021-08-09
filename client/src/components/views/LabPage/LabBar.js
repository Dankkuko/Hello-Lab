import 'bootstrap/dist/css/bootstrap.css';
import './LabBar.css';

const pageInfo =[
    {
      tab: "소개",
      link: "/lab/info"
    },
    {
      tab: "공지",
      link: "/lab/notice"
    },
    {
      tab: "일정",
      link: "/lab/calendar"
    },
    {
      tab: "연구",
      link: "/lab/project"
    },
    
    {
      tab: "질문",
      link: "/lab/ask"
    },
    {
      tab: "세션",
      link: "/lab/session"
    }
  ]

const LabBar = () =>{
    return (
        <div>
            <nav id="lab-bar" className="navbar">
                <ul id="lab-ul" className="navbar-nav">
                    {pageInfo.map((section, index)=>(
                        <li className="tab nav-item">
                            <a className="tab-link nav-link" href={section.link}>
                                <span className="tab-title">{section.tab}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default LabBar;