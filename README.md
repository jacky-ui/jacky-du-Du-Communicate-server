# Du-Communicate

Du-Communicate is a social media platform where users are encouraged to communicate with other active users. Users are able to post comments and chat with other users (More features to be added!).

![image](https://user-images.githubusercontent.com/64509710/170397700-f0fb00c0-93f6-4b97-946d-d7148ed92423.png)

## Features

* Post comments
* View other user profiles
* Chatroom
* More features to be added!!

## Tech Stack

**Front End**

![image](https://user-images.githubusercontent.com/64509710/170399703-e38aea2a-04d3-4ddd-b150-dc3495feca9d.png)

**Back End**

![image](https://user-images.githubusercontent.com/64509710/170400406-22905f88-2aa6-4614-b3ca-1840e877c558.png)

**On Front & Back**

![image](https://user-images.githubusercontent.com/64509710/170400589-edf617f2-3abf-4c64-8bcd-bffae42cc4c8.png)


### `Run and Install Locally`

Clone the project in desired folder from the terminal

    git clone https://github.com/jacky-ui/jacky-du-Du-Communicate-server.git

Once cloned, you will need to insstall all the dependencies on the client and server side (link to client side below). This can be done by running the below commands in your terminal. Make sure you are in the project folder/directory

    npm i
    
Finally, to run Du-Communicate you would have to open your IDE, open the project folder if it isn't already open, then:

    npx index.js

### `Environment Variables`

To run this project, you will need to add the following environment variables to your .env file

PORT: The port on your local machine on which you want to run the server. If you're not sure which port to use, a good default is 8080.

URL: A URL path for HTTP requests. If you are running on your local machine, this should be set to http://localhost:<insert port>

JWT_KEY: A series of random chracters that is used to encrypt the JWT token. This is used to authenticate users when a request is made.

### `Client Side`

Du-Communicate was built with client and server being in separate repositories. Below is a link you will need in order to run Du-Communicate as both client and server are connected.

    https://github.com/jacky-ui/jacky-du-Du-Communicate-server.git
    
## Lessons Learned & Next Steps

Excuse my language and to quote one of my Educators, "Shit takes time". This capstone has really taught my how to use my time wisely and to focus on the important and bigger functions at hand before diving into the finer details (styling). Through this project I have solidified what I have learned in BrainStation, as well as learning how to implement Socket.io! For my next steps, I would love to use SQL instead of JSON file for data retention.
    
## Acknowledgements 

I would like to dedicate this section to thank all my Educators, TA's, and classmates for this amazing journey. I couldn't have done this without everyone's support. Thank you from the bottom of my heart and I wish all the best to everyone!
