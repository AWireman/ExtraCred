// Opens App Routes
module.exports = function(app) {

    /* ------------------------------------------------
    User Table Endpoints
    --------------------------------------------------*/
    app.get("/userList", function(req, res) {
        /*
        con.query('SELECT * FROM userInfo',function(err,rows) {
        if(err)
           console.log("Error Selecting : %s ",err );
            res.json(rows);
         });
        */
        console.log("app.get(/userList)");
    });

    app.get("/getUser", function(req, res) {
        /*
        var username = req.query.username;
        var password = req.query.password;
        var obj = { status: false};
        con.query("SELECT * FROM userInfo WHERE username = ? and password = ?",
            [username, password], function(err, response){
            if (err)
                res.json(err);
            res.json(response);

        });
        */

        var found = false;
        console.log("app.get(/getUser)");
        if (global.users != null) {
            for (var i = 0; i < global.users.length; i++) {
                var cur = global.users[i];
                console.log(cur);
                if (cur["username"] === req.query.username
                        && cur["password"] === req.query.password) {
                    var userRes = [cur["firstname"],
                                    cur["lastname"], 
                                    cur["username"], 
                                    cur["email"], 
                                    cur["password"], 
                                    cur["accountType"]]
                    res.json(userRes);
                    console.log("Get user - success");
                    found = true;
                }
            }
        }

        if (!found) {
            console.log("No user found");
            res.json(null);
        }

    });

    app.get("/checkUser", function(req, res) {
        /*
        var username = req.query.username;
        var obj = { status: false};
        con.query("SELECT * FROM userInfo WHERE username = ?",
            username, function(err, response){
            if (err)
                res.json(err);
            res.json(response);
        });
        */

        console.log("app.get(/checkUser)");

        if (global.users != null) {
            for (var i = 0; i < global.users.length; i++) {
                var cur = global.users[i];
                console.log(cur);
                if (cur["username"] === req.query.username) {
                    res.json(cur);
                    console.log("Check user - success");
                    return;
                }
            }
        }
        console.log("No user found");

        res.json("");
    });

    app.put("/addUser", function(req, res) {
        /*
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;
        var accountType = req.body.accountType;
        var values = "(" + firstName + "," + lastName + "," + username + "," + email + "," + password + "," + accountType + ")";
        con.query("INSERT INTO userInfo SET firstName = ?, lastName = ?, "
            + "username = ?, email = ?, password = ?, accountType = ?",
         [firstName, lastName, username, email, password, accountType], function(err, resp) {
            if (err) {
                console.log("Error " + err);
            }
            res.json(resp);
         });
        */

        var n_firstName = req.body.firstName;
        var n_lastName = req.body.lastName;
        var n_username = req.body.username;
        var n_password = req.body.password;
        var n_email = req.body.email;
        var n_accountType = req.body.accountType;

        var newUser = {
             firstname: n_firstName,
             lastname: n_lastName,
             username: n_username,
             password: n_password,
             email: n_email,
             accountType: n_accountType
        }

        if (global.users == null) {
            global.users = [];
        }

        global.users.push(newUser);

        console.log("app.put(/addUser)");

        res.json();

    });

    app.put("/editUser", function(req, res) {
        /*
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var username = req.body.username;
        var password = req.body.password;
        var email = req.body.email;
        var accountType = req.body.accountType;
        var address = req.body.address;
        var title = req.body.title;
        con.query("UPDATE userInfo SET firstName = ?," +
            " lastName = ?, email = ?, password = ?, address = ?, " +
            "title = ?" +
            " WHERE " +
            "username = ?", [firstName, lastName, email, password, address,
            title, username], function(err, resp){
                if (err) {
                    res.json(resp);
                    console.log("Error");
                } else {
                    res.json(resp);
                    console.log("Success");
                }
        });
        console.log("app.get(/userList)");
        */
        var n_firstName = req.body.firstName;
        var n_lastName = req.body.lastName;
        var n_username = req.body.username;
        var n_password = req.body.password;
        var n_email = req.body.email;
        var n_accountType = req.body.accountType;

        var newUser = {
             firstname: n_firstName,
             lastname: n_lastName,
             username: n_username,
             password: n_password,
             email: n_email,
             accountType: n_accountType
        }

        if (global.users == null) {
            global.users = [];
        }

        global.users.push(newUser);

        console.log("app.put(/editUser)");

        res.json(newUser);
    });


    /* ------------------------------------------------
    Source Report Table Endpoints
    --------------------------------------------------*/
    app.get("/sourceReportList", function(req, res) {
        /*
        con.query('SELECT * FROM sourceReportInfo',function(err,rows) {
        if(err)
           console.log("Error Selecting : %s ",err );
            res.json(rows);
         });
        */
        console.log("app.get(/sourceReportList)");


        if (global.sourceReports != null) {
            var returnList = []
            for (var i = 0; i < global.sourceReports.length; i++) {
                //var cur = global.sourceReports[i];
                /*
                var curList = [cur["date"],
                                cur["reportNumber"], 
                                cur["username"], 
                                cur["longitude"], 
                                cur["latitude"], 
                                cur["type"],
                                cur["condition"]];
                returnList.push(curList);
                */
                returnList.push(global.sourceReports[i]);
            }
            res.json(returnList);
        } else {
            global.sourceReports = [];
            res.json(global.sourceReports);
        }

    });

    app.get("/sourceReportCount", function(req, res) {
        /*
        con.query('SELECT COUNT(*) as rowcount FROM sourceReportInfo',function(err,rows) {
        if(err)
           console.log("Error Selecting : %s ",err );
            res.json(rows);
         });
        */
        console.log("app.get(/sourceReportCount)");

        if (global.sourceReports != null) {
            res.json(global.sourceReports.length);
        } else {
            res.json("0");
        }

    });

    app.put("/addSourceReport", function(req, res) {
        /*
        var date = req.body.date;
        var reportNumber = req.body.reportNumber;
        var username = req.body.username;
        var longitude = req.body.longitude;
        var latitude = req.body.latitude;
        var type = req.body.type;
        var condition = req.body.condition;
        con.query("INSERT INTO sourceReportInfo SET date = ?, reportNumber = ?, username = ?, "
            + "longitude = ?, latitude = ?, type = ?, cond = ?",
            [date, reportNumber, username, longitude, latitude, type, condition],
            function(err, resp) {
            if (err) {
                console.log("Error " + err);
            }
            console.log(resp);
            res.json(resp);
         });
        */
        console.log("app.get(/addSourceReport)");

        if (global.sourceReports == null) {
            global.sourceReports = [];
        }

        var newSourceReport = {
            date: req.body.date,
            reportNumber: req.body.reportNumber,
            username: req.body.username,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            type: req.body.type,
            condition: req.body.condition
        }

        global.sourceReports.push(newSourceReport);

        //console.log(global.sourceReports);

        res.json(newSourceReport);

    });


    /* ------------------------------------------------
    Quality Table Endpoints
    --------------------------------------------------*/
    app.get("/qualityReportList", function(req, res) {
        /*
        con.query('SELECT * FROM qualityReportInfo',function(err,rows) {
        if(err)
           console.log("Error Selecting : %s ",err );
            res.json(rows);
         });
        */
        console.log("app.get(/qualityReportList)");

        if (global.qualityReports != null) {
            var returnList = []
            for (var i = 0; i < global.qualityReports.length; i++) {
                /*
                var cur = global.reports[i];
                console.log(cur);
                var curList = [cur["date"],
                                cur["reportNumber"], 
                                cur["username"], 
                                cur["longitude"], 
                                cur["latitude"], 
                                cur["type"],
                                cur["condition"]];
                returnList.push(curList);
                */
                returnList.push(global.qualityReports[i]);
            }
            res.json(returnList);
        } else {
            global.qualityReports = [];
            res.json(global.qualityReports);
        }
    });

    app.get("/qualityReportCount", function(req, res) {
        /*
        con.query('SELECT COUNT(*) as rowcount FROM qualityReportInfo',function(err,rows) {
        if(err)
           console.log("Error Selecting : %s ",err );
            res.json(rows);
         });
        */
        console.log("app.get(/qualityReportCount)");

        if (global.qualityReports != null) {
            res.json(global.qualityReports.length);
        } else {
            res.json("0");
        }
    });

    app.put("/addQualityReport", function(req, res) {
        /*
        var date = req.body.date;
        var reportNumber = req.body.reportNumber;
        var username = req.body.username;
        var longitude = req.body.longitude;
        var latitude = req.body.latitude;
        var condition = req.body.condition;
        var virus = req.body.virus;
        var chem = req.body.chem;
        con.query("INSERT INTO qualityReportInfo SET date = ?, reportNumber = ?, username = ?, "
            + "longitude = ?, latitude = ?, cond = ?, virus = ?, chem = ?",
            [date, reportNumber, username, longitude, latitude, condition, virus, chem],
            function(err, resp) {
            if (err) {
                console.log("Error");
            }
            res.json(resp);
         });
        */
        console.log("app.get(/addQualityReport)");

        if (global.qualityReports == null) {
            global.qualityReports = [];
        }

        var newQualityReport = {
            date: req.body.date,
            reportNumber: req.body.reportNumber,
            username: req.body.username,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            condition: req.body.condition,
            virus: req.body.virus,
            chem: req.body.chem
        }

        global.qualityReports.push(newQualityReport);

        res.json();
    });




    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/users', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = User.find({});
        query.exec(function(err, users){
            if(err) {
                res.send(err);
            } else {
                // If no errors are found, it responds with a JSON of all users
                res.json(users);
            }
        });
    });



    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
    app.post('/users', function(req, res){

        /*
        // Creates a new User based on the Mongoose schema and the post bo.dy
        //var newuser = new User(req.body);
                // New User is saved in the db.
        newuser.save(function(err){
            if(err)
                res.send(err);
            else
                // If no errors are found, it responds with a JSON of the new user
                res.json(req.body);
        });
        */

        var newuser = {
                username: req.body.username,
                gender: req.body.gender,
                age: req.body.age,
                favlang: req.body.favlang,
                location: req.body.location, // [Long, Lat]
                htmlverified: req.body.htmlverified,
                created_at: req.body.created_at,
                updated_at: req.body.updated_at
        }

        if (global.users != null) {
            //if (newuser in global.users) {
            //}
            global.users.push(newuser);
        } else {
            global.users = [newuser];
        }


    });

    // Retrieves JSON records for all users who meet a certain set of query conditions
    app.post('/query/', function(req, res){

        // Grab all of the query parameters from the body.
        var lat             = req.body.latitude;
        var long            = req.body.longitude;
        var distance        = req.body.distance;
        var male            = req.body.male;
        var female          = req.body.female;
        var other           = req.body.other;
        var minAge          = req.body.minAge;
        var maxAge          = req.body.maxAge;
        var favLang         = req.body.favlang;
        var reqVerified     = req.body.reqVerified;

        // Opens a generic Mongoose Query. Depending on the post body we will...
        var query = User.find({});

        // ...include filter by Max Distance (converting miles to meters)
        if(distance){

            // Using MongoDB's geospatial querying features. (Note how coordinates are set [long, lat]
            query = query.where('location').near({ center: {type: 'Point', coordinates: [long, lat]},

                // Converting meters to miles. Specifying spherical geometry (for globe)
                maxDistance: distance * 1609.34, spherical: true});

        }

        // ...include filter by Gender (all options)
        if(male || female || other){
            query.or([{ 'gender': male }, { 'gender': female }, {'gender': other}]);
        }

        // ...include filter by Min Age
        if(minAge){
            query = query.where('age').gte(minAge);
        }

        // ...include filter by Max Age
        if(maxAge){
            query = query.where('age').lte(maxAge);
        }

        // ...include filter by Favorite Language
        if(favLang){
            query = query.where('favlang').equals(favLang);
        }

        // ...include filter for HTML5 Verified Locations
        if(reqVerified){
            query = query.where('htmlverified').equals("Yep (Thanks for giving us real data!)");
        }

        // Execute Query and Return the Query Results
        query.exec(function(err, users){
            if(err)
                res.send(err);
            else
                // If no errors, respond with a JSON of all users that meet the criteria
                res.json(users);
        });
    });



    // DELETE Routes (Dev Only)
    // --------------------------------------------------------
    // Delete a User off the Map based on objID
    app.delete('/users/:objID', function(req, res){
        var objID = req.params.objID;
        var update = req.body;

        User.findByIdAndRemove(objID, update, function(err, user){
            if(err)
                res.send(err);
            else
                res.json(req.body);
        });
    });




};
