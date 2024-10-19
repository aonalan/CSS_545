(5 Points) Various approaches to storage management on your platform of choice
    Within React Native we have the possibility of using several storage management techniques. 
    These include AsyncStorage, SQLite, Realm, and using react-native-fs. AsyncStorage is a key-value 
    storage system. SQLite uses a embedded relational database. Realm is another database storage system 
    but that has more of a object oriented approach to managing data. Using react-native-fs allows
    you to write files directly to the devices's file system.  

(5 Points) Pros AND cons of each approach for your project
    AsyncStorage
        Pros: Easy to use, data persists after restart (could be good for storing user
        setting), and has a consistent behavior between iOS and Android platforms which can be useful 
        if we get to the point of running the app on iOS as well as in Android emulators. 

        Cons: Cannot handle large sums of data. Does not support structured 
        data retrieval (like database queries).
    SQLite
        Pros: Can be good for retrieving a list of timers with relationships. Has support for 
        ensuring data consistency. 

        Cons: More involved setup and requires knowledge about SQL queries. 
    Realm
        Pros: Better performance for larger datasets (which is not really relevant for our project).
        Do not need to know SQL to use, uses object oriented approach. Allows for syncing across 
        devices, which could be useful for us if we want to support having multiple devices that
        the user can use. 

        Cons: Cross platform compatibility is lacking. This method may not always behave the same
        between Android and iOS. This is a big one because we interned to develop our app with 
        cross compatibility in mind. 
    react-native-fs
        Pros: Offers flexibility, allows for storage of various data types. This could be useful
        for our application. Generally speaking has no file size limitations.

        Cons: Management of the file system input/output could be more complex. No structure so 
        you have to manually organize and parse your stored data. This increases code complexity
        and I do not think we could go this way for our application.   
