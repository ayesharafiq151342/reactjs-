import { useState, useEffect } from 'react';

function Hooks() {
    const [count, setCounter] = useState(0);
    const pricePerPair = 2500; // Price of one pair of shoes

    // Function to increase the count
    function increase() {
        setCounter(count + 1);
    }

    // useEffect for mounting and unmounting
    useEffect(() => {
        console.log("mounted"); // Component mounted

        return function() {
            console.log("unmounted"); // Component unmounted
        };
    }, []); // Empty dependency array means this effect runs only on mount and unmount

    // useEffect for updating when count changes
    useEffect(() => {
        console.log("update"); // Count updated
    }, [count]); // Runs whenever `count` changes

    // Function to decrease the count
    function decrease() {
        if (count > 0) {
            setCounter(count - 1);
        }
    }

    const total = count * pricePerPair; // Calculate the total price

    return (
        <div className="flex flex-col items-center p-4 space-y-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full object-cover" src="http://pngimg.com/uploads/women_shoes/women_shoes_PNG7461.png" alt="shoes" />
                <div className="p-6">
                    <h1 className="text-xl font-bold">Nike Epic React Flyknit</h1>
                    <h3 className="text-pink-500 text-lg font-semibold">Rs.2500</h3>
                    <p className="mt-2 text-gray-700">
                        Whether you're looking for sleek sneakers for your everyday adventures, elegant heels for a night out, or sturdy boots for outdoor escapades, our shoes are crafted with the highest quality materials to ensure they stand the test of time. With attention to detail in every stitch, our footwear not only enhances your outfit but also provides the support and cushioning your feet deserve. Step into a pair of our shoes and experience the perfect blend of fashion and function, designed to keep you moving confidently all day long.
                    </p>
                    <div className="flex items-center justify-center space-x-2 mt-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={increase}>+</button>
                        <span className="text-xl font-semibold">{count}</span>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={decrease}>-</button>
                    </div>
                    <h1 className="mt-4 text-lg font-bold">
                        Total: Rs.<span className="text-xl font-semibold">{total}</span>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Hooks;
