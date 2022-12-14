import React,{ useState } from 'react'

function NewEventForm() {
    const [inputArr, setInputArr] = useState([])
    const [inputData, setInputData] = useState({startTime: "", endTime: ""})

    function handleChange(e) {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })

    }

    let {startTime, endTime} = inputData;
    function addEvent() {
        setInputArr([
            ...inputArr, {
                startTime,
                endTime
            }
        ])

        console.log(inputData)
        setInputData({ startTime: "", endTime: "" })

    }
    let deleteHandle =(i)=>{
        let newDataArr=[...inputArr]
        newDataArr.splice(i,1)
        setInputArr(newDataArr)
    }
    function checkArray() {
        console.log("Object stored in array", inputArr)

    }

    function transformString() {
        let stringArr = inputArr;
        console.log(stringArr)

        const array = stringArr.map((obj) => {
            //startTime, endTime
            return Object.keys(obj).map((key) =>{
                return obj[key]
            })
        })

        console.log("Arrays stored in array", array)
        //need to fix, only storing part of array
        let numArr = array.map(function(str) {
            return parseInt(str);
        })

        console.log("look! nuumbers!", numArr)
    }

    return (
        <div>
            <h2>Event Input</h2>
            <input
                type="text"
                name='startTime'
                value={inputData.startTime}
                onChange={handleChange}
                placeholder="Enter Start Time"/>
            <input
                type="text"
                name='endTime'
                value={inputData.endTime}
                onChange={handleChange}
                placeholder="Enter End Time"/>

            <button onClick={addEvent}>Add Event</button>
            <button onClick={() => {
                checkArray();
                transformString();
            }}>Check Array In Console</button>

            <h2>Event Output</h2>

            <table border={1} width="30%" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>Level</td>
                        <th>Start Time </th>
                        <th>End Time</th>
                        <th>Options</th>
                    </tr>
                    {inputArr.length < 1 ?
                        <tr>
                            <td colSpan={4}>No data entered yet</td>
                        </tr>:
                        inputArr.map((info, ind) => {
                            return (
                                <tr key={ind}>
                                    <td>{ind + 1}</td>
                                    <td>{info.startTime}</td>
                                    <td>{info.endTime}</td>
                                    <td><button onClick={()=>deleteHandle(ind)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default NewEventForm;