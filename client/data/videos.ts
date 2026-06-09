export interface Video {
  id: string;
  name: string;
  videoPath: string;
  category: string;
  thumbnail: string;
}

export const VIDEOS: Video[] = [
  // â”€â”€ Featured Originals â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: "1",   name: "RAAZ BEYOND FEAR",          videoPath: "https://vz-012bcd01-e4e.b-cdn.net/a6835e5b-88a3-4c2a-8e9e-972a8e46588c/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/1.png" },
  { id: "7",   name: "RAAZ, REVENGE & MAFIA EP1", videoPath: "https://vz-012bcd01-e4e.b-cdn.net/ee0edf68-632d-4613-97cb-5dfccbcf327f/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/7.png" },
  { id: "8",   name: "RAAZ, REVENGE & MAFIA EP2", videoPath: "https://vz-012bcd01-e4e.b-cdn.net/6404e890-3e18-4cab-95f7-3ae76fc0aeb8/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/8.png" },
  { id: "43",  name: "HER STORY",                 videoPath: "https://vz-012bcd01-e4e.b-cdn.net/e8ad8fc4-49fa-43ab-9fda-36916e56d066/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/43.png" },
  { id: "16",  name: "THE FINAL SECRET",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/3ed4455a-3408-42e9-bf9a-5f45d616ad76/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/16.png" },
  { id: "18",  name: "THE FINAL DHOKHA",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/ed0bce30-6b78-4d14-8c40-e5971b4f3b8d/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/18.png" },
  { id: "21",  name: "FINAL WITNESS",              videoPath: "https://vz-012bcd01-e4e.b-cdn.net/c3dd489e-3c1b-4446-9366-4f83581a404a/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/21.png" },
  { id: "34",  name: "FINAL COUNTDOWN",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/c0bc6251-f2c8-46b3-89c5-6eea3cd9ce15/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/34.png" },
  { id: "96",  name: "THE LAST TRUTH EP1",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/710a74b7-ec71-4504-abc9-d231aa23c2ec/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/96.png" },
  { id: "97",  name: "THE LAST TRUTH EP2",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/4851e395-3c41-44b6-a99a-06816305990e/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/97.png" },
  { id: "67",  name: "ADVENTURE KE RAAZ",          videoPath: "https://vz-012bcd01-e4e.b-cdn.net/a76b2561-f104-4a00-b5ba-5943a1ee5620/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/67.png" },
  { id: "101", name: "ADVENTURE BEYOND BORDERS",   videoPath: "https://vz-012bcd01-e4e.b-cdn.net/6dfc4323-4ae3-428e-9866-13053dbd731c/play_480p.mp4", category: "Featured Originals", thumbnail: "/landscape/101.png" },

  // â”€â”€ Crime & Mafia â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: "11",  name: "FATAL CONNECTIONS EP1",      videoPath: "https://vz-012bcd01-e4e.b-cdn.net/2599bc17-5da5-4ebe-88c6-4e388cfb6e7a/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/11.png" },
  { id: "12",  name: "FATAL CONNECTIONS EP2",      videoPath: "https://vz-012bcd01-e4e.b-cdn.net/fc291be4-3392-44be-aef8-d4d056051f1f/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/12.png" },
  { id: "13",  name: "FATAL CONNECTIONS EP3",      videoPath: "https://vz-012bcd01-e4e.b-cdn.net/fa05d0b5-a766-4810-b989-a796daf5082e/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/13.png" },
  { id: "39",  name: "WANTED FOR REVENGE",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/a1acd60e-f874-466e-a7aa-c76db9cb57df/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/39.png" },
  { id: "53",  name: "THE WANTED TARGET",          videoPath: "https://vz-012bcd01-e4e.b-cdn.net/b9704452-fd1f-431d-a921-a0fa8187a170/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/53.png" },
  { id: "62",  name: "THE FITNESS TRAP",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/a74bbde6-2f05-49b7-88b5-68ad82b4186c/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/62.png" },
  { id: "63",  name: "THE LAST DEAL",              videoPath: "https://vz-012bcd01-e4e.b-cdn.net/2508404e-25a4-475c-8c05-af707dbf1e5d/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/63.png" },
  { id: "64",  name: "THE CRIME CIRCLE",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/912b01f0-6f55-491b-931d-7cda175785e2/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/64.png" },
  { id: "68",  name: "KILLER INSTINCT",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/b920eca1-3a4a-4fce-bebd-0a9d2633e4f3/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/68.png" },
  { id: "80",  name: "CRIMEWAVE",                  videoPath: "https://vz-012bcd01-e4e.b-cdn.net/516d12a8-04e5-4779-87d2-fa2809493d70/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/80.png" },
  { id: "86",  name: "KILLER WALI RAAT",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/436a5e04-04b6-4bcc-bd2d-c54939083b0c/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/86.png" },
  { id: "87",  name: "CODE RED MAFIA",             videoPath: "https://vz-012bcd01-e4e.b-cdn.net/29215cc6-4174-406b-a21d-71122bc7336a/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/87.png" },
  { id: "98",  name: "CRIME SYNDICATE",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/f5cbe468-f999-49b6-9bc0-1bd9c4451d5e/play_480p.mp4", category: "Crime & Mafia",      thumbnail: "/portrait/98.png" },

  // â”€â”€ Action & Mission â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: "23",  name: "DEAD END MISSON",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/02966cfc-7e24-429d-9d2b-56864dfe368e/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/23.png" },
  { id: "26",  name: "ROGUE MISSON",               videoPath: "https://vz-012bcd01-e4e.b-cdn.net/bc22fa81-0406-4f0a-bdf1-a5a928abdcec/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/26.png" },
  { id: "27",  name: "OPERATION NIGHTFALL",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/28d84155-2e99-4633-833d-01bfb7187dd3/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/27.png" },
  { id: "40",  name: "LAST MISSION ALIVE",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/a1d91030-cf54-420a-9b1c-4afe9ba19e15/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/40.png" },
  { id: "15",  name: "ESCAPE FROM NOWHERE",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/80d10199-16c3-433f-8802-de52a258588c/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/15.png" },
  { id: "25",  name: "ESCAPE PLAN 302",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/0b2b1dcd-98bd-46c2-a427-cb94c626ef50/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/25.png" },
  { id: "41",  name: "MIDNIGHT ESCAPE",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/9ac5b5f9-d682-44a7-b877-772dec4b380d/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/41.png" },
  { id: "46",  name: "ESCAPE BEYOND FEAR EP1",     videoPath: "https://vz-012bcd01-e4e.b-cdn.net/7bd7696a-2b32-4542-ac63-73fe38a547fc/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/46.png" },
  { id: "47",  name: "ESCAPE BEYOND FEAR EP2",     videoPath: "https://vz-012bcd01-e4e.b-cdn.net/e2c089c7-9466-462d-93c7-a72a539672b6/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/47.png" },
  { id: "48",  name: "ESCAPE BEYOND FEAR EP3",     videoPath: "https://vz-012bcd01-e4e.b-cdn.net/06429499-6d65-49a3-98e6-84777884c4a2/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/48.png" },
  { id: "49",  name: "UNDERGROUND WARRIORS EP1",   videoPath: "https://vz-012bcd01-e4e.b-cdn.net/f7369a9f-d2e8-4c89-9cf2-87cb013dd9d0/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/49.png" },
  { id: "50",  name: "UNDERGROUND WARRIORS EP2",   videoPath: "https://vz-012bcd01-e4e.b-cdn.net/c91afc25-592f-4923-9ab4-62f18da47bc6/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/50.png" },
  { id: "66",  name: "MISSSION DARKNIGHT",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/bf3ebf7d-ca49-443f-b7b8-1a3d4e2ae96b/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/66.png" },
  { id: "69",  name: "ESCAPE ROUT 21",             videoPath: "https://vz-012bcd01-e4e.b-cdn.net/390332b1-be21-4c28-9bf5-06832673baad/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/69.png" },
  { id: "91",  name: "CHASE TO DANGER EP1",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/799c717b-cbcf-4050-8f14-2a9e199afadf/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/6.png" },
  { id: "92",  name: "CHASE TO DANGER EP2",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/671096db-84aa-4452-8298-d564b5fe5a41/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/17.png" },
  { id: "93",  name: "CHASE TO DANGER EP3",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/9d656763-670c-49e0-b721-ba6e9291b17b/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/36.png" },
  { id: "94",  name: "CHASE TO DANGER EP4",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/af763878-2990-48bd-83f1-b396dbce21f7/play_480p.mp4", category: "Action & Mission",   thumbnail: "/portrait/37.png" },

  // â”€â”€ Mystery & Suspense â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: "2",   name: "THE HIDDEN TRUTH",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/803b1a1b-4b7a-4376-ae00-118c611ad37d/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/2.png" },
  { id: "4",   name: "THE MISSING WITNESS",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/9b9b7858-2935-4a71-8554-cb6aa69eefdc/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/4.png" },
  { id: "10",  name: "THE FORBIDDEN FILES",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/85f84324-4088-4cc8-8ea2-ca99cb7bc568/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/10.png" },
  { id: "14",  name: "THE HIDDEN ENEMY",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/47557aed-0f85-45cf-a818-19fd88a2b8de/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/14.png" },
  { id: "22",  name: "THE MISSING LINK",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/11444673-b5cf-43a1-a6fa-7cc8e4552e96/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/22.png" },
  { id: "32",  name: "BEYOND SUSPICION EP1",       videoPath: "https://vz-012bcd01-e4e.b-cdn.net/1a4d0e65-a4a4-4468-99f6-51d2e3754ded/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/32.png" },
  { id: "33",  name: "BEYOND SUSPICION EP2",       videoPath: "https://vz-012bcd01-e4e.b-cdn.net/efc7bcdc-2e0e-45a7-a195-7f253abb5763/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/33.png" },
  { id: "38",  name: "THE UNKNOWN TARGET",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/cb6cdbd5-e1d3-470c-ab5c-a7e8bcb58945/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/38.png" },
  { id: "51",  name: "MYSTERY JUNCTION",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/d1150337-4151-4343-826d-7311f5dbe500/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/51.png" },
  { id: "55",  name: "UNKNOWN ENEMY EP1",          videoPath: "https://vz-012bcd01-e4e.b-cdn.net/0eacbf8f-3c0a-409b-8874-bb298c466933/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/55.png" },
  { id: "56",  name: "UNKNOWN ENEMY EP2",          videoPath: "https://vz-012bcd01-e4e.b-cdn.net/fc6a7905-ca95-44d9-a814-a101961bfb2b/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/56.png" },
  { id: "57",  name: "UNKNOWN ENEMY EP3",          videoPath: "https://vz-012bcd01-e4e.b-cdn.net/c4bcdd12-b1f3-4598-9ffc-b7072ac2d354/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/57.png" },
  { id: "73",  name: "HIDDEN FEAR EP1",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/d72d661d-325f-4d19-b173-bf88746ddc7a/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/73.png" },
  { id: "74",  name: "HIDDEN FEAR EP2",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/970a0093-5f14-4f29-bd36-c91b8565172a/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/74.png" },
  { id: "75",  name: "HIDDEN FEAR EP3",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/ec06e7f9-7dc5-43f3-960e-7bef831ec46c/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/75.png" },
  { id: "76",  name: "HIDDEN FEAR EP4",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/9ea2a343-b279-4455-928c-5cc71bc00297/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/76.png" },
  { id: "78",  name: "THE LAST CHANCE",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/20428f28-cc91-4463-bb07-df334be38ab3/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/78.png" },
  { id: "81",  name: "MYSTERY AVENUE",             videoPath: "https://vz-012bcd01-e4e.b-cdn.net/06572887-18a3-4cb0-bc48-59323e881c35/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/81.png" },
  { id: "89",  name: "THE UNOFFICIAL NETWORK",     videoPath: "https://vz-012bcd01-e4e.b-cdn.net/a90c6024-768c-4c24-87d4-07612b07477a/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/89.png" },
  { id: "102", name: "MIDNIGHT CASE",              videoPath: "https://vz-012bcd01-e4e.b-cdn.net/0ec9da21-5da0-42b1-a81a-2eb1ee0c98e5/play_480p.mp4", category: "Mystery & Suspense", thumbnail: "/landscape/102.png" },

  // â”€â”€ Dark Thrillers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: "3",   name: "SCILENT CHASE",              videoPath: "https://vz-012bcd01-e4e.b-cdn.net/e7654d3b-fef4-4867-8426-e8deabada55b/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/3.png" },
  { id: "9",   name: "SCILENT TRIGGER",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/204461ac-ae3c-4d31-a393-ed37c9a2ae91/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/9.png" },
  { id: "19",  name: "BLACK DIARY SECRETS EP1",    videoPath: "https://vz-012bcd01-e4e.b-cdn.net/62b9d1e4-4a58-440d-aced-b23367687127/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/19.png" },
  { id: "20",  name: "BLACK DIARY SECRETS EP2",    videoPath: "https://vz-012bcd01-e4e.b-cdn.net/34f1001c-5f45-4a80-8a76-a2bee40bb09a/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/20.png" },
  { id: "28",  name: "DANGEROUS MINDS EP1",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/95ed5ede-0819-414c-8e3e-7bcaba0eb881/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/28.png" },
  { id: "29",  name: "DANGEROUS MINDS EP2",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/ac231f13-5e7b-40fb-af8e-97be64977c56/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/29.png" },
  { id: "30",  name: "DANGEROUS MINDS EP3",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/55c72f41-bd2a-4a41-b9a2-a171aefd7015/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/30.png" },
  { id: "31",  name: "DANGEROUS MINDS EP4",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/fb60c689-0ae6-4d37-9e7a-0a6fd490aef0/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/31.png" },
  { id: "35",  name: "THE DARK NETWORK",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/e9657c34-99bf-4067-bb06-6c1fae913f0c/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/35.png" },
  { id: "44",  name: "DANGEROUS TERRITORY",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/ee836cdd-1c34-4b4d-843c-3d2c4be8e879/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/44.png" },
  { id: "45",  name: "SHADOW PROTOCOL",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/08ebb0ad-11cd-458a-823b-3e19382347aa/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/45.png" },
  { id: "52",  name: "DARK CITY FILES",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/64ef26c1-c28b-4cd4-926e-7f878f62e2c1/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/2.png" },
  { id: "54",  name: "WANTED BY DARKNESS",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/292e7874-e83e-4818-a9fe-7d7775b096c2/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/4.png" },
  { id: "58",  name: "THE SHADOW GAME EP1",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/35634848-cd48-4d3d-bc4d-2b7f12a6bf5e/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/10.png" },
  { id: "59",  name: "THE SHADOW GAME EP2",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/4fd32d2b-e1e1-43ab-84c7-a5fba6524f83/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/14.png" },
  { id: "60",  name: "THE SHADOW GAME EP3",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/463534cc-d355-4fe9-b6da-53277140f4cd/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/22.png" },
  { id: "61",  name: "THE SHADOW GAME EP4",        videoPath: "https://vz-012bcd01-e4e.b-cdn.net/14b5d597-5c1b-4146-a77c-76f8621cbee6/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/32.png" },
  { id: "70",  name: "BLACK SIGNAL",               videoPath: "https://vz-012bcd01-e4e.b-cdn.net/f5c0b07d-5a7f-4df6-b906-1f7a2f0cef76/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/33.png" },
  { id: "71",  name: "ROGUE NATION",               videoPath: "https://vz-012bcd01-e4e.b-cdn.net/19507c09-9c6e-410c-b01c-ccd6d9423e12/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/38.png" },
  { id: "72",  name: "SILENT WITNESS",             videoPath: "https://vz-012bcd01-e4e.b-cdn.net/a0f4772a-4376-44b1-a458-b50eff38a0e0/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/51.png" },
  { id: "77",  name: "THE SILENT HUNT",            videoPath: "https://vz-012bcd01-e4e.b-cdn.net/4941972e-1692-4d0b-ab19-28887a806631/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/6.png" },
  { id: "79",  name: "SHADOW FORCE",               videoPath: "https://vz-012bcd01-e4e.b-cdn.net/514d2131-df62-4be5-aef6-126d1595aee7/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/17.png" },
  { id: "88",  name: "BLACKMAIL JUNCTION",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/815e2654-4d69-4923-95e3-53c69ec72946/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/18.png" },
  { id: "90",  name: "SHADOW OPERATION",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/7daed06f-23e0-41d5-a35c-9529616f0773/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/21.png" },
  { id: "95",  name: "DARK EVEDENCE",              videoPath: "https://vz-012bcd01-e4e.b-cdn.net/3b1ff614-219e-4e77-8a2f-ad32e744267e/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/34.png" },
  { id: "99",  name: "BLACK HORIZON",              videoPath: "https://vz-012bcd01-e4e.b-cdn.net/652f268b-717d-463c-9d72-75d109098df5/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/16.png" },
  { id: "100", name: "DARK EMPIRE",                videoPath: "https://vz-012bcd01-e4e.b-cdn.net/2c8a4f59-3274-4347-ac68-5ff4d0789dae/play_480p.mp4", category: "Dark Thrillers",     thumbnail: "/portrait/8.png" },

  // â”€â”€ Secrets & Betrayal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id: "5",   name: "THE SECRET ROUT EP 1",       videoPath: "https://vz-012bcd01-e4e.b-cdn.net/3ff5f869-4419-444b-a338-870703a42f6c/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/5.png" },
  { id: "6",   name: "THE SECRET ROUT EP 2",       videoPath: "https://vz-012bcd01-e4e.b-cdn.net/e0608c54-d8e5-4bfb-b354-4ee545847c3e/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/6.png" },
  { id: "17",  name: "THE SECRET ORDER",           videoPath: "https://vz-012bcd01-e4e.b-cdn.net/d6698497-d9a5-49ca-aae7-a937f0a563bc/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/17.png" },
  { id: "24",  name: "DANGEROUS ALLIANCE",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/84b04739-d8f4-4a60-9a0c-1956fc0c562d/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/24.png" },
  { id: "36",  name: "THE SECRET MISSION",         videoPath: "https://vz-012bcd01-e4e.b-cdn.net/4cb2c276-8ecd-49ef-967c-48ba4631aa1b/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/36.png" },
  { id: "37",  name: "THE SECRET SYNDICATE",       videoPath: "https://vz-012bcd01-e4e.b-cdn.net/6cffca6b-7759-40e7-84de-c97856b4c7be/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/37.png" },
  { id: "42",  name: "THE DIARY SECRETS",          videoPath: "https://vz-012bcd01-e4e.b-cdn.net/d1f6716d-b7b1-41c3-8e4a-fd7204a75a74/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/42.png" },
  { id: "65",  name: "SECRET NIGHTS",              videoPath: "https://vz-012bcd01-e4e.b-cdn.net/0091603b-6880-49c6-ac89-efab0ec04bb8/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/65.png" },
  { id: "82",  name: "DANGEROUS DESTINATION EP1",  videoPath: "https://vz-012bcd01-e4e.b-cdn.net/6e1962ba-dbcc-4c2b-963a-d3176124deb4/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/82.png" },
  { id: "83",  name: "DANGEROUS DESTINATION EP2",  videoPath: "https://vz-012bcd01-e4e.b-cdn.net/4527946b-8e26-4e53-87da-ab74f2313614/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/83.png" },
  { id: "84",  name: "DANGEROUS DESTINATION EP3",  videoPath: "https://vz-012bcd01-e4e.b-cdn.net/613259cb-60be-4296-96ca-63ebc21922c0/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/84.png" },
  { id: "85",  name: "DANGEROUS DESTINATION EP4",  videoPath: "https://vz-012bcd01-e4e.b-cdn.net/2c902c65-1f63-4855-be88-cee69e2ac9a0/play_480p.mp4", category: "Secrets & Betrayal", thumbnail: "/landscape/85.png" },
];

export function getVideoById(id: string): Video | undefined {
  return VIDEOS.find(v => v.id === id);
}

export function getVideosByCategory(category: string): Video[] {
  return VIDEOS.filter(v => v.category === category);
}

export function getAllCategories(): string[] {
  return [
    "Featured Originals",
    "Crime & Mafia",
    "Action & Mission",
    "Mystery & Suspense",
    "Dark Thrillers",
    "Secrets & Betrayal",
  ];
}
