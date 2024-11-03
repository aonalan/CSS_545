HW3 - State Management

(5 Points) The various states that an app can enter on your platform of choice
    
    Foreground: 
        This is when the application is in use by the user and visible. 
        The user is interacting with the app screen here.
    Inactive: 
        This is a temporary state where the application is still on the screen but 
        the user is not interacting with it actively. Like for example, when the user is 
        switching applications.
    Background: 
        In this state the application is still running but is no longer visible to user. It could 
        still be managing a background task like a download, playing music, keeping track of an alarm, etc.
    Suspended: 
        In this state the application is in the background, but any activities/processes have been 
        put on pause. It retains its last state to be resumed when user returns to interact with it. 
    Terminated: 
        This is when the application is closed entirely. This can be done by the user or
        by the operating system to free up system resources if it is running out.

(5 Points) The various states that you must consider for your app, why you must
 consider it, and what must happen in each state