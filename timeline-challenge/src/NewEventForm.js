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
        //convert array of objects to array of arrays
        var array = stringArr.map((obj) => {
            //startTime, endTime
            return Object.keys(obj).map((key) =>{
                return obj[key]
            })
        });
        //convert the strings inside the arrays to integers for comparison
        for (var i in array) {
            array[i][0] = +array[i][0];
            array[i][1] = +array[i][1];
        };

        array.sort(function(a,b) {
            return a[0]-b[0];
        });
        

        console.log("Arrays stored in array", array);

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

            <h2>Event Collection</h2>

            <table border={1} width="30%" cellPadding={10}>
                <tbody>
                    <tr>
                        <td>Event No.</td>
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
            <h2>Event Timeline</h2>
        </div>
    );
}

export default NewEventForm;