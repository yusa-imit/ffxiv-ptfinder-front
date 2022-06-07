import moment from "moment-timezone";
import { FixedLengthArray } from "./DataTypes/FixedLengthArray";
import { DungeonType, Game, Job, Region, Language } from "./FFXIVInfo";

export interface ArticleData {
  title: string;
  description: string;
  dungeon: Dungeon;
  schedule: Schedule;
  job: Job;
  region: Region;
  specification: Specification;
  language: Language;
}

interface Dungeon {
  game: Game;
  type: DungeonType;
}

/**
 * @interface Schedule
 * @param writtenInDescription 스케줄을 어플리케이션에서 정해준 타입에 따라 입력할 것인지 (false), 아니면 직접 description에 입력할 것인지(true)
 *    이 변수가 true일 경우, 이하의 변수들은 모두 기본형으로 설정
 * @param negotiable 스케줄을 협상 가능한지 여부
 * @param day 활동일 배열. 길이 7이 강제되는 Array. 0일 경우 활동일 아님, 1일경우 활동일.
 * @param timeType 활동시간 배열의 타입 @param time 참고
 * @param time 활동 시간 배열. 기본적인 구조는 day 데이터와 같음
 * timeType 선택에 따라 일주일 전체 적용/평일*주말/일주일 각각 을 선택가능함
 * 0일 경우 : 현재 활동 시간을 활동일 전체에 적용
 * 1일 경우 : 현재 선택된 활동 시간을 첫번째 배열은 평일에, 두번째 배열은 주말에 적용
 * 2일 경우 : 월화수목금토일 각각 활동시간을 직접 작성
 * @param timezone 작성자의 timezone
 */
interface Schedule {
  writtenInDescription: boolean;
  negotiable: boolean;
  day: FixedLengthArray<0 | 1, 7>;
  timeType: 0 | 1 | 2;
  time:
    | FixedLengthArray<0 | 1, 24>
    | FixedLengthArray<FixedLengthArray<0 | 1, 24>, 2>
    | FixedLengthArray<FixedLengthArray<0 | 1, 24>, 7>;
  timezone: Timezone;
}

const availableTimezone = [...moment.tz.names()] as const;
type Timezone = typeof availableTimezone[number];

/**
 * @interface Specification
 * @param minimumWeek 최소 공대 유지 기간
 * @param firstWeek 첫 주 공략 목적
 * @param worldFirstRace 세계 레이스 목적
 * @param fflogsRequired fflogs 입력 요구
 */
interface Specification {
  minimumWeek: boolean;
  firstWeek: boolean;
  worldFirstRace: boolean;
  fflogsRequired: boolean;
}
