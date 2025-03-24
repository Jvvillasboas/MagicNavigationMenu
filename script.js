let nav = document.querySelector('nav');
        let items = document.querySelectorAll('li');
        items.forEach(item => {
            item.onclick = () => {
                let oldActive = nav.querySelector('li.active');
                if(oldActive) oldActive.classList.remove('active');
                item.classList.add('active');
                nav.style.setProperty('--position-x-active', item.offsetLeft + 'px');
            }
        })
        let itemActive = nav.querySelector('li.active');
        if(itemActive) nav.style.setProperty('--position-x-active', itemActive.offsetLeft + 'px');