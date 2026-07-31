// 全站唯一需要改的設定檔。
export const site = {
  name: 'Denny Lin',
  description: 'Selected work — web and software.',
  // Hero：粗體那段 + 後面接的細體那段
  heroLead: 'Selected Work',
  heroRest:
    '— 一份持續更新的網站與軟體專案集，從介面設計到後端實作。',
  // 右上導覽
  nav: [
    { text: 'Showcase', href: '/' },
    { text: 'Resources', href: '/#', dim: true },
  ],
  // 左下角
  footerLinks: [
    { text: 'GitHub', href: 'https://github.com/denny200897' },
    { text: 'Email', href: 'mailto:dennyjick@gmail.com' },
    { text: 'Follow', href: 'https://github.com/denny200897' },
  ],
  // 一頁顯示幾張卡（超過就出現 Prev / Next）
  perPage: 6,
};
