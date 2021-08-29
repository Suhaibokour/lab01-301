import React from 'react';
import HornedBeast1 from './HornedBeast 1';
import HornedBeast2 from './HornedBeast 2';

class Main extends React.Component {
    render() {
        return (
            <>
                <div>
                    <HornedBeast1 />
                </div>
                <div>
                    <HornedBeast2 />
                </div>

            </>
        )
    }
};

export default Main;