import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can I help you today?", sender: "bot", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    "Get a quote",
    "Our services",
    "Contact info",
    "Portfolio"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Auto-reply after 1 second
      setTimeout(() => {
        const botReply = {
          id: messages.length + 2,
          text: "Thanks for your message! Our team will get back to you shortly. You can also call us at +91-XXXXXXXXXX or email us at info@yourcompany.com",
          sender: "bot",
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        };
        setMessages(prev => [...prev, botReply]);
      }, 1000);
    }
  };

  const handleQuickReply = (reply) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      sender: "user",
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    setMessages([...messages, newMessage]);
    
    // Auto-reply based on quick reply
    setTimeout(() => {
      let botResponse = "";
      switch(reply) {
        case "Get a quote":
          botResponse = "I'd be happy to help you get a quote! Please visit our Contact page or call us at +91-XXXXXXXXXX to discuss your project requirements.";
          break;
        case "Our services":
          botResponse = "We offer Web Development, Desktop Applications, UI/UX Design, and Online Branding services. Which service interests you?";
          break;
        case "Contact info":
          botResponse = "📞 Phone: +91-XXXXXXXXXX\n📧 Email: info@yourcompany.com\n📍 Location: Vadodara, Gujarat";
          break;
        case "Portfolio":
          botResponse = "You can view our amazing work in the Portfolio section of our website. We've completed 20+ projects with 100% client satisfaction!";
          break;
        default:
          botResponse = "Thanks for your interest! How can I assist you further?";
      }
      
      const botReply = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <div 
        className={`chat-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comments"></i>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <h4>Customer Support</h4>
                <span className="online-status">Online</span>
              </div>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button 
                key={index}
                className="quick-reply-btn"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;