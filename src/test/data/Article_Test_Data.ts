import { ArticleData } from "@type/ArticleData";

export const ARTICLE_TEST_DATA: ArticleData = {
  title: "Article Test",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam",
  dungeon: {
    game: {
      version: 6,
      patch: 1,
    },
    type: "raid",
  },
  isTemporary: false,
  scheduleWrittenInDescription: false,
  schedule: {
    negotiable: true,
    day: [0, 1, 1, 0, 1, 1, 0],
    timeType: 0,
    time: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
    ],
    timezone: "Asia/Tokyo",
  },
  job: ["WAR", "AST", "BLM"],
  region: "JP",
  specification: {
    minimumWeek: 8,
    firstWeek: true,
    worldFirstRace: false,
    fflogsRequired: false,
    voiceChat: 0,
  },
  language: "JP",
  answerType: 0,
};
