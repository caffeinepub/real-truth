import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Article, Song, Writing } from "../backend";
import { useActor } from "./useActor";

export function useListAllArticles() {
  const { actor, isFetching } = useActor();
  return useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllArticles();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useListAllWritings() {
  const { actor, isFetching } = useActor();
  return useQuery<Writing[]>({
    queryKey: ["writings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllWritings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useListAllSongs() {
  const { actor, isFetching } = useActor();
  return useQuery<Song[]>({
    queryKey: ["songs"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllSongs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSeedContent() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) return;
      const now = BigInt(Date.now()) * 1_000_000n;
      await Promise.all([
        actor.addArticle(
          "The Weight of Unspoken Words",
          "Hridiman Dutta",
          1n,
          `Every child carries a world within — a universe of fears, dreams, and questions they dare not voice aloud. In the silence between heartbeats lies the truth of childhood: that growing up is as much about what we cannot say as what we can. This piece explores the invisible burden children bear when the adults around them are too busy, too distant, or too fragile to receive their truth. We must learn to read the unspoken — in a child's downcast eyes, in the story they tell about a friend that is really about themselves, in the way they hold their breath when certain names are mentioned. Real truth begins when we create the space for the words that have never been spoken.`,
          now,
        ),
        actor.addArticle(
          "Finding Truth in Simplicity",
          "Ayushman Bhattacharya",
          2n,
          "Somewhere between our relentless pursuit of more and our fear of being still, we lost the ability to see what is plainly in front of us. Honest living is not a philosophy reserved for monks and hermits — it is an act available to each of us in every ordinary moment. I write because I believe that simplicity is not the absence of complexity but the courage to see through it. The child who asks why the sky is blue is closer to truth than the philosopher who argues about the nature of color. Strip away the performance, the noise, the curated self, and what remains is real: a person, a breath, a truth worth telling.",
          now,
        ),
        actor.addArticle(
          "Letters We Never Sent",
          "Hridiman Dutta",
          1n,
          "There is a drawer in every home — sometimes literal, sometimes only in the mind — where the unsent letters accumulate. The letter to the parent who never listened. The note to the friend who drifted away. The words to oneself at age twelve, standing at the crossroads of something unnamed. I began collecting these stories from young readers who trusted me with what they could not say out loud, and what emerged was a tapestry of quiet courage. This is for everyone who has drafted that letter in their head a thousand times: your words are not lost. They are seeds, and seeds find soil.",
          now,
        ),
        actor.addWriting(
          "Letters to the Unnamed",
          "Hridiman Dutta",
          1n,
          "Dear you — I do not know your name but I know the shape of your silence. I know how you sit at the edge of dinner tables, present and elsewhere at once. I know the specific weight of a secret that has nowhere to go, how it settles into the chest like a stone that has decided to stay. I am writing to you not because I have answers but because I have questions too, and questions held in company are lighter than questions held alone. There is a room inside every story I write where the door is always open and the light is always on — that room is for you, and you will recognize it when you walk in.",
          now,
        ),
        actor.addWriting(
          "Echoes of a Quiet Mind",
          "Ayushman Bhattacharya",
          2n,
          "The mind at rest is not empty — it is full, the way a library is full after the last visitor has gone home. I have learned to sit with the echoes: the remembered laughter of someone I loved, the ghost of a conversation that changed me, the particular quality of afternoon light through old curtains. These are the materials of honest writing — not the spectacular, not the dramatic, but the small persistent things that refuse to be forgotten. I write from that quiet room in myself, and I invite you to find yours. Truth lives in the quiet. It does not shout. It simply remains.",
          now,
        ),
        actor.addWriting(
          "The Map and the Territory",
          "Ayushman Bhattacharya",
          2n,
          "We draw maps of ourselves — who we are to our parents, to our friends, to our teachers — and after a while we forget that the map is not the territory. The child who was told she was difficult began to believe in her own difficulty. The boy who was called too sensitive learned to wall off his sensitivity like a room he was forbidden to enter. I write about the gap between map and territory, between the story we inherited about ourselves and the self that persists beneath it — wild, unmapped, undimmed. You are not your story. You are the one the story is trying to reach.",
          now,
        ),
        actor.addSong(
          "Voice of the Silent",
          "Hridiman Dutta",
          1n,
          `I will be your voice when your throat is dry\nI will hold the words you could not cry\nEvery secret you have buried deep in stone\nYou were never, never carrying it alone\n\nSpeak it slow or speak it fast or don't speak at all\nI am here beside you if you rise or if you fall\nAll the things you meant to say beneath the weight of years\nI will wrap them gently now in music, not in tears`,
          now,
        ),
        actor.addSong(
          "Before the Dawn",
          "Ayushman Bhattacharya",
          2n,
          `Before the dawn the darkness is the deepest\nBefore the song the silence is the most\nBefore the answer every question feels the steepest\nBefore you find yourself you feel the most lost\n\nBut hold on — the light is learning how to find you\nHold on — the road is turning, trust the bend\nLeave the story that was written just to bind you\nThe truest chapter hasn't started yet, my friend`,
          now,
        ),
        actor.addSong(
          "Real",
          "Hridiman Dutta",
          1n,
          `Not the version you perform for tired eyes\nNot the answer that you give to keep the peace\nNot the smile you wear like armor in disguise\nNot the silence when you're begging for release\n\nI want the real — the stumbling and the wonder\nI want the truth before it's dressed for the stage\nI want the voice that breaks like distant thunder\nThe real you, living wild on the open page`,
          now,
        ),
      ]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["writings"] });
      queryClient.invalidateQueries({ queryKey: ["songs"] });
    },
  });
}
