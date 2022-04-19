import { createContext, useState, useEffect } from "react";

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

// fetch feedback list from db
const fetchFeedback = async () => {
  const res = await fetch(
    `/feedback?_sort=id&_order=desc`
    )
  const data = await res.json()
  
  setFeedback(data)
  setLoader(false)
}

  // Add feebdack to db
  const addFeedback = async (newFeedback) => {
    const res = await fetch(
      `/feedback`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      })

      const data = await res.json()

      setFeedback([data, ...feedback])
  }

  // Delete from server
  const deleteFeedback = async (id) => {
    if (window.confirm('Are u sure u want to delete?')) {
      await fetch(`/feedback/${id}`, {method: 'delete'})
      
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      // convert to json
      body: JSON.stringify(updItem)
    })
    // convert to object
    const data = await res.json()

    setFeedback(feedback.map(item => item.id === id ?
     {...item, ...data} : item))
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