import React from 'react'
import {Link} from 'react-router-dom'

 const CreateProjectButton = (props) => {
    return (
        <React.Fragment>
            <Link to="/addproject" className="btn btn-primary btn-lg">
                {props.btnText}
            </Link>
        </React.Fragment>
    )
}

export default CreateProjectButton