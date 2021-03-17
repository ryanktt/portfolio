import React, {useState, useEffect} from 'react';
import Tag from '../../UI/Tag';
import Button from '../../UI/Button';

import forum from '../../../assets/projects/forum.jpg'

const Project = (props) => {
    const [tagList, setTagList] = useState([])

    const {tags, text, title, imgPath, site, code} = props
    

    useEffect(() => {
        setTagList(tags.map(tag => {
            return <div key={tag}><Tag>{tag}</Tag></div>
        }));

    }, []);

    return (
        
            <div className='project'>
                <img src={imgPath} alt=''/>
                <div className='content'>
                    <p className='title'>{title}</p>
                    <div className='tags'>
                        {tagList}
                    </div>
                    <p>{text}</p>

                </div>
                <div className='buttons'>
                        <div><Button small dark><i className="fas fa-eye"></i> Site</Button></div>
                        <div><Button small dark><i className="fas fa-code"></i> Código</Button></div>
                    </div>
            </div>

    )
}

export default Project;
