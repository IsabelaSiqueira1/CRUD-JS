const twitter = {
    users: [{
        username: 'Isabela_siqueira',
    }],
    post: [{
        id: 1,
        ower: 'Isabela_siqueira',
        content: 'Meu primeiro post no twitter ja criado!',
    }],
}

function createPost(data) {
    twitter.post.push({
        id: twitter.post.length + 1, 
        ower: data.ower,
        content: data.content,
    })
}

createPost({ ower: 'Isabela_siqueira', content: 'Criando meu segundo post no twitter!'})
createPost({ ower: 'Isabela_siqueira', content: 'Post teste!'})
//console.log(twitter.post)

function getPost(){
    return twitter.post
}

console.log("Post que ja existem: " , getPost())

function updatePost(id, newContent){
    const postUpdate = getPost(id).find((post) =>{ 
       return post.id === id
    })

    console.log("Post que será atualizado é:",postUpdate)
    postUpdate.content = newContent
}

updatePost(2, 'Post atualizado!')
console.log(getPost())

function deletePost(id){
    const listPostList = getPost(id).find((postActual) =>{ 
        return postActual.id !== id
     })
    twitter.post = listPostList
    console.log("Post que será deletado: ", listPostList)
}

deletePost(3)
console.log(getPost())