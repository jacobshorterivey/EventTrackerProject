export class Game {
  id: number;
  name: string;
  description: string;
  developer: string;
  platform: string;
  releaseDate: string;
  completed: boolean;
  hoursToComplete: number;
  imgUrl: string;
  genre: string;

  constructor(
    id?: number,
    name?: string,
    description?: string,
    developer?: string,
    platform?: string,
    releaseDate?: string,
    completed?: boolean,
    hoursToComplete?: number,
    imgUrl?: string,
    genre?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.developer = developer;
    this.platform = platform;
    this.releaseDate = releaseDate;
    this.completed = completed;
    this.hoursToComplete = hoursToComplete;
    this.imgUrl = imgUrl;
    this.genre = genre;
  }
}
