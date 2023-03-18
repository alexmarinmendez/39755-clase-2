const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
]

function getPosts() {
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true
            if (!error) {
                resolve(posts.push(post))
            } else {
                reject('Error en la promesa')
            }
        }, 1000)
    })
}

// createPost({ title: 'Post Three', body: 'Awesome post'})
//     .then(getPosts)
//     .catch(err => console.log(err))

try {
    await createPost({ title: 'Post Three', body: 'Awesome post'})
    getPosts()
} catch (err) {
    console.log(err)
}