import React, {useRef} from 'react';
import './content.scss';
import covid from '../../assets/images/covid19.png'
import TextSimple from './TextSimple';
import {useFadeInOnScroll} from '../Animation/Utils';

const TextImage = (props) => {

    const sectionRef = useRef(null);
    useFadeInOnScroll(sectionRef);

    return (
        <div className="text-image row align-items-center mb-5" ref={sectionRef}>
            <div className="col-8 col-md-6 col-lg-6 col-xl-5">
                {props.orientation !== 'textLeft'
                    ? <img src={covid} alt="Covid" className="img-fluid fadeIn"/>
                    : <TextSimple title={props.title} subtitle={props.subtitle} text={props.text}/>
                }
            </div>
            <div className="col-8 col-md-6 col-lg-5 col-xl-5 offset-lg-1">
                {props.orientation === 'textLeft'
                    ? <img src={covid} alt="Covid" className="img-fluid fadeIn"/>
                    : <TextSimple title={props.title} subtitle={props.subtitle} text={props.text}/>
                }
            </div>
        </div>
    );
};

TextImage.defaultProps = {
    orientation: 'textRight'
};


export default TextImage;
