const _NAME = "AUTHENTICATION";

export const _TYPES = {
  _getUserInfo: `${_NAME}::GET_USER_INFO`
};
export const _STATUS = {
  _fetching: "FETCHING",
  _done: "DONE",
  _failed: "FAILED"
};
const action = {};
action.getUserInfo = () => dispatch => {
  dispatch({
    type: _TYPES._getUserInfo,
    status: _STATUS._fetching
  });

  Promise.race([
    new Promise(resolve =>
      setTimeout(() => resolve("promise 1 resolved"), 3000)
    )
  ])
    .then(() =>
      dispatch({
        type: _TYPES._getUserInfo,
        status: _STATUS._done,
        payload: {
          id: 1,
          token: "token",
          role: "user",
          name: "Loren Ipsum",
          email: "loren@ipsum.com",
          address: [
            {
              street: "Street 1",
              district: "District 1",
              number: 1,
              state: "State 1",
              country: "Country 1",
              code: "02883128"
            },
            {
              street: "Street 2",
              district: "District 2",
              number: 2,
              state: "State 2",
              country: "Country 2",
              code: "64329832"
            }
          ]
        }
      })
    )
    .catch(err =>
      dispatch({
        type: _TYPES._getUserInfo,
        status: _STATUS._failed,
        err
      })
    );
};
export default action;
