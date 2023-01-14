import { collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { firestore } from '../../../firebase';

const Department = () => {
    
    const [inputDepartment,setInputDepartment] = useState("")
    const [departmentList,setDepartmentList] = useState([])

    useEffect(() => {
        const subscribe = () => {
            const departCollectRef = collection(firestore,'departments');
            updateFunction(departCollectRef)
        }
        return () => {
            subscribe();
        }
    },[])

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await setDoc(doc(firestore, 'departments', `${inputDepartment}`),{
                department:inputDepartment
            });
            const departCollectRef = collection(firestore,'departments');
            updateFunction(departCollectRef)
            
        } catch (error) {
            console.log("error",error);
        }
    }

    const handleRemove = async (department) => {
        try {
            await deleteDoc(doc(firestore, 'departments', department));
            const departCollectRef = collection(firestore,'departments');
            updateFunction(departCollectRef)
        } catch (error) {
            console.log("error", error);
        }
    };


    const updateFunction = (departCollectRef) => {
        getDocs(departCollectRef).then((doc) => {
            let toDepList = []
            doc.docs.map((elem,i) => {
                toDepList.push(elem.data())
            })
            setDepartmentList(toDepList)
        })
    }


    
    return (
        <div className='department-side'>
            <form>
                <input 
                    type="text"
                    value={inputDepartment} 
                    onChange={e => setInputDepartment(e.target.value)}
                    placeholder="Add Department"
                />
                <button type='submit' onClick={e => handleSubmit(e)}>
                    Add Department
                </button>
            </form>        
            <div className="list-items">
                {departmentList.map((elem,i) => {
                    return (
                        <div className="item" key={i}>
                            <h5> {elem.department} </h5>
                            <button onClick={() => handleRemove(elem.department)}>Remove</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Department