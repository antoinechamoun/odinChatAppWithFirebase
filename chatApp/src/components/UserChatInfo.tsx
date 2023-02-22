const UserChatInfo = () => {
  return (
    <div className="user-chat-info-container">
      <div className="user-chat-info-left">
        <h1 className="user-logo">TC</h1>
        <div className="user-name-info">
          <div className="user-name-title">Tony Chamoun</div>
          <div className="user-last-chat">Hello World!</div>
        </div>
      </div>
      <div className="user-chat-info-right">
        <p className="last-chat-date">17/02 14:45</p>
      </div>
    </div>
  );
};

export default UserChatInfo;
