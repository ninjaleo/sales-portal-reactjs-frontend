# quote-ui
UI application to developed in react js to request for quote

# how to get the form data
https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs

# form validation
https://newoldmax.github.io/react-material-ui-form-validator/
https://www.npmjs.com/package/react-material-ui-form-validator
https://developer.aliyun.com/mirror/npm/package/@activelylearn/react-material-ui-form-validator

# Redux thunk for API calls
https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

# Docker example
https://mherman.org/blog/dockerizing-a-react-app/

# Docker command to build image
docker build -t sureshtripini/quote-ui .
# Docker command to run in local - Interactive mode
docker run -it -p 3001:3000 sureshtripini/quote-ui
# Docker command to run in local - as deamon process
docker run -itd -p 3001:3000 sureshtripini/quote-ui

# Docker command to build image
docker build -f Dockerfile.prod -t sureshtripini/quote-ui-prod .

# Docker command to run in localas deamon process
docker run -it --rm -p 8888:80 sureshtripini/quote-ui-prod


# Issue while running docker command from Jenkins instance.
Error:
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post 
Fix
sudo chmod 666 /var/run/docker.sock
