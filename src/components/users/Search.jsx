import React, {  useContext, useState } from 'react'
import GithubContext from "../../Context/Github/GithubContext"
import AlertContext from "../../Context/alert/AlertContext"
const Search = () => {
    const [text, setText] = useState("")
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    const onChange = (e) => {
        setText(e.target.value )
    }
   const  onSubmit = (e) => {
        if (text === "") {
            e.preventDefault()
            alertContext.setAlert("Něco zadejte", "light")
        } else {
            e.preventDefault()
            githubContext.searchUsers(text)
            setText("")
        }
 
    }
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange }/>
                    <input type="submit" value="search" className="btn btn-dark btn-block" />
                </form>
                {githubContext.users.length >0  && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Vyčistit</button> }
            </div>
            
        )
  
}

export default Search
