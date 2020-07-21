;(function () {
    if (window.aomori && window.aomori.gitalk) {
        const gitalk = new Gitalk({
            clientID: 'f481f237218c36c2740b',
            clientSecret: '6d0738e25fd81401b6505e7a1364859ab523a716',
            repo: 'blogcomments',
            owner: 'cornorghost',
            admin: ['cornorghost'],
            id: decodeURI(location.pathname),
            distractionFreeMode: false,
        })
        gitalk.render('gitalk-container')
    }
})()
