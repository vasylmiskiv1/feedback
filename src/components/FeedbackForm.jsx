import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

import { useState } from 'react'

export default function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState(' ')

  const handleTextChange = e => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  return (
    <Card>
      <form action="#">
        <h2>How would you rate our service?</h2>
        {/* todoo rating select compoenent */}
        <div className="input-group">
          <input 
            onChange={handleTextChange}
            type="text" 
            placeholder='write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
