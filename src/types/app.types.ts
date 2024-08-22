export  type News = {
    id: number;
    title: string;
    content: string;
    imageURL: string;
    connection?:string;
  };
export type HomePage = {
  headline: News;
  trending: News[];
  sports: News[];
};
