import React from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './data/questions.json';

class App extends React.Component {

  state = {
    questions: questions,
    startCards: false,
    reqs: ["- 5+ years of programming experience",
      "- 5+ years experience performing code reviews",
      "- 3+ years experience working in a distributed agile team environment",
      "- Knowledge of design principles to support unit testing",
      "- Experience using front-end technologies (Angular 7/8, RxJS/Redux, Bootstrap 4, CSS, SASS and JavaScript/TypeScript)",
      "- Experience designing APIs and services using a microservices architecture",
      "- Experienced with: NodeJS/NestJS",
      "- Experience with SQL/NoSQL/Graph databases, such as PostgreSQL, MongoDB, Neptune",
      "- Familiar with enterprise architecture patterns (CQRS, EventSourcing, Messaging (via RabbitMQ)"]
  }

  renderCard = () => {
    let questions = this.state.questions;
    console.log(questions);
    let list = questions.map(
      (item, i) => {
        console.log(item)
        item.answer = item.answer.replace("\\n", "\n");
        return (<section id={"page-" + i} className="page" key={i}>
          <h1>{item.question}</h1>
          <p>{item.answer}</p>
          <div>
            {i > 0 && <a href={"#page-" + (i - 1)} className="btn btn-dark">Prev Page <i class="fas fa-arrow-circle-up"></i></a>}
            <a href={"#page-" + (i + 1)} className="btn">Next Page <i className="fas fa-arrow-circle-down"></i></a>
          </div>
        </section>)
      }
    )
    return list

  }

  renderReqs = () => {
    let reqs = this.state.reqs;
    let list = reqs.map(
      (item, i) => {
        console.log(item)

        return (<li key={i}>{item}</li>)
      })
    return list;
  }

  start = () => {
    this.setState({
      startCards: true
    })
  }



  render() {
    return (
      <div className="App" style={{
        backgroundColor: '#333'
      }}>
        {!this.state.startCards &&
          <div className="container">
            <p> Job Specs: What You Will Be Doing
            This position is responsible for developing web-based applications in modern technologies in an Agile / Kanban environment. Adhere to best practices when designing, implementing, testing and developing scalable, secure code. Work closely with Product Managers, Quality Analysts and DevOps Engineers.
        </p>
            <p>What You Need for this Position
              <ul>
                {this.renderReqs()}
              </ul></p>
            <button onClick={this.start}>Start</button>
          </div>}
        {this.state.startCards && this.renderCard()}
      </div >
    );
  }
}

export default App;
