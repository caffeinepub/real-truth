import Map "mo:core/Map";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Time "mo:core/Time";

actor {
  type ItemId = Nat;
  type AuthorId = Nat;

  type Article = {
    id : ItemId;
    title : Text;
    author : Text;
    authorId : AuthorId;
    content : Text;
    published : Time.Time;
  };

  module Article {
    public func compare(article1 : Article, article2 : Article) : Order.Order {
      Nat.compare(article1.id, article2.id);
    };

    public func compareByAuthorId(article1 : Article, article2 : Article) : Order.Order {
      Nat.compare(article1.authorId, article2.authorId);
    };

    public func compareByPublished(article1 : Article, article2 : Article) : Order.Order {
      Int.compare(article1.published, article2.published);
    };
  };

  type Writing = {
    id : ItemId;
    title : Text;
    author : Text;
    authorId : AuthorId;
    content : Text;
    published : Time.Time;
  };

  module Writing {
    public func compare(writing1 : Writing, writing2 : Writing) : Order.Order {
      Nat.compare(writing1.id, writing2.id);
    };

    public func compareByAuthorId(writing1 : Writing, writing2 : Writing) : Order.Order {
      Nat.compare(writing1.authorId, writing2.authorId);
    };

    public func compareByPublished(writing1 : Writing, writing2 : Writing) : Order.Order {
      Int.compare(writing1.published, writing2.published);
    };
  };

  type Song = {
    id : ItemId;
    title : Text;
    author : Text;
    authorId : AuthorId;
    lyrics : Text;
    published : Time.Time;
  };

  module Song {
    public func compare(song1 : Song, song2 : Song) : Order.Order {
      Nat.compare(song1.id, song2.id);
    };

    public func compareByAuthorId(song1 : Song, song2 : Song) : Order.Order {
      Nat.compare(song1.authorId, song2.authorId);
    };

    public func compareByPublished(song1 : Song, song2 : Song) : Order.Order {
      Int.compare(song1.published, song2.published);
    };
  };

  var articleIdCounter = 0;
  var writingIdCounter = 0;
  var songIdCounter = 0;

  let articles = Map.empty<ItemId, Article>();
  let writings = Map.empty<ItemId, Writing>();
  let songs = Map.empty<ItemId, Song>();

  public shared ({ caller }) func addArticle(title : Text, author : Text, authorId : AuthorId, content : Text, published : Time.Time) : async ItemId {
    let id = articleIdCounter;
    let article : Article = {
      id;
      title;
      author;
      authorId;
      content;
      published;
    };
    articles.add(id, article);
    articleIdCounter += 1;
    id;
  };

  public shared ({ caller }) func addWriting(title : Text, author : Text, authorId : AuthorId, content : Text, published : Time.Time) : async ItemId {
    let id = writingIdCounter;
    let writing : Writing = {
      id;
      title;
      author;
      authorId;
      content;
      published;
    };
    writings.add(id, writing);
    writingIdCounter += 1;
    id;
  };

  public shared ({ caller }) func addSong(title : Text, author : Text, authorId : AuthorId, lyrics : Text, published : Time.Time) : async ItemId {
    let id = songIdCounter;
    let song : Song = {
      id;
      title;
      author;
      authorId;
      lyrics;
      published;
    };
    songs.add(id, song);
    songIdCounter += 1;
    id;
  };

  public query ({ caller }) func getArticleById(id : ItemId) : async Article {
    switch (articles.get(id)) {
      case (null) { Runtime.trap("Article not found") };
      case (?article) { article };
    };
  };

  public query ({ caller }) func getWritingById(id : ItemId) : async Writing {
    switch (writings.get(id)) {
      case (null) { Runtime.trap("Writing not found") };
      case (?writing) { writing };
    };
  };

  public query ({ caller }) func getSongById(id : ItemId) : async Song {
    switch (songs.get(id)) {
      case (null) { Runtime.trap("Song not found") };
      case (?song) { song };
    };
  };

  public query ({ caller }) func listAllArticles() : async [Article] {
    articles.values().toArray().sort(Article.compare);
  };

  public query ({ caller }) func listAllWritings() : async [Writing] {
    writings.values().toArray().sort(Writing.compare);
  };

  public query ({ caller }) func listAllSongs() : async [Song] {
    songs.values().toArray().sort();
  };

  public query ({ caller }) func listArticlesByAuthor(authorId : AuthorId) : async [Article] {
    let filtered : Iter.Iter<Article> = articles.values().filter(
      func(article) { article.authorId == authorId }
    );
    filtered.toArray().sort(Article.compareByPublished);
  };

  public query ({ caller }) func listWritingsByAuthor(authorId : AuthorId) : async [Writing] {
    let filtered : Iter.Iter<Writing> = writings.values().filter(
      func(writing) { writing.authorId == authorId }
    );
    filtered.toArray().sort(Writing.compareByPublished);
  };

  public query ({ caller }) func listSongsByAuthor(authorId : AuthorId) : async [Song] {
    let filtered : Iter.Iter<Song> = songs.values().filter(
      func(song) { song.authorId == authorId }
    );
    filtered.toArray().sort(Song.compareByPublished);
  };
};
