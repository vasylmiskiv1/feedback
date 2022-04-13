import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// define feedback context
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is text from context',
      rating: 5
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Add
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  // Delete
  const deleteFeedback = (id) => {
    if (window.confirm('Are u sure u want to delete?')) {
      setFeedback(feedback.filter((item) => {
        return item.id !== id
      }))
    }
  }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((e) => e.id === id ?
     {...e, ...updItem} : e))
  }

  // Edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext