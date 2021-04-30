import { Avatar, IconButton } from "@material-ui/core";
import "./ChatArea.css";
import { useEffect, useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const ChatArea = () => {
  const [seed, setSeed] = useState("");

  // Random Seed
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_header_info">
          <h3>Room Name</h3>
          <p>Last Seen at ...</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Srushith Repakula</span>
          Hey SweetHeart
          <span className="chat_timestamp">12:13am</span>
        </p>

        <p className="chat_message chat_reciever">
          <span className="chat_name">Smile Gupta</span>
          Heya Luvu
          <span className="chat_timestamp">12:14am</span>
        </p>
      </div>

      <div className="chat_footer"></div>
    </div>
  );
};

export default ChatArea;
