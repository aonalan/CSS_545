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

    For our app specifically we must consider the following states as mentioned above:

    Foreground:
        Why Consider: This is when the user is interacting directly with the timer/application.

        What Must Happen: Should display the timer and countdown. Should allow users 
        to start, pause, or reset the timer.
    
    Inactive:
        Why Consider: If the user switches applications temporarily, the app 
        should retain the current state of the timer.

        What Must Happen: The timer should continue counting down in the background without any 
        interruption. The app should save the timer’s state and handle being resumed. 
    
    Background:
        Why Consider: Again, the timer should continue running even when the user is not 
        actively using the application.

        What Must Happen: We must maintain the countdown and use background services (or notifications) to 
        handle the timer in this state. We must ensure that the application is able to send notification
        or sound an alarm when the timer runs out while the application is in the background. 
    
    Suspended:
        Why Consider: The application could be suspended if resources are limited. 

        What Must Happen: We must save the current timer state before suspension occurs. Then when the user
        returns to the application, we can resume. Ideally if possible, we would continue the timer 
        through a background process. 

    Terminated:
        Why Consider: If the application is terminated timer progress will be lost unless saved.

        What Must Happen: Periodically save the timer state so that it could persist across sessions 
        if we want to. When the application reopens we can check to see if the timer should still be
        running or not and resume it if it should still be active. 