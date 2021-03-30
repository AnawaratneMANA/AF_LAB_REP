### 💻 MongoDB CRUD Commands - LAB3 💻

Basic CRUD and more  commands with MongoDB. (***Cheat-sheet***)😋
1. Use or Create a Databases. (_If the database exist then it will switch to it
   if not it will create another new one with that name_).
```json
use <dbName>
```
2. Show all collections inside a selected database.
```json
show collections
```
3. Drop a database.
```json
db.createCollection('students');
```
4. Insert data into a database
```json
db.students.insert({
  title: 'Post One',
  body: 'Body of the post one',
  category: 'News',
  likes: 4,
  tags: ['news', 'events'],
  user: {
    name: 'John Doe',
    status: 'author'
  },
  date: Date()
})
```
5. Insert multiple data into database with one query.
```json
db.students.insertMany([
  {
    title: 'Post Two',
    body: 'Body of the post two',
    category: 'Technology',
    date: Date()
  },

  {
    title: 'Post Three',
    body: 'Body of the post Three',
    category: 'Mathamatics',
    date: Date()
  },

  {
    title: 'Post Four',
    body: 'Body of the post Four',
    category: 'Science',
    date: Date()
  },

]);
```
6. Display data in pretty format (JSON like)
```json
db.students.find().pretty();
```
7. Get specific Data from database.
```json
db.students.find({ category: "News"}).pretty();
```
8.Sorting data when getting.
```json
db.students.find().sort({ title: 1}).pretty();
```
9. Limit the number of output in a query.
```json
db.students.find().limit(2);
```
10. Iterate through the output using forEach loop
```json
db.students.find().forEach(
function(doc){ 
  print('Blog Post:' + doc.title) 
});
```
11.find one Usage
```json
db.students.findOne({category: 'News'});
```
12.Update data in the database (***Deprecated method but still works***).
```json
db.students.update({ title: 'Post Two'}, 
	{
		title: 'Post Two',
		body: 'New Post 2 body',
		date: Date()
	},
	{
		upsert: true 
	}
);
```
13. New method of updating data in the database. (***NEW***)
```json
db.students.updateOne(
    { title : "Post Two" }, 
    { $set: {body: "New Post 2 Body", date: Date()} },
    { upsert: true }
);
```
14. Updating values of attributes. (***Alternative method***)
```json
db.User.update(
   { name: "John" },
   { $set:
      { 
        subject: "New Value"
      }
   }
)
```
15. Increment integer values in database.
```json
db.students.updateOne({title: 'Post One'}, {$inc: {likes: 2}});
```
16. Rename Attributes
```json
db.students.update({title: 'Post One'}, {$rename: {likes: 'Views'}});
```
17. Deleting post in MongoDB
```json
db.students.remove({ title: 'Post Four'})
```
18. Update sub-documenting 
```json
db.students.update({ title: 'Post One'},
{
  $set: {
    comments: [
      {
        user: 'Mary Williams',
        body: 'Comment One',
        date: Date()
      },
      {
        user: 'Harry Potter',
        body: 'Comment Two',
        date: Date()
      }
    ]
    }
  }
)
```
19. Search nested documents in MongoDB
```json
db.students.find({
  comments: {
    $elemMatch: {
      user: 'Mary Williams'
    }
  }
});
```
20. Searching Data from Database. (Creating search Index).
```json
db.students.createIndex({ title: 'text'})
```
21. How to search using the index we created.
```json
db.students.find({ $text: {
	$search : "\"Post T\"" }
}).pretty()
```
22. Compare the sizes of the Integer. (***Greater Than***)
```json
db.students.find({ Views: { $gt: 3}})
```
23. Compare the sizes of the Integer. (***Less Than***)
```json
db.students.find({ Views: { $lt: 10}})
```
24. Delete Attribute.
```json
db.User.update(
    {},
    { 
        $unset : { 
            "subject" : 1 
        } 
    },
    {
        multi: true
    }
);
```
25. Adding a new attribute to the object.
```json
db.User.update(
    {name: "John"},
    { 
        $set : { 
            "subject" : 1 
        } 
    },
    {
        multi: true
    }
);
```
26. Add an item to the Array object.
```json
db.User.update(
      { "name": "John" },
      {
          $push: {
              subject: "Distributed Computing"
          }
      }
  );
```
27. Adding element to the array with extra searching parameter.
```json
db.User.update(
      { "name": "Smith",
      	"isActive": true	
       },
      {
          $push: {
              subject: "Distributed Computing"
          }
      }
  );
```
28. Removing element from the array with extra searching.
```json
db.User.update(
      { "name": "Smith",
      	"isActive": true	
       },
      {
          $pull: {
              subject: "Distributed Computing"
          }
      }
  );
```

