import React, {Fragment, useState} from 'react';
const initialState = {
    name: "",
    description: "",
    link: "",
    img_url: ""

}
const Form = (props) => {
    const [fields, setFields] = useState(initialState)
    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState)
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input id='name' type="text" value={fields.name} name='name' onChange={handleFieldsChange}/>
                <br/>
                    <label htmlFor='description'>description: </label>
                    <input id='description' type="text" value={fields.description} name='description' onChange={handleFieldsChange}/>
                    <br/>
                    <label htmlFor='link'>Link: </label>
                    <input id='link' type="text" value={fields.link} name='link' onChange={handleFieldsChange}/>
                    <br/>
                    <label htmlFor='img_url'>img_url: </label>
                    <input id='img_url' type="text" value={fields.img_url} name='img_url' onChange={handleFieldsChange}/>
                </div>
                <br/>
                <input type="submit"/>
            </form>
        </Fragment>
    )
}

export default Form;
