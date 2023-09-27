var header = document.getElementById('header');
var navigationHader = document.getElementById('navigationHader');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHader.style.marginLeft = '-8vh';
        navigationHader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(4px)';
        document.body.classList.add("no-overflow");
    } else {
        navigationHader.style.marginLeft = '-100vh';
        navigationHader.style.animationName = '';
        content.style.filter = 'blur(0px)';
        document.body.style.overflowX = "";
        document.body.classList.remove("no-overflow");
    }
}

function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(this.window.innerWidth > 820 && showSidebar){
        toggleSidebar();
    }
});