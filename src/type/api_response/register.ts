interface RES_200 {
  access_token: string;
  device_id: string;
  home_server: string;
  user_id: string;
}

interface RES_400 {
  errcode: string;
  error: string;
}

interface RES_401 {
  session: string;
  completed: [string];
  flows: [
    {
      stages: [string];
    }
  ];
  params: {
    [key: string]: Object;
  };
}

interface RES_403 {
  errcode: string;
  error: string;
}

interface RES_429 {
  errcode: string;
  error: string;
  retry_after_my: number;
}

export type Register_Response_Possible =
  | RES_200
  | RES_400
  | RES_401
  | RES_403
  | RES_429;

export type { RES_200 as Register_Response_200 };
export type { RES_400 as Register_Response_400 };
export type { RES_401 as Register_Response_401 };
export type { RES_403 as Register_Response_403 };
export type { RES_429 as Register_Response_429 };
