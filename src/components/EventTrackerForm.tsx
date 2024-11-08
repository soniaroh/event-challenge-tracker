import React, { useState } from 'react';

const EventTrackerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    event: '',
    date: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  

  return (
    <>
      <form>
        <div>
          <label htmlFor='event'>Event</label>
          <input type="text" name="event" id="event" value={formData.event} onChange={handleChange} />
        </div>       
        <div>
          <label htmlFor='date'>Date</label>
          <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input type="text" name="description" id="description" value={formData.description} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
};

export default EventTrackerForm;