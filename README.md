# Housetable Mini Project
Clone this repository to your computer. If you do not yet have [NodeJS](https://nodejs.org/en) installed on your computer you must do this in order to be able to run this project.

To see if Node is installed, open the command prompt or terminal, and type `node -v` . If you have Node installed this should print the version number so you'll see something like this `v0.10.35`.

## Starting the Server
1. After completing the previous steps, open the repository in your IDE. This should work in any IDE but these steps were confirmed to be correct in **VS Code**.
2. Open a new terminal and go into the *server* directory using the `cd server` command.
3. Now that you are in the server directory, run the `npm install` command to install all of the necessary dependacies.
4. Run the `npm run dev` command to start the server.

You should now have the server running on **port 5000**.

*Note: This project assumes that port 5000 is available, if that is not the case you are likely to run into issues.*

## Starting the Client
1. Open a new terminal and go into the *client* directory using the `cd client` command.
2. Now that you are in the client directory, run the `npm install` command to install all of the necessary dependacies.
3. Run the `npm start` command to start the client.

This action should open a new tab in your browser at `http://localhost:3000/`, if this does not happen you can copy that url and paste it in your browser's search bar.

*Note: If localhost:3000 is in use by a different project, you may be asked to open your client on a different port. You can do that.*

That's it! Enjoy!
