# EDWITT STUDIO 홈페이지

에듀윗 계열사 EDWITT STUDIO(프로그램 개발 & 기업 SNS 마케팅) 원페이지 홈페이지입니다.

## 파일 구성

```
├── index.html          PC 버전 (기본 주소)
├── mobile.html         모바일 버전
├── css/
│   ├── pc.css          PC 버전 스타일
│   └── mobile.css      모바일 버전 스타일
├── js/
│   └── main.js         공통 스크립트 (메뉴 고정, 위/아래 이동 버튼, 현재 섹션 표시)
└── assets/
    ├── favicon.svg     파비콘 (E + 코랄 점)
    ├── images/         메인·포트폴리오·문의 사진
    └── logos/          푸터 기관 로고
```

## PC / 모바일 자동 전환

- `index.html`을 화면 폭 768px 미만(휴대폰)에서 열면 `mobile.html`로 자동 이동합니다.
- `mobile.html`을 768px 이상(PC·태블릿)에서 열면 `index.html`로 자동 이동합니다.
- 푸터 맨 아래의 "모바일 버전 / PC 버전" 링크로 직접 바꿔 볼 수 있습니다.

## 깃허브에 올리고 사이트로 열기 (GitHub Pages)

1. 깃허브에서 새 저장소(Repository)를 만듭니다.
2. **Add file → Upload files**를 누르고, 이 폴더 안의 파일과 폴더를 **전부** 끌어다 놓은 뒤 **Commit changes**를 누릅니다.
   (`index.html`이 저장소 맨 위에 있어야 합니다.)
3. 저장소의 **Settings → Pages**에서 Source를 **Deploy from a branch**, Branch를 **main / (root)**로 선택하고 Save를 누릅니다.
4. 1~2분 뒤 `https://아이디.github.io/저장소이름/` 주소로 접속됩니다.

## 자주 바꾸는 곳

| 바꿀 내용 | 위치 |
|---|---|
| 문의하기 버튼 링크 | `index.html`, `mobile.html`에서 `inquiry.html` 검색 |
| 전화 · 이메일 | 두 HTML 파일의 Contact 섹션 (`id="contact"`) |
| 색상 (라벤더 · 코랄) | `pc.css`, `mobile.css` 맨 위 `:root`의 `--bg`, `--lav`, `--coral` |
| 포트폴리오 사진 | `assets/images/` 파일 교체 (파일 이름 동일하게) |

> HTML 내용을 고칠 때는 `index.html`과 `mobile.html` 두 파일을 같이 고쳐 주세요.
