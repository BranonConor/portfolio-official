import './tab-block.css'

import React, {useEffect, useState} from 'react'

const TabBlock = (props) => {

    useEffect(() => {
        // call the highlightAll() function to style our code blocks
        Prism.highlightAll()
    })

    //Implement clickable tab feature, showing design iframe and content or code snippets and content
    const [ leftTabActive, setLeftTabActive ] = useState(true);
    const [ rightTabActive, setRightTabActive ] = useState(false);

    const handleLeftClick = () => {
        setLeftTabActive(true);
        if(rightTabActive === true) {
            setRightTabActive(!rightTabActive);
        }
        props.showDesign();
    }
    const handleRightClick = () => {
        setRightTabActive(true);
        if(leftTabActive === true) {
            setLeftTabActive(!leftTabActive);
        }
        props.showCode();
    }

    return (
        <div className='TabBlock'>
            <div className='tab-bar'>
                <div className={`tab ${leftTabActive ? 'active' : ''}`} onClick={handleLeftClick}>✨ Design</div>
                <div className={`tab ${rightTabActive ? 'active' : ''}`}  onClick={handleRightClick}>🔨 Code</div>
            </div>
            <div className={`interface ${rightTabActive ? 'show-code' : 'show-design'}`}>
                <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} width="800" height="450" src={props.figmaLink} allowfullscreen="" className={`design ${leftTabActive ? 'active-design' : ''}`}></iframe>
                <pre className={`code ${rightTabActive ? 'active-code' : ''}`}>
                    <code className={`language-${props.language}`}>
                        {props.code}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default TabBlock;