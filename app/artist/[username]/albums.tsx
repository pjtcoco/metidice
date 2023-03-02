import React from "react";
type AlbumList = {
  list: string[];
};

const Albums: React.FC<AlbumList> = ({ list }) => {
  return (
    <div>
      {list.map((le) => (
        <span key={le + Math.random()} className="\">
          {le}
        </span>
      ))}
    </div>
  );
};

export default Albums;
