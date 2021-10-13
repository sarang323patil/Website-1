import React from "react";
// import './Cardb.css';
// import p1 from './assets/img/p1.svg';

function Cardb() {
  return (
    <div className="wrapper">
      <Card
        img = '../assets/img/bg1.jpg'
        title="Psychologist"
        description="Need some professional help right at yourr doorstep without disclosing much about yourself? 
        Connect with the best Counsellors and Psychologists at one place."
      />

      <Card
        img="D:\software_dev\dendo_clone\Website-1\my-app\src\images\p1.svg"
        title="Psychiatrist"
        description="Find the best specialists, Mentor Doctors for the well being of your mental health."
      />

      <Card
        img="../assets/img/p1.svg"
        title="Mentor"
        description="Stuck with career options? Want to pursue something different? Then you are at the right place! 
        Best mentors with worth sharing real life experiences to guide the new minds of the nation."
      />
    </div>
  );
}

function Card(props) {
    const ulStyle = {padding: '1rem',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    fontSize: '1rem',
    margin: '1rem',
    border: '2px solid $clr-primary',
    background: 'transparent',
    color: '$clr-primary',
    borderRadius: '$radius',
    transition: 'background 200ms ease-in, color 200ms ease-in' }
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn" style={ulStyle} >View Recipe</button>
    </div>
  );
}

export default Cardb
