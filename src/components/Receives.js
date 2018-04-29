import React from 'react';
import { SampleConsumer } from '../contexts/SampleContext';

const Receives = () => {
    return (
        <SampleConsumer>
            {
                (sample) => (
                    <div>
                        현재 설정된 값: { sample.state.value }
                    </div>
                )
            }
        </SampleConsumer>
    );
};

export default Receives;