# RWDI × CNP Partnership Website

## 프로젝트 개요
RWDI(Rowan Williams Davies & Irwin)와 CNP Building Safety Group의 전략적 파트너십을 소개하는 공식 웹사이트입니다. 초고층 건축물을 위한 세계 최고 수준의 풍공학 및 건축물 성능 솔루션을 제공합니다.

---

## 🌐 주요 기능

### ✅ 완료된 기능

#### 1. **다국어 지원 (KOR ↔ ENG)**
- 한국어/영어 실시간 전환
- localStorage를 통한 언어 설정 저장
- 모든 페이지에서 일관된 언어 경험

#### 2. **회사 소개 페이지**
- **RWDI 소개** (`company/rwdi.html`)
  - 50년 이상의 풍공학 전문성
  - 32개 글로벌 오피스
  - 800명 이상의 전문가
  - 40,000개 이상의 프로젝트 실적
  - 공식 홈페이지 링크: https://rwdi.com/

- **CNP 소개** (`company/cnp.html`)
  - CNP Building Safety Group (CNP동양, CNP이앤씨, CNP아이웍스, 스캔비)
  - 30년 이상의 건축물 안전 전문성
  - 한국 최고 수준의 건축물 안전 컨설팅
  - 국내 법규 및 인프라 전문 지식
  - 공식 홈페이지 링크: https://www.cnpgroup.co.kr/

#### 3. **MOU 섹션**
- MOU 체결식 사진 및 정보 제공
- 체결일: 2025년 11월 20일, 서울
- 참석자 정보:
  - CNP CEO: 정광량 (Chung Kwang-ryang)
  - RWDI VP: Mark Chatten (Vice President - Strategic Initiatives)
- 3개 파트너십 혜택 카드
  - 글로벌 + 로컬 전문성 결합
  - 풍동실험 기반 내풍 엔지니어링 확대
  - 한국 시장을 위한 맞춤형 서비스

#### 4. **15개 전문 서비스 페이지**
- **풍공학 (Wind Engineering)**
  - 구조 시스템 풍하중 영향 (`services/structural-systems.html`)
  - 파사드 시스템 풍하중 영향 (`services/facade-systems.html`)
  - 공력 형상 최적화 (`services/aerodynamic-optimization.html`)
  - 교량 공기역학 (`services/bridge-aerodynamics.html`)
  - 보행자 바람 쾌적성 (`services/pedestrian-comfort.html`)

- **건축물 성능 (Building Performance)**
  - 연돌 효과 분석 (`services/stack-effect.html`)
  - 배기 및 공기질 분석 (`services/exhaust-dispersion.html`)
  - 적설 하중 분석 (`services/snow-loading.html`)
  - 풍우 분석 (`services/wind-driven-rain.html`)

- **환경 분석 (Environmental Analysis)**
  - 일조 분석 (`services/solar-studies.html`)
  - 재생 에너지 (`services/renewable-energy.html`)
  - 눈/얼음/비 관리 (`services/snow-ice-rain.html`)
  - 낙하 얼음/눈 위험 (`services/falling-ice-snow.html`)

- **특수 테스트 (Specialized Testing)**
  - 풍동 실험 (메인 페이지 Featured 섹션)
  - 태양광 시스템 풍하중 (`services/solar-energy-systems.html`)
  - CFD 분석 (각 서비스 페이지에 포함)

#### 5. **네비게이션 시스템**
- 고정 상단 네비게이션 바
- 회사소개 드롭다운 메뉴 (RWDI 소개 / CNP 소개)
- 주요 메뉴: 홈, 회사소개, MOU, 서비스, 문의
- 반응형 모바일 햄버거 메뉴
- 페이지 전환 시에도 일관된 위치 유지

#### 6. **히어로 섹션 최적화**
- 한글: 한 줄 유지 (`white-space: nowrap`)
- 영문: 자연스러운 줄바꿈 (`white-space: normal`)
- 반응형 폰트 크기 조정
- "Engineering Excellence for High-Performance Buildings" 자동 줄바꿈

#### 7. **연락처 폼**
- 수신자: snkim@cnpgroup.co.kr
- mailto 방식으로 즉시 작동
- 필수 필드: 이름, 이메일, 메시지
- 선택 필드: 회사, 관심 서비스
- 다국어 폼 레이블 및 옵션

#### 8. **상세 주소 정보**
- **한글**: 대한민국 서울시 송파구 법원로 11길 7, 현대지식산업센터 C동 1101호
- **영문**: C-1101, Hyundai Knowledge Industry Center, 7 Beobwon-ro 11-gil, Songpa-gu, Seoul, South Korea
- **이메일**: info@rwdi-cnp.com
- **전화**: +82-XX-XXXX-XXXX

#### 9. **반응형 디자인**
- **Desktop** (≥1024px): 멀티 컬럼 레이아웃
- **Tablet** (768-1023px): 2 컬럼 레이아웃
- **Mobile** (≤767px): 단일 컬럼 레이아웃
- 모든 디바이스에서 최적화된 UX

#### 10. **푸터 간소화**
- 로고 이미지 제거
- 텍스트 기반 푸터
- 저작권 정보 및 태그라인
- 다국어 지원

---

## 📁 프로젝트 구조

```
├── index.html                          # 메인 페이지
├── css/
│   ├── style.css                       # 공통 스타일
│   └── service-page.css                # 서비스 페이지 스타일
├── js/
│   └── main.js                         # JavaScript (언어 전환, 네비게이션)
├── images/
│   ├── logo-rwdi.png                   # RWDI 로고
│   ├── logo-cnp.png                    # CNP 로고
│   └── mou-signing-ceremony.jpg        # MOU 체결식 사진 (50KB)
├── company/
│   ├── rwdi.html                       # RWDI 소개 페이지
│   └── cnp.html                        # CNP 소개 페이지
├── services/                           # 15개 서비스 페이지
│   ├── structural-systems.html
│   ├── facade-systems.html
│   ├── stack-effect.html
│   ├── aerodynamic-optimization.html
│   ├── bridge-aerodynamics.html
│   ├── exhaust-dispersion.html
│   ├── falling-ice-snow.html
│   ├── pedestrian-comfort.html
│   ├── renewable-energy.html
│   ├── snow-loading.html
│   ├── snow-ice-rain.html
│   ├── solar-services.html
│   ├── solar-studies.html
│   ├── wind-driven-rain.html
│   └── solar-energy-systems.html
└── README.md                           # 프로젝트 문서
```

---

## 🎯 주요 섹션 및 기능

### 메인 페이지 (index.html)

#### 1. **Hero 섹션**
- 대형 타이틀 및 서브타이틀
- CTA 버튼: "서비스 살펴보기", "문의하기"
- 다국어 지원 및 반응형 타이포그래피

#### 2. **Featured Services**
- 3개 핵심 서비스 카드
  1. 구조 시스템 풍하중 영향
  2. 풍동 실험
  3. 연돌 효과 분석

#### 3. **All Services**
- 15개 전체 서비스 그리드
- 각 서비스별 상세 페이지 링크

#### 4. **MOU 섹션**
- MOU 체결식 사진
- 체결 정보 및 날짜
- 전략적 파트너십 설명
- 3개 파트너십 혜택 카드

#### 5. **About Partnership**
- RWDI 글로벌 전문성
- CNP 로컬 전문 지식
- 첨단 연구 역량
- 통계 및 실적

#### 6. **Contact Form**
- 이름, 이메일, 회사, 관심 서비스, 메시지
- snkim@cnpgroup.co.kr로 전송
- mailto 방식 구현

---

## 🚀 배포 방법

### Publish 탭에서 원클릭 배포
1. 상단의 **Publish** 탭 클릭
2. 배포 설정 확인
3. **Publish** 버튼 클릭
4. 배포 완료 후 URL 확인

### 지원 플랫폼
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- 기타 정적 호스팅 서비스

---

## 🔧 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables
- **JavaScript (Vanilla)**: 언어 전환, 네비게이션, 폼 처리

### 외부 라이브러리 (CDN)
- **Font Awesome 6.4.0**: 아이콘
- **Google Fonts**: Inter, Noto Sans KR

### 브라우저 호환성
- Chrome (최신)
- Firefox (최신)
- Safari (최신)
- Edge (최신)
- 모바일 브라우저 (iOS Safari, Chrome Android)

---

## 📊 프로젝트 통계

### RWDI
- **설립**: 1972년
- **경력**: 50년 이상
- **글로벌 오피스**: 32개
- **전문가**: 800명 이상
- **프로젝트**: 40,000개 이상

### CNP Building Safety Group
- **그룹사**: CNP동양, CNP이앤씨, CNP아이웍스, 스캔비
- **경력**: 30년 이상
- **전문 분야**: 건축물 안전 컨설팅
- **지역**: 한국 (서울시 송파구)
- **강점**: 국내 법규 및 인프라 전문 지식

---

## 🌟 주요 강점

### 1. **글로벌 + 로컬 전문성**
- RWDI의 50년 풍공학 노하우
- CNP의 한국 건축 법규 전문 지식

### 2. **첨단 연구 역량**
- 세계 최고 수준의 풍동 실험 시설
- CFD 및 컴퓨터 시뮬레이션 도구

### 3. **검증된 실적**
- 40,000개 이상의 글로벌 프로젝트
- 상하이 타워, 부르즈 칼리파 등 랜드마크 건물

### 4. **맞춤형 솔루션**
- 한국 시장을 위한 특화 서비스
- 건축가, 엔지니어, 시공자를 위한 통합 솔루션

---

## 📞 연락처

- **이메일**: info@rwdi-cnp.com
- **전화**: +82-XX-XXXX-XXXX
- **주소 (한글)**: 대한민국 서울시 송파구 법원로 11길 7, 현대지식산업센터 C동 1101호
- **주소 (영문)**: C-1101, Hyundai Knowledge Industry Center, 7 Beobwon-ro 11-gil, Songpa-gu, Seoul, South Korea

### 공식 홈페이지
- **RWDI**: https://rwdi.com/
- **CNP**: https://www.cnpgroup.co.kr/

---

## 📝 라이선스 및 저작권

© 2026 RWDI & CNP Partnership. All rights reserved.

---

## 🔄 향후 개선 사항

### 우선순위 높음
- [ ] 실제 프로젝트 이미지 추가
- [ ] 서비스 페이지 상세 콘텐츠 보강
- [ ] SEO 최적화 (메타 태그, 구조화된 데이터)
- [ ] 성능 최적화 (이미지 압축, 레이지 로딩)

### 우선순위 중간
- [ ] 프로젝트 포트폴리오 섹션
- [ ] 팀 소개 페이지
- [ ] 블로그/뉴스 섹션
- [ ] 고객 후기 섹션

### 우선순위 낮음
- [ ] 애니메이션 개선
- [ ] 다크 모드 지원
- [ ] 추가 언어 지원 (중국어, 일본어 등)

---

## 🧪 테스트 시나리오

### 1. **언어 전환 테스트**
- [ ] 메인 페이지에서 KOR ↔ ENG 전환
- [ ] 회사 소개 페이지에서 언어 전환
- [ ] 서비스 페이지에서 언어 전환
- [ ] 새로고침 후 언어 설정 유지 확인

### 2. **네비게이션 테스트**
- [ ] 고정 네비게이션 바 스크롤 테스트
- [ ] 드롭다운 메뉴 (회사소개) 작동 확인
- [ ] 모바일 햄버거 메뉴 작동 확인
- [ ] 페이지 간 이동 테스트

### 3. **반응형 테스트**
- [ ] Desktop (1920px, 1440px, 1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 414px)
- [ ] 가로/세로 모드 전환

### 4. **폼 테스트**
- [ ] 필수 필드 유효성 검사
- [ ] 이메일 형식 검증
- [ ] 메시지 전송 (mailto 작동)
- [ ] 성공 메시지 표시

### 5. **링크 테스트**
- [ ] 내부 링크 (페이지 이동)
- [ ] 외부 링크 (RWDI, CNP 공식 사이트)
- [ ] 앵커 링크 (#home, #services, #contact 등)

---

## 🎨 디자인 시스템

### 컬러 팔레트
```css
--primary-blue: #0066b2;
--accent-blue: #0099ff;
--primary-red: #e63946;
--accent-red: #ff6b6b;
--dark-gray: #1a1a1a;
--medium-gray: #666;
--light-gray: #f5f5f5;
--white: #ffffff;
```

### 타이포그래피
- **한글**: Noto Sans KR (300, 400, 500, 700, 900)
- **영문**: Inter (300, 400, 500, 600, 700, 800)

### 반응형 브레이크포인트
- **Desktop**: ≥1024px
- **Tablet**: 768px - 1023px
- **Mobile**: ≤767px

---

## 💼 프로젝트 연혁

- **2026-01-26**: 프로젝트 최종 완료
  - 모든 페이지 다국어 지원
  - MOU 섹션 추가 및 최적화
  - 연락처 폼 구현
  - 푸터 간소화
  - RWDI 통계 업데이트 (32 오피스, 800+ 전문가, 40,000+ 프로젝트)
  - CNP CEO 이름 정정 (정광량 / Chung Kwang-ryang)
  - 네비게이션 고정 및 반응형 최적화
  - 영문 타이틀 자연스러운 줄바꿈 구현

---

## 🎯 목표 및 비전

### 단기 목표
- 한국 시장에서 RWDI-CNP 파트너십 인지도 확대
- 초고층 건축물 프로젝트 수주
- 건축가, 엔지니어, 시공자와의 네트워크 구축

### 장기 목표
- 아시아-태평양 지역 풍공학 시장 리더십 확보
- 지속 가능한 건축물 성능 솔루션 개발
- 글로벌 표준 설정 및 기술 혁신

---

**이 웹사이트는 배포 준비가 완료되었습니다! 🚀**

**Publish 탭**에서 원클릭으로 배포하실 수 있습니다.
