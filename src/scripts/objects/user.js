const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: '',
    following: '',
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.events = gitHubUser.events
    },
    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        let eventsFilter = events.filter(item => item.type === "PushEvent" || item.type === "CreateEvent");
        this.events = eventsFilter
    }
}

export { user }