import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
} from "phosphor-react";

// --- Random Generators --- //
const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve", "Frank", "Grace", "Henry", "Ivy", "Jack"];
const messages = [
  "Shape of You",
  "Blinding Lights",
  "Let It Be",
  "Bohemian Rhapsody",
  "See You Again",
  "Stay",
  "Hello",
  "Counting Stars",
  "Someone Like You",
  "Uptown Funk",
];

const randomName = () => names[Math.floor(Math.random() * names.length)];
const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
const randomAvatarUrl = (name) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&length=2`;
const randomImage = (size = "300/200") =>
  `https://picsum.photos/${size}?random=${Math.floor(Math.random() * 1000)}`;
const randomTime = () =>
  `${Math.floor(Math.random() * 12 + 1)}:${String(Math.floor(Math.random() * 60)).padStart(2, "0")}`;

// --- Static Menus --- //
const Profile_Menu = [
  { title: "Profile", icon: <User /> },
  { title: "Settings", icon: <Gear /> },
  { title: "Logout", icon: <SignOut /> },
];

const Nav_Buttons = [
  { index: 0, icon: <ChatCircleDots /> },
  { index: 1, icon: <Users /> },
  { index: 2, icon: <Phone /> },
];

const Nav_Setting = [{ index: 3, icon: <GearSix /> }];

// --- Random Chat List --- //
const ChatList = Array.from({ length: 8 }).map((_, id) => {
  const name = randomName();
  return {
    id,
    img: randomAvatarUrl(name),
    name,
    msg: randomMessage(),
    time: randomTime(),
    unread: Math.floor(Math.random() * 5),
    pinned: Math.random() > 0.5,
    online: Math.random() > 0.5,
  };
});

// --- Random Chat History --- //
const Chat_History = [
  { type: "msg", message: "Hi 👋🏻, How are ya ?", incoming: true, outgoing: false },
  { type: "divider", text: "Today" },
  { type: "msg", message: "Hi 👋 Panda, not bad, u ?", incoming: false, outgoing: true },
  { type: "msg", message: "Can you send me an abstract image?", incoming: false, outgoing: true },
  { type: "msg", message: "Ya sure, sending you a pic", incoming: true, outgoing: false },
  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: randomImage("300/200"),
    incoming: true,
    outgoing: false,
  },
  { type: "msg", message: "Can you please send this in file format?", incoming: false, outgoing: true },
  { type: "msg", subtype: "doc", message: "Yes sure, here you go.", incoming: true, outgoing: false },
  {
    type: "msg",
    subtype: "link",
    preview: randomImage("200/150"),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

// --- Message Options --- //
const Message_options = [
  { title: "Reply" },
  { title: "React to message" },
  { title: "Forward message" },
  { title: "Star message" },
  { title: "Report" },
  { title: "Delete Message" },
];

export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
};
