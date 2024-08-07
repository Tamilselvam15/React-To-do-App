

// export default Content
import { useRef } from 'react';
import './Content.css';

// eslint-disable-next-line react/prop-types
const Content = ({ handleClick, handleDateValue, handleInputValue, inputValue, inputDate }) => {
  // const inputRef = useRef(null)
  const dateRef = useRef(null)
  const addRef = useRef(null)

  const handlekeypress = (event,nextInputRef) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      nextInputRef.current.focus()
    }
  }


  return (
    <div className='content-container'>
      <div className='content-items'>
        <input
          type="text"
          className='button-1'
          value={inputValue}
          onChange={handleInputValue}
          placeholder='Enter something....'
          onKeyDown={(event)=>handlekeypress(event,dateRef)}
        />

        <input
          type="date"
          className='button-2'
          value={inputDate}
          onChange={handleDateValue}
          ref={dateRef}
          onKeyDown={(event)=>handlekeypress(event,addRef)}

        />


        <button
          type='submit'
          className='submit-button'
          onClick={handleClick}
          ref={addRef}
        >
          Add
        </button>


      </div>
    </div>
  );
};

export default Content;
