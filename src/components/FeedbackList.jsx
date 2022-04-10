import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

export default function FeedbackList({ feedback, handleDelete }) {
  return (
    <>
    {feedback ? (
      <div className="feedack-list">
        {feedback.map((item) => (
          <>
          <FeedbackItem  
            key={item.id} 
            item={item} 
            handleDelete={handleDelete}
          />
          </>
        ))}
      </div>
    ) : 
    (<h3>No feedback yet</h3>)}
    </>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}
