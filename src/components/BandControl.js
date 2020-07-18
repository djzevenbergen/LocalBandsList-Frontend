// import React from 'react';
// import NewQuizForm from './NewQuizForm';
// import QuizList from './QuizList';
// import SubmitQuiz from './SubmitQuiz';
// import QuizDashboard from './QuizDashboard';
// import EditQuizForm from './EditQuizForm';
// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import { withFirestore, isLoaded } from 'react-redux-firebase';


// class QuizControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedQuiz: null,
//       editing: false,
//       formVisibleOnPage: false,
//       dashBoardVisible: false
//     };
//   }

//   handleEditingQuizInList = () => {
//     this.setState({
//       editing: false,
//       selectedQuiz: null
//     });
//   }


//   handleClick = () => {
//     if (this.state.selectedQuiz != null) {
//       this.setState({
//         selectedQuiz: null,
//         editing: false
//       });
//     } else {
//       console.log("hi there, i'm form visible:" + this.state.formVisibleOnPage);
//       this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
//       console.log("hi there, i'm form visible:" + this.state.formVisibleOnPage);
//     }
//   }

//   handleDashboardClick = () => {
//     this.setState(prevState => ({ dashBoardVisible: !prevState.dashBoardVisible }))
//   }

//   handleAddingNewQuizToList = () => {
//     this.setState({ formVisibleOnPage: !this.state.formVisibleOnPage });
//   }

//   handleSubmittingQuiz = () => {
//     this.setState({ formVisibleOnPage: !this.state.formVisibleOnPage });
//   }

//   handleChangingSelectedQuiz = (id) => {
//     this.props.firestore.get({ collection: 'quizzes', doc: id }).then((quiz) => {
//       const firestoreQuiz = {
//         this.setState({ selectedQuiz: firestoreQuiz });
//       });
//   }


//   handleEditClick = () => {
//     this.setState({ editing: true });
//   }


//   handleDeletingQuiz = (id) => {
//     this.props.firestore.delete({ collection: 'quizzes', doc: id });
//     this.setState({ selectedQuiz: null });
//   }

//   render() {
//     let currentlyVisibleState = null;
//     let buttonText = null;
//     let dashText = null;
//     const auth = this.props.firebase.auth();

//     if (!isLoaded(auth)) {
//       return (
//         <React.Fragment>
//           <h1>Loading...</h1>
//         </React.Fragment>
//       )
//     }
//     if ((isLoaded(auth)) && (auth.currentUser == null)) {
//       return (
//         <React.Fragment>
//           <h1>You must be signed in to access the queue.</h1>
//         </React.Fragment>
//       )
//     }
//     if ((isLoaded(auth)) && (auth.currentUser != null)) {

//       if (this.state.dashBoardVisible) {
//         currentlyVisibleState = <QuizDashboard auth={this.props.firebase.auth()} onQuizSelection={this.handleChangingSelectedQuiz} />
//         buttonText = "Back to Quiz List";
//         dashText = "Back to text";
//       } else if (this.state.editing) {
//         currentlyVisibleState = <EditQuizForm quiz={this.state.selectedQuiz} onEditQuiz={this.handleEditingQuizInList} />
//         buttonText = "Return to Quiz List";
//         dashText = "See Your Dashboard";
//       } else if (this.state.selectedQuiz != null) {
//         currentlyVisibleState =
//           <SubmitQuiz
//             auth={this.props.firebase.auth()}
//             quiz={this.state.selectedQuiz}
//             onQuizSubmission={this.handleSubmittingQuiz}
//             onClickingDelete={this.handleDeletingQuiz}
//             onClickingEdit={this.handleEditClick} />
//         buttonText = "Return to Quiz List";
//         dashText = "See Your Dashboard";
//       } else if (this.state.formVisibleOnPage) {
//         currentlyVisibleState = <NewQuizForm auth={this.props.firebase.auth()} onNewQuizCreation={this.handleAddingNewQuizToList} />;
//         buttonText = "Return to Quiz List";
//         dashText = "See Your Dashboard";
//       } else {
//         currentlyVisibleState = <QuizList onQuizSelection={this.handleChangingSelectedQuiz} />;
//         buttonText = "Add Quiz";
//         dashText = "See Your Dashboard";
//       }
//       return (
//         <React.Fragment>
//           {currentlyVisibleState}
//           <button onClick={this.handleClick}>{buttonText}</button>
//           <button onClick={this.handleDashboardClick}>{dashText}</button>

//         </React.Fragment>
//       );
//     }
//   }
// }

// QuizControl.propTypes = {
//   masterQuizList: PropTypes.object
// };




// export default QuizControl;









