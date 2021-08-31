import React from "react";
import AlbumItem from "../albumItem";
import "./index.scss";

const ListAlbum = (props) => {
  let albums = [
    {
      id: 1,
      title: "Tran Huyen Chau",
      thumbnailUrl: "https://gamek.mediacdn.vn/133514250583805952/2021/7/15/photo-1-1626325991293621230585.jpg"
    },
    {
      id: 2,
      title: "Le Thi Thanh Tam",
      thumbnailUrl: "https://hinhgaixinh.com/wp-content/uploads/2021/03/20210312-hinh-gai-xinh-14-600x800.jpg"
    },
    {
      id: 3,
      title: "Dau Cam Thanh",
      thumbnailUrl: "https://thuthuatnhanh.com/wp-content/uploads/2018/07/girl-xinh-viet-nam-dep-yeu-kieu.jpg"
    }
  ];
  return (
    <ul className="contain_list-album">
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </ul>
  );
};

ListAlbum.propTypes = {};

export default ListAlbum;
