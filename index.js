const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
//connectDB();

const courses = [
    {
        id: 1,
        title: "JavaScript Basics",
        price: 29.99,
        releaseDate: new Date('2023-01-15'),
        isPublished: true
    },
    {
        id: 2,
        title: "Node.js Fundamentals",
        price: 39.99,
        releaseDate: new Date('2023-03-10'),
        isPublished: true
    },
    {
        id: 3,
        title: "React for Beginners",
        price: 34.99,
        releaseDate: new Date('2023-05-20'),
        isPublished: false
    },
    {
        id: 4,
        title: "MongoDB Essentials",
        price: 24.99,
        releaseDate: new Date('2023-07-01'),
        isPublished: true
    },
    {
        id: 5,
        title: "Express.js Crash Course",
        price: 19.99,
        releaseDate: new Date('2023-08-12'),
        isPublished: false
    },
    {
        id: 6,
        title: "Full Stack Development",
        price: 49.99,
        releaseDate: new Date('2023-09-30'),
        isPublished: true
    }
];



const app =express();
//get all courses bich tehkou des information 3ala les courses
app.get('/eduka/api/courses',(req,res)=>{
    res.send(courses);
})

//params.id heya id mta3 course eli bech na3tiha
// hot + tw yetconverta wahdou el nomber mithel haka => +'123' => 123
app.get('/eduka/api/courses/:id', (req, res) => {
    // extract the id from the request object
    const id = +req.params.id;

    // check if there is a course with the given id
    const course = courses.find((course) => course.id === id);

    // if course exists return it
    if (course) {
        res.send(course);
    } else {
        // else return 404 not found
        res.status(404).send({ error: "Course not found" });
    }
});


const port=3000;


app.listen(port,()=>{
    console.log("serveur in running on port 3000".blue.bold)
}
)