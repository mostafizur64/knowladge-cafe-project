import React from 'react';

const Question = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 text-center mt-4'>
            <div>
                <div className="card w-full bg-base-100 p-3 rounded-lg shadow-xl bg-gray-100  mt-4">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Props vs state ?</h2>
                        <p className='mt-2'><strong>State</strong>  is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.</p>
                        <p className='mt-2'><strong>Props</strong> on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. They are equivalent to function parameters.</p>
                       
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-full bg-base-100 p-3 rounded-lg shadow-xl bg-gray-100  mt-4">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">How to work in React useState?</h2>
                        <p className='mt-2'>It can be used like this: const [state, setState] = useState(initialValue); Here, the initialValue is the value you want to start with, and state is the current state value that can be used in your component. The setState function can be used to update the state , triggering a re-render of your component.</p>
                        
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-full bg-base-100 p-3 rounded-lg shadow-xl bg-gray-100 mt-4 ">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Witch type of work useEffect</h2>
                        <p className='mt-2'>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.</p>
                       
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-full bg-base-100 p-3 rounded-lg shadow-xl bg-gray-100 mt-4 ">
                    <div className="card-body">
                        <h2 className="card-title text-2xl">How does React work?</h2>
                        <p className='mt-2'>React JS is a JavaScript-based UI development library run by Facebook and an open-source developer community. React classifies the user interface into two separate, reusable components which can be independently managed. Functional components: Also known as stateless components as they do not have a state of their own. As props, they may extract data from other components (properties). </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;