import React, { useState } from 'react';
import { Button, FormContainer, FormGroup, Input, Label } from './EventTrackerForm.styles';

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

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='event'>Event</Label>
          <Input type="text" name="event" id="event" value={formData.event} onChange={handleChange} />
        </FormGroup>       
        <FormGroup>
          <Label htmlFor='date'>Date</Label>
          <Input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='description'>Description</Label>
          <Input type="text" name="description" id="description" value={formData.description} onChange={handleChange} />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </form>
    </FormContainer>
  )
};

export default EventTrackerForm;