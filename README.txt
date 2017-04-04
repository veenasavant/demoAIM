How to deploy on server
1. Make a new directory 
2. copy WEB-INF from prev-version directory
3. Copy all except java and web-inf from f: to this new directory
4. Dont copy output directory

Version 10 on srver to be deployed as demoAIM_v10
Changes
1) carousel - files changed app.js, homecontroller.js, carousel.html, images directory in home/views folder

Version 10 on my server deployed as demoAIM_v9 - deployed Jan 31 2017
Changes 
1. For refresh button to work n TV APP screen cookie stores userid - authservices.js, homecontroller.js
2. Removed the UserCredentials service from code. Files changed - authservices.js , authcontroller.js in authentication
3. Moved app.js tp app directory
4. index.html refers to new files with new names authcontroller.js authservces.js homecontroller.js
5. New images directory in authetntication/views where all images are stored
6. Login screen responsiveness - login.html amd login.css are changed
9. Put all debug messages /*DEBUG MESSAGES */ - homecontroller.js, authcontroller.js authservices.js
10. Some changes to the main screen in tvratings.css and TVRatings.html
11. Added id ="socialbuzz" to TVRatings screen so that the social pages do not show on small screens - css and html files changed.

Version 9 deployed Jan 26 2017
1. new php script to check user and password
2. This scripts reads users.xml kept in the same directory
3. $rootscope is introduced to store the username and userid
4. TVRatings.html displays Hello User , You are watching Channel Description is shown in top panel
5. Cleanup of channel_id names in all files to ch_id 
6. Buttons are responsive and iframe is responsive in Chrome, in IE the buttons are not 5 in a row and the iframe spills out a bit
7. Tab pane problem has been solved.
8. web.xml on infosys server has been modified to include index.html

Known problems
1. Responsiveness in IE as mentioned above - Check undefined values 
2. A warning related to synchronous HTTP request
3. Have to check whether facebook iframe is responsive . Also it does not show the video
4. Chrome internal Width: 1088 , Height: 511 , IE is 1360*681 - Can incorporate the window.resize depending on screen-minheight in demoresp
5. gplus and ig should show what
6. jQuery(document).ready(function() {set height of social pane here });
7. ht and width of TV panel and social panel can be set as .col4-set .col-1 { float:left; width:23.5%; }
CLEANUP Required
1. tvratings.css can be cleaned up a bit. It should also contain the ratings css script in it
2. tvratings.js can co