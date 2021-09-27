import { Work } from "../interfaces/work"

export const Works: Work[] = [
  {
    name: "Next-Portfolio", id: undefined,
    text: "このサイトのこと。技術選定はサーバーレスで、かつ無難なものを採用。CICDの実践運用にも初挑戦。",
    tags: ["TypeScript", "React", "Next.JS", "Tailwind.css", "GitHub Actions"],
    links: [
      {
        icon: "Site",
        link: "https://wtomoharu.github.io/next-portfolio/"
      },
      {
        icon: "GitHub",
        link: "https://github.com/WTomoharu/next-portfolio"
      },
    ],
  },
  {
    name: "Git-Commit-Viewer", id: undefined,
    text: "GitのCommitを日付順に表示するマクロ。夏の終わりに、自分がしたことを振り返りたくて作った。",
    tags: ["Node.js", "git", "git-log", "Vue", "Vue v3"],
    links: [
      {
        icon: "Qiita",
        link: "https://qiita.com/watatomo1216/items/0afb61471e93faa88ffe"
      },
      {
        icon: "GitHub",
        link: "https://github.com/WTomoharu/git-commit-viewer"
      },
    ],
  },
  {
    name: "お面屋", id: "omenya",
    text: "お盆deハッカソンの共同制作作品。課題は屋台で、お面をテーマに作成した。",
    tags: ["TypeScript", "React", "Next.JS", "Vercel", "Tailwind.css", "Firebase"],
    links: [
      {
        icon: "Site",
        link: "https://obon-de-hackathon.vercel.app"
      },
      {
        icon: "GitHub",
        link: "https://github.com/Ossamoon/obon-de-hackathon"
      },
    ],
  },
  {
    name: "Vue-Original-Calendar", id: undefined,
    text: "VueCDNを使って、さくっと自分が使う用のカレンダーを作った。PCの横長画面を最大限生かしたレイアウト",
    tags: ["Vue", "CSS-Animation"],
    links: [
      {
        icon: "Site",
        link: "https://wtomoharu.github.io/vue-original-calendar"
      },
      {
        icon: "GitHub",
        link: "https://github.com/WTomoharu/vue-original-calendar"
      },
    ],
  },
  {
    name: "映画からの脱出", id: "escape-from-beverly-hills",
    text: "横スクロールを基調とした、脱出ゲーム。N高の授業成果物。他の生徒との共同制作作品。",
    tags: ["TypeScript", "React", "Next.JS", "Tailwind.css", "GitHub Actions"],
    links: [
      {
        icon: "Site",
        link: "https://n-tomoharu-watanabe.github.io/alpha-yokohama-D-17/"
      },
      {
        icon: "GitHub",
        link: "https://github.com/n-tomoharu-watanabe/alpha-yokohama-D-17"
      },
    ],
  },
]