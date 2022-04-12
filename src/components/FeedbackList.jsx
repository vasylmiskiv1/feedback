import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackList() {
  const { feedback }  = useContext(FeedbackContext)
  
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
