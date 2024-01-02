const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto do usuario" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado😂'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrado😂'}</p>
                                            <p>👥seguidores ${user.followers}</p>
                                            <p>👥seguindo ${user.following}</p>

                                        </div>
                                      </div>`

        let repositoriesItens = ""
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                                                                    <div class="repositories-details">
                                                                        <p>🍴${repo.forks}</p>
                                                                        <p>⭐${repo.stargazers_count}</p>
                                                                        <p>👀${repo.watchers}</p>
                                                                        <p>👩‍💻${repo.language ?? ''}</p>

                                                                    </div>
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ""
        user.events.forEach(item => {
            if(item.type === "CreateEvent"){
                eventsItens += `<li><span>${item.repo.name}</span> -> Eventos Criados </li>`
            }else{
                eventsItens += `<li><span>${item.repo.name}</span> -> ${item.payload.commits[0].message}</li>`
            }
        })

       if(user.events.length > 0){
        this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                       </div>`
       } 
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado!!!</h3>"
    }
}

export { screen }