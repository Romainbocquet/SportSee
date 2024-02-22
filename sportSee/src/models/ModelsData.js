class UserDataModels {
  constructor(id, userInfos, todayScore, keyData) {
      this.id = id;
      this.userInfos = userInfos;
      this.todayScore = todayScore;
      this.keyData = keyData;
  }

  static fromApiResponse(apiResponse) {
      const { id, userInfos, todayScore, score, keyData } = apiResponse;
      const finalScore = todayScore !== undefined ? todayScore : score;
      return new UserDataModels(id, userInfos, finalScore, keyData);
  }
}

class AverageSessionsDataModels {
  constructor(userId, sessions) {
      this.userId = userId;
      this.sessions = sessions;
  }

  static fromApiResponse(apiResponse) {
      const { userId, sessions } = apiResponse;
      return new AverageSessionsDataModels(userId, sessions);
  }
}

class ActivityDataModels {
  constructor(userId, sessions) {
      this.userId = userId;
      this.sessions = sessions;
  }

  static fromApiResponse(apiResponse) {
      const { userId, sessions } = apiResponse;
      return new ActivityDataModels(userId, sessions);
  }
}

class PerfDataModels {
  constructor(userId, kind, data) {
      this.userId = userId;
      this.kind = kind;
      this.data = data;
  }

  static fromApiResponse(apiResponse) {
      const { userId, kind, data } = apiResponse;
      return new PerfDataModels(userId, kind, data);
  }
}

export { UserDataModels, AverageSessionsDataModels, ActivityDataModels, PerfDataModels };
