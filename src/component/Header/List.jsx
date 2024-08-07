
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './List.css';
import { FaRegFaceSadTear } from "react-icons/fa6";

const List = ({ storedData }) => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  // Initialize data state with storedData when the component mounts
  useEffect(() => {
    setData(storedData);
  }, [storedData]);

  const handleCheckBox = (index) => {
    const newItems = data.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setData(newItems);
  };

  const handleEditClick = (index, currentValue) => {
    setEditIndex(index);
    setEditValue(currentValue);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditSave = (index) => {
    const newItems = data.map((item, i) =>
      i === index ? { ...item, value: editValue } : item
    );
    setData(newItems);
    setEditIndex(null);
    setEditValue('');
  };

  const handleDelete = (index) => {
    const newItems = data.filter((_, i) => i !== index);
    setData(newItems);
  };

  return (
    <div className="list-container">

      <div className='list-box'>
        {data.length === 0 ? (<div className='alerts'>
          <FaRegFaceSadTear />
          <p >Your List is Empty.........</p>
        </div>) : (

          
            data.map((item, index) => (
              <div className='new-items' key={index}>

                <div className='check1'>
                  <input type="checkbox" checked={item.completed} className='check' onChange={() => handleCheckBox(index)} />
                </div>


                <div className='values'>
                  {editIndex === index ? (
                    <input type="text" value={editValue} onChange={handleEditChange} className='edit-input' />
                  ) : (
                    <>
                      <p className='value-data' style={{ textDecoration: item.completed ? 'line-through' : 'none', textDecorationColor: item.completed ? 'white' : 'inherit' }}>{item.value}</p>
                      <p className='value-date' style={{ textDecoration: item.completed ? 'line-through' : 'none', textDecorationColor: item.completed ? 'white' : 'inherit' }}>{item.date}</p>
                    </>
                  )}
                </div>


                <div className='deledit'>
                  {editIndex === index ? (
                    <button type="button" className='save' onClick={() => handleEditSave(index)}>Save</button>
                  ) : (
                    <button type="button" className='edit' onClick={() => handleEditClick(index, item.value)}>Edit</button>
                  )}
                  <button type="button" className='delete' onClick={() => handleDelete(index)}>del</button>
                </div>
              </div>
            ))
          
          
       )}
        
      </div>
    </div>
  );
};

export default List;

