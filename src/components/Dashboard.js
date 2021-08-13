import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
//import QuestionTile from './QuestionTile'
import Question from './Quest'

class Dashboard extends Component {
    state = {
        showAnswered: false
    }
    filterQuestions = (showAnswered) => {
        this.setState((state) => {
            return { showAnswered: showAnswered }
        })
        
    }
    render() {
        const { showAnswered } = this.state;
        const { questions, authedUser } = this.props
        const questionsArray = Object.values(questions)
        const filteredQuestions = questionsArray.filter(function(quest) {
            const contains = (
                quest.optionOne.votes.indexOf(authedUser) > -1 ||
                quest.optionTwo.votes.indexOf(authedUser) > -1
            );
            return showAnswered ? contains : !contains;
        });
        const sortedQuestions = filteredQuestions.sort((a, b) => b.timestamp - a.timestamp);
        return (
            <div>
                <div className="btn-group">
                    <button className={ !showAnswered ? 'btn-selected' : 'btn-default'} onClick={(e) => this.filterQuestions(false)}>Unanswered Questions</button>
                    <button className={ showAnswered ? 'btn-selected' : 'btn-default'} onClick={(e) => this.filterQuestions(true)}>Answered Questions</button>
                </div>

                <ul className="questions-list">
                    {sortedQuestions.map((quest) => (
                        <li key={quest.id}>
                            <Link to={`question/${quest['id']}`}>
                                <Question id={quest.id}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapS( { questions, authedUser }) {
    return {
        authedUser,
        questions,
    }
}

export default connect(mapS)(Dashboard);