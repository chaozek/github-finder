import React from 'react'
import PropTypes from 'prop-types';


const RepoItem = ({ repo }) => {
    repo.PropTypes = {
        repo: PropTypes.object.isRequired
    }
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
            
        </div>
    )
}
export default RepoItem