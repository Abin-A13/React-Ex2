import React, { useState } from "react";
import CommentList from "./CommentList";

const Comment = () => {
  const [user, setUser] = useState([
    {
      id: "1",
      body: "First comment",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cpSrV9kvMqMmlnJt2DMaHk3CoS7nHjvjbw&usqp=CAU",
      username: "tom hardy",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Second comment",
      imgUrl:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/09/16653331196722.jpg",
      username: "tom curse",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-12T22:00:33.010+02:00",
    },
    {
      id: "3",
      body: "thrid comment",
      imgUrl:
        "https://images.hindustantimes.com/img/2021/12/16/1600x900/US-SONY-PICTURES---SPIDER-MAN--NO-WAY-HOME--LOS-ANGELES-PREMIERE-32_1639472294475_1639636001038.jpg",
      username: "tom Hollend",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-10T23:00:33.010+02:00",
    },
  ]);
  return (
    <div>
      {user && user.length ? <h4>{user.length} of comments</h4> : "No Tasks"}
      {user.map((usr) => (
        <CommentList key={usr.id} users={usr} />
      ))}
    </div>
  );
};

export default Comment;
