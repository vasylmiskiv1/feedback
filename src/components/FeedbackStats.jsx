import PropTypes from 'prop-types'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
  // pull out the feedback from state
  const {  feedback } = useContext(FeedbackContext)
  
  // caclulate average rating
  let averageRating = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
  
  //get rid of numbers after point / regex if zero remove it
  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '')
  
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      {averageRating >= 1 ? 
        (<h4>Average rating: {averageRating}</h4>) : 
        (<h4>No rating yet</h4>)
      }
    </div>
  )
}
