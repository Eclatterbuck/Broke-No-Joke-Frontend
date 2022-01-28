import React from "react";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const history = useHistory();
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="position-relative p-8 border rounded-2">
            <div className="d-flex mb-6 align-items-center">
             
              <div>
                <h6 className="fw-bold mb-0">
                  <span>{/* {profile?.firstname} {profile?.lastname} */}</span>
                  <span className="badge ms-2 bg-primary-light text-primary">
                    {/* {profile?.expenses?.length + profile?.income?.length}{" "} */}
                    Records Created
                  </span>
                </h6>
                {/* <p className="mb-0">{profile?.email}</p> */}
                <p className="mb-0">Date Joined: 12-Jan-1999</p>
                <button
                  // onClick={() => navigate(history, "update-profile", profile)}
                  className="btn"
                >
                  Edit Profile
                  <i class="bi bi-pen fs-3 m-3 text-primary"></i>
                </button>
              </div>
              {/* <DataGraph
                income={incResult?.sumTotal}
                expenses={expResult?.sumTotal}
              /> */}
            </div>

            <p className="mb-8"> </p>

            {/* <UserProfileStats
              numOfTransExp={profile?.expenses?.length}
              avgExp={expResult?.avg}
              totalExp={expResult?.sumTotal}
              minExp={expResult?.min}
              maxExp={expResult?.max}
              numOfTransInc={profile?.income?.length}
              avgInc={incResult?.avg}
              totalInc={incResult?.sumTotal}
              minInc={incResult?.min}
              maxInc={incResult?.max}
            /> */}
            <div className="d-flex align-items-center justify-content-center">
              <button
                // onClick={() => navigate(history, "user-profile-expenses", "")}
                className="btn me-4 w-100 btn-danger d-flex align-items-center justify-content-center"
              >
                <span>View Expenses History</span>
              </button>
              <button
                // onClick={() => navigate(history, "user-profile-income", "")}
                className="btn w-100 btn-outline-success d-flex align-items-center justify-content-center"
              >
                <span>View Income History</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;