import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const TextType = ({
  text = [],
  typingSpeed = 30,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "_",
  className = "",
  delay = 0,
  onComplete,
  ...props
}) => {
  const textRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text || text.length === 0) return;

    let timeoutId;
    let typingInterval;

    const startTyping = () => {
      setIsTyping(true);
      const currentText = text[currentTextIndex];
      let currentIndex = 0;

      // 清空当前文本
      setDisplayText('');

      // 开始打字效果
      typingInterval = setInterval(() => {
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // 当前文本打字完成
          clearInterval(typingInterval);
          setIsTyping(false);

          // 暂停一段时间后继续下一个文本
          if (currentTextIndex < text.length - 1) {
            timeoutId = setTimeout(() => {
              setCurrentTextIndex(prev => prev + 1);
            }, pauseDuration);
          } else {
            // 所有文本都完成了
            if (onComplete) {
              onComplete();
            }
          }
        }
      }, typingSpeed);
    };

    // 延迟开始
    const startDelay = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutId);
      clearInterval(typingInterval);
    };
  }, [text, typingSpeed, pauseDuration, currentTextIndex, delay, onComplete]);

  // 重置状态当text改变时
  useEffect(() => {
    setCurrentTextIndex(0);
    setDisplayText('');
    setIsTyping(false);
  }, [text]);

  return (
    <div className={className} {...props}>
      <span ref={textRef}>
        {displayText}
        {showCursor && (
          <span 
            className={`inline-block ml-1 ${isTyping ? 'animate-pulse' : ''}`}
            style={{ animation: isTyping ? 'blink 1s infinite' : 'none' }}
          >
            {cursorCharacter}
          </span>
        )}
      </span>
      
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TextType;
