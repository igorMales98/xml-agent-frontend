export class Comment {
    author: string;
    text: string;
    reply: string;
    constructor(author: string, text: string, reply: string) {
      this.author = author;
      this.text = text;
      this.reply = reply;
    }
  }