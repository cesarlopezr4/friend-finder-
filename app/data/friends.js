// ===============================================================================
// DATA
// Below data will hold all of the possible friends.
// Start with an array that hold 10 object to coincide with the 10 questions 
//each object will have a key value pair of
//name: (a string of the person name)
// photo (with a link)
// scores array (10 strings to coincide with the answers options)
// ===============================================================================


var friends = [
   
        {
            name: 'John Petrucci',
            photo: 'https://www.pexels.com/photo/adult-beard-boy-casual-220453/',
            scores: [1, 1, 5, 3, 3, 5, 4, 1, 2, 4]
        },{
            name: 'Jimmy Hendrix',
            photo: 'https://www.pexels.com/photo/man-holding-glove-2146960/',
            scores: [1, 1, 3, 3, 3, 5, 2, 1, 2, 2]
        },{
            name: 'Steve Ray Vaugh',
            photo: 'https://www.pexels.com/photo/adult-blur-camera-casual-598917/',
            scores: [1, 2, 5, 3, 5, 5, 4, 5, 2, 4]
        }];

];

// Here we export the array. This makes it accessible to other files using require.
module.exports = friends;
