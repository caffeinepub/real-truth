import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Article {
    id: ItemId;
    title: string;
    content: string;
    authorId: AuthorId;
    published: Time;
    author: string;
}
export type Time = bigint;
export interface Writing {
    id: ItemId;
    title: string;
    content: string;
    authorId: AuthorId;
    published: Time;
    author: string;
}
export type AuthorId = bigint;
export interface Song {
    id: ItemId;
    title: string;
    lyrics: string;
    authorId: AuthorId;
    published: Time;
    author: string;
}
export type ItemId = bigint;
export interface backendInterface {
    addArticle(title: string, author: string, authorId: AuthorId, content: string, published: Time): Promise<ItemId>;
    addSong(title: string, author: string, authorId: AuthorId, lyrics: string, published: Time): Promise<ItemId>;
    addWriting(title: string, author: string, authorId: AuthorId, content: string, published: Time): Promise<ItemId>;
    getArticleById(id: ItemId): Promise<Article>;
    getSongById(id: ItemId): Promise<Song>;
    getWritingById(id: ItemId): Promise<Writing>;
    listAllArticles(): Promise<Array<Article>>;
    listAllSongs(): Promise<Array<Song>>;
    listAllWritings(): Promise<Array<Writing>>;
    listArticlesByAuthor(authorId: AuthorId): Promise<Array<Article>>;
    listSongsByAuthor(authorId: AuthorId): Promise<Array<Song>>;
    listWritingsByAuthor(authorId: AuthorId): Promise<Array<Writing>>;
}
