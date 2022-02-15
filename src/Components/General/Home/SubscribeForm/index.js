import React from 'react'
import { Form, Button } from 'react-bootstrap'
import '../SubscribeForm/style.scss'

const Subscribe = () => {
  return (
    <div className='subscribe'>
    <h2>Get the scoop, subscribe to our newsletter</h2>
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <div className='fields'>
        <Form.Control className='email' type="email"  placeholder='Enter your email here' />
        <Button variant="outline-white">SUBSCRIBE</Button>
        </div>
    </Form.Group>
    </Form>
      
    </div>
  )
}

export default Subscribe
