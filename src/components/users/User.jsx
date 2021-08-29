import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../Context/Github/GithubContext";
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { loading, user, repos, getUsersRepos, getUsers } = githubContext;
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    hirable,
  } = user;
  useEffect(() => {
    getUsers(match.params.login);
    getUsersRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hirable: {``}
      {hirable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-check text-times-circle" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "150px" }}
            alt=""
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        {bio && (
          <div>
            <h3>Bio</h3>
            <p>{bio}</p>
          </div>
        )}
        <a href={html_url} className="btn btn-dark my-1">
          Můj profil
        </a>
        <ul>
          <li>
            {login && (
              <div>
                <strong>{login}</strong>
              </div>
            )}
          </li>
          <li>
            {company && (
              <div>
                <strong>{company}</strong>
              </div>
            )}
          </li>
          <li>
            {blog && (
              <div>
                <strong>{blog}</strong>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-danger">repos: {public_repos}</div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
