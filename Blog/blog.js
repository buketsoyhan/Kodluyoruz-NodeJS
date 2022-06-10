const blogs = [
    {id: 1, content:"Go Anctartica"},
    {id:2, content:"Go Asia"},
    {id:3, content:"See Rain Forest"},
    {id:4, content:"Come to Turkey"}
]

const listBlogs=() =>{
    {blogs.map((blog) =>{
        console.log(blog.content)
    })}
}

const addBlog=(newBlog) =>{
    const prom = new Promise((resolve, reject)=>{
        blogs.push(newBlog)
        resolve("Correct")
        reject("Incorrect")
    })

    return prom;
}
listBlogs()
addBlog({id:5, content:"Drive a Truck"})
.then(listBlogs())
.catch((error)=>{console.log(error)})
