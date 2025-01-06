let tabs=document.querySelectorAll('.tabs h3');
let tabsContent=document.querySelectorAll('.content p');

tabs.forEach(function(tab , index){
    tab.addEventListener('click',function(){
        tabs.forEach(function(content){
           content.classList.remove('active');
        })
        tabsContent.forEach(function(content){
            content.classList.remove('active');
        })
        tabs[index].classList.add('active');
        tabsContent[index].classList.add('active');
    })
})