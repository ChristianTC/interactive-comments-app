export interface IResult {
  currentUser: User;
  comments:    IComment[];
}

export interface IComment {
  id:          number;
  content:     string;
  createdAt:   string;
  score:       number;
  user:        User;
  replies?:    IComment[];
  replyingTo?: string;
}

export interface User {
  image:    Image;
  username: string;
}

export interface Image {
  png:  string;
  webp: string;
}
