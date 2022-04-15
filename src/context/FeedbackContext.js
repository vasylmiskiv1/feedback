import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

// define feedback context
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [loader, setLoader] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    console.log(fetchFeedback())
  }, [])

// fetch feedback
const fetchFeedback = async () => {
  const res = await fetch(
    `http://localhost:5000/feedback?_sort=id&_order=desc`
    )
  const data = await res.json()
  
  setFeedback(data)
  setLoader(false)
}

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
        loader,
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