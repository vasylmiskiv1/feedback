import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"

export default function FeedbackList({ feedback, handleDelete }) {
  return (
    <>
    {feedback.length ? (
      <div className="feedack-list">
        <AnimatePresence>
        {feedback.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem  
              key={item.id} 
              item={item} 
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
        </AnimatePresence>
      </div>
    ) : 
    (<h2 className='feeback-list__empty'>No feedback yet &#x1F642;</h2>)}
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
