
import {useEffect, useState} from 'react';

const ProfileFunctional = () => {
    const [pro , setPro] = useState('abc');
    useEffect(()=>{
        console.log('úse effect called in profile functional')
        return ()=>{
            console.log('component unmounting is called');
        }
    },[pro]);
    useEffect(()=>{
        console.log('úse effect called in profile functional without dependency')
        return ()=>{
            console.log('component unmounting is called in without dependency');
        }
    },[]);
    console.log('component is rendered');
    return (
        <div>
            profile functional {pro}
            <button onClick={()=>{
                setPro('DFD');
            }}>click me</button>
        </div>
    );
};

export default ProfileFunctional;