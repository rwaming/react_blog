// 기본 객체화
const html = document.documentElement;
const head = document.head;
const body = document.body;

// common 스크립트 생성기
function add_common(feature) {
    const newScript = document.createElement("script");
    newScript.src = "js/common/" + feature + ".js";
    newScript.defer = true;
    head.appendChild(newScript);
}

// common 하위 스크립트
add_common("1scrollbar"); // 스크롤바 기능