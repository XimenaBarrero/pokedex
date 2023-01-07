import React from 'react'
import { useDispatch } from 'react-redux'
import { setTrainerNameGlobal } from '../store/slices/trainerName.slice'
import "./styles/FormHome.css"

const FormHome = () => {

    const dispatch = useDispatch()

    const handleSubmit= (event) => {
        event.preventDefault()
       const trainerName =  event.target.trainerName.value.trim()
        dispatch(setTrainerNameGlobal(trainerName))
    }

  return (
    <form className='home-form' onSubmit={handleSubmit}>
        <input required className='home-input' type="text" id="trainerName" placeholder="Your name..." />
        <button className='home-btn'>Start!</button>
     </form>
  )
}

export default FormHome