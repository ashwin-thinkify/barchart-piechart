import AuthorsPublications from "../containers/visualize/AuthorsPublications";
import { useNavigate } from 'react-router-dom';

export default function AuthorPublicationHome() {

  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/');
  }

    return (
      <div className="app-wrapper">
      <div className="app-header">
          <h1>VISALUZATION </h1> <div className={'button-link'} onClick={clickHandler}>  Go to timeline publication</div>
      </div>
      <AuthorsPublications />
    </div>
    );
  }