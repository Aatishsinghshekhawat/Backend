// understanding npm packages with the help of Figlet

const figlet = require("figlet");

figlet("Hello ! Figlet", function (err, data){
    if(err){
        console.log("something went wrong ..");
        console.dir(err);
        return;
    }
    console.log(data)
} );

// npm init is used to create package.json
// with the help of package.json we can download lost packages and add new packages in it
// In package.json we can give name version description etc.. for our project
// package.json will auto update when new packages will download

// installing packages locally will only work in that directory/folder
// to install package globally we need to use "-g" 
// example:- npm install -g "package name"
// It's good / preffered to use packages locally
