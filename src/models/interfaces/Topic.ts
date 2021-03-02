import VoteType from "./../enums/VoteType";

export default interface Topic {
  id: number;
  title: string;
  date: string;
  content: string;
  votes: {
    likes: number;
    dislikes: number;
  };
  selectedOption: VoteType | null;
}
