import { useState } from "react";
import Navbar from "../nav";

function Todo() {
<Navbar/>
    const [Input, setInput] = useState('');
    const [Items, setItems] = useState([]);

    // Function to handle input changes
    const TODOCHANGE = (event) => {
        setInput(event.target.value);
    };

    // Function to handle adding the input to the list
    const LISTclick = (event) => {
        event.preventDefault(); // Prevent default form submission
        setItems((oldItems) => [...oldItems, Input]);
        setInput(''); // Clear input after adding
    };

    // Corrected Function to handle removing a task from the list
    const DeleteItems = (index) => {
        // Use a parameter to prevent form submission and remove the item from the list
        setItems((oldItems) => oldItems.filter((_, i) => i !== index));
    };

    return (
        
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-orange-200 rounded-lg shadow-lg p-6 w-80">
                {/* Profile section */}
                <div className="text-center mb-6">
                    <img src="https://wallpapercave.com/wp/wp8440173.jpg " alt="Profile" className="mx-auto rounded-full border-4 w-44 border-white shadow-md"/>
                    <h3 className="mt-4 text-xl font-semibold">Ayesha Rafique</h3>
                    <p className="text-gray-600">@Ayesha Rafiq1627</p>
                    <button className="bg-orange-300 text-orange-800 px-4 py-1 mt-4 rounded-full">Log out</button>
                </div>

                {/* Clock and greeting */}
                <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                        {/* Placeholder for clock icon */}
                        <span className="text-xl font-semibold text-orange-300">🕒</span>
                    </div>
                    <p className="mt-2 text-lg font-medium">Good Afternoon</p>
                </div>

                {/* Task list */}
                <h2 className="text-lg font-bold mb-4">Tasks List</h2>
                <form className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Enter your task"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600 flex-1"
                            onChange={TODOCHANGE}
                            value={Input}
                        />
                     <button
    type="button" // Make sure the button type is set to "button"
    className="bg-orange-300 text-white py-2 px-4 rounded-lg hover:bg-orange-400"
    onClick={LISTclick}
>
                            +
                        </button>
                    </div>
                    <ol className="mt-4 list-decimal list-inside">
                        {Items.map((item, index) => (
                            <li key={index} className="flex justify-between items-center py-2">
                                <div className="flex items-center">
                                    <input type="checkbox" className="mr-2"/>
                                    <span>{item}</span>
                                </div>
                                
<button
    type="button"
    className="ml-2 text-red-500 hover:text-red-700"
    onClick={() => DeleteItems(index)}
>
    ✕
</button>

                                {/* <button
    type="button" // Make sure the button type is set to "button"
    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    onClick={LISTclick}
> */}
                               
                            </li>
                        ))}
                    </ol>
                </form>
            </div>
        </div>
        
    );
}

export default Todo;
