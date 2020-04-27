import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    loading
  },
}) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="profile bg-light">
            <img src={avatar} alt="" className="round-img" />
            <div>
              <h2>{name}</h2>
              <p>
                {status} {company && <span> at {company}</span>}{" "}
              </p>
              <p className="my-1">{location && <span> at {location}</span>}</p>
              <Link to={`/profile/${_id}`} className="btn btn-primary">
                View Profile
              </Link>
            </div>
            <ul>
              {skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="text-primary">
                  <i className="fas fa-check"></i>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
