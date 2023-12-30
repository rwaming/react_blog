const head = document.head;

// 공통 스크립트 생성기
function addScript(feature) {
    const newScript = document.createElement('script');
    newScript.src = 'js/common/scrollbar/'+feature+'.js';
    newScript.defer = true;
    head.appendChild(newScript);
}

// 공통 스크립트
addScript('length_move');
addScript('drag');