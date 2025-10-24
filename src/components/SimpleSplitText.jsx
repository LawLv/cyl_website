import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SimpleSplitText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "left",
  onLetterAnimationComplete,
  ...props
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !text) return;

    const element = textRef.current;
    
    // 手动分割文本
    const splitText = () => {
      if (splitType === "chars") {
        return text.split('').map((char, index) => 
          char === ' ' ? '&nbsp;' : char
        );
      } else if (splitType === "words") {
        return text.split(' ');
      } else {
        return [text];
      }
    };

    const textParts = splitText();
    
    // 清空元素并创建分割后的文本
    element.innerHTML = '';
    
    if (splitType === "chars") {
      textParts.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerHTML = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        element.appendChild(span);
      });
    } else if (splitType === "words") {
      textParts.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.marginRight = index < textParts.length - 1 ? '0.25em' : '0';
        element.appendChild(span);
      });
    }

    // 获取所有span元素
    const spans = element.querySelectorAll('span');
    
    if (spans.length === 0) return;

    // 设置初始状态
    gsap.set(spans, from);

    // 创建时间轴动画
    const tl = gsap.timeline({
      delay: delay / 1000,
      onComplete: onLetterAnimationComplete
    });

    // 添加动画
    tl.to(spans, {
      ...to,
      duration: duration,
      ease: ease,
      stagger: 0.14 // 每个字符/单词之间的延迟 (140ms)
    });

    // 清理函数
    return () => {
      // 清理动画
      tl.kill();
    };
  }, [text, delay, duration, ease, splitType, from, to, onLetterAnimationComplete]);

  return (
    <div 
      ref={textRef}
      className={className}
      style={{ textAlign }}
      {...props}
    >
      {text}
    </div>
  );
};

export default SimpleSplitText;
