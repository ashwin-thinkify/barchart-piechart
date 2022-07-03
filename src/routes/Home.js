import React from "react";
import TimelinePublications from "../containers/visualize/TimelinePublications";
import { useNavigate } from 'react-router-dom';

export default function TodoApp() {

  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/AuthorPublication');
  }

  return (
    <div className="app-wrapper">
      <div className="app-header">
          <h1>VISALUZATION </h1> <div className={'button-link'} onClick={clickHandler}> Go to author publication</div>
      </div>
      <TimelinePublications />
    </div>
  );
}
