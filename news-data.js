// 뉴스 기사 데이터 — 이 파일 하나에만 기사를 추가/삭제하면
// news.html과 index.html 양쪽에 자동으로 반영됩니다.
//
// 새 기사 추가 방법:
// 1. 아래 배열에 새 객체를 추가 (위치는 어디든 무방, 날짜 기준 자동 정렬됨)
// 2. href는 실제로 만든 기사 페이지 파일명과 일치해야 함
// 3. date는 "YYYY-MM-DD" 형식 (정렬 기준)
// 4. dateLabel은 화면에 보여줄 날짜 텍스트 (예: "Jun 17, 2026")

const NEWS_DATA = [
  {
    href: "news-oneus-comiccon.html",
    date: "2026-06-17",
    dateLabel: "Jun 17, 2026",
    title: "원어스, 글로벌 점령 나선다! 유럽 대표 페스티벌 'COMIC CON' 헤드라이너 출격"
  },
  {
    href: "news-hongeunhee-contract.html",
    date: "2026-06-16",
    dateLabel: "Jun 16, 2026",
    title: "'유준상 아내' 홍은희, 20년 인연 나무엑터스와 결별..비웨이브 1호 배우로 새 출발 [공식]"
  },
  {
    href: "news-oneus-statement.html",
    date: "2026-02-09",
    dateLabel: "Feb 9, 2026",
    title: "원어스(ONEUS) 계약 관련 비웨이브 엔터테인먼트 공식 입장문 안내"
  },
  {
    href: "news-oneus-contract.html",
    date: "2026-02-05",
    dateLabel: "Feb 5, 2026",
    title: "원어스, 신생기획사에서 새출발..토니안 한솥밥 [공식]"
  },
  {
    href: "news-tonyan-contract.html",
    date: "2025-11-03",
    dateLabel: "Nov 3, 2025",
    title: "H.O.T 토니안, 비웨이브와 전속계약 체결"
  },
  {
    href: "news-rtee-producer.html",
    date: "2025-08-26",
    dateLabel: "Aug 26, 2025",
    title: "'히트곡 메이커' 알티, 신생 엔터 비웨이브 메인 프로듀서 합류"
  },
  {
    href: "news-company-founded.html",
    date: "2025-06-18",
    dateLabel: "Jun 18, 2025",
    title: "'FNC·RBW 출신' 구본영 대표, 비웨이브 엔터테인먼트 설립"
  }
];

// 날짜 최신순으로 정렬 (내림차순)
NEWS_DATA.sort((a, b) => new Date(b.date) - new Date(a.date));
