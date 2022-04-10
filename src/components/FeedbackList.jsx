import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

export default function FeedbackList({ feedback }) {
  return (
    <>
    {feedback ? (
      <div className="feedack-list">
        {feedback.map((item) => (
          <>
          <FeedbackItem  key={item.id} item={item}/>
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
