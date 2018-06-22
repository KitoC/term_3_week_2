


GET /	Should display 'Hello world!'
GET /secure/welcome	Should display 'Secure page!' if the user is logged in, otherwise return a 401
GET /secure/dog	Should display a dog photo if the user is logged in, otherwise return a 401
GET /auth/login	Should log the user in and display 'You've logged in'
GET /auth/logout	Should log the user out and display 'You've logged out'