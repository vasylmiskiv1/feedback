import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import Header from './components/Header';

// import data
import FeedbackData from './data/FeedbackData';

// import components
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

// import pages
import AboutPage from './pages/AboutPage';

// import global state store hook API
import {FeedbackProvider} from './context/FeedbackContext'


function App () {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are u sure u want to delete?')) {
      setFeedback(feedback.filter((item) => {
        return item.id !== id
      }))
    }
  }

  return (
    <FeedbackProvider>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats />
                <FeedbackList 
                  handleDelete={deleteFeedback}
                />
              </>
              }
              ></Route>
              <Route path='about' element={<AboutPage />} />
            </Routes>
          </div>
          <AboutIconLink />
        </Router>
      </FeedbackProvider>
  )
}

export default App;