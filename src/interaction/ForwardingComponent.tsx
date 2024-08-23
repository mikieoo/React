import React, { useState } from 'react'

// 컴포넌트로 상태 전달 : 
// - 부모 요소에서 자식 요소로 상태를 전달할 수 있음
// - 자식 요소의 속성으로 전달

export default function ForwardingComponent() {

    const [count, setCount] = useState<number>(0);

    const onIncrease = () => {
        setCount(count => count + 1);
    };

    return (
        <div>
            <Child1 count={count} />
            <Child2 />
            <Child3 onIncrease={onIncrease} />
        </div>
    )
}

interface Child1Props {
    count: number;
}

function Child1({ count }: Child1Props) {
    return (
        <div style={{ height: '200px', backgroundColor: 'red' }}>
            <h1>{count}</h1>
        </div>
    )
}

function Child2() {
    return (
        <div style={{ height: '200px', backgroundColor: 'green' }}></div>
    )
}

interface Child3Props {
    // count: number;
    // setCount: React.Dispatch<React.SetStateAction<number>>;
    onIncrease: () => void;
}

function Child3({ /*count, setCount*/ onIncrease }: Child3Props) {

    // const onIncrease = () => {
    //     setCount(count + 1);
    //     setCount(count => count + 1);
    // };

    return (
        <div style={{ height: '200px', backgroundColor: 'blue' }}>
            <button style={{ width: '100%', height: '100%' }} onClick={onIncrease}>+</button>
        </div>
    )
}