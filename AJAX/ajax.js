document.addEventListener('DOMContentLoaded', function() {
    const nameProfile = document.querySelector('.profile-name');
    const userProfile = document.querySelector('.profile-username');
    const avatarProfile = document.querySelector('.profile-avatar');
    const bioProfile = document.querySelector('.profile-bio');
    const locationProfile = document.querySelector('.profile-location');
    const reposProfile = document.querySelector('.profile-repos');
    const followersProfile = document.querySelector('.profile-followers');
    const followingProfile = document.querySelector('.profile-following');
    const linkToProfile = document.querySelector('.profile-link');

    fetch('https://api.github.com/users/carolurbs')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameProfile.innerText = json.name;
            userProfile.innerText = json.login;
            avatarProfile.src = json.avatar_url;
            reposProfile.innerText = json.public_repos;
            followersProfile.innerText = json.followers;
            followingProfile.innerText = json.following;
            bioProfile.innerText = json.bio;
            locationProfile.innerText = json.location;
            linkToProfile.href = json.html_url;
        })
        .catch(function(error) {
            alert('Ocorreu um erro:', error);
        });
});