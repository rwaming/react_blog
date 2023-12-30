const head = document.head;

// 공통 스크립트 생성기
function addScript(name) {
    const newScript = document.createElement('script');
    newScript.src = 'js/common/'+name+'.js';
    newScript.defer = true;
    head.appendChild(newScript);
}

// 공통 스크립트
addScript('scrollbar');